/* global module:true */
module.exports=function(grunt){
  grunt.initConfig({
    uglify:{
      'rectangle.min.js':'jisuanqi.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default',['uglify']);
};