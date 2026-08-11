import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      '**/dist/**',
      '**/.next/**',
      '**/node_modules/**',
      '**/out/**',
      '**/pnpm-lock.yaml',
      '**/vibe-ui-kit-*.tgz'
    ]
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { 'argsIgnorePattern': '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
      'prefer-const': 'warn',
      'no-empty': 'off',
      'no-case-declarations': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  }
)
