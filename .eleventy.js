
// 'luxon' is date/time formatting package that comes with 11ty
const {DateTime} = require("luxon");

// console.log(DateTime);


module.exports = function(eleventyConfig) {

    // include CSS in output
    eleventyConfig.addPassthroughCopy("./src/style.css");

    // include 'assets' folder in output
    eleventyConfig.addPassthroughCopy("./src/assets");

   
    eleventyConfig.addFilter("postDate", (dateObj)=> {
      return DateTime.fromJSDate(dateObj, {zone:'utc'}).toLocaleString(DateTime.DATE_MED)})
   


  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};

