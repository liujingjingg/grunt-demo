/* global module:true */
module.exports=function(grunt){
  grunt.initConfig({
    concat:{
      files:{
        src:['jisuanqi.js','calc.js'],
        dest:'dist/bundle.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default',['concat']);
};