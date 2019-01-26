const ora = require('ora')
const chalk = require('chalk')
const spawn = require('cross-spawn')
const clear = require('clear')
const paths = require('../config/paths')
const { relative } = require('path')

const srcPath = relative(paths.root, paths.icons.src)
const distPath = relative(paths.root, paths.icons.dist)
const spinner = ora()

clear()

spinner.start(chalk.cyan.bold('generating icons\n'))

spawn.sync('vsvg', ['-s', srcPath, '-t', distPath], { stdio: 'ignore' })

spinner.succeed(chalk.green.bold('generating icons complete.\n'))
