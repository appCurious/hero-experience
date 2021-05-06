// import urlResolve from 'rollup-plugin-url-resolve'
// import {terser} from 'rollup-plugin-terser';
import resolve  from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    plugins: [
        // urlResolve()
        // terser()
        resolve(),
        commonjs()
    ],
    input: 'main.js',
    output: {
        file: './public/index.js',
        name: 'MyHeroElement',
        format: 'cjs'
        // format: 'es'
        // format: 'umd'
        // format: 'cjs'
    }
}