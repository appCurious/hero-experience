// import urlResolve from 'rollup-plugin-url-resolve'
import {terser} from 'rollup-plugin-terser';

export default {
    plugins: [
        // urlResolve()
        terser()
    ],
    input: 'hero-element.js',
    output: {
        file: './dist/myhero.js',
        name: 'MyHeroElement',
        // format: 'iife'
        format: 'es'
        // format: 'umd'
        // format: 'cjs'
    }
}