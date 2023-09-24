import { defineConfig } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { minify } from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import pkg from './package.json' assert { type: 'json' };

const external = [...Object.keys(pkg.peerDependencies), 'react/jsx-runtime'];

export default defineConfig([
  {
    input: 'src/index.ts',
    external,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins: [
      nodeResolve({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
      }),
      commonjs(),
      minify(),
      babel({
        extensions: ['.ts', '.tsx'],
        babelHelpers: 'bundled',
        presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
      }),
    ],
  },
  {
    input: 'src/index.ts',
    external,
    output: {
      file: pkg.types,
      format: 'esm',
    },
    plugins: [dts({ respectExternal: true })],
  },
]);
