$("#nav a").on("click",function(){
  var position=$(this).parent().position();
  var width=$(this).parent().width();
  $("#nav .slide1").css({opacity:1,left:+position.left,width:width});
})
$("#nav a").on("mouseover",function(){
  var position=$(this).parent().position();
  var width=$(this).parent().width();
  $("#nav .slide2").css({opacity:1,left:+position.left,width:width}).addClass("squeeze");
})
$("#nav a").on("mouseout",function(){
  $("#nav .slide2").css({opacity:0}).removeClass("squeeze");
})
var currentWidth=$("#nav li:nth-of-type(3) a").parent("li").width();
var current=$("li:nth-of-type(3) a").position();
$("#nav .slide1").css({left:+current.left,width:currentWidth});

$(document).ready(function() {
  // 获取当前页面URL
  var currentPage = window.location.pathname.split('/').pop();
  
  // 为对应导航项添加active类
  $('#nav li a').each(function() {
    var linkPage = $(this).attr('href').split('/').pop();
    if (linkPage === currentPage) {
      $(this).addClass('active');
      // 更新滑动条位置
      updateSlider($(this));
    }
  });
  
  // 点击导航项时更新状态
  $('#nav li a').click(function(e) {
    e.preventDefault();
    
    // 移除所有active类
    $('#nav li a').removeClass('active');
    
    // 为当前点击项添加active类
    $(this).addClass('active');
    
    // 更新滑动条位置
    updateSlider($(this));
    
    // 跳转到对应页面
    window.location.href = $(this).attr('href');
  });
  
  // 更新滑动条位置的函数
  function updateSlider(activeItem) {
    var $slide1 = $('.slide1');
    var itemPosition = activeItem.position();
    var itemWidth = activeItem.outerWidth();
    
    $slide1.css({
      'width': itemWidth + 'px',
      'left': itemPosition.left + 'px'
    });
    
    // 添加active类以改变颜色
    $slide1.addClass('active');
  }
});

console.log(document.querySelectorAll('.timeline-content').length);