import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.js',
  format: 'iife',
  plugins: [
    nodeResolve({
      browser: true
    }),
    commonjs({
      sourceMap: false
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      babelrc: false,
      presets: ['es2015-rollup', 'stage-0', 'react'],
      plugins: ['transform-runtime']
    }),

    uglify()
  ],
  dest: 'dist/dist.js'
};
