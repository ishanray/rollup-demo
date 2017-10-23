import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    name: 'test',
    format: 'iife'
  },
  cache: 'bundle',
  plugins: [
  	buble(),
  	resolve(),
  	common(),
  	replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    })
  ]
}
