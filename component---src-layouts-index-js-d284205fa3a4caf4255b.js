webpackJsonp([0x67ef26645b2a,60335399758886],{104:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Victoria Ye"}}},layoutContext:{}}},196:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(4),a=r(i),u=n(201),c=r(u),l=n(104),f=r(l);t.default=function(e){return a.default.createElement(c.default,o({},e,f.default))},e.exports=t.default},284:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var s=u(e),T=u(t)}catch(e){return!1}if(s.length!=T.length)return!1;for(s.sort(),T.sort(),i=s.length-1;i>=0;i--)if(s[i]!=T[i])return!1;for(i=s.length-1;i>=0;i--)if(f=s[i],!l(e[f],t[f],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(286),c=n(285),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},285:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},286:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},293:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},398:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(4),s=r(f),T=n(7),A=r(T),p=n(417),d=r(p),E=n(284),y=r(E),S=n(399),h=n(180),m=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case h.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case h.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case h.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case h.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,S.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case h.TAG_NAMES.LINK:case h.TAG_NAMES.META:case h.TAG_NAMES.NOSCRIPT:case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),s.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:A.default.object,bodyAttributes:A.default.object,children:A.default.oneOfType([A.default.arrayOf(A.default.node),A.default.node]),defaultTitle:A.default.string,defer:A.default.bool,encodeSpecialCharacters:A.default.bool,htmlAttributes:A.default.object,link:A.default.arrayOf(A.default.object),meta:A.default.arrayOf(A.default.object),noscript:A.default.arrayOf(A.default.object),onChangeClientState:A.default.func,script:A.default.arrayOf(A.default.object),style:A.default.arrayOf(A.default.object),title:A.default.string,titleAttributes:A.default.object,titleTemplate:A.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,S.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},g=(0,d.default)(S.reducePropsToState,S.handleClientStateChange,S.mapStateOnServer)(b),M=m(g);M.renderStatic=M.rewind,t.Helmet=M,t.default=M},180:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},399:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(4),u=r(a),c=n(5),l=r(c),f=n(180),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=y(e,f.TAG_NAMES.TITLE),n=y(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},A=function(e){return y(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},d=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&M("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();t.indexOf(c)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===f.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},S=function(e){return{baseTag:d([f.TAG_PROPERTIES.HREF],e),bodyAttributes:p(f.ATTRIBUTE_NAMES.BODY,e),defer:y(e,f.HELMET_PROPS.DEFER),encode:y(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(f.ATTRIBUTE_NAMES.HTML,e),linkTags:E(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:E(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:A(e),scriptTags:E(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:p(f.ATTRIBUTE_NAMES.TITLE,e)}},h=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){h(t)},0)}}(),m=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,M=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},R=null,I=function(e){R&&g(R),e.defer?R=b(function(){v(e,function(){R=null})}):(v(e),R=null)},v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,T=e.title,A=e.titleAttributes;C(f.TAG_NAMES.BODY,r),C(f.TAG_NAMES.HTML,o),P(T,A);var p={baseTag:_(f.TAG_NAMES.BASE,n),linkTags:_(f.TAG_NAMES.LINK,i),metaTags:_(f.TAG_NAMES.META,a),noscriptTags:_(f.TAG_NAMES.NOSCRIPT,u),scriptTags:_(f.TAG_NAMES.SCRIPT,l),styleTags:_(f.TAG_NAMES.STYLE,s)},d={},E={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(E[e]=p[e].oldTags)}),t&&t(),c(e,d,E)},O=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=O(e)),C(f.TAG_NAMES.TITLE,t)},C=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var s=i.indexOf(c);s!==-1&&i.splice(s,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);o.length===i.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,a.join(","))}},_=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},w=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},G=function(e,t,n,r){var o=w(n),i=O(t);return o?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,o=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),i=L(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,i,t)]},B=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},j=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return G(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return B(e,t)},toString:function(){return N(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,T=void 0===s?"":s,A=e.titleAttributes;return{base:j(f.TAG_NAMES.BASE,t,r),bodyAttributes:j(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:j(f.ATTRIBUTE_NAMES.HTML,o,r),link:j(f.TAG_NAMES.LINK,i,r),meta:j(f.TAG_NAMES.META,a,r),noscript:j(f.TAG_NAMES.NOSCRIPT,u,r),script:j(f.TAG_NAMES.SCRIPT,c,r),style:j(f.TAG_NAMES.STYLE,l,r),title:j(f.TAG_NAMES.TITLE,{title:T,titleAttributes:A},r)}};t.convertReactPropstoHtmlAttributes=H,t.handleClientStateChange=I,t.mapStateOnServer=D,t.reducePropsToState=S,t.requestAnimationFrame=b,t.warn=M}).call(t,function(){return this}())},417:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function T(){p=e(A.map(function(e){return e.props})),d.canUseDOM?t(p):n&&(p=n(p))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var A=[],p=void 0,d=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return p},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=p;return p=void 0,A=[],e},t.prototype.shouldComponentUpdate=function(e){return!s(e,this.props)},t.prototype.componentWillMount=function(){A.push(this),T()},t.prototype.componentDidUpdate=function(){T()},t.prototype.componentWillUnmount=function(){var e=A.indexOf(this);A.splice(e,1),T()},t.prototype.render=function(){return l.createElement(u,this.props)},t}(c.Component);return d.displayName="SideEffect("+r(u)+")",d.canUseDOM=f.canUseDOM,d}}var c=n(4),l=r(c),f=r(n(293)),s=r(n(434));e.exports=u},434:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!u(l))return!1;var f=e[l],s=t[l];if(o=n?n.call(r,f,s,l):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},295:function(e,t){},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(4),i=r(o),a=n(66),u=r(a);n(295);var c=n(444),l=r(c),f=n(442),s=(r(f),function(e){e.siteTitle;return i.default.createElement("div",{className:"HeaderContainer"},i.default.createElement("div",{className:"Header"},i.default.createElement(u.default,{to:"/about/",className:"linkunder"},"About"),i.default.createElement(u.default,{to:"/"},i.default.createElement("img",{src:l.default,width:"50px"})),i.default.createElement(u.default,{to:"/about/",className:"linkunder"},"Resume")))});t.default=s,e.exports=t.default},442:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAACSRJREFUeJzt3U2oXVcZh/HHm+beq6ItqJi0oIIpKAgKSUUHIg4citEmTWkgouOC2k7EkTp0EimtxYLUVkGhNq0zoSKCRcEGClXErzS2aUyV4rem+ayDda9p02Tdc/bXu9Zezw/WLNnn3fvs/z1n77P2ekGSJEmSJEmSJEmSJElayGuiC3iZVeCTwF5gN7ATeH1oRe26AJwCHgd+ABwBzoZW1Lj9wHHgJUeR49jGe6SJbQO+RvwJ4Fhs3AusXPGd1CgMR33jAQzJJG4l/s12GJIirQHPEP9GOwxJkQ4S/wY7DMmWonZub9DraliHgPuZcUiidmx30OtqeLMOSdQPhaeB9aDX1jgeBD4NXIwuZEgRAbkGOBfwuhrf7EIyy49FhZnd163Z7IiKMauQzGInVJzZhKT6HVCxZhGSqotX8aoPSbWFqxpVh6TKolWdakNSXcGqVpUhqapYVa/KkEztGoafVarFRM/+bWYWcB8GJE50MAzJAgxInOhQGJIFGJA40YEwJAswIHGiw2BIFmBA4kQHwZAswIDEiQ6BIVmAAYkTHQBDsgADEif65DckCzAgcaJPfEOyAAMSJ/qkNyQLaCUgO4EvAD8BXiAtZHAa+A3wTeCjTL9oRvQJ32XcM8qRKNjcA/Ja4KvAGbau+yiwZ8Laok/2ruPmMQ5GqeYckB3AkyxX+1ngMxPVF32idx2/B7aPcDyKNNeAvAH4Fd3qv0ha7X5s0Sd6n7FvhONRpLkG5Fv024d/A+8Yucbok7zP+M4Ix6NIcwzIbobZj++OXGf0Sd5nPD3C8SjSHAPyAMPsx3ng+hHrjD7J+4zTIxyPLTV3j3kEK8DHB9rWNuBjA23rSmpeEznkIt2A9LcLuHbA7d004LYud2rEbc+SAelv6K9EY37FOjritmfJgLTlkegCamNA+vtT4dt7uYeAkyNuf3YMSH9/AP4+4PZ+MeC2LncGuGPE7WsAc7zNez/D3ebdOUG9dw9U75Tj/ChHokBzDMj7SNNF+u7HVL8Wr1BfSAxIj1GCb9BvH/4JvG3imvcDJ3rWbUAGNteAvI50G7VL/ReI6x2/ChwkXcAfZ7Fp+gZkRHMNCMCbgJ+xXO2ngQMRxU7AgHQw54BAmhLxJeC/bF3348B7QqqchgHpYO4B2fQW4E7gMeDPpDf4P6RnRu4FPhxX2mSqD8jUz0RDCsjQk+Yi9kNbG/KP1wXSuTMpfyiUMiZP5EytAu8mXU/sAt4O3AC8GbgOWNv4NxdJz6D/C/gb8DzpNusx0monTwF/mbh2ZRiQbq4FPrIxPgi8lxSAIZwEfg78FPgR8OuBtqtK1HqR/lbgduDHpGuooffhauMZ4C7gQ9R3rVX9RXqEmgKynfRr8w9Jb9BUociF5StM/4t7VwakgxoCch3wRdLU8+hQXO1keRj4wAj7PiQD0kHJAXkj8GXgHyPUONZ4DHj/gMdgSAakg1IDcpD0g170Cd91fI90nVQSA9JBaQHZBtw3Qk0R4xRpja5SGJAOSgtI32nqpY2/Au/qeUyGYkA6KCkgB0eopYTxFGUs9mxAOiglIOuUe5dqiHF7x+MypOoD0vJcrFuY5vnvKJ+NLmAOWg5I1BN8U9nFvJ81mUTLARlzic9SlHRHq0otB2TOX682jbmMaRNaDoi0pZYD0sISnC3s46haDsgT0QVMwNXce2o5II9GFzCy3+HDVr21HJCHGHcl9WiHowtQN6X8kg6p9XL0L95jjCcp43Hq6n9Jj1BSQCCtURV9Qg85XgBu7HlMhmJAOigtICvMJyTPkVaaL4UB6aC0gGw6QDrBok/yLuMi8G3SMkMlqT4grqz4SmvAPlJb55tIa1uVMG38ci+RHgv+LWmVlQdJ62qVZqg/XhC0sqIB0ZiqD0jLt3mlLRkQKcOASBkGRMowIFKGAZEyDIiUYUCkDAMiZRgQKcOASBkG5JI14BBwhNTJ6Szxs3SnGueAZzf2/RBpWVYFKXG6+62kFUCiT9RSxknS9P++hqzJ50F6jK7m9LDUGOPr9PuWYUA6KCkghmOxkHRlQDooJSBzXbBhjNH161b1AWn1gak14Glcu3ZRJ4F3AmeW/H9d/3hdiQ9MTegAhmMZN5D6xTen1YDMvTfIGJo8Zq0GxL4Zy9sTXUCEVq9BzlLmaiUlOwesLvl/vAaR5qzVgJyKLqBCc17o+6paDYh9M5bXQj+VV2k1II9EF1ChJo9Zqxfpa8Ax0v19be0Eqa302SX/nxfplToD3BFdREU+z/LhUEelzMUCuHuEWuY27up8dGcwFytCSQFZwZBsFQ6nu0+spIBs2k/6nh19QpYyngVu7nVEk+oD0upF+pWskoKylzSt4nqW/+W4VudIv3M8Qbpb9X2GueYY4o/XJvuD9GB/kDJVH5BW72JJCzEgUoYBkTIMiJRhQKQMAyJlGBApw4BIGQZEyjAgUoYBkTIMyCXrwKdIk/VOkOaLRc+qnWrYH6QgJU53v4200kn0iVrKsD9IoJICsgLcN0I9cxn2BwlQUkAMx2Ih6cqAdFBKQG4boY65DvuDTKiEB6bWgePAjoHrmCv7gzTmAIZjGfYHaUyTvS56avKYtRqQJntd9NTkMWv1GuQcAd9nK2d/EEmv1GpA7A+yPPuDNMT+IMuzP0hDHo0uoEL2B5lICRfp66T+IPZKX4z9QRrzIvYHWYb9QSZUylwsSBPxouc5lT7sDzKxkgKygiHZKhxOd59YSQHZdAB4boS6ah32B9nQ6kX6lazx6v4g2wfYbg3sD3IVBkRjqj4grd7FkhZiQKQMAyJlGBApw4BIGQZEyjAgUoYBkTIMiJRhQKQMAyJlGBApw4BIGXNZPG3IWaPS//kJImUYECnDgEgZBkTKMCBShgGRMgyIlGFApAwDImVEBOQ8cDHgdVW3ZVtQDyLqE+T5oNdVvU5GvGhUQOzwpGWFnDNRAWmyW5F6CTlnota0XQeOAzuCXl91+SNwIwErvEd9grwI3Bn02qrP5whqf7At4kU3/JL0CbInsAaV7zD9ulxVbQW4h/iGMY4yx2FsbQHALdjhyXFpPAN8ggKUlM41YB/pwOwmdXhaDa1IUzlD6nB1FDgCPMzwTZYkSZIkSZIkSZIkSZIkSZLK8z/s8+ONglbqzQAAAABJRU5ErkJggg=="},444:function(e,t,n){e.exports=n.p+"static/vy.6e91708e.png"},296:function(e,t){},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(4),i=r(o),a=n(7),u=r(a),c=n(398),l=r(c),f=n(200),s=r(f);n(296);var T=function(e){var t=e.children,n=e.data;return i.default.createElement("div",null,i.default.createElement(l.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),i.default.createElement(s.default,null),t())};T.propTypes={children:u.default.func},t.default=T;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-d284205fa3a4caf4255b.js.map