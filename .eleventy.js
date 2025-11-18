module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/embed.js": "embed.js" });
  eleventyConfig.addPassthroughCopy({ "src/tailwind.css": "tailwind.css" });
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};