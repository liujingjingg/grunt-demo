/* global module:true */
module.exports=function(grunt){
  grunt.initConfig({
    cssmin:{
      'rectangle.min.css':'jisuanqi.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default',['cssmin']);
};