(function(){var e=this,r=e._,i={},o=Array.prototype,T=Object.prototype,t=Function.prototype,u=o.push,v=o.slice,n=o.concat,b=T.toString,C=T.hasOwnProperty,z=o.forEach,l=o.map,s=o.reduce,a=o.reduceRight,c=o.filter,h=o.every,d=o.some,p=o.indexOf,f=o.lastIndexOf,m=Array.isArray,g=Object.keys,y=t.bind,P=function(e){return e instanceof P?e:this instanceof P?(this._wrapped=e,void 0):new P(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=P),exports._=P):e._=P,P.VERSION="1.4.4";var _=P.each=P.forEach=function(e,r,o){if(null!=e)if(z&&e.forEach===z)e.forEach(r,o);else if(e.length===+e.length){for(var T=0,t=e.length;t>T;T++)if(r.call(o,e[T],T,e)===i)return}else for(var u in e)if(P.has(e,u)&&r.call(o,e[u],u,e)===i)return};P.map=P.collect=function(e,r,i){var o=[];return null==e?o:l&&e.map===l?e.map(r,i):(_(e,function(e,T,t){o[o.length]=r.call(i,e,T,t)}),o)};var x="Reduce of empty array with no initial value";P.reduce=P.foldl=P.inject=function(e,r,i,o){var T=arguments.length>2;if(null==e&&(e=[]),s&&e.reduce===s)return o&&(r=P.bind(r,o)),T?e.reduce(r,i):e.reduce(r);if(_(e,function(e,t,u){T?i=r.call(o,i,e,t,u):(i=e,T=!0)}),!T)throw new TypeError(x);return i},P.reduceRight=P.foldr=function(e,r,i,o){var T=arguments.length>2;if(null==e&&(e=[]),a&&e.reduceRight===a)return o&&(r=P.bind(r,o)),T?e.reduceRight(r,i):e.reduceRight(r);var t=e.length;if(t!==+t){var u=P.keys(e);t=u.length}if(_(e,function(v,n,b){n=u?u[--t]:--t,T?i=r.call(o,i,e[n],n,b):(i=e[n],T=!0)}),!T)throw new TypeError(x);return i},P.find=P.detect=function(e,r,i){var o;return w(e,function(e,T,t){return r.call(i,e,T,t)?(o=e,!0):void 0}),o},P.filter=P.select=function(e,r,i){var o=[];return null==e?o:c&&e.filter===c?e.filter(r,i):(_(e,function(e,T,t){r.call(i,e,T,t)&&(o[o.length]=e)}),o)},P.reject=function(e,r,i){return P.filter(e,function(e,o,T){return!r.call(i,e,o,T)},i)},P.every=P.all=function(e,r,o){r||(r=P.identity);var T=!0;return null==e?T:h&&e.every===h?e.every(r,o):(_(e,function(e,t,u){return(T=T&&r.call(o,e,t,u))?void 0:i}),!!T)};var w=P.some=P.any=function(e,r,o){r||(r=P.identity);var T=!1;return null==e?T:d&&e.some===d?e.some(r,o):(_(e,function(e,t,u){return T||(T=r.call(o,e,t,u))?i:void 0}),!!T)};P.contains=P.include=function(e,r){return null==e?!1:p&&e.indexOf===p?-1!=e.indexOf(r):w(e,function(e){return e===r})},P.invoke=function(e,r){var i=v.call(arguments,2),o=P.isFunction(r);return P.map(e,function(e){return(o?r:e[r]).apply(e,i)})},P.pluck=function(e,r){return P.map(e,function(e){return e[r]})},P.where=function(e,r,i){return P.isEmpty(r)?i?null:[]:P[i?"find":"filter"](e,function(e){for(var i in r)if(r[i]!==e[i])return!1;return!0})},P.findWhere=function(e,r){return P.where(e,r,!0)},P.max=function(e,r,i){if(!r&&P.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.max.apply(Math,e);if(!r&&P.isEmpty(e))return-1/0;var o={computed:-1/0,value:-1/0};return _(e,function(e,T,t){var u=r?r.call(i,e,T,t):e;u>=o.computed&&(o={value:e,computed:u})}),o.value},P.min=function(e,r,i){if(!r&&P.isArray(e)&&e[0]===+e[0]&&65535>e.length)return Math.min.apply(Math,e);if(!r&&P.isEmpty(e))return 1/0;var o={computed:1/0,value:1/0};return _(e,function(e,T,t){var u=r?r.call(i,e,T,t):e;o.computed>u&&(o={value:e,computed:u})}),o.value},P.shuffle=function(e){var r,i=0,o=[];return _(e,function(e){r=P.random(i++),o[i-1]=o[r],o[r]=e}),o};var k=function(e){return P.isFunction(e)?e:function(r){return r[e]}};P.sortBy=function(e,r,i){var o=k(r);return P.pluck(P.map(e,function(e,r,T){return{value:e,index:r,criteria:o.call(i,e,r,T)}}).sort(function(e,r){var i=e.criteria,o=r.criteria;if(i!==o){if(i>o||void 0===i)return 1;if(o>i||void 0===o)return-1}return e.index<r.index?-1:1}),"value")};var S=function(e,r,i,o){var T={},t=k(r||P.identity);return _(e,function(r,u){var v=t.call(i,r,u,e);o(T,v,r)}),T};P.groupBy=function(e,r,i){return S(e,r,i,function(e,r,i){(P.has(e,r)?e[r]:e[r]=[]).push(i)})},P.countBy=function(e,r,i){return S(e,r,i,function(e,r){P.has(e,r)||(e[r]=0),e[r]++})},P.sortedIndex=function(e,r,i,o){i=null==i?P.identity:k(i);for(var T=i.call(o,r),t=0,u=e.length;u>t;){var v=t+u>>>1;T>i.call(o,e[v])?t=v+1:u=v}return t},P.toArray=function(e){return e?P.isArray(e)?v.call(e):e.length===+e.length?P.map(e,P.identity):P.values(e):[]},P.size=function(e){return null==e?0:e.length===+e.length?e.length:P.keys(e).length},P.first=P.head=P.take=function(e,r,i){return null==e?void 0:null==r||i?e[0]:v.call(e,0,r)},P.initial=function(e,r,i){return v.call(e,0,e.length-(null==r||i?1:r))},P.last=function(e,r,i){return null==e?void 0:null==r||i?e[e.length-1]:v.call(e,Math.max(e.length-r,0))},P.rest=P.tail=P.drop=function(e,r,i){return v.call(e,null==r||i?1:r)},P.compact=function(e){return P.filter(e,P.identity)};var D=function(e,r,i){return _(e,function(e){P.isArray(e)?r?u.apply(i,e):D(e,r,i):i.push(e)}),i};P.flatten=function(e,r){return D(e,r,[])},P.without=function(e){return P.difference(e,v.call(arguments,1))},P.uniq=P.unique=function(e,r,i,o){P.isFunction(r)&&(o=i,i=r,r=!1);var T=i?P.map(e,i,o):e,t=[],u=[];return _(T,function(i,o){(r?o&&u[u.length-1]===i:P.contains(u,i))||(u.push(i),t.push(e[o]))}),t},P.union=function(){return P.uniq(n.apply(o,arguments))},P.intersection=function(e){var r=v.call(arguments,1);return P.filter(P.uniq(e),function(e){return P.every(r,function(r){return P.indexOf(r,e)>=0})})},P.difference=function(e){var r=n.apply(o,v.call(arguments,1));return P.filter(e,function(e){return!P.contains(r,e)})},P.zip=function(){for(var e=v.call(arguments),r=P.max(P.pluck(e,"length")),i=Array(r),o=0;r>o;o++)i[o]=P.pluck(e,""+o);return i},P.object=function(e,r){if(null==e)return{};for(var i={},o=0,T=e.length;T>o;o++)r?i[e[o]]=r[o]:i[e[o][0]]=e[o][1];return i},P.indexOf=function(e,r,i){if(null==e)return-1;var o=0,T=e.length;if(i){if("number"!=typeof i)return o=P.sortedIndex(e,r),e[o]===r?o:-1;o=0>i?Math.max(0,T+i):i}if(p&&e.indexOf===p)return e.indexOf(r,i);for(;T>o;o++)if(e[o]===r)return o;return-1},P.lastIndexOf=function(e,r,i){if(null==e)return-1;var o=null!=i;if(f&&e.lastIndexOf===f)return o?e.lastIndexOf(r,i):e.lastIndexOf(r);for(var T=o?i:e.length;T--;)if(e[T]===r)return T;return-1},P.range=function(e,r,i){1>=arguments.length&&(r=e||0,e=0),i=arguments[2]||1;for(var o=Math.max(Math.ceil((r-e)/i),0),T=0,t=Array(o);o>T;)t[T++]=e,e+=i;return t},P.bind=function(e,r){if(e.bind===y&&y)return y.apply(e,v.call(arguments,1));var i=v.call(arguments,2);return function(){return e.apply(r,i.concat(v.call(arguments)))}},P.partial=function(e){var r=v.call(arguments,1);return function(){return e.apply(this,r.concat(v.call(arguments)))}},P.bindAll=function(e){var r=v.call(arguments,1);return 0===r.length&&(r=P.functions(e)),_(r,function(r){e[r]=P.bind(e[r],e)}),e},P.memoize=function(e,r){var i={};return r||(r=P.identity),function(){var o=r.apply(this,arguments);return P.has(i,o)?i[o]:i[o]=e.apply(this,arguments)}},P.delay=function(e,r){var i=v.call(arguments,2);return setTimeout(function(){return e.apply(null,i)},r)},P.defer=function(e){return P.delay.apply(P,[e,1].concat(v.call(arguments,1)))},P.throttle=function(e,r){var i,o,T,t,u=0,v=function(){u=new Date,T=null,t=e.apply(i,o)};return function(){var n=new Date,b=r-(n-u);return i=this,o=arguments,0>=b?(clearTimeout(T),T=null,u=n,t=e.apply(i,o)):T||(T=setTimeout(v,b)),t}},P.debounce=function(e,r,i){var o,T;return function(){var t=this,u=arguments,v=function(){o=null,i||(T=e.apply(t,u))},n=i&&!o;return clearTimeout(o),o=setTimeout(v,r),n&&(T=e.apply(t,u)),T}},P.once=function(e){var r,i=!1;return function(){return i?r:(i=!0,r=e.apply(this,arguments),e=null,r)}},P.wrap=function(e,r){return function(){var i=[e];return u.apply(i,arguments),r.apply(this,i)}},P.compose=function(){var e=arguments;return function(){for(var r=arguments,i=e.length-1;i>=0;i--)r=[e[i].apply(this,r)];return r[0]}},P.after=function(e,r){return 0>=e?r():function(){return 1>--e?r.apply(this,arguments):void 0}},P.keys=g||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var r=[];for(var i in e)P.has(e,i)&&(r[r.length]=i);return r},P.values=function(e){var r=[];for(var i in e)P.has(e,i)&&r.push(e[i]);return r},P.pairs=function(e){var r=[];for(var i in e)P.has(e,i)&&r.push([i,e[i]]);return r},P.invert=function(e){var r={};for(var i in e)P.has(e,i)&&(r[e[i]]=i);return r},P.functions=P.methods=function(e){var r=[];for(var i in e)P.isFunction(e[i])&&r.push(i);return r.sort()},P.extend=function(e){return _(v.call(arguments,1),function(r){if(r)for(var i in r)e[i]=r[i]}),e},P.pick=function(e){var r={},i=n.apply(o,v.call(arguments,1));return _(i,function(i){i in e&&(r[i]=e[i])}),r},P.omit=function(e){var r={},i=n.apply(o,v.call(arguments,1));for(var T in e)P.contains(i,T)||(r[T]=e[T]);return r},P.defaults=function(e){return _(v.call(arguments,1),function(r){if(r)for(var i in r)null==e[i]&&(e[i]=r[i])}),e},P.clone=function(e){return P.isObject(e)?P.isArray(e)?e.slice():P.extend({},e):e},P.tap=function(e,r){return r(e),e};var E=function(e,r,i,o){if(e===r)return 0!==e||1/e==1/r;if(null==e||null==r)return e===r;e instanceof P&&(e=e._wrapped),r instanceof P&&(r=r._wrapped);var T=b.call(e);if(T!=b.call(r))return!1;switch(T){case"[object String]":return e==r+"";case"[object Number]":return e!=+e?r!=+r:0==e?1/e==1/r:e==+r;case"[object Date]":case"[object Boolean]":return+e==+r;case"[object RegExp]":return e.source==r.source&&e.global==r.global&&e.multiline==r.multiline&&e.ignoreCase==r.ignoreCase}if("object"!=typeof e||"object"!=typeof r)return!1;for(var t=i.length;t--;)if(i[t]==e)return o[t]==r;i.push(e),o.push(r);var u=0,v=!0;if("[object Array]"==T){if(u=e.length,v=u==r.length)for(;u--&&(v=E(e[u],r[u],i,o)););}else{var n=e.constructor,C=r.constructor;if(n!==C&&!(P.isFunction(n)&&n instanceof n&&P.isFunction(C)&&C instanceof C))return!1;for(var z in e)if(P.has(e,z)&&(u++,!(v=P.has(r,z)&&E(e[z],r[z],i,o))))break;if(v){for(z in r)if(P.has(r,z)&&!u--)break;v=!u}}return i.pop(),o.pop(),v};P.isEqual=function(e,r){return E(e,r,[],[])},P.isEmpty=function(e){if(null==e)return!0;if(P.isArray(e)||P.isString(e))return 0===e.length;for(var r in e)if(P.has(e,r))return!1;return!0},P.isElement=function(e){return!(!e||1!==e.nodeType)},P.isArray=m||function(e){return"[object Array]"==b.call(e)},P.isObject=function(e){return e===Object(e)},_(["Arguments","Function","String","Number","Date","RegExp"],function(e){P["is"+e]=function(r){return b.call(r)=="[object "+e+"]"}}),P.isArguments(arguments)||(P.isArguments=function(e){return!(!e||!P.has(e,"callee"))}),true&&(P.isFunction=function(e){return"function"==typeof e}),P.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},P.isNaN=function(e){return P.isNumber(e)&&e!=+e},P.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==b.call(e)},P.isNull=function(e){return null===e},P.isUndefined=function(e){return void 0===e},P.has=function(e,r){return C.call(e,r)},P.noConflict=function(){return e._=r,this},P.identity=function(e){return e},P.times=function(e,r,i){for(var o=Array(e),T=0;e>T;T++)o[T]=r.call(i,T);return o},P.random=function(e,r){return null==r&&(r=e,e=0),e+Math.floor(Math.random()*(r-e+1))};var A={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};A.unescape=P.invert(A.escape);var N={escape:RegExp("["+P.keys(A.escape).join("")+"]","g"),unescape:RegExp("("+P.keys(A.unescape).join("|")+")","g")};P.each(["escape","unescape"],function(e){P[e]=function(r){return null==r?"":(""+r).replace(N[e],function(r){return A[e][r]})}}),P.result=function(e,r){if(null==e)return null;var i=e[r];return P.isFunction(i)?i.call(e):i},P.mixin=function(e){_(P.functions(e),function(r){var i=P[r]=e[r];P.prototype[r]=function(){var e=[this._wrapped];return u.apply(e,arguments),F.call(this,i.apply(P,e))}})};var M=0;P.uniqueId=function(e){var r=++M+"";return e?e+r:r},P.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/(.)^/,j={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\t|\u2028|\u2029/g;P.template=function(e,r,i){var o;i=P.defaults({},i,P.templateSettings);var T=RegExp([(i.escape||I).source,(i.interpolate||I).source,(i.evaluate||I).source].join("|")+"|$","g"),t=0,u="__p+='";e.replace(T,function(r,i,o,T,v){return u+=e.slice(t,v).replace(O,function(e){return"\\"+j[e]}),i&&(u+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),o&&(u+="'+\n((__t=("+o+"))==null?'':__t)+\n'"),T&&(u+="';\n"+T+"\n__p+='"),t=v+r.length,r}),u+="';\n",i.variable||(u="with(obj||{}){\n"+u+"}\n"),u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{o=Function(i.variable||"obj","_",u)}catch(v){throw v.source=u,v}if(r)return o(r,P);var n=function(e){return o.call(this,e,P)};return n.source="function("+(i.variable||"obj")+"){\n"+u+"}",n},P.chain=function(e){return P(e).chain()};var F=function(e){return this._chain?P(e).chain():e};P.mixin(P),_(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var r=o[e];P.prototype[e]=function(){var i=this._wrapped;return r.apply(i,arguments),"shift"!=e&&"splice"!=e||0!==i.length||delete i[0],F.call(this,i)}}),_(["concat","join","slice"],function(e){var r=o[e];P.prototype[e]=function(){return F.call(this,r.apply(this._wrapped,arguments))}}),P.extend(P.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return P})}).call(this);