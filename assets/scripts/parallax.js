function mr_parallax(){"use strict";function t(){var e,t=0;return s()?(t=jQuery(".viu").find("nav:first").outerHeight(!0),"absolute"!==(e=jQuery(".viu").find("nav:first").css("position"))&&"fixed"!==e||(t=0)):t=jQuery(document).find("nav:first").outerHeight(!0),t}function a(){if(j){for(var e=d.length,t=i();e--;)n=d[e],o=t,r=c,l=h,void 0,s()?o+f-w>n.elemTop&&o-w<n.elemBottom&&(n.isFirstSection?n.imageHolder.style[m]=r+o/2+l:n.imageHolder.style[m]=r+(o-n.elemTop-w)/2+l):o+f>n.elemTop&&o<n.elemBottom&&(n.isFirstSection?n.imageHolder.style[m]=r+o/2+l:n.imageHolder.style[m]=r+(o+f-n.elemTop)/2+l);j=!1}var n,o,r,l;g&&(E+=-v*function(e,t,n,o){var r=e-1;return r/=o,e/=o,n*(--e*e*e*e*e+1)+t-(n*(--r*r*r*r*r+1)+t)}(p,0,y,T),(x<E||E<-x)&&(H.scrollBy(0,E),E=0),T<++p&&(!(g=!1),E=v=p=0)),u(a)}function i(){return H!=window?H.scrollTop:0===document.documentElement.scrollTop?document.body.scrollTop:document.documentElement.scrollTop}function e(){j=!0}function n(e){!0===l.mr_scrollAssist&&(e.preventDefault&&e.preventDefault(),v=e.notRealWheel?-e.deltaY/4:1==e.deltaMode?-e.deltaY/3:100===Math.abs(e.deltaY)?-e.deltaY/120:-e.deltaY/40,v=o<(v=v<-o?-o:v)?o:v,g=!0,p=r)}function s(){return void 0!==window.mr_variant}var d,u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,m=function(e){for(var t=0;t<e.length;t++)if(void 0!==document.body.style[e[t]])return e[t];return null}(["transform","msTransform","webkitTransform","mozTransform","oTransform"]),c="translate3d(0,",h="px,0)",f=Math.max(document.documentElement.clientHeight,window.innerHeight||0),w=0,g=!1,p=0,v=0,o=2.2,r=2,y=350,x=1,T=35,E=0,H=window,j=(s(),!1),l=this;this.mr_scrollAssist=!!$("body").hasClass("scroll-assist"),jQuery(document).ready(function(){l.documentReady()}),jQuery(window).load(function(){l.windowLoad()}),this.getScrollingState=function(){return 0<p},this.documentReady=function(e){return f=Math.max(document.documentElement.clientHeight,window.innerHeight||0),jQuery("body").hasClass("parallax-2d")&&(c="translate(0,",h="px)"),/Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)?jQuery(".parallax").removeClass("parallax"):u&&(l.profileParallaxElements(),l.setupParallax()),function(e){return e&&"[object Function]"==={}.toString.call(e)}(e)?void e():void 0},this.windowLoad=function(){f=Math.max(document.documentElement.clientHeight,window.innerHeight||0),w=t(),window.mr_parallax.profileParallaxElements()},this.setupParallax=function(){s()&&(void 0!==(H=jQuery(".viu").get(0))&&(H.scrollBy=function(e,t){this.scrollTop+=t,this.scrollLeft+=e})),void 0!==H&&(H.addEventListener("scroll",e,!1),window.addWheelListener(H,n,!1),window.addEventListener("resize",function(){f=Math.max(document.documentElement.clientHeight,window.innerHeight||0),w=t(),l.profileParallaxElements()},!1),a())},this.profileParallaxElements=function(){d=[],w=t();var o=s(),e=".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder";o&&(e=".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder"),jQuery(e).each(function(e){var t=jQuery(this).closest(".parallax"),n=o?t.position().top:t.offset().top;d.push({section:t.get(0),outerHeight:t.outerHeight(),elemTop:n,elemBottom:n+t.outerHeight(),isFirstSection:!!t.is(":nth-of-type(1)"),imageHolder:jQuery(this).get(0)}),o?o&&(t.is(":nth-of-type(1)")?l.mr_setTranslate3DTransform(jQuery(this).get(0),0===i()?0:i()/2):l.mr_setTranslate3DTransform(jQuery(this).get(0),(i()-n-w)/2)):t.is(":nth-of-type(1)")?l.mr_setTranslate3DTransform(jQuery(this).get(0),0===i()?0:i()/2):l.mr_setTranslate3DTransform(jQuery(this).get(0),(i()+f-n)/2)})},this.mr_setTranslate3DTransform=function(e,t){e.style[m]=c+t+h}}window.mr_parallax=new mr_parallax,function(r,e){function o(e,t,n,o){e[l](i+t,"wheel"==a?n:function(e){var t={originalEvent:e=e||r.event,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==e.type?0:1,deltaX:0,deltaZ:0,notRealWheel:1,preventDefault:function(){e.preventDefault?e.preventDefault():e.returnValue=!1}};return"mousewheel"==a?(t.deltaY=-.025*e.wheelDelta,e.wheelDeltaX&&(t.deltaX=-.025*e.wheelDeltaX)):t.deltaY=e.detail/3,n(t)},o||!1)}var l,a,i="";r.addEventListener?l="addEventListener":(l="attachEvent",i="on"),a="onwheel"in e.createElement("div")?"wheel":void 0!==e.onmousewheel?"mousewheel":"DOMMouseScroll",r.addWheelListener=function(e,t,n){o(e,a,t,n),"DOMMouseScroll"==a&&o(e,"MozMousePixelScroll",t,n)}}(window,document);