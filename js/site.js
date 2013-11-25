var pagenumberone = $("#number-one"),
    pagenumbertwo = $("#number-two"),
    pagenumberthree = $("#number-three"),
    pagenumberfour = $("#number-four"),    

    slidecontentone = $("#content-one"),
    contenttwo = $("#content-two"),
    contentthree = $("#content-three"),
    contentfour = $("#content-four"),

    satelitebox = $(".satellite-box"),
    tvoff = $(".tvoff"),
    tvon = $(".tvon"),

    tvscreen = $(".screen"),

    remote1 = $(".remote"),
    arrow1 = $(".arrow1"),
    arrow2 = $(".arrow2"),

    iconsanim = $(".icons.anim"),
    iconsnoanime = $(".icons.noanim"),
  
    
    tl = new TimelineMax({repeat:-1});


tl.set(slidecontentone,  {autoAlpha:1})
  .to(iconsanim, 0, {opacity: 0, autoAlpha:1}) 
  .from([pagenumbertwo, pagenumberthree, pagenumberthree, contenttwo, contentthree, pagenumberfour], 0, {bottom:-100, opcaity: 0, autoAlpha:1},  "-=1.5") 
  .from([tvon, arrow2], 0, {opacity: 0, autoAlpha:1})
  .to([pagenumbertwo, pagenumberthree, pagenumberthree, contenttwo, contentthree, contentfour, pagenumberfour, arrow2], 0, {bottom:-100, opcaity: 0, autoAlpha:1},  "-=1.5") 
  .to([tvon, arrow2], 0.01, {opacity: 0, bottom: -200, autoAlpha:1})
  .to(iconsanim, 1.2, {opacity: 1, autoAlpha:1}) 

  

  .from(tvoff, 1.2, {left:-400, autoAlpha:0})  
  .from(slidecontentone, 1.2, {bottom:-100, autoAlpha:0}) 
  .from(pagenumberone, 1, {bottom:-100, autoAlpha:0}, "-=1.5")
  .from(satelitebox, 0.8, {scale:.5, autoAlpha:0}, "-=0.5")
  .from(remote1, 4.2, {top:1050, opacity: 0, autoAlpha:1, ease:Elastic.easeInOut}, "-=5.75") 
  .from(arrow1, 1.4, {lef:-20, autoAlpha:0}, "-=0.75")
  .to(remote1, 1.2, {rotation:"0deg"})
  .to([pagenumberone, slidecontentone] , 1.4, {bottom:-100, autoAlpha:1}, "-=1.75")  
  .to(pagenumbertwo, 1, {bottom: 5, autoAlpha:1}, "-=1.2")
  .to(contenttwo, 1.2, {bottom: 0, autoAlpha:1}, "-=1")
  .to(arrow1, 0.5, {opacity:0}, "+=0.25") 
  .to(arrow2, 0.5, {opacity:1, bottom: 200, autoAlpha:1}, "+=0.25") 
  .to([pagenumbertwo, pagenumberthree, contenttwo, arrow2], 0, {bottom:-100, autoAlpha:0, delay: 5})
  .to(tvoff, 1.5, {left:20, autoAlpha:1, delay: 1})
  .to(satelitebox, 1.5, { opacity:0, left:40, autoAlpha:1}, "-=2.25")
  .to(pagenumberthree, 1, {bottom: 5, autoAlpha:1})
  .to(contentthree, 1.5, {bottom: 15, autoAlpha:1}, "-=1")
  .to(pagenumbertwo, 0, {bottom:-100, autoAlpha:0})
  .to(tvscreen, 1.5, {opacity: 0}, "-=4")
  .to(pagenumberthree, 0, {bottom: -100, autoAlpha:0}, "+=6.2")
  .to(contentthree, 0, {bottom: -100, autoAlpha:0})
  .to(tvon, 0.4, {left:20, autoAlpha:1}, "-=4.2")   
  .to(tvoff, 0, {opacity: 0})
  .to(tvscreen, 0.5, {opacity: 1}, "-=2")
  .to(tvscreen, 1.2, {left: -340, delay: 2})
  .to(tvscreen, 1.2, {left: -680, delay: 2})
  .to(tvscreen, 1.2, {left: -1020, delay: 2})
  .to(tvscreen, 1.2, {left: -1350, delay: 2})
  .to(pagenumberthree, 0, {bottom:-100, autoAlpha:0})
  .to(tvon, 1.5, {left:200, autoAlpha:1}, "-=4")
  .to(remote1, 2.5, { opacity: 0, top: 550}, "-=4")
  .to(tvscreen, 0.3, { opacity: 0, delay: 2})
  .to(iconsanim, 1.5, { opacity: 0, top: 200, left: -200, scale: (0.4)}, "-=4")
  .to(iconsnoanime, 0, { opacity: 0, scale: (0.4), left: -200, top: -400}, "-=4.5")
  .to(iconsnoanime, 1.4, { opacity: 1, scale: (1), top: 0}, "-=4.3")


  .to(arrow1, 0, {opacity: 0, delay: 5}) 


$("#seek-slide1").click(function() {
    tl.seek(1);
});
		  
$("#seek-slide2").click(function() {
		tl.seek(9);
});

$("#seek-slide3").click(function() {
    tl.seek(17);
});

$("#seek-slide4").click(function() {
    tl.seek(22);
});

$("#seek-slide5").click(function() {
    tl.seek(27);
});


$("#seek-slide6").click(function() {
    tl.seek(32);
});




		
$("#pause").click(function() {
		tl.pause();
});
		
$("#reverse").click(function() {
		tl.reverse();
});
		
$("#resume").click(function() {
		tl.resume();	
});
		
$("#restart").click(function() {
		tl.restart();
});

$("#next").click(function() {
    tl.next();
});
	


function infinite(){
    $('.icons.noanim').css({backgroundPosition:'0px 0px'}).animate({backgroundPosition:"-3000px 0px"},60000, infinite);
    // $('ul.icons.anim li.icon1').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},7500, infinite);
    // $('ul.icons.anim li.icon2').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},6500, infinite);
    // $('ul.icons.anim li.icon3').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},8500, infinite);
    // $('ul.icons.anim li.icon4').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},5500, infinite);
    // $('ul.icons.anim li.icon5').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},7000, infinite);
    // $('ul.icons.anim li.icon6').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},5600, infinite);
    // $('ul.icons.anim li.icon7').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},7200, infinite);
    // $('ul.icons.anim li.icon8').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},6700, infinite);
    // $('ul.icons.anim li.icon9').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},6100, infinite);
    // $('ul.icons.anim li.icon10').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},5800, infinite);
    // $('ul.icons.anim li.icon11').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},5900, infinite);
    // $('ul.icons.anim li.icon12').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},6400, infinite);
}
infinite();
