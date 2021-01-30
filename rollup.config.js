import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: "src/App.jsx",
  external: [
    'react',
    'react-dom',
  ],
  output: {
    file: "./public/javascripts/app.js",
    format: "iife",
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  plugins: [
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    nodeResolve(),
  ],
};
