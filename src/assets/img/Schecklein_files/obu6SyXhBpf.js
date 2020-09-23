if (self.CavalryLogger) { CavalryLogger.start_js(["FXNd2"]); }

__d("ViewableSessionValidationWebResultTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ViewableSessionValidationWebResultLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setExtras=function(a){this.$1.extras=a;return this};c.setFailureReason=function(a){this.$1.failure_reason=a;return this};c.setFbFeedLocation=function(a){this.$1.fb_feed_location=a;return this};c.setPrimaryImpressionChannel=function(a){this.$1.primary_impression_channel=a;return this};c.setScrollSpeed=function(a){this.$1.scroll_speed=a;return this};c.setSecondaryImpressionChannel=function(a){this.$1.secondary_impression_channel=a;return this};c.setSessionEndTime=function(a){this.$1.session_end_time=a;return this};c.setSessionKey=function(a){this.$1.session_key=a;return this};c.setSessionStartTime=function(a){this.$1.session_start_time=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimeFromLoad=function(a){this.$1.time_from_load=a;return this};c.setVerificationTime=function(a){this.$1.verification_time=a;return this};c.setVerifyResult=function(a){this.$1.verify_result=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={extras:!0,failure_reason:!0,fb_feed_location:!0,primary_impression_channel:!0,scroll_speed:!0,secondary_impression_channel:!0,session_end_time:!0,session_key:!0,session_start_time:!0,time:!0,time_from_load:!0,verification_time:!0,verify_result:!0,weight:!0};e.exports=a}),null);
__d("getCentralImpressionScrollSpeed",["Event"],(function(a,b,c,d,e,f){"use strict";var g=0,h=Date.now(),i=null,j=null;function a(a){b("Event").listen(window,"scroll",function(){j&&clearTimeout(j),j=setTimeout(function(){return a()},100)},b("Event").Priority.NORMAL,{passive:!0})}function k(){var a=window.scrollY,b=Date.now();if(i!=null&&b!==h){var c=a-i;g=c/(b-h)*1e3}i=a;h=b}a(function(){g=0,i=null});b("Event").listen(window,"scroll",function(){return k()},b("Event").Priority.NORMAL,{passive:!0});e.exports=function(){return g}}),null);
__d("getCentralImpressionTimeAfterRefresh",[],(function(a,b,c,d,e,f){"use strict";var g=null;window.addEventListener("load",function(){g=Date.now()},{passive:!0});e.exports=function(){return g!=null?Date.now()-g:0}}),null);
__d("ViewableSessionStore",["BanzaiODS","ViewableSessionValidationWebResultTypedLogger","ge","getCentralImpressionScrollSpeed","getCentralImpressionTimeAfterRefresh","getViewportDimensions","setTimeout"],(function(a,b,c,d,e,f){var g="viewable_session_validation",h=[],i={};function a(a,c,d){try{var e=l(a);i[e]||(i[e]={context:a,isValid:!1});j(e,c,d);!i[e].isValid?k(e)&&(i[e].enterTime=Date.now(),i[e].exitTime=null,i[e].isValid=!0):k(e)||(i[e].isValid=!1,i[e].exitTime=Date.now())}catch(a){b("BanzaiODS").bumpEntityKey(2966,g,"error.onViewUpdate."+a.message)}}function j(a,b,c){var d;c=c.getBoundingClientRect();var e=c.bottom,f=c.top,g=c.left;c=c.right;var h={};d=(d=(d=i[a])==null?void 0:(d=d.boundaryDimensions)==null?void 0:d.ref)!=null?d:0;switch(b){case"top":h={top:e,left:g,right:c,ref:++d};break;case"bottom":h={bottom:f,left:g,right:c,ref:--d};break}i[a]=babelHelpers["extends"]({},i[a],{boundaryDimensions:babelHelpers["extends"]({},(b=i[a])==null?void 0:b.boundaryDimensions,h)})}function k(a){a=(a=i[a])==null?void 0:a.boundaryDimensions;if(a==void 0)return!1;var c=b("ge")("pagelet_bluebar"),d=b("getViewportDimensions")(),e=d.width;d=d.height;var f=document.elementFromPoint(0,0);c=c!=null&&f!=null&&c.contains(f)?f.getBoundingClientRect().bottom:0;f=h.reduce(function(a,b){return Math.max(b.getBoundingClientRect().bottom,a)},c);return a.top!=void 0&&a.bottom!=void 0&&a.top<a.bottom&&a.top<d&&a.bottom>f&&a.left<a.right&&a.left<e&&a.right>0}function l(a){return a.postId}function m(a){var b=i[a];if(b==void 0)return!1;var c=b.exitTime;return b.isValid===!0||c!=null&&Date.now()-c<1e3||k(a)}function n(a,c,d,e){e===void 0&&(e=1);try{var f,h=b("getCentralImpressionScrollSpeed")(),j=b("getCentralImpressionTimeAfterRefresh")(),k="event_logged."+a+"."+d.toString()+".";f=new(b("ViewableSessionValidationWebResultTypedLogger"))().setVerificationTime(Date.now()).setExtras(JSON.stringify({pageId:i[c].context.pageId,boundaryDimension:JSON.stringify((f=i[c].boundaryDimensions)!=null?f:"null"),viewportDimension:JSON.stringify(b("getViewportDimensions")())})).setFbFeedLocation(d).setSessionStartTime(i[c].enterTime).setSessionEndTime(i[c].exitTime).setPrimaryImpressionChannel("viewable_impression_tracker").setSecondaryImpressionChannel("two_div_boundary").setSessionKey(c).setScrollSpeed(h).setTimeFromLoad(j);if(m(c))f.setVerifyResult(1),b("BanzaiODS").bumpEntityKey(2966,g,k+"pass");else{if(e>0){b("setTimeout")(function(){n(a,c,d,e-1)},500);return}f.setVerifyResult(0).setFailureReason("over-logging");b("BanzaiODS").bumpEntityKey(2966,g,k+"overlogging")}f.log()}catch(a){b("BanzaiODS").bumpEntityKey(2966,g,"error.onEventLogged."+a.message)}}e.exports={ViewableSessionStore:i,onViewUpdate:a,onEventLogged:n,setupTopRef:function(a){h.push(a)}}}),null);
__d("ViewableSessionValidationBoundary.react",["Event","React","ViewableSessionStore","ViewableSessionValidationConfig","throttle"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("ViewableSessionStore").onViewUpdate;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$5=function(a){return d.$4=a},d.$6=function(){d.$4&&h(d.props.viewableSessionContext,d.props.boundaryLocation,d.$4)},d.$9=b("ViewableSessionValidationConfig").throttle_timeout!=null?b("throttle").acrossTransitions(d.$6,b("ViewableSessionValidationConfig").throttle_timeout):d.$6,c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$6(),this.$7()};d.componentWillUnmount=function(){this.$8()};d.render=function(){return g.jsx("div",{ref:this.$5})};d.$7=function(){var a={attributes:!0,subtree:!0};this.$3=new MutationObserver(this.$9);this.$3.observe(document,a);this.$1=b("Event").listen(window,"scroll",this.$9);this.$2=b("Event").listen(window,"resize",this.$9)};d.$8=function(){this.$3.disconnect(),this.$1&&this.$1.remove(),this.$2&&this.$2.remove()};return c}(g.PureComponent);e.exports=a}),null);