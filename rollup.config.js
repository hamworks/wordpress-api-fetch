import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import pkg from './package.json';

const extensions = [ '.js', '.jsx', '.ts', '.tsx' ];

const config = {
	input: 'src/index.ts',
	plugins: [
		resolve( { extensions } ),
		commonjs(),
		json(),
		injectProcessEnv( {
			NODE_ENV: process.env.NODE_ENV,
		} ),
		babel( {
			extensions,
			babelHelpers: 'runtime',
			include: [ 'src/**/*' ],
		} ),
	],
	output: [
		{
			file: pkg.module,
			format: 'es',
		},
		{
			file: pkg.main,
			format: 'cjs',
		},
	],
};

export default config;
