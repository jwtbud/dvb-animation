var pagenumberone = $("#number-one"),
    pagenumbertwo = $("#number-two"),
    pagenumberthree = $("#number-three"),
    pagenumberfour = $("#number-four"), 
    pagenumberfive = $("#number-five"),
    pagenumbersix = $("#number-six"),
    slidecontentone = $("#content-one"),
    contenttwo = $("#content-two"),
    contentthree = $("#content-three"),
    contentfour = $("#content-four"),
    contentfive = $("#content-five"),
    contentsix = $("#content-six"),
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
  .from([tvon, arrow2], 0, {opacity: 0, top:-900, autoAlpha:1})
  .from([tvon, pagenumbertwo, pagenumberthree, pagenumberthree, pagenumberfour, pagenumberfive, pagenumbersix, contenttwo, contentthree, contentfour, contentfive, contentsix, arrow2], 0, {bottom:-100, opcaity: 0, autoAlpha:1},  "-=1.5") 
  .to([pagenumbertwo, pagenumberthree, pagenumberthree, pagenumberfour, pagenumberfive, pagenumbersix, contenttwo, contentthree, contentfour, contentfive, contentsix, arrow2], 0, {bottom:-100, opcaity: 0, autoAlpha:1},  "-=1.5") 
  .to([tvon, arrow2], 0, {opacity: 0, bottom: -200, autoAlpha:1})
  .to(iconsanim, 0, {opacity: 1, autoAlpha:1}) 
  .from(tvoff, 1.2, {left:-400, autoAlpha:0})  
  .from(slidecontentone, 1.2, {bottom:-100, autoAlpha:0}) 
  .from(pagenumberone, 1, {bottom:-100, autoAlpha:0}, "-=1.5")
  .from(satelitebox, 0.8, {scale:.5, autoAlpha:0}, "-=1.5")
  .from(remote1, 7.2, {top:400, opacity: 0, autoAlpha:1, left: 600, rotation:"90deg", ease:Elastic.easeInOut}, "-=5.75") 
  .from(arrow1, 1.4, {lef:-20, autoAlpha:0}, "-=0.75")
  .to(remote1, 1.2, {rotation:"0deg"})
  .to([pagenumberone, slidecontentone] , 1.4, {bottom:-100, autoAlpha:1}, "+=1.5")  
  .to(pagenumbertwo, 1, {bottom: 5, autoAlpha:1}, "-=1.2")
  .to(contenttwo, 1.2, {bottom: 0, autoAlpha:1}, "-=1")
  .to(arrow1, 0.5, {opacity:0}, "-=1.5") 
  .to(arrow2, 0.5, {opacity:1, bottom: 200, autoAlpha:1}, "-=1.25") 
  .to([arrow2], 0.6, {bottom:-100, opacity: 0, autoAlpha:0, delay: 3})
  .to([pagenumbertwo, contenttwo], 1.2, {bottom:-100, opacity: 0, autoAlpha:0, delay: 1})
  .to(tvoff, 4.5, {left:20, autoAlpha:1,  ease:Quint.easeInOut}, "-=2.25")
  .to(satelitebox, 3.5, { rotation: "70deg", left:400, top: 480, autoAlpha:1, ease:Quint.easeInOut}, "-=4")
  .to(pagenumberthree, 1, {bottom: 5, autoAlpha:1}, "-=1")
  .to(contentthree, 1.5, {bottom: 10, autoAlpha:1}, "-=1.2")
  .to(tvscreen, 1.5, {opacity: 0}, "-=6")
  .to([pagenumberthree, contentthree], 1.2, {bottom: -100, opacity: 0, autoAlpha:0, delay: 4})
  .to(tvon, 0.7, {left:20, autoAlpha:1,}, "-=4.2")   
  .to(tvoff, 0, {opacity: 0, left: 500, autoAlpha:1}, "-=3")
  .to(tvscreen, 0.8, {opacity: 1, delay: 1}, "-=2")
  .to(pagenumberfour, 1, {bottom: 5, autoAlpha:1}, "-=0.9")
  .to(contentfour, 1.2, {bottom: 10, autoAlpha:1}, "-=0.8")
  .to(tvscreen, 1.2, {left: -340, delay: 4})  
  .to(tvscreen, 1.2, {left: -680, delay: 4})
  .to([pagenumberfour, contentfour], 1.2, {bottom: -100, opacity: 0, autoAlpha:1}, "-=1")
  .to(pagenumberfive, 1, {bottom: 5, autoAlpha:1}, "-=1")
  .to(contentfive, 1.5, {bottom: 10, autoAlpha:1}, "-=1.2")
  .to(tvscreen, 1.2, {left: -1020, delay: 4})
  .to([pagenumberfive, contentfive], 1.2, {bottom: -100, opacity: 0, autoAlpha:1}, "-=1")
  .to(pagenumbersix, 1, {bottom: 5, autoAlpha:1}, "-=1")
  .to(contentsix, 1.5, {bottom: 10, autoAlpha:1}, "-=1.2")
  .to(tvscreen, 1.2, {left: -1350, delay: 4})  
  .to(pagenumberthree, 0, {bottom:-100, autoAlpha:0})
  .to(tvon, 3.8, {left:200, autoAlpha:1, ease:Elastic.easeInOut}, "-=4.7")
  .to(remote1, 2.5, { opacity: 0, top: 550}, "-=4")
  .to(tvscreen, 1, { opacity: 0, delay: 3})
  .to(iconsanim, 2, { opacity: 0}, "-=4.6")
  .to(iconsnoanime, 0, { opacity: 0, scale: (0.4), left: -200, top: -400}, "-=6.9")
  .to(iconsnoanime, 0.2, { opacity: 1, scale: (1), top: 0}, "-=4.3")
  .to(iconsnoanime, 1.2, { opacity: 0, scale: (0.1), top: 0, left: -70, delay:5}, "-=1.3")
  .to([pagenumbersix, contentsix], 1.2, {bottom: -100, opacity: 0, autoAlpha:1}, "-=1.4")
  .to(tvon, 3.8, {top:450, opacity:0.5,  autoAlpha:1, ease:Elastic.easeInOut}, "-=1.5")
  .to(iconsanim, 0, {opacity: 0, top: 0, left: 0, scale: (1), autoAlpha:1},  "-=2") 
  .to(iconsanim, 0.3, {opacity: 1, top: 0, left: 0, scale: (1), autoAlpha:1},  "-=1") 


$("#seek-slide1").click(function() {
    tl.seek(5);
});		  
$("#seek-slide2").click(function() {
		tl.seek(11);
});
$("#seek-slide3").click(function() {
    tl.seek(19.5);
});
$("#seek-slide4").click(function() {
    tl.seek(25);
});
$("#seek-slide5").click(function() {
    tl.seek(35.9);
});
$("#seek-slide6").click(function() {
    tl.seek(42);
});
$("#seek-slide7").click(function() {
    tl.seek(55);
});
$("#seek-slide-restart").click(function() {
    tl.seek(3);
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
