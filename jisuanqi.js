$(function(){
 //get dom elem
 var $width =$('#width'),
     $height=$('#height'),
     $btnCal=$('#calculate'),
     $perimeter=$('#perimeter'),
     $area =$('#area');
 /*calc button click event*/
 $btnCal.click(function(){
 //get value
    var w=Number($width.val()),
        h=Number($height.val());
 //calculate
    var r=new Rectangle(w,h);
 //output
 $perimeter.val(r.perimeter());   
 $area.val(r.area());
 })
}); 