if (self.CavalryLogger) { CavalryLogger.start_js(["yzJti"]); }

__d("ClientServerIDMap",[],(function(a,b,c,d,e,f){"use strict";var g=new Map();a={addIDMapping:function(a,b){g.set(a,b)},resolveID:function(a){return g.get(a)||a},getKeys:function(){return Array.from(g.keys())}};e.exports=a}),null);
__d("ScrollableLayout.react",["cx","Event","React","Style","debounce","getViewportDimensions","joinClasses","keyMirror"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=100,j=100,k=0,l=b("keyMirror")({FILL_PARENT:null,FILL_VIEWPORT:null});a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=b("debounce")(function(a){if(d.$1){var c=d.$1.offsetParent;if(!c)return;var e=window.getComputedStyle(c);a=a!==null&&a!==void 0?a:c.getBoundingClientRect().height;c=a-parseInt(e.borderBottomWidth,10)-parseInt(e.borderTopWidth,10);a=d.$1.offsetTop;e=Math.max(c-a-(d.props.offset!==null&&d.props.offset!==void 0?d.props.offset:k),d.props.minHeight!==null&&d.props.minHeight!==void 0?d.props.minHeight:j);b("Style").set(d.$1,"height",e+"px");d.props.onResized&&d.props.onResized(e)}},i,babelHelpers.assertThisInitialized(d)),d.$3=b("debounce")(function(){if(d.$1){var a=b("getViewportDimensions").withoutScrollbars().height,c=d.$1.getBoundingClientRect().top;a=Math.max(a-c-(d.props.offset!==null&&d.props.offset!==void 0?d.props.offset:k),d.props.minHeight!==null&&d.props.minHeight!==void 0?d.props.minHeight:j);b("Style").set(d.$1,"height",a+"px");d.props.onResized&&d.props.onResized(a)}},i,babelHelpers.assertThisInitialized(d)),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$1&&(this.props.fillMode===l.FILL_PARENT?this.$2(this.props.parentComponentHeight):(b("Event").listen(window,"resize",this.$3),this.$3()))};d.UNSAFE_componentWillReceiveProps=function(a){a.parentComponentHeight!==this.props.parentComponentHeight&&this.$2(a.parentComponentHeight)};d.render=function(){var a=this;return h.jsx("div",{className:b("joinClasses")(this.props.className,"_d36"),ref:function(b){return a.$1=b},children:this.props.children})};return c}(h.PureComponent);a.FILL_MODE=l;a.defaultProps={fillMode:l.FILL_VIEWPORT,minHeight:j,offset:k};e.exports=a}),null);
__d("ComposerXNUX",["csx","cx","AsyncRequest","ComposerXDragDropUtils","CSS","DOM","Event","SubscriptionsHandler"],(function(a,b,c,d,e,f,g,h){var i={},j={};function k(a,c,d){d=d.dataTransfer.items;if(d){d=b("ComposerXDragDropUtils").filterImages(d);if(!d.length)return}l.acknowledgeDialog(a,c)}var l={onInit:function(a,c,d){if(i[d])return;j[d]=j[d]||new(b("SubscriptionsHandler"))();var e=j[d];e.engage();var f=a.getRoot();b("CSS").addClass(f,"_4bka");f=b("DOM").scry(f,"._3o-a");f.forEach(function(c){e.addSubscriptions(b("Event").listen(c,"click",l.acknowledgeDialog.bind(null,d,a)))});d==l.CAMERA_NUX&&e.addSubscriptions(b("Event").listen(document,"dragenter",k.bind(null,d,a)));e.addSubscriptions(a.subscribe("cancel",l.sendMarkSeenRequest.bind(null,d)),a.subscribe("hide",e.release.bind(e)));a.setContext(c).show()},acknowledgeDialog:function(a,b){l.sendMarkSeenRequest(a),b.hide()},sendMarkSeenRequest:function(a){i[a]||(new(b("AsyncRequest"))("/ajax/photos/composer/mark_nux_seen.php").setData({type:a}).send(),i[a]=!0)},onCleanup:function(a){a.hide()}};e.exports=l}),null);
__d("XFamilyBulkTagAddAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/family/bulk_tag_save/",{subject:{type:"Int"},save_tags:{type:"String"}})}),null);
__d("PhotoTagStore",["ActorURI","AsyncRequest","XFamilyBulkTagAddAsyncController","isEmpty"],(function(a,b,c,d,e,f){var g;a=function(){"use strict";function a(){this._tagList={},this._textTagList={},this._originalTagList={},this._dirtyPhotosByUid={},a.instance=this}var c=a.prototype;c.getPhotoTags=function(a){return this._tagList[a]||{}};c.photoHasTags=function(a){return!(g||(g=b("isEmpty")))(this.getPhotoTags(a))};c.clear=function(){this._tagList={},this._textTagList={},this._originalTagList={},this._dirtyPhotosByUid={}};c.addTag=function(a,b,c,d){a[b]=a[b]||{};var e=a[b][c]||[];e.push(d);a[b][c]=e};c.revert=function(a){var c=this._tagList,d=this._originalTagList;for(var e in c)(g||(g=b("isEmpty")))(d[e][a])?c[e][a]=[]:c[e][a]=d[e][a];this._dirtyPhotosByUid={}};c.hasNewTags=function(){return!(g||(g=b("isEmpty")))(this._tagList)||!(g||(g=b("isEmpty")))(this._textTagList)};c.userHasDirtyTags=function(a){return!(g||(g=b("isEmpty")))(this._dirtyPhotosByUid[a])};c.userDirtyTagsCount=function(a){return Object.keys(this._dirtyPhotosByUid[a]).length};c.handleTagFetch=function(a){for(var b in a)this.loadTagInfo(b,a[b])};c.saveAlbumTagsForUser=function(a,c,d,e){e===void 0&&(e=!1);var f={},h=[],i=this._dirtyPhotosByUid[a]||{};for(var j in i){i=this._tagList[j][a];if((g||(g=b("isEmpty")))(i)){h[h.length]=j;continue}i.forEach(function(a){f[j]={x:a.x,y:a.y}})}i={subject:a,action:"save",save_tags:f};h=b("ActorURI").create("/ajax/photos/album/tags.php",c);e&&(i={subject:a,save_tags:JSON.stringify(f)},h=b("XFamilyBulkTagAddAsyncController").getURIBuilder().getURI());new(b("AsyncRequest"))().setURI(h).setData(i).setHandler(function(a){d(a.payload)}).setAllowCrossPageTransition(!0).send();delete this._dirtyPhotosByUid[a]};c.getTagsFromList=function(a){var b=[];for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c))for(var d in a[c])Object.prototype.hasOwnProperty.call(a[c],d)&&a[c][d].forEach(function(a){return b.push(a)});return b};c.getAllTags=function(){var a=this.getTagsFromList(this._tagList),b=this.getTagsFromList(this._textTagList);return a.concat(b)};c.removeTag=function(a,c){var d=this._tagList[a],e=this._originalTagList[a]||{};e[c]?(this._dirtyPhotosByUid[c]=this._dirtyPhotosByUid[c]||{},this._dirtyPhotosByUid[c][a]=!0):delete this._dirtyPhotosByUid[c][a];for(var f in d)if(f==c){e=this._tagList[a][f];delete this._tagList[a][f];(g||(g=b("isEmpty")))(this._tagList[a])&&delete this._tagList[a];return e}};c.removeTextTag=function(a,c){var d=this._textTagList[a];if(!(g||(g=b("isEmpty")))(d[c])){d=this._textTagList[a][c];this._textTagList[a][c]=[];(g||(g=b("isEmpty")))(this._textTagList[a])&&delete this._textTagList[a];return d}return[]};c.removeAllNewTagsOfUser=function(a){var b=[];if(!this.userHasDirtyTags(a))return b;var c=this._dirtyPhotosByUid[a];for(var d in c)b=b.concat(this.removeTag(d,a));return b};c.removeAllTagsFromPhoto=function(a){var c=[];if(!(g||(g=b("isEmpty")))(this._tagList[a]))for(var d in this._tagList[a]){if(!Object.prototype.hasOwnProperty.call(this._tagList[a],d))continue;c=c.concat(this.removeTag(a,d))}if(!(g||(g=b("isEmpty")))(this._textTagList[a]))for(var e in this._textTagList[a]){if(!Object.prototype.hasOwnProperty.call(this._textTagList[a],e))continue;c=c.concat(this.removeTextTag(a,e))}return c};c.storeTag=function(a,b,c,d,e){this.storeTagWithOptions(a,b,c,d,{can_remove:e})};c.storeTagWithOptions=function(a,b,c,d,e){this._dirtyPhotosByUid[b]=this._dirtyPhotosByUid[b]||{};this._dirtyPhotosByUid[b][a]=!0;c={x:c,y:d};Object.assign(c,e);!b?this.addTag(this._textTagList,a,c.name,c):this.addTag(this._tagList,a,b,c)};c.loadTagInfo=function(a,b){this._tagList[a]={};this._originalTagList[a]={};for(var c=0;c<b.length;c++){var d=b[c];this.addTag(this._tagList,a,d.subject,d);this.addTag(this._originalTagList,a,d.subject,d)}};a.getInstance=function(){a.instance===null&&new a();return a.instance};return a}();a.instance=null;e.exports=a}),null);