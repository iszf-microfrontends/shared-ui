import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json' assert { type: 'json' };

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
      useTsconfigDeclarationDir: true,
    }),
  ],
};
