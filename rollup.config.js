// import urlResolve from 'rollup-plugin-url-resolve'
// import {terser} from 'rollup-plugin-terser';
import resolve  from '@rollup/plugin-node-resolve';

export default {
    plugins: [
        // urlResolve()
        // terser()
        resolve()
    ],
    input: 'main.js',
    output: {
        file: './public/myhero.js',
        name: 'MyHeroElement',
        format: 'cjs'
        // format: 'es'
        // format: 'umd'
        // format: 'cjs'
    }
}