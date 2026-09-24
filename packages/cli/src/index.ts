#!/usr/bin/env node

import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'
import { registerInitCommand } from './commands/init.js'
import { registerAddCommand } from './commands/add.js'
import { registerDiffCommand } from './commands/diff.js'
import { registerListCommand } from './commands/list.js'
import { registerInfoCommand } from './commands/info.js'
import { registerDoctorCommand } from './commands/doctor.js'
import { registerUpdateCommand } from './commands/update.js'
import { transpileToJs } from './utils/transpile.js'
import { getPackageManager, filterMissingDependencies } from './utils/pm.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pkg = fs.readJsonSync(path.join(__dirname, '../package.json'))

const program = new Command()

program
  .name('vibe-ui-kit')
  .description('CLI to add Vibe UI components to your project')
  .version(pkg.version)

// Register subcommands
registerInitCommand(program)
registerAddCommand(program)
registerDiffCommand(program)
registerListCommand(program)
registerInfoCommand(program)
registerDoctorCommand(program)
registerUpdateCommand(program)

if (process.env.NODE_ENV !== 'test') {
  program.parse(process.argv)
}

export { program, transpileToJs, getPackageManager, filterMissingDependencies }
