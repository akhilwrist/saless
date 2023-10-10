document.addEventListener("DOMContentLoaded",(function(){lazyAssign=function(e){var t=e.dataset.src;if(void 0!==t&&""!==t){e.src=t;var o=e.dataset.srcset;void 0!==o&&""!==o&&(e.srcset=e.dataset.srcset)}e.removeAttribute("data-lazy"),e.removeAttribute("data-srcset"),e.removeAttribute("data-src")};var e=document.querySelectorAll("[data-lazy=loading]");if("IntersectionObserver"in window){var t=new IntersectionObserver((function(e,o){e.forEach((function(e){if(e.isIntersecting){var o=e.target,n=o.dataset.srcset,a=o.dataset.src;void 0!==a&&""!==a&&(o.src=a,void 0!==n&&""!==n&&(o.srcset=o.dataset.srcset)),o.removeAttribute("data-lazy"),o.removeAttribute("data-srcset"),o.removeAttribute("data-src"),t.unobserve(o)}}))}));e.forEach((function(e){t.observe(e)}))}else e.forEach((function(e){lazyAssign(e)}));function o(){var n=$(document).height();$(window).scrollTop()>=n/4&&(e.forEach((function(e){lazyAssign(e),t.unobserve(e)})),document.removeEventListener("scroll",o),window.removeEventListener("resize",o),window.removeEventListener("orientationChange",o))}document.addEventListener("scroll",o),window.addEventListener("resize",o),window.addEventListener("orientationChange",o)})),function(e,t,o,n){e(".ff-modal-popup").find(".lazy-iframe").each((function(t,o){e(this).attr("src",e(this).attr("data-src")),e(this).removeClass("lazy-iframe")})),e(".ft-cus-session,[data-gjs-type='custom-code']").find(".lazy-iframe").each((function(t,o){e(this).attr("src",e(this).attr("data-src")),e(this).removeClass("lazy-iframe")}));var a="lazyLoadXT",r="lazied",i="load error",s="lazy-hidden",c=o.documentElement||o.body,d={autoInit:!0,selector:"",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:t.onscroll===n||!!t.operamini||!c.getBoundingClientRect,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"lazyloadall",oninit:{removeClass:"lazy"},onshow:{addClass:s},onload:{removeClass:s,addClass:"lazy-loaded"},onerror:{removeClass:s},checkDuplicates:!0},l={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},u=e(t),f=e.isFunction,v=e.extend,h=e.data||function(t,o){return e(t).data(o)},m=[],A=0,g=0;function y(e,t){return e[t]===n?d[t]:e[t]}function w(){var e=t.pageYOffset;return e===n?c.scrollTop:e}function z(e,t){var o=d["on"+e];o&&(f(o)?o.call(t[0]):(o.addClass&&t.addClass(o.addClass),o.removeClass&&t.removeClass(o.removeClass))),t.trigger("lazy"+e,[t]),C()}function p(t){z(t.type,e(this).off(i,p))}function E(o){if(m.length){o=o||d.forceLoad,A=1/0;var n,s,l=w(),u=t.innerHeight||c.clientHeight,v=t.innerWidth||c.clientWidth;for(n=0,s=m.length;n<s;n++){var g,y=m[n],E=y[0],b=y[a],C=!1,L=o||h(E,r)<0;if(e.contains(c,E)){if(o||!b.visibleOnly||E.offsetWidth||E.offsetHeight){if(!L){var I=E.getBoundingClientRect(),T=b.edgeX,O=b.edgeY;L=(g=I.top+l-O-u)<=l&&I.bottom>-O&&I.left<=v+T&&I.right>-T}if(L){y.on(i,p),z("show",y);var X=b.srcAttr,B=f(X)?X(y):E.getAttribute(X);B&&(E.src=B),C=!0}else g<A&&(A=g)}}else C=!0;C&&(h(E,r,0),m.splice(n--,1),s--)}s||z("complete",e(c))}}function b(){g>1?(g=1,E(),setTimeout(b,d.throttle)):g=0}function C(e){m.length&&(e&&"scroll"===e.type&&e.currentTarget===t&&A>=w()||(g||setTimeout(b,0),g=2))}function L(){u.lazyLoadXT()}function I(){E(!0)}e[a]=v(d,l,e[a]),e.fn[a]=function(o){var n,i=y(o=o||{},"blankImage"),s=y(o,"checkDuplicates"),c=y(o,"scrollContainer"),u=y(o,"show"),f={};for(n in e(c).on("scroll",C),l)f[n]=y(o,n);return this.each((function(n,c){if(c===t)e(d.selector).lazyLoadXT(o);else{var l=s&&h(c,r),A=e(c).data(r,u?-1:1);if(l)return void C();i&&"IMG"===c.tagName&&!c.src&&(c.src=i),A[a]=v({},f),z("init",A),m.push(A),C()}}))},e(o).ready((function(){z("start",u),u.on(d.updateEvent,C).on(d.forceEvent,I),e(o).on(d.updateEvent,C),d.autoInit&&(u.on(d.loadEvent,L),L())}))}(window.jQuery||window.Zepto||window.$,window,document),function(e){var t=e.lazyLoadXT;t.selector+=".lazy-video,.lazy-iframe",t.videoPoster="data-poster",e(document).on("lazyshow","video",(function(o,n){var a=n.lazyLoadXT.srcAttr,r=e.isFunction(a),i=!1;n.attr("poster",n.attr(t.videoPoster)),n.children("source,track").each((function(t,o){var n=e(o),s=r?a(n):n.attr(a);s&&(n.attr("src",s),i=!0)})),i&&this.load()}))}(window.jQuery||window.Zepto||window.$);