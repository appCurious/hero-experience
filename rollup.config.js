// import urlResolve from 'rollup-plugin-url-resolve'
// import {terser} from 'rollup-plugin-terser';
import resolve  from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy     from 'rollup-plugin-copy';
// import rollupPluginES6ClassMinify from 'rollup-plugin-es6-class-minify';

// const es6ClassMinify = rollupPluginES6ClassMinify()
// const configs = [
//     {
//         plugins: [
//             resolve(),
//             commonjs(),
//             es6ClassMinify
//         ],
//         input: 'hero-element.js',
//         output: {
//             file: './public/hero-element.js',
//             format: 'cjs'
//             // format: 'es'
//             // format: 'umd'
//             // format: 'cjs'
//         }
//     },
//     {
//         plugins: [
//             resolve(),
//             commonjs()
//         ],
//         input: 'main.js',
//         output: {
//             file: './public/index.js',
//             name: 'MyHeroElement',
//             format: 'cjs'
//             // format: 'es'
//             // format: 'umd'
//             // format: 'cjs'
//         }
//     }
// ];

// export default configs;

export default {
    plugins: [
        // urlResolve()
        // terser()
        resolve(),
        commonjs(),
        copy({
            targets: [
                { src: 'index.html', dest: './public' }
            ]
        })
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