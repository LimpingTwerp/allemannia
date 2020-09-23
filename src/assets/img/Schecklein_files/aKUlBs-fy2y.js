if (self.CavalryLogger) { CavalryLogger.start_js(["Ek0Pj"]); }

__d("CometTextWithEntitiesRelay_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometTextWithEntitiesRelay_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{args:null,kind:"FragmentSpread",name:"ProfileCometProfileLink_actor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometPageVerificationBadge_page"}],type:"Page"},{kind:"InlineFragment",selections:[a],type:"User"},{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group"}],type:"Entity"}}();e.exports=a}),null);
__d("CometTextWithEntitiesRelay_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTextWithEntitiesRelay_textWithEntities",selections:[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[a,b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[c,{kind:"InlineFragment",selections:[d,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User"}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[c,d,{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{args:null,kind:"FragmentSpread",name:"ProfileCometProfileLink_actor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometPageVerificationBadge_page"}],type:"Page"},{kind:"InlineFragment",selections:[e],type:"User"},{kind:"InlineFragment",selections:[e,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group"}],storageKey:null},a,b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],type:"TextWithEntities"}}();e.exports=a}),null);
__d("BaseText.react",["React","UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=h.Fragment;function j(a){return[].concat(a).sort(function(a,b){return a.offset===b.offset&&(a.length===0||b.length===0)?a.length-b.length:a.offset-b.offset})}function k(a,b){return b!=null?b.reduce(function(a,b){return b(a)},a):a}function l(a,b,c,d,e,f){var g=a.__typename;e=Object.prototype.hasOwnProperty.call(e,g)?e[g].concat(f):f;return h.jsx(i,{children:e&&e.length>0?e.reduce(function(b,c){return c(b,a)},c):b},d)}function m(a,c,d,e,f,j,m,n,o){var p=m.length;j.push(h.jsx(i,{children:k((g||(g=b("UnicodeUtils"))).substr(a,c,d-c),n)},"c"+c+"_"+p));m.pop();m[m.length-1].subElements.push(l(e,j,j,c+"_"+p,f,o))}function a(a){var c=a.ranges;c=c===void 0?[]:c;var d=a.renderers;d=d===void 0?{}:d;var e=a.transforms;e=e===void 0?[]:e;a=a.text;var f=0,n=Object.prototype.hasOwnProperty.call(d,"*")?d["*"]:[];c=j(c);var o=[{entity:{__typename:""},length:a.length,offset:0,subElements:[]}];for(var p=0;p<c.length;++p){if(f>=a.length)break;var q=c[p],r=q.entity,s=q.length;q=q.offset;var t=o[o.length-1],u=t.entity,v=t.length,w=t.offset;t=t.subElements;var x=w+v;while(x<=q&&o.length>1){m(a,f,x,u,d,t,o,e,n);f=x;var y=o[o.length-1];u=y.entity;v=y.length;w=y.offset;t=y.subElements;x=w+v}f<q&&(o[o.length-1].subElements.push(h.jsx(i,{children:k((g||(g=b("UnicodeUtils"))).substr(a,f,q-f),e)},"c"+f+"_"+o.length)),f=q);if(w<=q&&x>=q+s)o.push({entity:r,length:s,offset:q,subElements:[]});else{y=(g||(g=b("UnicodeUtils"))).substr(a,q,s);x=k(y,e);o[o.length-1].subElements.push(l(r,y,x,f+"_"+o.length,d,n));f=q+s}}while(o.length>1){r=o[o.length-1];var u=r.entity,v=r.length,w=r.offset;t=r.subElements;y=w+v;m(a,f,y,u,d,t,o,e,n);f=y}if(f<a.length){x=o[o.length-1].subElements;x.push(h.jsx(i,{children:k((g||(g=b("UnicodeUtils"))).substr(a,f),e)},"c"+f))}return o[o.length-1].subElements}e.exports=a}),null);
__d("baseTextTransformAllStrings",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function h(a){return(a==null?void 0:a.type)===g.Fragment&&typeof (a==null?void 0:(a=a.props)==null?void 0:a.children)==="string"}function i(a,b,c,d){c===void 0&&(c=3);d===void 0&&(d=0);var e=0;if(typeof a==="string"){var f=a;return b(f,d+"-"+e++)}else if(Array.isArray(a))return a.map(function(a,f){if(h(a))return g.cloneElement(a,{children:b(a.props.children,d+"-"+e++)});return d<c?i(a,b,c,d+1):a});else if(a!=null&&typeof a==="object"){f=g.Children.only(a);if(h(f))return g.cloneElement(f,{children:b(f.props.children,d+"-"+e++)})}return a}e.exports=i}),null);
__d("CometBackgroundImage.react",["BaseImage.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("BaseImage.react"),babelHelpers["extends"]({alt:a.alt,className:"k4urcfbm bixrwtb6 datstx6m",draggable:a.draggable,onError:a.onError,onLoad:a.onLoad},a.loading?{loading:a.loading}:{},{src:a.src}))}e.exports=a}),null);
__d("CometImageCover.react",["BaseImage.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");d=b("React");var h=d.useCallback,i=d.useRef,j=d.useState;f=function(){var a=document.documentElement;return a==null?!0:Boolean("objectFit"in a.style)}();function a(a){var c=a.loading,d=a.onLoad,e=a.src;a=a.style;var f=j(null),k=f[0],l=f[1],m=i();f=h(function(){var a=m.current;if(a==null||!(a instanceof HTMLImageElement)||typeof a.src!=="string")return;l(a.src);d!=null&&d()},[d]);return k!=null?g.jsx("div",{className:"k4urcfbm bixrwtb6 datstx6m q9uorilb",style:babelHelpers["extends"]({backgroundImage:"url("+k+")",backgroundPosition:"center center",backgroundSize:"cover"},a)}):g.jsx(b("BaseImage.react"),babelHelpers["extends"]({className:"ttbfdpzt do00u71z"},c?{loading:c}:{},{onLoad:f,ref:m,src:e,style:a}))}function c(a){return g.jsx(b("BaseImage.react"),babelHelpers["extends"]({className:"k4urcfbm bixrwtb6 datstx6m q9uorilb"},a))}e.exports=f?c:a}),null);
__d("getTextDirectionAttribute",["requireCond","cr:1080422"],(function(a,b,c,d,e,f){"use strict";function a(a){var c="auto";b("cr:1080422")!=null&&(c=b("cr:1080422").isDirectionRTL(a)?"rtl":"ltr");return c}e.exports=a}),null);
__d("CometTextWithEntities.react",["fbt","BaseText.react","CometLink.react","CometTrackingNodeProvider.react","React","UnicodeUtils","getTextDirectionAttribute","killswitch","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=b("React");c=b("React");var k=c.useCallback,l=c.useState,m=.6,n={auto:{textAlign:"start"},ltr:{textAlign:"left"},rtl:{textAlign:"right"}};function o(a){var b=[];for(var c=0;c<a.length;c++){var d=a[c];d!=null&&d.offset!=null&&d.length!=null&&d.entity!=null&&d.entity.__typename!=null&&b.push({entity:d.entity,length:d.length,offset:d.offset})}return b}function p(a,b,c){return a.map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-b})}).filter(function(a){return a.offset>=0&&a.offset<c})}function q(a){var c=a.ranges;a=a.text;var d=0;return a.split("\n").map(function(a){var e=p(c,d,(h||(h=b("UnicodeUtils"))).strlen(a));d+=h.strlen(a)+1;return{ranges:e,text:a}}).filter(function(a){return a.text.trim()!==""})}function r(a,c){var d=a.ranges;a=a.text;var e=0;return a.split(/(?=\n\s*\n)/).map(function(a){var f,g;f=(f=a.match(/(^\n\s*\n)?([^]*$)/))!=null?f:[];g=(g=f[1])!=null?g:"";f=(f=f[2])!=null?f:a;g=p(d,e+g.length,(h||(h=b("UnicodeUtils"))).strlen(f));e+=h.strlen(a);return c?q({ranges:g,text:f}):{ranges:g,text:f}})}function s(a,c,d){var e=null,f=a.split("\n");(h||(h=b("UnicodeUtils"))).strlen(a)>c&&(e=c);if(f.length>d){a=f.slice(0,d).join("\n").length;e!==null?e=Math.min(a,e):e=a}return e}function a(a){var c=a.maxLength;c=c===void 0?800:c;var d=a.maxLines;d=d===void 0?8:d;var e=a.ranges;e=e===void 0?[]:e;var f=a.text,q=a.truncationFactor_DEPRECATED;q=q===void 0?m:q;var t=a.truncationStyle;t=t===void 0?"none":t;var u=a.withLineBreaks;u=u===void 0?!1:u;var v=a.withParagraphs;v=v===void 0?!1:v;var w=a.onToggleExpanded,x=a.seeMoreLinkProps,y=a.expanded,z=a.preserveWhiteSpace,A=z===void 0?!1:z;z=a.suffix;var B=babelHelpers.objectWithoutPropertiesLoose(a,["maxLength","maxLines","ranges","text","truncationFactor_DEPRECATED","truncationStyle","withLineBreaks","withParagraphs","onToggleExpanded","seeMoreLinkProps","expanded","preserveWhiteSpace","suffix"]);a=l((a=y)!=null?a:!1);var C=a[0],D=a[1];a=y!=null?y:C;y=k(function(){D(function(a){return!a}),w!=null&&w()},[w]);C=o(e);e=f;var E=null;if(t!=="none"&&!a){c=s(f,c*q,d);if(c!=null){e=(h||(h=b("UnicodeUtils"))).substring(f,0,c);C=p(C,0,h.strlen(e));switch(t){case"ellipsis-only":E=j.jsx(j.Fragment,{children:g._("...")},"seemore");break;case"see-more":case"see-more-and-less":E=j.jsxs(j.Fragment,{children:[g._("...")," ",j.jsx(b("CometLink.react"),babelHelpers["extends"]({onClick:y,testid:void 0},x,{children:g._("Mehr anzeigen")}))]},"seemore")}}}else t==="see-more-and-less"&&a&&(E=j.jsxs(j.Fragment,{children:[" ",j.jsx(b("CometLink.react"),{onClick:y,role:"button",children:g._("Weniger anzeigen")})]},"seemore"));E=j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:44,children:E});if(!v)return j.jsxs(j.Fragment,{children:[j.jsx(b("BaseText.react"),babelHelpers["extends"]({ranges:C,text:e},B)),E]});var F=r({ranges:C,text:e},u);b("killswitch")("COMET_MESSAGE_EMPTY_PARAGRAPH_FILTERING")||(F=F.filter(function(a){return!Array.isArray(a)||a.length>0}));var G=z!=null?j.jsxs(j.Fragment,{children:[" ",z]}):null;return j.jsx(j.Fragment,{children:F.map(function(a,c){return j.jsx("div",{className:(i||(i=b("stylex"))).dedupe({"margin-top-1":"kvgmc6g5","margin-end-1":"cxmmr5t8","margin-bottom-1":"oygrvhab","margin-start-1":"hcukyx3x","word-wrap-1":"c1et5uql"},c!==0?{"margin-top-1":"o9v6fnle"}:null,A?{"white-space-1":"ii04i59q"}:null),children:Array.isArray(a)?a.map(function(d,e){var f=d.ranges;d=d.text;var g=b("getTextDirectionAttribute")(d);return j.jsxs("div",{dir:g,style:n[g],children:[j.jsx(b("BaseText.react"),babelHelpers["extends"]({ranges:f,text:d},B)),c===F.length-1&&e===a.length-1?j.jsxs(j.Fragment,{children:[E,G]}):null]},e)}):j.jsxs(j.Fragment,{children:[j.jsx(b("BaseText.react"),babelHelpers["extends"]({ranges:a.ranges,text:a.text},B)),c===F.length-1?j.jsxs(j.Fragment,{children:[E,G]}):null]})},c)})})}e.exports=a}),null);
__d("cometNormalizeTextEntityRanges",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a==null?[]:a.map(function(a){var c=a.length,d=a.offset;a=babelHelpers.objectWithoutPropertiesLoose(a,["length","offset"]);return{entity:babelHelpers["extends"]({},a,{__typename:b}),length:c,offset:d}})}e.exports=a}),null);
__d("CometTextWithEntitiesRelay.react",["CometRelay","CometTextWithEntities.react","React","cometNormalizeTextEntityRanges","CometTextWithEntitiesRelay_entity.graphql","CometTextWithEntitiesRelay_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");g!==void 0?g:g=b("CometTextWithEntitiesRelay_entity.graphql");function a(a){var c=a.textWithEntities;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities"]);c=i(h!==void 0?h:h=b("CometTextWithEntitiesRelay_textWithEntities.graphql"),c);var d=c.aggregated_ranges,e=c.image_ranges,f=c.inline_style_ranges,g=c.ranges;c=c.text;if(c==null)return null;g=[].concat(g,b("cometNormalizeTextEntityRanges")(d,"Aggregate"),b("cometNormalizeTextEntityRanges")(f,"Inline"),b("cometNormalizeTextEntityRanges")(e,"Image"));return j.jsx(b("CometTextWithEntities.react"),babelHelpers["extends"]({},a,{ranges:g,text:c}))}e.exports=a}),null);
__d("useSuspenseTransition",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");e.exports=a.useTransition}),null);
__d("CometInfiniteScrollTrigger.react",["CometInteractionTracingMetrics","JSTracing","React","mergeRefs","useSuspenseTransition","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useEffect,j=c.useMemo,k=c.useRef;function a(a){var c=a.children,d=a.hasMore,e=a.isLoading,f=a.onLoadMore;a=a.rootMargin;var l=k(!1),m=b("useSuspenseTransition")(),n=m[0],o=k(null),p=h(function(){n(function(){b("JSTracing").clear(function(){f(o)})})},[f,n,o]);i(function(){d&&!e&&l.current&&p()},[p,e,d]);m=h(function(){var a=l.current;l.current=!0;!a&&d&&!e&&p()},[d,e,p]);var q=h(function(){l.current=!1},[]),r=h(function(a){o.current!==a&&(o.current=a,a&&b("CometInteractionTracingMetrics").currentInteractionLogger().forEach(function(b){b.vcTracker&&b.vcTracker.observeLoadingState(a)}))},[]),s=b("useVisibilityObserver")({onHidden:q,onVisible:m,options:{rootMargin:(q=a)!=null?q:0}});m=j(function(){return b("mergeRefs")(s,o,r)},[s,o,r]);return d||e?g.jsx("div",{ref:m,children:c}):null}e.exports=a}),null);
__d("CometEmojiTransform",["CometEmoji.react","EmojiRenderer","React","baseTextTransformAllStrings"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a===void 0?{}:a;a=a.size;var c=a===void 0?16:a;return function(a){var d=0;return b("baseTextTransformAllStrings")(a,function(a,e){return b("EmojiRenderer").render(a,function(a){return g.jsx(b("CometEmoji.react"),{emoji:a,size:c},e+"-"+d++)})})}}e.exports=a}),null);
__d("EmoticonRenderer",["EmoticonsList"],(function(a,b,c,d,e,f){var g=["LIKE","PACMAN","FACE_WITH_COLON_THREE"],h={parse:function(a){var c=[],d=new RegExp(b("EmoticonsList").regexp),e=0,f=a.match(d);while(f!==null){var h=f[1],i=f[2].split(""),j=b("EmoticonsList").emotes[f[2]];j=b("EmoticonsList").emoji[j];c.push({chars:i,key:j,isCustom:g.includes(j),offset:e+f.index+h.length});e+=f.index+f[0].length;f=a.slice(e).match(d)}return c},render:function(a,b,c){var d=h.parse(a),e=[],f=0;d.forEach(function(d){var g=d.offset;g>f&&e.push(a.substr(f,g-f));d.isCustom?e.push(c(d.key,d.chars)):e.push(b(d.key));f=g+d.chars.length});e.push(a.substr(f,a.length-f));return e}};e.exports=h}),null);
__d("CometEmoticonTransform",["CometEmoji.react","EmoticonRenderer","FBEmojiResource","FBEmojiUtils","React","baseTextTransformAllStrings"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a===void 0?{}:a;a=a.size;var c=a===void 0?16:a;return function(a){var d=0;return b("baseTextTransformAllStrings")(a,function(a,e){return b("EmoticonRenderer").render(a,function(a){return g.jsx(b("CometEmoji.react"),{emoji:[b("FBEmojiUtils").codepointsToString(a.split("_").map(function(a){return Number("0x"+a)}))],resource:new(b("FBEmojiResource"))(a),size:c},e+"-"+d++)},function(a,f){return g.jsx(b("CometEmoji.react"),{emoji:f,resource:new(b("FBEmojiResource"))(a),size:c},e+"-"+d++)})})}}e.exports=a}),null);
__d("CometLineBreakTransform",["React","baseTextTransformAllStrings"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a,c){var d=0;return b("baseTextTransformAllStrings")(a,function(a,b){return a.split("\n").reduce(function(a,c,e){return e===0?[].concat(a,[c]):[].concat(a,[g.jsx("br",{},b+"-"+d++),c])},[])})};e.exports=a}),null);
__d("CometRelativeTimestamp.react",["fbt","React","useServerTime"],(function(a,b,c,d,e,f,g){"use strict";c=b("React");function h(a,b){if(b==="minimized")return g._("1 Min.");else if(b==="shortened")return g._("Gerade eben");return g._("Vor einigen Sekunden")}function i(a,b){if(b==="minimized")return g._({"*":"{minutes} Min."},[g._param("minutes",a,[0])]);else if(b==="shortened")return g._({"*":"{number} Min.","_1":"1 Min."},[g._plural(a,"number")]);return g._({"*":"Vor {number} Minuten","_1":"Vor etwa einer Minute"},[g._plural(a,"number")])}function j(a,b){if(b==="minimized")return g._("{hours} Std.",[g._param("hours",a)]);else if(b==="shortened")return g._({"*":"{number} Std.","_1":"1 Std."},[g._plural(a,"number")]);return g._({"*":"Vor {number} Stunden","_1":"Vor etwa einer Stunde"},[g._plural(a,"number")])}function k(a,b){if(b==="minimized")return g._("{days} Tage",[g._param("days",a)]);else if(b==="shortened")return g._({"*":"{number} Tagen","_1":"1 Tag"},[g._plural(a,"number")]);return g._({"*":"Vor {number} Tagen","_1":"Vor einem Tag"},[g._plural(a,"number")])}function l(a,b){if(b==="minimized")return g._("{weeks} Wochen",[g._param("weeks",a)]);else if(b==="shortened")return g._({"*":"{number} Wochen","_1":"1 Woche"},[g._plural(a,"number")]);return g._({"*":"Vor {number} Wochen","_1":"Vor einer Woche"},[g._plural(a,"number")])}function m(a,b){if(b==="minimized")return g._("{years} J.",[g._param("years",a)]);else if(b==="shortened")return g._({"*":"{number} Jahre","_1":"1 Jahr"},[g._plural(a,"number")]);return g._({"*":"vor {number} Jahren","_1":"Vor einem Jahr"},[g._plural(a,"number")])}var n=60,o=60,p=24,q=7,r=365;function s(a,b,c){c===void 0&&(c="normal");a=(a.valueOf()-b.valueOf())/1e3;if(a<n)return h(a,c);b=Math.floor(a/n);if(b<o)return i(b,c);a=Math.floor(b/o);if(a<p)return j(a,c);b=Math.floor(a/p);if(b<q)return k(b,c);else if(b<r){a=Math.floor(b/q);return l(a,c)}a=Math.floor(b/r);return m(a,c)}function a(a){var c=a.date;a=a.format;var d=b("useServerTime")();d=s(d,c,a);return d}a.getRelativeTimestamp=s;e.exports=a}),null);