(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";var r=a("YZX3"),i=a("q1tI"),n=a.n(i),s=(a("9eSz"),a("p3AD"));t.a=function(){var e=r.data.site.siteMetadata;e.author,e.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},n.a.createElement("p",null,n.a.createElement("h1",null,"Haeuncs",n.a.createElement("br",null)),"iOS 개발을 하고 있습니다. ",n.a.createElement("br",null),"가끔 ReactJS 웹 개발도 하고 딥러닝에도 관심이 있습니다. ",n.a.createElement("br",null),"항상 성장하는 개발자가 되고 싶습니다 🌱",n.a.createElement("br",null),n.a.createElement("a",{href:"https://github.com/Haeuncs"},"Github"),n.a.createElement("br",null),n.a.createElement("a",{href:"mailto:haeun.developer@gmail.com"},"haeun.developer@gmail.com")))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(x,(0,o.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},x=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:R?1:0,transition:k?"opacity "+y+"ms":"none"},l),j="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&N,{},l,{},f),P={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:S};if(m){var H=m,q=g(m);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),j&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&N)}),q.base64&&d.default.createElement(V,{ariaHidden:!0,src:q.base64,spreadProps:P,imageVariants:H,generateSources:O}),q.tracedSVG&&d.default.createElement(V,{ariaHidden:!0,src:q.tracedSVG,spreadProps:P,imageVariants:H,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,E(H),d.default.createElement(x,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:H}))}}))}if(h){var G=h,M=g(h),_=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete _.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},j&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},k&&N)}),M.base64&&d.default.createElement(V,{ariaHidden:!0,src:M.base64,spreadProps:P,imageVariants:G,generateSources:O}),M.tracedSVG&&d.default.createElement(V,{ariaHidden:!0,src:M.tracedSVG,spreadProps:P,imageVariants:G,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,E(G),d.default.createElement(x,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:G}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});k.propTypes={resolutions:C,sizes:j,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([j,c.default.arrayOf(j)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=k;t.default=N},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},YZX3:function(e){e.exports=JSON.parse('{"data":{"avatar":null,"site":{"siteMetadata":{"author":"Haeuncs","social":{"twitter":""}}}}}')},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a("91GP");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("6Gk8"),l=a("Bl7J"),o=a("vrFN"),d=a("p3AD");var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,c=a.next;return i.a.createElement(l.a,{location:this.props.location,title:t},i.a.createElement(o.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date)),i.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement("footer",null,i.a.createElement(s.a,null))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,c&&i.a.createElement(n.Link,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →")))))},r}(i.a.Component);t.default=c;var u="2868899261"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-040ed11b15853363a00e.js.map