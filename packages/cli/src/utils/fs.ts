import path from 'path'

export interface RegistryFile {
  name: string
  content: string
}

export interface RegistryComponentPayload {
  name: string
  files: RegistryFile[]
  dependencies?: string[]
  registryDependencies?: string[]
  [key: string]: unknown
}

/**
 * Validates that relativePath when resolved against baseDir is strictly within baseDir.
 * Protects against directory traversal attacks (e.g., ../, ..\, null bytes, absolute paths escaping baseDir).
 */
export function validateSafePath(baseDir: string, relativePath: string): string {
  if (!relativePath || typeof relativePath !== 'string') {
    throw new Error('Invalid path: relative path must be a non-empty string')
  }

  if (relativePath.includes('\0')) {
    throw new Error('Invalid path: null bytes are not allowed')
  }

  // Reject Windows-style drive letter absolute paths on any platform (e.g. C:\... or C:/...)
  if (/^[a-zA-Z]:[\\/]/.test(relativePath)) {
    throw new Error(
      `Directory traversal detected: path "${relativePath}" resolves outside base directory "${baseDir}"`,
    )
  }

  // Normalize backslashes to forward slashes for cross-platform traversal defense
  const normalizedRelative = relativePath.replace(/\\/g, '/')

  const resolvedBase = path.resolve(baseDir)
  const resolvedTarget = path.resolve(resolvedBase, normalizedRelative)

  const relativeFromBase = path.relative(resolvedBase, resolvedTarget)

  if (
    relativeFromBase.startsWith('..') ||
    path.isAbsolute(relativeFromBase) ||
    (!resolvedTarget.startsWith(resolvedBase + path.sep) && resolvedTarget !== resolvedBase)
  ) {
    throw new Error(
      `Directory traversal detected: path "${relativePath}" resolves outside base directory "${baseDir}"`,
    )
  }

  return resolvedTarget
}

/**
 * Validates that remote registry payload conforms to the expected component schema.
 */
export function validateRegistryPayload(
  data: unknown,
): data is RegistryComponentPayload {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return false
  }

  const payload = data as Record<string, unknown>
  if (typeof payload.name !== 'string' || payload.name.trim() === '') {
    return false
  }

  if (!Array.isArray(payload.files) || payload.files.length === 0) {
    return false
  }

  for (const file of payload.files) {
    if (!file || typeof file !== 'object') {
      return false
    }
    const f = file as Record<string, unknown>
    if (typeof f.name !== 'string' || f.name.trim() === '') {
      return false
    }
    if (typeof f.content !== 'string') {
      return false
    }
  }

  if (payload.dependencies !== undefined) {
    if (
      !Array.isArray(payload.dependencies) ||
      !payload.dependencies.every((d) => typeof d === 'string')
    ) {
      return false
    }
  }

  if (payload.registryDependencies !== undefined) {
    if (
      !Array.isArray(payload.registryDependencies) ||
      !payload.registryDependencies.every((d) => typeof d === 'string')
    ) {
      return false
    }
  }

  return true
}
