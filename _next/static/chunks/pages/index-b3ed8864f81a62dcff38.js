_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"05Qm":function(e,t){e.exports="/_next/static/images/UrcheckinTwinTower-3f232ea509a79d03f2f825e340ec3bdf.png"},"1YQk":function(e,t){e.exports="/_next/static/images/snailer_ui_home-d59ce9d4733bca31fac732bf98cffc89.png"},"3tc/":function(e,t){e.exports="/_next/static/images/Snailer-473993fc8c141e6c6d97299882c77d3d.gif"},"915Z":function(e,t){e.exports="/_next/static/images/side-7a426f9c8342efa8ccf8352ded243c7a.png"},DYp7:function(e,t){e.exports="/_next/static/images/SnailerGrocery-2c53b4c71f92f8d5126b282c54709026.png"},K6tJ:function(e,t){e.exports="/_next/static/images/urcheckin-logo-b46c01aed6fc1db122bdba1a3145cf60.png"},MhUV:function(e,t,n){e.exports={"welcome-container":"LandingSection_welcome-container__13o4t","text-wrapper":"LandingSection_text-wrapper__3nD1d","i-am-text":"LandingSection_i-am-text__ToQzX","i-am-text-title":"LandingSection_i-am-text-title__2QbS7","welcome-title-text-container":"LandingSection_welcome-title-text-container__38V5X","welcome-phone-container":"LandingSection_welcome-phone-container__3Nxl_","welcome-phone":"LandingSection_welcome-phone__1VFxg"}},Phl1:function(e,t){e.exports="/_next/static/images/strived-logo-b2e412518602e9493134f3eac8541f40.png"},QKmo:function(e,t){e.exports="/_next/static/images/SnailerFood-f4a293309b11536dba645683f334b8a7.png"},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,a,i,r,o,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,a,i,r,o,s],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},RJUo:function(e,t){e.exports="/_next/static/images/strived_ui_home-ea4708f88e01208d21f8cd5995ed3b85.png"},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("9a8T"),o=n.n(r),s=n("djf4");function c(e,t,n,a){e.style.transition=`${t} ${n}ms ${a}`}function l(e,t,n){return Math.min(Math.max(e,t),n)}class u{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{const{width:t,height:n}=e,a=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));return{width:a,height:a}},this.setSize=e=>{const t=this.calculateGlareSize(e);this.glareEl.style.width=t.width+"px",this.glareEl.style.height=t.height+"px"},this.update=(e,t,n,a)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,n,a)},this.updateAngle=(e,t)=>{const{xPercentage:n,yPercentage:a}=e,i=180/Math.PI,r=n?Math.atan2(a,-n)*i:0;this.glareAngle=r-(t?180:0)},this.updateOpacity=(e,t,n,a)=>{const{xPercentage:i,yPercentage:r}=e,{glarePosition:o,glareReverse:s,glareMaxOpacity:c}=t,u=n?-1:1,d=a?-1:1,p=s?-1:1;let h;switch(o){case"top":h=-i*u*p;break;case"right":h=r*d*p;break;case"bottom":default:h=i*u*p;break;case"left":h=-r*d*p;break;case"all":h=Math.hypot(i,r)}const g=l(h,0,100);this.glareOpacity=g*c/100},this.render=e=>{const{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)"},a=this.calculateGlareSize(e),i={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:a.width+"px",height:a.height+"px"};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,i)}}class d{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:n,yPercentage:a}=e,{tiltMaxAngleX:i,tiltMaxAngleY:r}=t;this.tiltAngleX=n*i/100,this.tiltAngleY=a*r/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:n,tiltAngleYManual:a,tiltMaxAngleX:i,tiltMaxAngleY:r}=t;(null!==n||null!==a)&&(this.tiltAngleX=null!==n?n:0,this.tiltAngleY=null!==a?a:0,e.xPercentage=100*this.tiltAngleX/i,e.yPercentage=100*this.tiltAngleY/r)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=l(this.tiltAngleX,-90,90),this.tiltAngleY=l(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const p=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:null,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class h extends a.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>{return e=this,t=void 0,a=function*(){if(window.DeviceOrientationEvent,"function"==typeof DeviceOrientationEvent.requestPermission)try{return void("granted"===(yield DeviceOrientationEvent.requestPermission())&&window.addEventListener("deviceorientation",this.onMove))}catch(e){return void console.error(e)}window.addEventListener("deviceorientation",this.onMove)},new((n=void 0)||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}c((a=a.apply(e,t||[])).next())}));var e,t,n,a},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){const e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":const{tiltAngleXInitial:n,tiltAngleYInitial:a,tiltMaxAngleX:i,tiltMaxAngleY:r}=this.props,o=a/r*100;this.wrapperEl.clientPosition.xPercentage=l(n/i*100,-100,100),this.wrapperEl.clientPosition.yPercentage=l(o,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:n}=this.props,a=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=a/n*100,this.wrapperEl.clientPosition.xPercentage=l(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=l(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:n,flipHorizontally:a}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChanged"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,a)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,n;if(e){const{x:e,y:a}=this.wrapperEl.clientPosition;t=a/window.innerHeight*200-100,n=e/window.innerWidth*200-100}else{const{size:{width:e,height:a,left:i,top:r},clientPosition:{x:o,y:s}}=this.wrapperEl;t=(s-r)/a*200-100,n=(o-i)/e*200-100}this.wrapperEl.clientPosition.xPercentage=l(t,-100,100),this.wrapperEl.clientPosition.yPercentage=l(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){this.tilt=new d,this.initGlare(),this.addEventListeners();const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChanged");this.mainLoop(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new u(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let n=0,a=0;this.glare&&(n=this.glare.glareAngle,a=this.glare.glareOpacity),t(this.tilt.tiltAngleX,this.tilt.tiltAngleY,this.tilt.tiltAngleXPercentage,this.tilt.tiltAngleYPercentage,n,a,e.type)}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;c(this.wrapperEl.node,"all",e,t),this.glare&&c(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:n}=this.props;return i.a.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:n},e)}}h.defaultProps=p;var g=n("6diz"),f=n("ELNm"),m=n.n(f),b=n("MhUV"),v=n.n(b),w=n("vcij"),x=n.n(w),j=n("nKUr"),_=function(){Object(a.useEffect)((function(){var t=new m.a(e,{strings:["Jia Sheng","UI Designer","UI Developer","Creative Lead"],typeSpeed:100,backSpeed:100,loop:!0});return function(){t.destroy()}}),[]);var e=Object(a.useRef)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:v.a["welcome-container"],id:v.a.welcome,children:Object(j.jsx)(h,{tiltReverse:!0,tiltMaxAngleY:15,tiltMaxAngleX:0,children:Object(j.jsxs)("div",{className:v.a["welcome-title-text-container"],children:[Object(j.jsx)("div",{className:v.a["welcome-phone-container"],"data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"500",children:Object(j.jsx)(g.a,{src:x.a,className:v.a["welcome-phone"]})}),Object(j.jsx)("div",{"data-aos":"fade-right","data-aos-delay":"800",className:v.a["text-wrapper"],children:Object(j.jsxs)("h1",{className:v.a["i-am-text"],children:["I am",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:v.a["i-am-text-title"],ref:function(t){return e=t}})]})})]})})})})},E=n("xI4t"),O=n.n(E),k=n("mP5I"),y=n.n(k),A=n("915Z"),S=n.n(A),N=function(){return Object(j.jsx)("div",{className:O.a["about-left-container"],"data-aos":"fade-right",children:Object(j.jsx)(h,{tiltReverse:!0,tiltMaxAngleY:5,tiltMaxAngleX:0,children:Object(j.jsx)(g.a,{src:y.a,className:O.a["about-iphone"],"data-aos-delay":"100"})})})},P=function(){return Object(j.jsxs)("div",{className:O.a["about-right-container"],"data-aos":"fade-up",children:[Object(j.jsx)("h2",{className:O.a["about-header"],children:"Hey There!"}),Object(j.jsx)("h2",{className:O.a["about-subhead"],children:"I'm Yeap Jia Sheng"}),Object(j.jsx)("p",{className:O.a["about-right-content"],children:"I am currently a Creative Lead in TTRacing. I am also a UI/UX Designer and Developer focused on creating user-centric experiences and aesthetic visuals. I have a strong passion for Web Design, UI/UX Design, Illustration, Motion Graphics, and Animation. I pay attention to details and put priority on overall UI design consistency. I am not afraid to challenge conventional UI design patterns and making bold choices. I am always learning and striving hard to improve myself everyday."})]})},M=function(){return Object(j.jsxs)("section",{className:O.a["about-container"],id:O.a.about,children:[Object(j.jsx)(g.a,{src:S.a,className:O.a["about-side-top-right"]}),Object(j.jsx)(g.a,{src:S.a,className:O.a["about-side-top-left"]}),Object(j.jsx)(g.a,{src:S.a,className:O.a["about-side-bottom-right"]}),Object(j.jsx)(g.a,{src:S.a,className:O.a["about-side-bottom-left"]}),Object(j.jsxs)("div",{className:O.a["about-wrap"],children:[Object(j.jsx)(N,{}),Object(j.jsx)(P,{})]})]})},I=n("YFqc"),C=n.n(I),L=n("wx14"),T=n("zLVn");var X=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function R(e){var t=X(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var Y=function(e,t){var n=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function W(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}var F=Math.pow(2,31)-1;function U(){var e=function(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(a.useRef)();return W((function(){return clearTimeout(t.current)})),Object(a.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,i){void 0===i&&(i=0),e()&&(n(),i<=F?t.current=setTimeout(a,i):function e(t,n,a){var i=a-Date.now();t.current=i<=F?setTimeout(n,i):setTimeout((function(){return e(t,n,a)}),F)}(t,a,Date.now()+i))},clear:n}}),[])}var D=n("eC2I"),z=n.n(D),J=n("dRu9"),V=n("17x9"),Q=n.n(V);n("QLaP");function G(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function q(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function H(e,t){return Object.keys(t).reduce((function(n,i){var r,o=n,s=o[G(i)],c=o[i],l=Object(T.a)(o,[G(i),i].map(q)),u=t[i],d=function(e,t,n){var i=Object(a.useRef)(void 0!==e),r=Object(a.useState)(t),o=r[0],s=r[1],c=void 0!==e,l=i.current;return i.current=c,!c&&l&&o!==t&&s(t),[c?e:o,Object(a.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),i=1;i<t;i++)a[i-1]=arguments[i];n&&n.apply(void 0,[e].concat(a)),s(e)}),[n])]}(c,s,e[u]),p=d[0],h=d[1];return Object(L.a)({},l,((r={})[i]=p,r[u]=h,r))}),e)}n("dI71"),n("VCL8");var K=/-(.)/g;var $=n("vUet"),B=["className","bsPrefix","as"],Z=function(e){return e[0].toUpperCase()+(t=e,t.replace(K,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var ee=function(e,t){var n=void 0===t?{}:t,a=n.displayName,r=void 0===a?Z(e):a,o=n.Component,s=n.defaultProps,c=i.a.forwardRef((function(t,n){var a=t.className,r=t.bsPrefix,s=t.as,c=void 0===s?o||"div":s,l=Object(T.a)(t,B),u=Object($.a)(r,e);return i.a.createElement(c,Object(L.a)({ref:n,className:z()(a,u)},l))}));return c.defaultProps=s,c.displayName=r,c}("carousel-caption"),te=["as","bsPrefix","children","className"],ne=i.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,r=e.bsPrefix,o=e.children,s=e.className,c=Object(T.a)(e,te),l=z()(s,Object($.a)(r,"carousel-item"));return i.a.createElement(a,Object(L.a)({ref:t},c,{className:l}),o)}));ne.displayName="CarouselItem";var ae=ne;function ie(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}var re=n("dbZe"),oe=n("wsUu"),se=n("z+q/"),ce=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],le={bsPrefix:Q.a.string,as:Q.a.elementType,slide:Q.a.bool,fade:Q.a.bool,controls:Q.a.bool,indicators:Q.a.bool,activeIndex:Q.a.number,onSelect:Q.a.func,onSlide:Q.a.func,onSlid:Q.a.func,interval:Q.a.number,keyboard:Q.a.bool,pause:Q.a.oneOf(["hover",!1]),wrap:Q.a.bool,touch:Q.a.bool,prevIcon:Q.a.node,prevLabel:Q.a.string,nextIcon:Q.a.node,nextLabel:Q.a.string},ue={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function de(e,t){var n=H(e,{activeIndex:"onSelect"}),r=n.as,o=void 0===r?"div":r,s=n.bsPrefix,c=n.slide,l=n.fade,u=n.controls,d=n.indicators,p=n.activeIndex,h=n.onSelect,g=n.onSlide,f=n.onSlid,m=n.interval,b=n.keyboard,v=n.onKeyDown,w=n.pause,x=n.onMouseOver,j=n.onMouseOut,_=n.wrap,E=n.touch,O=n.onTouchStart,k=n.onTouchMove,y=n.onTouchEnd,A=n.prevIcon,S=n.prevLabel,N=n.nextIcon,P=n.nextLabel,M=n.className,I=n.children,C=Object(T.a)(n,ce),W=Object($.a)(s,"carousel"),F=Object(a.useRef)(null),D=Object(a.useState)("next"),V=D[0],Q=D[1],G=Object(a.useState)(!1),q=G[0],K=G[1],B=Object(a.useState)(!1),Z=B[0],ee=B[1],te=Object(a.useState)(p||0),ne=te[0],ae=te[1];Z||p===ne||(F.current?Q(F.current):Q((p||0)>ne?"next":"prev"),c&&ee(!0),ae(p||0)),Object(a.useEffect)((function(){F.current&&(F.current=null)}));var le,ue=0;!function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(I,(function(e,t){++ue,t===p&&(le=e.props.interval)}));var de=X(le),pe=Object(a.useCallback)((function(e){if(!Z){var t=ne-1;if(t<0){if(!_)return;t=ue-1}F.current="prev",h&&h(t,e)}}),[Z,ne,h,_,ue]),he=R((function(e){if(!Z){var t=ne+1;if(t>=ue){if(!_)return;t=0}F.current="next",h&&h(t,e)}})),ge=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{element:ge.current,prev:pe,next:he}}));var fe=R((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ge.current)&&he()})),me="next"===V?"left":"right";Y((function(){c||(g&&g(ne,me),f&&f(ne,me))}),[ne]);var be=W+"-item-"+V,ve=W+"-item-"+me,we=Object(a.useCallback)((function(e){Object(se.a)(e),g&&g(ne,me)}),[g,ne,me]),xe=Object(a.useCallback)((function(){ee(!1),f&&f(ne,me)}),[f,ne,me]),je=Object(a.useCallback)((function(e){if(b&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void pe(e);case"ArrowRight":return e.preventDefault(),void he(e)}v&&v(e)}),[b,v,pe,he]),_e=Object(a.useCallback)((function(e){"hover"===w&&K(!0),x&&x(e)}),[w,x]),Ee=Object(a.useCallback)((function(e){K(!1),j&&j(e)}),[j]),Oe=Object(a.useRef)(0),ke=Object(a.useRef)(0),ye=U(),Ae=Object(a.useCallback)((function(e){Oe.current=e.touches[0].clientX,ke.current=0,"hover"===w&&K(!0),O&&O(e)}),[w,O]),Se=Object(a.useCallback)((function(e){e.touches&&e.touches.length>1?ke.current=0:ke.current=e.touches[0].clientX-Oe.current,k&&k(e)}),[k]),Ne=Object(a.useCallback)((function(e){if(E){var t=ke.current;Math.abs(t)>40&&(t>0?pe(e):he(e))}"hover"===w&&ye.set((function(){K(!1)}),m||void 0),y&&y(e)}),[E,w,pe,he,ye,m,y]),Pe=null!=m&&!q&&!Z,Me=Object(a.useRef)();Object(a.useEffect)((function(){var e,t;if(Pe)return Me.current=window.setInterval(document.visibilityState?fe:he,null!=(e=null!=(t=de.current)?t:m)?e:void 0),function(){null!==Me.current&&clearInterval(Me.current)}}),[Pe,he,de,m,fe]);var Ie=Object(a.useMemo)((function(){return d&&Array.from({length:ue},(function(e,t){return function(e){h&&h(t,e)}}))}),[d,ue,h]);return i.a.createElement(o,Object(L.a)({ref:ge},C,{onKeyDown:je,onMouseOver:_e,onMouseOut:Ee,onTouchStart:Ae,onTouchMove:Se,onTouchEnd:Ne,className:z()(M,W,c&&"slide",l&&W+"-fade")}),d&&i.a.createElement("ol",{className:W+"-indicators"},ie(I,(function(e,t){return i.a.createElement("li",{key:t,className:t===ne?"active":void 0,onClick:Ie?Ie[t]:void 0})}))),i.a.createElement("div",{className:W+"-inner"},ie(I,(function(e,t){var n=t===ne;return c?i.a.createElement(J.e,{in:n,onEnter:n?we:void 0,onEntered:n?xe:void 0,addEndListener:oe.a},(function(t){return i.a.cloneElement(e,{className:z()(e.props.className,n&&"entered"!==t&&be,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ve)})})):i.a.cloneElement(e,{className:z()(e.props.className,n&&"active")})}))),u&&i.a.createElement(i.a.Fragment,null,(_||0!==p)&&i.a.createElement(re.a,{className:W+"-control-prev",onClick:pe},A,S&&i.a.createElement("span",{className:"sr-only"},S)),(_||p!==ue-1)&&i.a.createElement(re.a,{className:W+"-control-next",onClick:he},N,P&&i.a.createElement("span",{className:"sr-only"},P))))}var pe=i.a.forwardRef(de);pe.displayName="Carousel",pe.propTypes=le,pe.defaultProps=ue,pe.Caption=ee,pe.Item=ae;var he=pe,ge=n("sKvG"),fe=n.n(ge),me=n("3tc/"),be=n.n(me),ve=n("K6tJ"),we=n.n(ve),xe=n("Tjhe"),je=n.n(xe),_e=n("Phl1"),Ee=n.n(_e),Oe=n("QKmo"),ke=n.n(Oe),ye=n("DYp7"),Ae=n.n(ye),Se=n("a7oz"),Ne=n.n(Se),Pe=n("u8rN"),Me=n.n(Pe),Ie=n("05Qm"),Ce=n.n(Ie),Le=n("hQAX"),Te=n.n(Le),Xe=(n("mnh4"),n("1YQk")),Re=n.n(Xe),Ye=n("vJ8P"),We=n.n(Ye),Fe=n("umnk"),Ue=n.n(Fe),De=n("RJUo"),ze=n.n(De),Je=function(e){var t=e.item;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:fe.a["work-card-container"],style:{backgroundColor:t.backgroundColor,color:t.fontColor},"data-aos":"fade-up","data-aos-delay":"200",children:[Object(j.jsxs)("div",{className:fe.a["work-card-body"],children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:fe.a["work-title-row"],children:[Object(j.jsx)("div",{"data-aos":"fade-right","data-aos-delay":"700",children:Object(j.jsx)(g.a,{src:t.logo,className:fe.a["work-gif-logo"]})}),Object(j.jsx)("p",{className:fe.a["work-card-title"],children:t.title})]}),Object(j.jsx)("p",{className:fe.a["work-card-subtitle"],children:t.subtitle})]}),!0===t.description_image?Object(j.jsxs)("div",{className:fe.a["work-card-image-container"],children:[Object(j.jsx)("div",{className:fe.a["work-card-image-wrapper"],"data-aos":"fade-up","data-aos-delay":"700",children:Object(j.jsx)(g.a,{src:t.image1,className:fe.a["work-card-image-1"]})}),Object(j.jsx)("div",{className:fe.a["work-card-image-wrapper"],"data-aos":"fade-up","data-aos-delay":"700",children:Object(j.jsx)(g.a,{src:t.image2,className:fe.a["work-card-image-1"]})}),Object(j.jsx)("div",{className:fe.a["work-card-image-wrapper"],"data-aos":"fade-up","data-aos-delay":"700",children:Object(j.jsx)(g.a,{src:t.image3,className:fe.a["work-card-image-1"]})})]}):null,Object(j.jsx)(C.a,{href:t.href,children:Object(j.jsx)("button",{className:fe.a["work-button"],children:Object(j.jsx)("p",{className:fe.a["work-button-text"],style:{color:t.backgroundColor,backgroundColor:t.fontColor},children:"Check it Out"})})})]}),Object(j.jsx)("div",{"data-aos":"fade-left","data-aos-delay":"700",className:fe.a["work-card-phone"],children:Object(j.jsx)(g.a,{src:t.phone,className:fe.a["work-card-phone-image"]})})]})})},Ve=function(){var e=[{logo:be.a,title:"Snailer",subtitle:"Took part in UI design and development for Snailer - a white-labeled food/grocery delivery and vehicle hiring app based in Johor, Malaysia. The app and website is designed using playful, clean and modern approach.",backgroundColor:"#468d65",fontColor:"#FFFFFF",description_image:!0,phone:Re.a,image1:ke.a,image2:Ae.a,image3:Ne.a,href:"/portfolio/Snailer"},{logo:we.a,title:"Urcheckin",subtitle:"Took part in UI development for Urcheckin - A lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences.",backgroundColor:"#E9493C",fontColor:"#FFFFFF",description_image:!0,phone:We.a,image1:Te.a,image2:Me.a,image3:Ce.a,href:"/portfolio/Urcheckin"},{logo:je.a,title:"TTRacing",subtitle:"Constantly take part and improving in the entire Shopify UI/UX design and development for TTRacing - a gaming chair company that strives to give everyone the best comfort experience for when they\u2019re working or playing for long hours.",backgroundColor:"#FFFFFF",fontColor:"#000000",phone:Ue.a,href:"/portfolio/ttracing"},{logo:Ee.a,title:"Strived",subtitle:"Took part in the entire Shopify UI/UX design and development for Strived - a fully customised gift shop that focuses on providing unique and high-quality products.",backgroundColor:"#000000",fontColor:"#FFFFFF",phone:ze.a,href:"/portfolio/strived"}],t=Object(a.useState)(0),n=t[0],i=t[1];return Object(j.jsx)("section",{className:fe.a["work-container"],id:"work",children:Object(j.jsxs)("div",{className:fe.a["work-wrap"],children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:fe.a["my-work-header"],children:"Check Out My Work!"})}),Object(j.jsx)("div",{className:fe.a["carousel-container"],children:Object(j.jsxs)(he,{activeIndex:n,onSelect:function(e,t){i(e)},interval:1e4,children:[Object(j.jsx)(he.Item,{children:Object(j.jsx)(Je,{item:e[0]})}),Object(j.jsx)(he.Item,{children:Object(j.jsx)(Je,{item:e[1]})}),Object(j.jsx)(he.Item,{children:Object(j.jsx)(Je,{item:e[2]})}),Object(j.jsx)(he.Item,{children:Object(j.jsx)(Je,{item:e[3]})})]})})]})})},Qe=n("uX36");t.default=function(){return Object(a.useEffect)((function(){o.a.init({})}),[]),Object(j.jsxs)(s.a,{title:"Jia Sheng Yeap",keywords:"Creative Lead, UI Designer and Developer",description:"Creative Lead, UI Designer and Developer",children:[Object(j.jsx)(_,{}),Object(j.jsx)(M,{}),Object(j.jsx)(Ve,{}),Object(j.jsx)(Qe.a,{})]})}},Tjhe:function(e,t){e.exports="/_next/static/images/ttracing-logo-c4ebe1d458f066f06a7d705b0a7eeb4a.png"},a7oz:function(e,t){e.exports="/_next/static/images/SnailerCar-3a39b461685032225cbce67bfeb68ae8.png"},hQAX:function(e,t){e.exports="/_next/static/images/UrcheckinRoadSign-a00c5e82a7ec4ec7661e0eee42138883.png"},mP5I:function(e,t){e.exports="/_next/static/images/PhoneGIF-7c88226cb30a9a0f6b965d7c1b6e016a.gif"},mnh4:function(e,t){e.exports="/_next/static/images/iphonexmock-6575e5445e9da0c39f5464882d1f9932.png"},sKvG:function(e,t,n){e.exports={"my-work-header":"WorkSection_my-work-header__2YxEO","work-container":"WorkSection_work-container__1Usfb","work-wrap":"WorkSection_work-wrap__1CuTf","carousel-container":"WorkSection_carousel-container__3RZt3","carousel-control-prev-icon":"WorkSection_carousel-control-prev-icon__3vVwX","carousel-control-next-icon":"WorkSection_carousel-control-next-icon__2ZzRK",work:"WorkSection_work__17dbT","work-card-container":"WorkSection_work-card-container__3Lxu5","work-card-body":"WorkSection_work-card-body__6WHNc","work-title-row":"WorkSection_work-title-row__3fFfn","work-gif-logo":"WorkSection_work-gif-logo__3AmC_","work-card-title":"WorkSection_work-card-title__3qY6q","work-card-subtitle":"WorkSection_work-card-subtitle__2tnRO","work-card-image-1":"WorkSection_work-card-image-1__332kk","work-card-image-wrapper":"WorkSection_work-card-image-wrapper__37EDj","work-card-image-container":"WorkSection_work-card-image-container__2iVJD","work-button-text":"WorkSection_work-button-text__8HHTM","work-button":"WorkSection_work-button__EOnj6","work-card-phone":"WorkSection_work-card-phone__RXGQr","work-card-phone-image":"WorkSection_work-card-phone-image__3Sgg_"}},u8rN:function(e,t){e.exports="/_next/static/images/UrcheckinWalao-2c286442bdab3382ef07eb2ce2967f12.png"},umnk:function(e,t){e.exports="/_next/static/images/ttracing_ui_home-c381284865e5fcf4e93e1ec389527e71.png"},vJ8P:function(e,t){e.exports="/_next/static/images/urcheckin_ui_home-19509a8ffc4344171a454f3869f2c09a.png"},vcij:function(e,t){e.exports="/_next/static/images/imacmock-b4c1a14eaa3e310efc86da8834986935.png"},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])},xI4t:function(e,t,n){e.exports={"about-container":"About_about-container__3cC-P","about-iphone":"About_about-iphone__1a_4T","about-header":"About_about-header__aNS-g","about-subhead":"About_about-subhead__3OiyU","about-right-content":"About_about-right-content__1sgJU",about:"About_about__3Mph5","about-side-top-right":"About_about-side-top-right__3H6_j","about-side-top-left":"About_about-side-top-left__3c65y","about-side-bottom-right":"About_about-side-bottom-right__33NWi","about-side-bottom-left":"About_about-side-bottom-left__MF3mG","about-wrap":"About_about-wrap__3s7yt","about-right-container":"About_about-right-container__2_htx"}}},[["vlRD",0,2,1,3,4,5]]]);