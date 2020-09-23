if (self.CavalryLogger) { CavalryLogger.start_js(["szMi5"]); }

__d("AbstractDraggableItem.react",["cssVar","cx","CenteredContainer.react","DOMDimensions","Draggable","Event","FBOverlayContainer.react","FBOverlayElement.react","Keys","React","Rect","getScrollPosition","getViewportDimensions","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=parseInt("1024px",10),k=250;a=function(a){babelHelpers.inheritsLoose(d,a);var c=d.prototype;c.componentDidMount=function(){this.$5(this.props.item.isMovable)};c.componentWillUnmount=function(){this.$5(!1)};c.componentDidUpdate=function(){this.$5(this.props.item.isMovable)};c.render=function(){var a=this.props.item,c=null;this.props.item.actionButton&&(c=i.jsx(b("FBOverlayElement.react"),{horizontal:"right",vertical:"fit",children:this.props.item.actionButton}));return i.jsxs(b("FBOverlayContainer.react"),{ref:this.$6,className:b("joinClasses")(this.getRootClassName(),this.props.className),style:{width:this.state.width},children:[a.label,this.getDragIcon(),this.getDragHandle(),c]},a.id)};function d(c){var d;d=a.call(this,c)||this;d.$6=function(a){d.$3=a};d.$7=function(a){d.$2=a};d.$8=function(){if(d.state.dragging)return;d.$4=b("Event").listen(document,"keydown",function(a){a.keyCode===b("Keys").ESC&&(d.$11(),a.preventDefault())});var a=b("DOMDimensions").getElementDimensions(d.$3);a=a.width;d.setState({dragging:!0,width:a});d.props.onGrab(d.props.item.id,d.$3)};d.$9=function(){var a=d.$3.parentNode;a=new(b("Rect"))(a);var c=b("getViewportDimensions")(),e=b("getScrollPosition")(window),f=Math.max(c.width,j);f=new(b("Rect"))(e.y,Math.min(f,a.r+k),c.height+e.y,Math.max(0,a.l-k));d.$1&&d.$1.setBoundingBox(f);d.props.onDrag()};d.$10=function(){d.$12(),d.props.onDrop()};d.state={dragging:!1,width:null};return d}c.getDragIcon=function(){return!this.props.item.isMovable?null:i.jsx(b("FBOverlayElement.react"),{horizontal:"left",vertical:"fit",children:i.jsx(b("CenteredContainer.react"),{className:"_80ep",horizontal:!1,vertical:!0,children:i.jsx("div",{className:"_58zl"})})})};c.getDragHandle=function(){return i.jsx(b("FBOverlayElement.react"),{horizontal:"left",vertical:"fit",children:i.jsx("div",{className:"_58zn",ref:this.$7})})};c.getRootClassName=function(){return(this.props.item.isMovable?"_58zo":"")+(this.state.dragging?" _58zp":"")+" _58z_"+(this.props.item.isMovable?"":" _58-6")+" _58-8"};c.$5=function(a){var c=this.$1;a&&!c?this.$1=new(b("Draggable"))(this.$3).setNamespace("AbstractDraggableList").setUseAbsolute(!0).setGrabHandler(this.$8).setDragHandler(this.$9).setDropHandler(this.$10).setUseScroller(this.props.useScroller).addHandle(this.$2):!a&&c&&(c.active&&this.$11(),c.destroy(),this.$1=null)};c.$11=function(){this.$1&&this.$1.killDrag(),this.$12(),this.props.onCancelDrag()};c.$12=function(){this.$1&&this.$1.resetPosition(),this.setState({dragging:!1,width:null}),this.$4&&this.$4.remove(),delete this.$4};return d}(i.Component);a.defaultProps={useScroller:!0};e.exports=a}),null);
__d("AbstractDraggableList.react",["cx","invariant","AbstractDraggableItem.react","BinarySearch","DOMDimensions","React","Rect","joinClasses","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={targetIndex:null,sourceHeight:null},d.$5=function(a){d.$6=a},d.$7=function(a){var c=d.$6,e=c.childNodes;c=e.length-1-(d.state.targetIndex!==null?1:0);a=b("BinarySearch").leastUpperBound(function(a){d.sourceIndex<=a&&(a+=1);d.state.targetIndex!==null&&d.state.targetIndex<=a&&(a+=1);a=new(b("Rect"))(e[a]);return(a.t+a.b)/2},a,0,c,function(a,b){return a-b});return d.sourceIndex<=a?a+1:a},d.$4=function(a,c){d.sourceIndex=d.props.itemIDs.indexOf(a);d.sourceElem=c;a=b("DOMDimensions").getElementDimensions(d.sourceElem);c=a.height;d.setState({sourceHeight:c});d.$2()},d.$2=function(){var a=new(b("Rect"))(d.sourceElem);a=(a.t+a.b)/2;a=d.$7(a);while(a!==d.props.itemIDs.length&&(!d.props.itemsByID[d.props.itemIDs[a]].isMovable||a===d.sourceIndex))a+=1;d.setState({targetIndex:a})},d.$3=function(){var a=d.props.itemIDs[d.sourceIndex],b=d.state.targetIndex!==d.props.itemIDs.length?d.props.itemIDs[d.state.targetIndex]:null;d.endDrag();d.props.onReorder(a,b)},d.$1=function(){d.endDrag()},d.endDrag=function(){delete d.sourceIndex,delete d.sourceElem,d.setState({sourceHeight:null,targetIndex:null})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this,c=this.props,d=c.className,e=c.itemIDs,f=c.itemsByID,g=c.itemsRenderer,j=c.onRemove;c.onReorder;var k=c.onSettingsClick,l=c.placeholderProps,m=c.placeholderRenderer;c=babelHelpers.objectWithoutPropertiesLoose(c,["className","itemIDs","itemsByID","itemsRenderer","onRemove","onReorder","onSettingsClick","placeholderProps","placeholderRenderer"]);e.length!==0||h(0,367);var n=e.map(function(b){return i.jsx(g,{className:d,item:f[b],onCancelDrag:a.$1,onDrag:a.$2,onDrop:a.$3,onGrab:a.$4,onRemove:j,onSettingsClick:k},b)});if(this.state.targetIndex!==null){e=e[this.sourceIndex];e=f[e];m=m?i.jsx(m,babelHelpers["extends"]({height:this.state.sourceHeight},l||{}),"_placeholder"):i.jsx("li",{className:e.placeholderClassName||"_58-9",style:{height:this.state.sourceHeight}},"_placeholder");n.splice(this.state.targetIndex,0,m)}return i.jsx("ul",babelHelpers["extends"]({},c,{ref:this.$5,className:b("joinClasses")(d,"_58-a"),children:n}))};return c}(i.PureComponent);a.propTypes={className:(c=b("prop-types")).string,itemIDs:c.array.isRequired,itemsByID:c.object.isRequired,itemsRenderer:c.oneOfType([c.func,c.object]).isRequired,onRemove:c.func.isRequired,onReorder:c.func.isRequired,onSettingsClick:c.func,placeholderRenderer:c.func,placeholderProps:c.object};a.defaultProps={itemsRenderer:b("AbstractDraggableItem.react")};e.exports=a}),null);
__d("DraftTreeAdapter",["invariant","generateRandomKey"],(function(a,b,c,d,e,f,g){var h=function(a,b){a=[].concat(a).reverse();while(a.length){var c=a.pop();b(c);c=c.children;Array.isArray(c)||g(0,2517);a=a.concat([].concat(c.reverse()))}},i=function(a){if(!(a&&a.type))return!1;a=a.type;return a==="unordered-list-item"||a==="ordered-list-item"},j=function(a){Array.isArray(a.children)&&(a.children=a.children.map(function(b){return b.type===a.type?babelHelpers["extends"]({},b,{depth:(a.depth||0)+1}):b}))};a={fromRawTreeStateToRawState:function(a){var b=a.blocks,c=[];Array.isArray(b)||g(0,2518);if(!Array.isArray(b)||!b.length)return a;h(b,function(a){var b=babelHelpers["extends"]({},a);if(i(a)){b.depth=b.depth||0;j(a);if(a.children!=null&&a.children.length>0)return}delete b.children;c.push(b)});a.blocks=c;return babelHelpers["extends"]({},a,{blocks:c})},fromRawStateToRawTreeState:function(a){var c=[],d=[];a.blocks.forEach(function(a){var e=i(a),f=a.depth||0,g=babelHelpers["extends"]({},a,{children:[]});if(!e){c.push(g);return}e=d[0];if(e==null&&f===0)c.push(g);else if(e==null||e.depth<f-1){a={key:b("generateRandomKey")(),text:"",depth:f-1,type:a.type,children:[],entityRanges:[],inlineStyleRanges:[]};d.unshift(a);f===1?c.push(a):e!=null&&e.children.push(a);a.children.push(g)}else if(e.depth===f-1)e.children.push(g);else{while(e!=null&&e.depth>=f)d.shift(),e=d[0];f>0?e.children.push(g):c.push(g)}});return babelHelpers["extends"]({},a,{blocks:c})}};e.exports=a}),null);
__d("DraftTreeInvariants",["warning"],(function(a,b,c,d,e,f){a={isValidBlock:function(a,c){var d=a.getKey(),e=a.getParentKey();if(e!=null){e=c.get(e);if(!e.getChildKeys().includes(d)){b("warning")(!0,"Tree is missing parent -> child pointer on %s",d);return!1}}e=a.getChildKeys().map(function(a){return c.get(a)});if(!e.every(function(a){return a.getParentKey()===d})){b("warning")(!0,"Tree is missing child -> parent pointer on %s",d);return!1}e=a.getPrevSiblingKey();if(e!=null){var f=c.get(e);if(f.getNextSiblingKey()!==d){b("warning")(!0,"Tree is missing nextSibling pointer on %s's prevSibling",d);return!1}}f=a.getNextSiblingKey();if(f!=null){var g=c.get(f);if(g.getPrevSiblingKey()!==d){b("warning")(!0,"Tree is missing prevSibling pointer on %s's nextSibling",d);return!1}}if(f!==null&&e!==null&&e===f){b("warning")(!0,"Tree has a two-node cycle at %s",d);return!1}if(a.text!=""&&a.getChildKeys().size>0){b("warning")(!0,"Leaf node %s has children",d);return!1}return!0},isConnectedTree:function(a){var c=a.toArray().filter(function(a){return a.getParentKey()==null&&a.getPrevSiblingKey()==null});if(c.length!==1){b("warning")(!0,"Tree is not connected. More or less than one first node");return!1}c=c.shift();var d=0;c=c.getKey();var e=[];while(c!=null){var f=a.get(c),g=f.getChildKeys(),h=f.getNextSiblingKey();if(g.size>0){h!=null&&e.unshift(h);h=g.map(function(b){return a.get(b)});g=h.find(function(a){return a.getPrevSiblingKey()==null});if(g==null){b("warning")(!0,"%s has no first child",c);return!1}c=g.getKey()}else f.getNextSiblingKey()!=null?c=f.getNextSiblingKey():c=e.shift();d++}if(d!==a.size){b("warning")(!0,"Tree is not connected. %s nodes were seen instead of %s",d,a.size);return!1}return!0},isValidTree:function(a){var b=this,c=a.toArray();return!c.every(function(c){return b.isValidBlock(c,a)})?!1:this.isConnectedTree(a)}};e.exports=a}),null);
__d("createCharacterList",["CharacterMetadata","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").List;function a(a,c){a=a.map(function(a,d){d=c[d];return b("CharacterMetadata").create({style:a,entity:d})});return g(a)}e.exports=a}),null);
__d("decodeEntityRanges",["UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";var g,h=(g||b("UnicodeUtils")).substr;function a(a,b){var c=Array(a.length).fill(null);b&&b.forEach(function(b){var d=h(a,0,b.offset).length,e=d+h(a,b.offset,b.length).length;for(var d=d;d<e;d++)c[d]=b.key});return c}e.exports=a}),null);
__d("decodeInlineStyleRanges",["UnicodeUtils","immutable"],(function(a,b,c,d,e,f){"use strict";var g;c=b("immutable").OrderedSet;var h=(g||(g=b("UnicodeUtils"))).substr,i=c();function a(a,b){var c=Array(a.length).fill(i);b&&b.forEach(function(b){var d=h(a,0,b.offset).length,e=d+h(a,b.offset,b.length).length;while(d<e)c[d]=c[d].add(b.style),d++});return c}e.exports=a}),null);
__d("convertFromRawToDraftState",["invariant","ContentBlock","ContentBlockNode","ContentState","DraftEntity","DraftTreeAdapter","DraftTreeInvariants","SelectionState","createCharacterList","decodeEntityRanges","decodeInlineStyleRanges","generateRandomKey","gkx","immutable"],(function(a,b,c,d,e,f,g){"use strict";var h=b("gkx")("676842"),i=b("immutable").List,j=b("immutable").Map,k=b("immutable").OrderedMap,l=function(a,c){var d=a.key,e=a.type,f=a.data,g=a.text,h=a.depth;g={text:g,depth:h||0,type:e||"unstyled",key:d||b("generateRandomKey")(),data:j(f),characterList:m(a,c)};return g},m=function(a,c){var d=a.text,e=a.entityRanges;a=a.inlineStyleRanges;e=e||[];a=a||[];return b("createCharacterList")(b("decodeInlineStyleRanges")(d,a),b("decodeEntityRanges")(d,e.filter(function(a){return Object.prototype.hasOwnProperty.call(c,a.key)}).map(function(a){return babelHelpers["extends"]({},a,{key:c[a.key]})})))},n=function(a){return babelHelpers["extends"]({},a,{key:a.key||b("generateRandomKey")()})},o=function(a,b,c){b=b.map(function(a){return babelHelpers["extends"]({},a,{parentRef:c})});return a.concat(b.reverse())},p=function(a,c){return a.map(n).reduce(function(d,e,f){Array.isArray(e.children)||g(0,5197);var h=e.children.map(n);e=new(b("ContentBlockNode"))(babelHelpers["extends"]({},l(e,c),{prevSibling:f===0?null:a[f-1].key,nextSibling:f===a.length-1?null:a[f+1].key,children:i(h.map(function(a){return a.key}))}));d=d.set(e.getKey(),e);f=o([],h,e);while(f.length>0){h=f.pop();e=h.parentRef;var j=e.getChildKeys(),k=j.indexOf(h.key),m=Array.isArray(h.children);if(!m){m||g(0,5197);break}m=h.children.map(n);h=new(b("ContentBlockNode"))(babelHelpers["extends"]({},l(h,c),{parent:e.getKey(),children:i(m.map(function(a){return a.key})),prevSibling:k===0?null:j.get(k-1),nextSibling:k===j.size-1?null:j.get(k+1)}));d=d.set(h.getKey(),h);f=o(f,m,h)}return d},k())},q=function(a,c){return k(a.map(function(a){a=new(b("ContentBlock"))(l(a,c));return[a.getKey(),a]}))},r=function(a,c){var d=a.blocks.find(function(a){return Array.isArray(a.children)&&a.children.length>0}),e=h&&!d?b("DraftTreeAdapter").fromRawStateToRawTreeState(a).blocks:a.blocks;if(!h)return q(d?b("DraftTreeAdapter").fromRawTreeStateToRawState(a).blocks:e,c);d=p(e,c);return d},s=function(a){var c=a.entityMap,d={};Object.keys(c).forEach(function(a){var e=c[a],f=e.type,g=e.mutability;e=e.data;d[a]=b("DraftEntity").__create(f,g,e||{})});return d};a=function(a){Array.isArray(a.blocks)||g(0,5199);var c=s(a);a=r(a,c);var d=a.isEmpty()?new(b("SelectionState"))():b("SelectionState").createEmpty(a.first().getKey());return new(b("ContentState"))({blockMap:a,entityMap:c,selectionBefore:d,selectionAfter:d})};e.exports=a}),null);
__d("decodeBlocks",["ComposedInlineStyle","convertFromRawToDraftState","mapObject"],(function(a,b,c,d,e,f){"use strict";var g;function a(a,c){a=a.map(function(a){var b=a.type,c=a.inlineStyleRanges;a=babelHelpers.objectWithoutPropertiesLoose(a,["type","inlineStyleRanges"]);return babelHelpers["extends"]({type:h[b]||"unstyled",inlineStyleRanges:(c||[]).map(function(a){return babelHelpers["extends"]({},a,{style:i[a.style]})})},a)});c=(g||(g=b("mapObject")))(c,function(a){return{type:a.getType(),mutability:a.getMutability(),data:a.getData()}});return b("convertFromRawToDraftState")({blocks:a,entityMap:c})}var h={};h[0]="unstyled";h[1]="paragraph";h[4]="blockquote";h[3]="ordered-list-item";h[2]="unordered-list-item";h[7]="code-block";h[5]="header-one";h[6]="header-two";h[8]="atomic";h[9]="pullquote";var i={};i[(c=b("ComposedInlineStyle")).BOLD]="BOLD";i[c.CODE]="CODE";i[c.ITALIC]="ITALIC";i[c.STRIKETHROUGH]="STRIKETHROUGH";i[c.UNDERLINE]="UNDERLINE";e.exports=a}),null);
__d("AtSignAllowEmptyMentionsStrategy",["DocumentMentionsRegex"],(function(a,b,c,d,e,f){a=b("DocumentMentionsRegex").PUNCTUATION;c=["@","\\uff20"].join("");d="[^"+c+a+"\\s]";f="(?:\\.[ |$]| |["+a+"]|)";var g=new RegExp("(?:^|\\s|[(\\/])(["+c+"]((?:"+d+f+"){0,20}))$");b={name:"AtSignAllowEmptyMentionsStrategy",findMentionableString:function(a){a=g.exec(a);if(a!==null){var b=a[2];return{matchingString:b,leadOffset:a[1].length}}return null}};e.exports=b}),null);
__d("bs_list",["bs_curry","bs_caml_obj","bs_pervasives","bs_caml_option","bs_caml_builtin_exceptions"],(function(a,b,c,d,e,f){"use strict";function g(a){var b=0;a=a;while(!0){var c=a,d=b;if(c){a=c[1];b=d+1|0;continue}else return d}}function a(a,b){return[a,b]}function c(a){if(a)return a[0];else throw[b("bs_caml_builtin_exceptions").failure,"hd"]}function d(a){if(a)return a[1];else throw[b("bs_caml_builtin_exceptions").failure,"tl"]}function e(a,c){if(c<0)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.nth"];a=a;c=c;while(!0){var d=c,e=a;if(e)if(d===0)return e[0];else{c=d-1|0;a=e[1];continue}else throw[b("bs_caml_builtin_exceptions").failure,"nth"]}}function h(a,c){if(c<0)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.nth"];a=a;c=c;while(!0){var d=c,e=a;if(e)if(d===0)return b("bs_caml_option").some(e[0]);else{c=d-1|0;a=e[1];continue}else return}}function i(a,b){while(!0){var c=b,d=a;if(d){b=[d[0],c];a=d[1];continue}else return c}}function j(a){return i(a,0)}function k(a,c,d,e){while(!0){var f=c,g=a;if(f>=d)return g;else{c=f+1|0;a=[b("bs_curry")._1(e,f),g];continue}}}function l(a,c,d){if(a>=c)return 0;else{var e=b("bs_curry")._1(d,a);return[e,l(a+1|0,c,d)]}}function m(a,c){if(a<0)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.init"];if(a>1e4)return i(k(0,0,a,c),0);else return l(0,a,c)}function n(a){if(a)return b("bs_pervasives").$at(a[0],n(a[1]));else return 0}function o(a,c){if(c){var d=b("bs_curry")._1(a,c[0]);return[d,o(a,c[1])]}else return 0}function p(a,c,d){if(d){var e=b("bs_curry")._2(c,a,d[0]);return[e,p(a+1|0,c,d[1])]}else return 0}function q(a,b){return p(0,a,b)}function r(a,c){var d=0;c=c;while(!0){var e=c,f=d;if(e){c=e[1];d=[b("bs_curry")._1(a,e[0]),f];continue}else return f}}function s(a,c){while(!0){var d=c;if(d){b("bs_curry")._1(a,d[0]);c=d[1];continue}else return 0}}function t(a,c){var d=0;a=a;c=c;while(!0){var e=c,f=d;if(e){b("bs_curry")._2(a,f,e[0]);c=e[1];d=f+1|0;continue}else return 0}}function u(a,c,d){while(!0){var e=d,f=c;if(e){d=e[1];c=b("bs_curry")._2(a,f,e[0]);continue}else return f}}function v(a,c,d){if(c)return b("bs_curry")._2(a,c[0],v(a,c[1],d));else return d}function w(a,c,d){if(c)if(d){var e=b("bs_curry")._2(a,c[0],d[0]);return[e,w(a,c[1],d[1])]}else throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.map2"];else if(d)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.map2"];else return 0}function x(a,c,d){var e=0;c=c;d=d;while(!0){var f=d,g=c,h=e;if(g)if(f){d=f[1];c=g[1];e=[b("bs_curry")._2(a,g[0],f[0]),h];continue}else throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.rev_map2"];else{if(f)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.rev_map2"];return h}}}function y(a,c,d){while(!0){var e=d,f=c;if(f)if(e){b("bs_curry")._2(a,f[0],e[0]);d=e[1];c=f[1];continue}else throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.iter2"];else if(e)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.iter2"];else return 0}}function z(a,c,d,e){while(!0){var f=e,g=d,h=c;if(g)if(f){e=f[1];d=g[1];c=b("bs_curry")._3(a,h,g[0],f[0]);continue}else throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.fold_left2"];else{if(f)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.fold_left2"];return h}}}function A(a,c,d,e){if(c)if(d)return b("bs_curry")._3(a,c[0],d[0],A(a,c[1],d[1],e));else throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.fold_right2"];else{if(d)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.fold_right2"];return e}}function B(a,c){while(!0){var d=c;if(d)if(b("bs_curry")._1(a,d[0])){c=d[1];continue}else return!1;else return!0}}function C(a,c){while(!0){var d=c;if(d)if(b("bs_curry")._1(a,d[0]))return!0;else{c=d[1];continue}else return!1}}function D(a,c,d){while(!0){var e=d,f=c;if(f)if(e)if(b("bs_curry")._2(a,f[0],e[0])){d=e[1];c=f[1];continue}else return!1;else throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.for_all2"];else if(e)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.for_all2"];else return!0}}function E(a,c,d){while(!0){var e=d,f=c;if(f)if(e)if(b("bs_curry")._2(a,f[0],e[0]))return!0;else{d=e[1];c=f[1];continue}else throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.exists2"];else if(e)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.exists2"];else return!1}}function F(a,c){while(!0){var d=c;if(d)if(b("bs_caml_obj").caml_equal(d[0],a))return!0;else{c=d[1];continue}else return!1}}function G(a,b){while(!0){var c=b;if(c)if(c[0]===a)return!0;else{b=c[1];continue}else return!1}}function H(a,c){while(!0){var d=c;if(d){var e=d[0];if(b("bs_caml_obj").caml_equal(e[0],a))return e[1];else{c=d[1];continue}}else throw b("bs_caml_builtin_exceptions").not_found}}function I(a,c){while(!0){var d=c;if(d){var e=d[0];if(b("bs_caml_obj").caml_equal(e[0],a))return b("bs_caml_option").some(e[1]);else{c=d[1];continue}}else return}}function J(a,c){while(!0){var d=c;if(d){var e=d[0];if(e[0]===a)return e[1];else{c=d[1];continue}}else throw b("bs_caml_builtin_exceptions").not_found}}function K(a,c){while(!0){var d=c;if(d){var e=d[0];if(e[0]===a)return b("bs_caml_option").some(e[1]);else{c=d[1];continue}}else return}}function L(a,c){while(!0){var d=c;if(d)if(b("bs_caml_obj").caml_equal(d[0][0],a))return!0;else{c=d[1];continue}else return!1}}function M(a,b){while(!0){var c=b;if(c)if(c[0][0]===a)return!0;else{b=c[1];continue}else return!1}}function N(a,c){if(c){var d=c[1];c=c[0];if(b("bs_caml_obj").caml_equal(c[0],a))return d;else return[c,N(a,d)]}else return 0}function O(a,b){if(b){var c=b[1];b=b[0];if(b[0]===a)return c;else return[b,O(a,c)]}else return 0}function P(a,c){while(!0){var d=c;if(d){var e=d[0];if(b("bs_curry")._1(a,e))return e;else{c=d[1];continue}}else throw b("bs_caml_builtin_exceptions").not_found}}function Q(a,c){while(!0){var d=c;if(d){var e=d[0];if(b("bs_curry")._1(a,e))return b("bs_caml_option").some(e);else{c=d[1];continue}}else return}}function R(a){return function(c){var d=0;c=c;while(!0){var e=c,f=d;if(e){var g=e[1];e=e[0];if(b("bs_curry")._1(a,e)){c=g;d=[e,f];continue}else{c=g;continue}}else return i(f,0)}}}function S(a,c){var d=0,e=0;c=c;while(!0){var f=c,g=e,h=d;if(f){var j=f[1];f=f[0];if(b("bs_curry")._1(a,f)){c=j;d=[f,h];continue}else{c=j;e=[f,g];continue}}else return[i(h,0),i(g,0)]}}function T(a){if(a){var b=a[0];a=T(a[1]);return[[b[0],a[0]],[b[1],a[1]]]}else return[0,0]}function U(a,c){if(a)if(c)return[[a[0],c[0]],U(a[1],c[1])];else throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.combine"];else if(c)throw[b("bs_caml_builtin_exceptions").invalid_argument,"List.combine"];else return 0}function V(a,c,d){if(c)if(d){var e=d[0],f=c[0];if(b("bs_curry")._2(a,f,e)<=0)return[f,V(a,c[1],d)];else return[e,V(a,c,d[1])]}else return c;else return d}function W(a,c){while(!0){var d=c,e=a;if(e===0)return d;else if(d){c=d[1];a=e-1|0;continue}else throw[b("bs_caml_builtin_exceptions").assert_failure,["list.ml",262,11]]}}function X(c,d){var a=function(d,a){if(d!==2){if(d===3&&a){var f=a[1];if(f){var g=f[1];if(g){g=g[0];f=f[0];var h=a[0];if(b("bs_curry")._2(c,h,f)<=0)if(b("bs_curry")._2(c,f,g)<=0)return[h,[f,[g,0]]];else if(b("bs_curry")._2(c,h,g)<=0)return[h,[g,[f,0]]];else return[g,[h,[f,0]]];else if(b("bs_curry")._2(c,h,g)<=0)return[f,[h,[g,0]]];else if(b("bs_curry")._2(c,f,g)<=0)return[f,[g,[h,0]]];else return[g,[f,[h,0]]]}}}}else if(a){g=a[1];if(g){f=g[0];h=a[0];if(b("bs_curry")._2(c,h,f)<=0)return[h,[f,0]];else return[f,[h,0]]}}g=d>>1;f=d-g|0;h=W(g,a);d=e(g,a);g=e(f,h);a=d;f=g;h=0;while(!0){d=h;g=f;var j=a;if(j)if(g){var k=g[0],l=j[0];if(b("bs_curry")._2(c,l,k)>0){h=[l,d];a=j[1];continue}else{h=[k,d];f=g[1];continue}}else return i(j,d);else return i(g,d)}},e=function(e,d){if(e!==2){if(e===3&&d){var f=d[1];if(f){var g=f[1];if(g){g=g[0];f=f[0];var h=d[0];if(b("bs_curry")._2(c,h,f)>0)if(b("bs_curry")._2(c,f,g)>0)return[h,[f,[g,0]]];else if(b("bs_curry")._2(c,h,g)>0)return[h,[g,[f,0]]];else return[g,[h,[f,0]]];else if(b("bs_curry")._2(c,h,g)>0)return[f,[h,[g,0]]];else if(b("bs_curry")._2(c,f,g)>0)return[f,[g,[h,0]]];else return[g,[f,[h,0]]]}}}}else if(d){g=d[1];if(g){f=g[0];h=d[0];if(b("bs_curry")._2(c,h,f)>0)return[h,[f,0]];else return[f,[h,0]]}}g=e>>1;f=e-g|0;h=W(g,d);e=a(g,d);g=a(f,h);d=e;f=g;h=0;while(!0){e=h;g=f;var j=d;if(j)if(g){var k=g[0],l=j[0];if(b("bs_curry")._2(c,l,k)<=0){h=[l,e];d=j[1];continue}else{h=[k,e];f=g[1];continue}}else return i(j,e);else return i(g,e)}},f=g(d);if(f<2)return d;else return a(f,d)}function Y(c,d){var a=function(d,a){if(d!==2){if(d===3&&a){var f=a[1];if(f){var g=f[1];if(g){g=g[0];f=f[0];var h=a[0],j=b("bs_curry")._2(c,h,f);if(j===0){var k=b("bs_curry")._2(c,f,g);if(k===0)return[f,0];else if(k<0)return[f,[g,0]];else return[g,[f,0]]}else if(j<0){k=b("bs_curry")._2(c,f,g);if(k===0)return[h,[f,0]];else if(k<0)return[h,[f,[g,0]]];else{j=b("bs_curry")._2(c,h,g);if(j===0)return[h,[f,0]];else if(j<0)return[h,[g,[f,0]]];else return[g,[h,[f,0]]]}}else{k=b("bs_curry")._2(c,h,g);if(k===0)return[f,[h,0]];else if(k<0)return[f,[h,[g,0]]];else{j=b("bs_curry")._2(c,f,g);if(j===0)return[f,[h,0]];else if(j<0)return[f,[g,[h,0]]];else return[g,[f,[h,0]]]}}}}}}else if(a){k=a[1];if(k){j=k[0];g=a[0];f=b("bs_curry")._2(c,g,j);if(f===0)return[g,0];else if(f<0)return[g,[j,0]];else return[j,[g,0]]}}h=d>>1;k=d-h|0;f=W(h,a);j=e(h,a);g=e(k,f);d=j;h=g;a=0;while(!0){k=a;f=h;j=d;if(j)if(f){g=f[1];var l=f[0],m=j[1],n=j[0],o=b("bs_curry")._2(c,n,l);if(o===0){a=[n,k];h=g;d=m;continue}else if(o>0){a=[n,k];d=m;continue}else{a=[l,k];h=g;continue}}else return i(j,k);else return i(f,k)}},e=function(e,d){if(e!==2){if(e===3&&d){var f=d[1];if(f){var g=f[1];if(g){g=g[0];f=f[0];var h=d[0],j=b("bs_curry")._2(c,h,f);if(j===0){var k=b("bs_curry")._2(c,f,g);if(k===0)return[f,0];else if(k>0)return[f,[g,0]];else return[g,[f,0]]}else if(j>0){k=b("bs_curry")._2(c,f,g);if(k===0)return[h,[f,0]];else if(k>0)return[h,[f,[g,0]]];else{j=b("bs_curry")._2(c,h,g);if(j===0)return[h,[f,0]];else if(j>0)return[h,[g,[f,0]]];else return[g,[h,[f,0]]]}}else{k=b("bs_curry")._2(c,h,g);if(k===0)return[f,[h,0]];else if(k>0)return[f,[h,[g,0]]];else{j=b("bs_curry")._2(c,f,g);if(j===0)return[f,[h,0]];else if(j>0)return[f,[g,[h,0]]];else return[g,[f,[h,0]]]}}}}}}else if(d){k=d[1];if(k){j=k[0];g=d[0];f=b("bs_curry")._2(c,g,j);if(f===0)return[g,0];else if(f>0)return[g,[j,0]];else return[j,[g,0]]}}h=e>>1;k=e-h|0;f=W(h,d);j=a(h,d);g=a(k,f);e=j;h=g;d=0;while(!0){k=d;f=h;j=e;if(j)if(f){g=f[1];var l=f[0],m=j[1],n=j[0],o=b("bs_curry")._2(c,n,l);if(o===0){d=[n,k];h=g;e=m;continue}else if(o<0){d=[n,k];e=m;continue}else{d=[l,k];h=g;continue}}else return i(j,k);else return i(f,k)}},f=g(d);if(f<2)return d;else return a(f,d)}function Z(a,b){while(!0){var c=b,d=a;if(d)if(c){b=c[1];a=d[1];continue}else return 1;else if(c)return-1;else return 0}}function $(a,b){while(!0){var c=b,d=a;if(d)if(c<=0)return 1;else{b=c-1|0;a=d[1];continue}else if(c===0)return 0;else if(c>0)return-1;else return 1}}var aa=b("bs_pervasives").$at,ba=n,ca=R,da=X,ea=X;f.length=g;f.compare_lengths=Z;f.compare_length_with=$;f.cons=a;f.hd=c;f.tl=d;f.nth=e;f.nth_opt=h;f.rev=j;f.init=m;f.append=aa;f.rev_append=i;f.concat=ba;f.flatten=n;f.iter=s;f.iteri=t;f.map=o;f.mapi=q;f.rev_map=r;f.fold_left=u;f.fold_right=v;f.iter2=y;f.map2=w;f.rev_map2=x;f.fold_left2=z;f.fold_right2=A;f.for_all=B;f.exists=C;f.for_all2=D;f.exists2=E;f.mem=F;f.memq=G;f.find=P;f.find_opt=Q;f.filter=ca;f.find_all=R;f.partition=S;f.assoc=H;f.assoc_opt=I;f.assq=J;f.assq_opt=K;f.mem_assoc=L;f.mem_assq=M;f.remove_assoc=N;f.remove_assq=O;f.split=T;f.combine=U;f.sort=da;f.stable_sort=X;f.fast_sort=ea;f.sort_uniq=Y;f.merge=V}),null);