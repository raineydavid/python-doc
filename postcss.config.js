// const purgecss = require('@fullhuman/postcss-purgecss')({

//   // Specify the paths to all of the template files in the project
//   content: [
//     './src/site/**/*.njk',
//     './src/site/**/*.md'
//   ],

//   // Include any special characters
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
// })



module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("postcss-import"),
    // ...process.env.NODE_ENV === 'production' ? [purgecss,  require('cssnano')] : []
  ]
};
