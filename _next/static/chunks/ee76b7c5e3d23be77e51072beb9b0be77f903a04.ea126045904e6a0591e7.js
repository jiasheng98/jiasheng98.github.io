(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"+jrs":function(e,t,n){e.exports={"header-container":"Header_header-container__1XKmY","logo-z-index":"Header_logo-z-index__2eMz6","logo-container":"Header_logo-container__3UPTy","logo-image-wrapper":"Header_logo-image-wrapper__24xqT","logo-image":"Header_logo-image__3WSdO","logo-name":"Header_logo-name__3XKdS","header-navigation":"Header_header-navigation__2VDVv","resume-style":"Header_resume-style__dI_JF","resume-text":"Header_resume-text__3fs8b",resumeText:"Header_resumeText__3_UF0","portfolio-text":"Header_portfolio-text__1X-Zo","hamburger-menu":"Header_hamburger-menu__3E4aN","mobile-sidebar":"Header_mobile-sidebar__3lFPx","background-fade":"Header_background-fade__KL79Y","header-navigation-mobile":"Header_header-navigation-mobile__8II_x"}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery,i=void 0!==a&&a;return n||r&&i}},"48fX":function(e,t,n){var o=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"5fIB":function(e,t,n){var o=n("7eYB");e.exports=function(e){if(Array.isArray(e))return o(e)}},"7tg+":function(e,t,n){e.exports={"footer-container":"Footer_footer-container__1xNRe","footer-text":"Footer_footer-text__2V-d8"}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var s=l[c];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var d=r.props[s],f=o[s]||new Set;f.has(d)?a=!1:(f.add(d),o[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),o=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:p,headManager:o,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},"9a8T":function(e,t,n){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=(o(n(1)),n(6)),i=o(a),c=o(n(7)),u=o(n(8)),s=o(n(9)),d=o(n(10)),f=o(n(11)),l=o(n(14)),p=[],m=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(m=!0),m)return p=(0,f.default)(p,b),(0,d.default)(p,b.once),p},h=function(){p=(0,l.default)(),v()},g=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&s.default.mobile()||"phone"===e&&s.default.phone()||"tablet"===e&&s.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){b=r(b,e),p=(0,l.default)();var t=document.all&&!window.atob;return y(b.disable)||t?g():(b.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)((function(){(0,d.default)(p,b.once)}),b.throttleDelay)),b.disableMutationObserver||u.default.ready("[data-aos]",h),p)};e.exports={init:w,refresh:v,refreshHard:h}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function a(e){return O=e,y=setTimeout(d,t),k?o(e):g}function i(e){var n=t-(e-w);return M?j(n,h-(e-O)):n}function u(e){var n=e-w;return void 0===w||n>=t||n<0||M&&e-O>=h}function d(){var e=_();return u(e)?f(e):void(y=setTimeout(d,i(e)))}function f(e){return y=void 0,S&&b?o(e):(b=v=void 0,g)}function l(){void 0!==y&&clearTimeout(y),O=0,b=w=v=y=void 0}function p(){return void 0===y?g:f(_())}function m(){var e=_(),n=u(e);if(b=arguments,v=this,w=e,n){if(void 0===y)return a(w);if(M)return y=setTimeout(d,t),o(w)}return void 0===y&&(y=setTimeout(d,t)),g}var b,v,h,g,y,w,O=0,k=!1,M=!1,S=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,r(n)&&(k=!!n.leading,h=(M="maxWait"in n)?x(c(n.maxWait)||0,t):h,S="trailing"in n?!!n.trailing:S),m.cancel=l,m.flush=p,m}function o(e,t,o){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(s);return r(o)&&(a="leading"in o?!!o.leading:a,i="trailing"in o?!!o.trailing:i),n(e,t,{leading:a,maxWait:t,trailing:i})}function r(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function i(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||a(e)&&w.call(e)==f}function c(e){if("number"==typeof e)return e;if(i(e))return d;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?d:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",d=NaN,f="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,h="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,y=h||g||Function("return this")(),w=Object.prototype.toString,x=Math.max,j=Math.min,_=function(){return y.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function r(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function a(e){return O=e,y=setTimeout(d,t),k?r(e):g}function c(e){var n=t-(e-_);return M?x(n,h-(e-O)):n}function s(e){var n=e-_;return void 0===_||n>=t||n<0||M&&e-O>=h}function d(){var e=j();return s(e)?f(e):void(y=setTimeout(d,c(e)))}function f(e){return y=void 0,S&&b?r(e):(b=v=void 0,g)}function l(){void 0!==y&&clearTimeout(y),O=0,b=_=v=y=void 0}function p(){return void 0===y?g:f(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,_=e,n){if(void 0===y)return a(_);if(M)return y=setTimeout(d,t),r(_)}return void 0===y&&(y=setTimeout(d,t)),g}var b,v,h,g,y,_,O=0,k=!1,M=!1,S=!0;if("function"!=typeof e)throw new TypeError(u);return t=i(t)||0,o(n)&&(k=!!n.leading,h=(M="maxWait"in n)?w(i(n.maxWait)||0,t):h,S="trailing"in n?!!n.trailing:S),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&y.call(e)==d}function i(e){if("number"==typeof e)return e;if(a(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",s=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,g=v||h||Function("return this")(),y=Object.prototype.toString,w=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!o()}function a(e,t){var n=window.document,r=new(o())(i);c=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function i(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:r,ready:a}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return r(e,[{key:"phone",value:function(){var e=o();return!(!a.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!c.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,r=window.innerHeight;e.forEach((function(e,a){n(e,r+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(12)),a=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)})),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(13)),a=function(e,t){var n=0,o=0,a=window.innerHeight,i={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(o=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(e=document.querySelectorAll(i.anchor)[0]),n=(0,r.default)(e).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=a/2;break;case"bottom-center":n+=a/2+e.offsetHeight;break;case"center-center":n+=a/2+e.offsetHeight/2;break;case"top-top":n+=a;break;case"bottom-top":n+=e.offsetHeight+a;break;case"center-top":n+=e.offsetHeight/2+a}return i.anchorPlacement||i.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=r},P1Lw:function(e,t){e.exports="/_next/static/images/Logo-d4a1e7f5549787118dc53f81f5538558.png"},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var o=n("mPvQ"),r=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var a,i=r(n("q1tI")),c=n("elyg"),u=n("nOHt"),s=new Map,d=window.IntersectionObserver,f={};var l=function(e,t){var n=a||(d?a=new d((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,o){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),f[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=o(n,2),a=r[0],s=r[1],m=(0,u.useRouter)(),b=m&&m.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(b,e.href,!0),n=o(t,2),r=n[0],a=n[1];return{href:r,as:e.as?(0,c.resolveHref)(b,e.as):a||r}}),[b,e.href,e.as]),h=v.href,g=v.as;i.default.useEffect((function(){if(t&&d&&a&&a.tagName&&(0,c.isLocalURL)(h)&&!f[h+"%"+g])return l(a,(function(){p(m,h,g)}))}),[t,a,h,g,m]);var y=e.children,w=e.replace,x=e.shallow,j=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var _=i.Children.only(y),O={ref:function(e){e&&s(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,h,g,w,x,j)}};return t&&(O.onMouseEnter=function(e){(0,c.isLocalURL)(h)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),p(m,h,g,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(O.href=(0,c.addBasePath)((0,c.addLocale)(g,m&&m.locale,m&&m.defaultLocale))),i.default.cloneElement(_,O)};t.default=m},djf4:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o=n("q1tI"),r=n("YFqc"),a=n.n(r),i=n("P1Lw"),c=n.n(i),u=n("qCJc"),s=n.n(u),d=n("+jrs"),f=n.n(d),l=n("nKUr"),p=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:f.a["header-container"],children:[Object(l.jsx)(s.a,{isOpen:t,menuClicked:function(e){n((function(e){return!e}))},width:18,height:15,strokeWidth:1,rotate:0,color:"var(--primarytext)",borderRadius:0,animationDuration:.5,className:f.a["hamburger-menu"]}),t?Object(l.jsx)("div",{className:f.a["mobile-sidebar"],children:Object(l.jsxs)("div",{className:f.a["header-navigation-mobile"],children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.a,{href:"/portfolio/PortfolioList",children:Object(l.jsx)("a",{className:f.a["portfolio-text"],children:"Portfolio"})})}),Object(l.jsx)("li",{className:f.a["resume-style"],children:Object(l.jsx)(a.a,{href:"/Resume(Jia Sheng).pdf",children:Object(l.jsx)("a",{target:"_BLANK",className:f.a["resume-text"],children:"Resume"})})})]})}):null,Object(l.jsx)(a.a,{href:"/",children:Object(l.jsx)("div",{className:f.a["logo-z-index"],"data-aos":"zoom-in","data-aos-delay":"100",children:Object(l.jsxs)("a",{className:f.a["logo-container"],children:[Object(l.jsx)("div",{className:f.a["logo-image-wrapper"],children:Object(l.jsx)("img",{src:c.a,className:f.a["logo-image"],alt:"Jia Sheng Yeap"})}),Object(l.jsx)("a",{className:f.a["logo-name"],children:"Jia Sheng Yeap"})]})})}),Object(l.jsxs)("div",{className:f.a["header-navigation"],children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.a,{href:"/portfolio/PortfolioList",children:Object(l.jsx)("a",{className:f.a["portfolio-text"],children:"Portfolio"})})}),Object(l.jsx)("li",{className:f.a["resume-style"],children:Object(l.jsx)(a.a,{href:"/Resume(Jia Sheng).pdf",children:Object(l.jsx)("a",{target:"_BLANK",className:f.a["resume-text"],children:"Resume"})})})]})]})})},m=n("7tg+"),b=n.n(m),v=function(){return Object(l.jsx)("footer",{className:b.a["footer-container"],children:Object(l.jsx)("h6",{className:b.a["footer-text"],children:"Copyright \xa9 2020 Jia Sheng. All Rights Reserved."})})},h=n("8Kt/"),g=n.n(h);function y(e){var t=e.children,n=e.title,o=void 0===n?"Jia Sheng Yeap":n,r=e.description,a=e.keywords,i=e.ld_json;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(g.a,{children:[Object(l.jsx)("title",{children:o}),Object(l.jsx)("meta",{name:"description",content:r}),Object(l.jsx)("meta",{name:"keywords",content:a}),Object(l.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i)}})]}),Object(l.jsx)(p,{}),t,Object(l.jsx)(v,{})]})}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,n){var o=n("5fIB"),r=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return o(e)||r(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qCJc:function(e,t,n){"use strict";t.__esModule=!0,t.default=i;var o=a(n("q1tI")),r=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=(e.width||36)+"px",n=(e.height||30)+"px",r=parseInt(n.replace("px",""))/2+"px",a=e.isOpen||!1,i=e.strokeWidth||2,c="-"+i/2+"px",u=e.animationDuration||"0.4",s=function(e,t,n){return"translate3d(0,"+(e?r:t)+",0) rotate("+(e?n+"deg":"0")+")"},d={container:{width:t,height:n,position:"relative",transform:"rotate("+(e.rotate||0)+"deg)"},lineBase:{display:"block",height:i+"px",width:"100%",background:e.color||"#000",transitionTimingFunction:"ease",transitionDuration:u+"s",borderRadius:(e.borderRadius||0)+"px",transformOrigin:"center",position:"absolute"},firstLine:{transform:s(a,0,45),marginTop:c},secondLine:{transitionTimingFunction:"ease-out",transitionDuration:u/4+"s",opacity:a?"0":"1",top:r,marginTop:c},thirdLine:{transform:s(a,n,-45),marginTop:c}};return o.default.createElement("div",{style:d.container,className:e.className,onClick:e.menuClicked},o.default.createElement("span",{style:Object.assign({},d.lineBase,d.firstLine)}),o.default.createElement("span",{style:Object.assign({},d.lineBase,d.secondLine)}),o.default.createElement("span",{style:Object.assign({},d.lineBase,d.thirdLine)}))}i.propTypes={isOpen:r.default.bool.isRequired,menuClicked:r.default.func.isRequired,width:r.default.number,height:r.default.number,strokeWidth:r.default.number,rotate:r.default.number,color:r.default.string,borderRadius:r.default.number,animationDuration:r.default.number,className:r.default.string}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var o=n("C+bE"),r=n("qXWd");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}}}]);