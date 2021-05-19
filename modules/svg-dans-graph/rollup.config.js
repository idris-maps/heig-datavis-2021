import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'

const production = !process.env.ROLLUP_WATCH

function serve() {
  let server
  function toExit() {
    if (server) server.kill(0)
  }
  return {
    writeBundle() {
      if (server) return
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
      })
      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    }
  }
}

export default {
  input: 'src/index.js',
  output: {
    format: 'iife',
    file: 'public/build/bundle.js'
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    json(),
    !production && serve(),
    !production && livereload('public'),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}
