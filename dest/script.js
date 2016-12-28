// window.addEventListener('load',start,false);
// function start(){
//     alert('hello!');
// }
// start();

$(function(){

//Main menu dropdown
$('.dropdown').click(function(){
    $(this).children().removeClass('hidden_menu');
})
.mouseleave(function(){
    $('.dropdown_menu').addClass('hidden_menu');
    });
$('.dropdown_menu').mouseleave(function(){
    $(this).addClass('hidden_menu');
    });


//CAROUSEL #1 CAROUSEL, kto uspel, tot prisel..
//
//Carouse#l automove
var car1_Rotate = function(){
var len = $('.carousel_inner').children().length;
var i = 0;
var newt;
var t = setInterval(function(){
var h = $($('.carousel_inner').children()[i]);
console.log(i+'- t');
h.addClass('hidden_menu');
h.siblings().addClass('hidden_menu');
var s = $($('.carousel_inner').children()[i+1]);
s.removeClass('hidden_menu');
i++;
if(i>=len){
i=0;
h = $($('.carousel_inner').children()[i]);
h.removeClass('hidden_menu');
}
},4000);

//Carousel#1 controls
//
//carousel#1 left
var elt1;
$('#ad_carousel_left').click(function(){
clearInterval(t);
if(newt){clearInterval(newt);}
elt1 = $($('.carousel_inner').children()[i]);
i--;
elt1.addClass('hidden_menu');
elt1.siblings().addClass('hidden_menu');
if ((elt1.prev().index())!=-1){
elt1 = elt1.prev();
elt1.removeClass('hidden_menu').hide(0).fadeIn(500,'swing');}
else{
elt1.removeClass('hidden_menu');}
});

$('#ad_carousel_left').mouseleave(function(){
clearInterval(t);
if(newt){clearInterval(newt);}
if(i>=len){i=len-1;}
newt = setInterval(function(){
var h = $($('.carousel_inner').children()[i]);
console.log(i+'- newtleft');
h.addClass('hidden_menu');
var s = $($('.carousel_inner').children()[i+1]);
s.removeClass('hidden_menu');
i++;
if(i>=len){
i=0;
h = $($('.carousel_inner').children()[i]);
h.removeClass('hidden_menu');
}
},4000);
});

//carousel#1 right
var elt2;
$('#ad_carousel_right').click(function(){
clearInterval(t);
if(newt){clearInterval(newt);}
i++;
elt2 = $($('.carousel_inner').children()[i-1]);
elt2.siblings().addClass('hidden_menu');

if ((elt2.next().index())!=-1){
elt2.addClass('hidden_menu');
elt2.siblings().addClass('hidden_menu');
elt2 = elt2.next();
elt2.removeClass('hidden_menu').hide(0).fadeIn(500,'swing');}
else{
elt2.removeClass('hidden_menu');}
});

$('#ad_carousel_right').mouseleave(function(){
clearInterval(t);
if(newt){clearInterval(newt);}
if(i>=len){i=len-1;}
newt = setInterval(function(){
var h = $($('.carousel_inner').children()[i]);
console.log(i+'- newtright');
h.addClass('hidden_menu');
var s = $($('.carousel_inner').children()[i+1]);
s.removeClass('hidden_menu');
i++;
if(i>=len){
i=0;
h = $($('.carousel_inner').children()[i]);
h.removeClass('hidden_menu');
}
},4000);
});
};
car1_Rotate();


//Odd event onclick of any H1 of Carousel#1
$('h1').click(function(){
var h = $(this);
var str = $(this).text();
var txt = str.split('');
var display = '';
txt.forEach(function(i){
    display=i+display;});
h.empty();
h.append(display);
});

$('#ad_carousel_wrapper button').mouseenter(function(){
    $(this).css({'background-color':'grey'})
}).mouseleave(function(){
    $(this).css({'background-color':'red'})
});



//CAROUSEL #2 FEATURED PRODUCTS
//
//Carousel#2 automove
var car2_Rotate = function(){
var len = $('#carousel_inner2').children().length;
var i = 0;
var newt;
var t = setInterval(function(){
var h = $($('#carousel_inner2').children()[i]);
console.log(i+'- t');
h.addClass('hidden_menu');
h.siblings().addClass('hidden_menu');
var s = $($('#carousel_inner2').children()[i+1]);
s.removeClass('hidden_menu');
i++;
if(i>=len){
i=0;
h = $($('#carousel_inner2').children()[i]);
h.removeClass('hidden_menu');
}
},3000);

//Carousel#2 controls
//
//carousel#2 left
var elt1;
$('#featured_carousel_left').click(function(){
clearInterval(t);
if(newt){clearInterval(newt);}
elt1 = $($('#carousel_inner2').children()[i]);
i--;
elt1.addClass('hidden_menu');
elt1.siblings().addClass('hidden_menu');
if ((elt1.prev().index())!=-1){
elt1 = elt1.prev();
elt1.removeClass('hidden_menu').hide(0).fadeIn(500,'swing');}
else{
elt1.removeClass('hidden_menu');}
});

$('#featured_carousel_left').mouseleave(function(){
clearInterval(t);
if(newt){clearInterval(newt);}
if(i>=len){i=len-1;}
newt = setInterval(function(){
var h = $($('#carousel_inner2').children()[i]);
console.log(i+'- newtleft');
h.addClass('hidden_menu');
var s = $($('#carousel_inner2').children()[i+1]);
s.removeClass('hidden_menu');
i++;
if(i>=len){
i=0;
h = $($('#carousel_inner2').children()[i]);
h.removeClass('hidden_menu');
}
},3000);
});

//carousel#2 right
var elt2;
$('#featured_carousel_right').click(function(){
clearInterval(t);
if(newt){clearInterval(newt);}
i++;
elt2 = $($('#carousel_inner2').children()[i-1]);
elt2.siblings().addClass('hidden_menu');

if ((elt2.next().index())!=-1){
elt2.addClass('hidden_menu');
elt2.siblings().addClass('hidden_menu');
elt2 = elt2.next();
elt2.removeClass('hidden_menu').hide(0).fadeIn(500,'swing');}
else{
elt2.removeClass('hidden_menu');}
});

$('#featured_carousel_right').mouseleave(function(){
clearInterval(t);
if(newt){clearInterval(newt);}
if(i>=len){i=len-1;}
newt = setInterval(function(){
var h = $($('#carousel_inner2').children()[i]);
console.log(i+'- newtright');
h.addClass('hidden_menu');
var s = $($('#carousel_inner2').children()[i+1]);
s.removeClass('hidden_menu');
i++;
if(i>=len){
i=0;
h = $($('#carousel_inner2').children()[i]);
h.removeClass('hidden_menu');
}
},3000);
});
};
car2_Rotate();


//NEW PRODUCTS EVENTS
$('.newprod_img').one('mouseenter',function(){
var p = $($(this).next().children()[0]);
var txt = p.text();

var display = '';
var len = txt.length;
var i = 0;
var t = setInterval(function(){
p.empty();
display = display+txt[i];
p.text(display).css('opacity',i/len);
i++;
if(i>=len){i=0;clearInterval(t);}
},50);
});


//TRENDING EVENTS
$('#trending button').mouseenter(function(){
    $(this).css({'background-color':'grey'})
}).mouseleave(function(){
    $(this).css({'background-color':'#c6c6c6'})
});

//trending menu
var trendMenuAnimate = function(){
var link;
$('#trend_left li').mouseenter(function(){
    $(this).children().css('color','white');
    link = $(this).children()[0];
    $(this).append('<div class="arrow"></div><div class="rectangle"></div><div class="triangle"></div>');
    //$(this).append('<div class="rectangle"></div>');
}).mouseleave(function(){
    $(this).empty();
    $(this).append(link);
    $(this).children().css('color','black');
});
}
trendMenuAnimate();


//MISC EVENTS
$('.circle').mouseenter(function(){
    $(this).css({'background-color':'grey'})
}).click(function(){
    $(this).css({'border':'3px solid #404040'})
}).mouseleave(function(){
    $(this).css({'background-color':'#c6c6c6','border':'3px solid white'})
});


$('.shopping_cart').mouseenter(function(){
    $(this).addClass('shopping_cart_hover');
}).mouseleave(function(){
    $(this).removeClass('shopping_cart_hover');
});


//FEATURED PRODUCTS EVENTS
$('.availQuantity').mouseenter(function(){
$(this).addClass('availHover');
}).click(function(){
$(this).after('<div class="info">Available: 50ps<br>Colors: Green, White</div>');
}).mouseout(function(){
$('.info').addClass('hidden_menu');
$(this).removeClass('availHover');
});


//CAROUSEL BOTTOM EVENTS
var rotateBottomImg = function(){
var ind = 0;
$('.funRotate').click(function(){
var rotDiv = $(this);
ind = rotDiv.parent().children().index(rotDiv);
if (ind == rotDiv.parent().children().length-1){
ind = 0;
rotDiv.animate({height: '0px'});
$(rotDiv.parent().children()[ind]).removeClass('hidden_menu')
.addClass('newClass').animate({height: '100px'})
.promise().done(function(){rotDiv.addClass('hidden_menu');});
rotDiv.next().removeClass('hidden_menu');
}
else{
rotDiv.animate({height: '0px'});
rotDiv.next().removeClass('hidden_menu').addClass('newClass')
.animate({height: '100px'}).promise()
.done(function(){rotDiv.addClass('hidden_menu');});
ind++;
}
});
}
rotateBottomImg();

//FOOTER EVENTS
$('#footer1 header span').one('mouseenter',function(){
    $(this).hide(0).show('slow');
});

$('#footer1 a').mouseenter(function(){
    $(this).css('color','black');
}).mouseleave(function(){
    $(this).css('color','white');
});

$('#footer1 .tweet p').mouseenter(function(){
    $(this).parent().addClass('tweetHover');   
}).mouseleave(function(){
    $(this).parent().removeClass('tweetHover');
});


});



