if (self.CavalryLogger) { CavalryLogger.start_js(["+sknr"]); }

__d("CometInteractionTracingMetrics",["requireCond","cr:1195003"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1195003")}),null);
__d("InteractionTracingLoomProvider",["requireCond","cr:1221437"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1221437")}),null);
__d("VisualCompletionLoomProvider",["requireCond","cr:1221438"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1221438")}),null);
__d("FBLoomEventBuffer",["performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";var g;a=function(){function a(){this.$1=[]}var c=a.prototype;c.addEvent=function(a,c){this.$1.push({event:a,timestamp:(a=c)!=null?a:(g||(g=b("performanceAbsoluteNow")))()})};c.flushEvents=function(){return this.$1};return a}();e.exports=a}),null);
__d("FBLoomSerializer",["SnappyCompressUtil"],(function(a,b,c,d,e,f){"use strict";function g(){return!window.Uint8Array||!window.btoa?!1:!0}function a(a,c,d){c=c.flushEvents();if(!g())return null;var e=a.start_time_us,f=a.end_time_us,h=e/1e3,i=f/1e3;if(d!=null){var j=h-d.stats.timeOrigin,k=i-d.stats.timeOrigin;d.trace.samples=d.trace.samples.filter(function(a){return a.timestamp>=j&&a.timestamp<=k})}var l=JSON.stringify(a)+"\n{}\n"+JSON.stringify(d||null)+"\n",m=0;c.forEach(function(a){var b=Math.round(a.timestamp*1e3);if(b<e||b>f)return;var c=b-m;m=b;b=a.event;a=[c,b.type];switch(b.type){case"QPL_ANNOTATION":a.push(b.markerId);a.push(b.instanceKey);a.push(b.annotationKey);a.push(b.annotationValue);break;case"QPL_START":a.push(b.markerId);a.push(b.instanceKey);break;case"QPL_END":a.push(b.markerId);a.push(b.instanceKey);a.push(b.action);break;case"QPL_POINT":a.push(b.markerId);a.push(b.instanceKey);a.push(b.name);b.data!=null&&a.push(b.data);break;case"RESOURCE_TIMING_START":a.push(b.resourceType);a.push(b.resourceId);a.push(b.resourceName);a.push(b.encodedSize);a.push(b.decodedSize);a.push(b.transferSize);break;case"RESOURCE_TIMING_END":a.push(b.resourceType);a.push(b.resourceId);break;case"RESOURCE_TIMING_POINT":a.push(b.resourceType);a.push(b.resourceId);a.push(b.pointName);break;case"INTERACTION_TRACE_START":a.push(b.traceId);a.push(b.execUnitName);a.push(b.blockName);a.push(b.blockType);a.push(b.traceType);break;case"INTERACTION_TRACE_END":a.push(b.traceId);a.push(b.execUnitName);a.push(b.blockName);a.push(b.blockType);a.push(b.traceType);a.push(b.blockAnnotations);break;case"INTERACTION_TRACE_POINT":a.push(b.traceId);a.push(b.execUnitName);a.push(b.blockName);a.push(b.pointName);a.push(b.pointAnnotations);break;case"VISUAL_COMPLETION_RECT":a.push(b.elementType);a.push(b.depth);a.push(b.x);a.push(b.y);a.push(b.width);a.push(b.height);a.push(b.mutationType);break;case"VISUAL_COMPLETION_PROGRESS":a.push(b.progress);break;case"JS_SCHEDULER_QUEUE":a.push(b.priority);a.push(b.queueSize);break}l+=JSON.stringify(a)+"\n"});return b("SnappyCompressUtil").compressStringToSnappy(l)}e.exports={isSupported:g,serialize:a}}),null);
__d("QPLLoomProvider",["QuickPerformanceLogger"],(function(a,b,c,d,e,f){"use strict";var g=function(){function a(a){var c=this;this.$2={};this.$1=b("QuickPerformanceLogger").addListener({onMarkerStart:function(b,d,e){e>=a.startTime&&a.buffer.addEvent({type:"QPL_START",markerId:b,instanceKey:d},e),c.$2[b]||(c.$2[b]={}),c.$2[b][d]=e},onMarkerEnd:function(b,c,d,e){e>=a.startTime&&a.buffer.addEvent({type:"QPL_END",action:b,markerId:c,instanceKey:d},e)},onMarkerPoint:function(b,c,d,e,f){f>=a.startTime&&a.buffer.addEvent({type:"QPL_POINT",markerId:b,instanceKey:c,name:d,data:e},f)},onAnnotation:function(b,d,e,f){var g=c.$2[b];g=g==null?void 0:g[d];g!=null&&g>=a.startTime&&a.buffer.addEvent({type:"QPL_ANNOTATION",markerId:b,instanceKey:d,annotationKey:e,annotationValue:f},g)}})}var c=a.prototype;c.loomTraceWillEnd=function(){this.$1.dispose()};return a}();e.exports={loomProviderId:"QPL",isSupported:function(){return!0},getInstance:function(a){return new g(a)}}}),null);
__d("clamp",[],(function(a,b,c,d,e,f){function a(a,b,c){if(a<b)return b;return a>c?c:a}e.exports=a}),null);
__d("ResourceTimingLoomProvider",["clamp","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";var g;function h(a){var b=a.indexOf("?");return b==-1?a:a.substring(0,b)}function i(a,b){b=b.substring(b.lastIndexOf(".")+1);if(b=="js"||b=="css")return b;else if(a=="img"||b=="png"||b=="jpg"||b=="ico")return"img";else return a}var j=function(){a.isSupported=function(){return window.performance&&window.performance.getEntriesByType&&window.performance.timing&&window.performance.timing.navigationStart};function a(a){this.$1=a}var c=a.prototype;c.loomTraceWillEnd=function(){var a=this.$1;if(a!=null){var c=a.startTime,d=(g||(g=b("performanceAbsoluteNow")))(),e=performance.timing.navigationStart;window.performance.getEntriesByType("resource").filter(function(a){return a.startTime<a.responseEnd&&a.startTime+e>=c&&a.responseEnd+e<=d}).forEach(function(c,d){var f=c.startTime+e,g=c.responseEnd+e,j=h(c.name),k=i(c.initiatorType,j);a.buffer.addEvent({type:"RESOURCE_TIMING_START",resourceType:k,resourceId:d,resourceName:j,encodedSize:c.encodedBodySize,decodedSize:c.decodedBodySize,transferSize:c.transferSize},f);["requestStart","responseStart"].forEach(function(h){var i=c[h]+e;a.buffer.addEvent({type:"RESOURCE_TIMING_POINT",resourceType:k,resourceId:d,pointName:h},b("clamp")(i,f,g))});a.buffer.addEvent({type:"RESOURCE_TIMING_END",resourceType:k,resourceId:d},g)})}this.$1=null};return a}();e.exports={loomProviderId:"ResourceTiming",isSupported:function(){return j.isSupported()},getInstance:function(a){return new j(a)}}}),null);
__d("FBLoom",["Promise","requireCond","Banzai","CurrentUser","FBLoomEventBuffer","FBLoomSerializer","InteractionTracingLoomProvider","cr:1094133","cr:955714","PerfXSharedFields","QPLLoomProvider","Random","ResourceTimingLoomProvider","SiteData","VisualCompletionLoomProvider","WebLoomConfig","clearTimeout","ifRequired","performanceAbsoluteNow","promiseDone","recoverableViolation","setTimeoutAcrossTransitions","uuid"],(function(a,b,c,d,e,f){"use strict";var g,h=6e4;a=function(){function a(){this.$4=[b("ResourceTimingLoomProvider"),b("InteractionTracingLoomProvider"),b("QPLLoomProvider"),b("VisualCompletionLoomProvider"),b("cr:1094133")].filter(Boolean),b("cr:955714")!=null&&b("cr:955714").isSupported()&&this.$4.push(b("cr:955714")),this.$3=new Set(this.$4.map(function(a){return a.loomProviderId})),this.$1=new Map(),this.$2=new Map(),this.$5=b("FBLoomSerializer").isSupported(),this.$6=!1,this.$7=1,this.$8=new Map(),this.$9=b("uuid")(),this.$10=1,this.$11=new Map(),this.$12=new Set()}var c=a.prototype;c.getNextSequenceNumber=function(){var a=this.$10;this.$10++;return a};c.getSessionId=function(){return this.$9};c.getActiveTraces=function(){return this.$1};c.addProvider=function(a){this.$4.push(a)};c.addStatusListener=function(a){var b=this,c=this.$7++;this.$8.set(c,a);return{dispose:function(){b.$8["delete"](c)}}};c.$13=function(a,b,c,d){var e=a+"_"+b;a={type:"QPL",qpl_marker_id:String(a),qpl_instance_key:b,sample_rate:d};return this.startTrace(e,a,c)};c.maybeStartTraceForQPL=function(a,c,d){var e=b("WebLoomConfig").qpl_sample_rates[a];return e&&b("Random").coinflip(e)?this.$13(a,c,d,e):null};c.maybeEndTraceForQPL=function(a,b,c,d){a=a+"_"+b;this.$1.has(a)&&this.endTrace(a,c,d)};c.startManualTrace=function(){this.$13(45088769,0,(g||(g=b("performanceAbsoluteNow")))(),1)};c.endManualTrace=function(){this.maybeEndTraceForQPL(45088769,0,(g||(g=b("performanceAbsoluteNow")))(),{qpl_action:2})};c.startTrace=function(a,c,d,e){var f=this;e===void 0&&(e=this.$3);if(!this.$5)return null;if(this.$1.has(a)){b("recoverableViolation")("Already running trace for triggerId: "+a,"web_loom");return null}var i=this.$10++,j={buffer:new(b("FBLoomEventBuffer"))(),triggerId:a,triggerInfo:c,startTime:d,sequenceNumber:i},k=new Set(),l=[];this.$4.forEach(function(a){e.has(a.loomProviderId)&&a.isSupported()&&(l.push(a.getInstance(j)),k.add(a.loomProviderId))});var m="STARTED";this.$1.set(a,{traceContext:j,providerInstances:l,status:m,startURI:window.location.href});this.$8.forEach(function(a){return a(j,m)});this.$11.set(a,b("setTimeoutAcrossTransitions")(function(){f.$12.add(a),f.endTrace(a,(g||(g=b("performanceAbsoluteNow")))(),{qpl_action:113,active_continuations:b("ifRequired")("JSTracing",function(b){return b.dumpActiveContinuations(a)},function(){return[]})})},h));c=this.$9+"_"+i;return{traceReferenceId:c,loomProviders:k}};c.endTrace=function(a,c,d){var e=this,f=this.$1.get(a);if(!f){this.$12.has(a)?this.$12["delete"](a):b("recoverableViolation")("No trace running for triggerId: "+a,"web_loom");return!1}var g=f.traceContext.sequenceNumber;this.$1["delete"](a);this.$2.set(g,f);this.$14(f,"END_PENDING");b("clearTimeout")(this.$11.get(a));var h=[];f.providerInstances.forEach(function(a){a=a.loomTraceWillEnd();a&&h.push(a)});var i=window.location.href;b("promiseDone")(b("Promise").all(h),function(){var a=b("PerfXSharedFields").getCommonData(),h=f.traceContext.triggerInfo;a={app_id:b("CurrentUser").getAppID(),start_time_us:Math.round(f.traceContext.startTime*1e3),end_time_us:Math.round(c*1e3),trigger_id:f.traceContext.triggerId,trigger_info:h,trigger_metadata:d,device_num_cores:a.num_cores,device_ram_bytes:a.ram_gb*1073741824,network_effective_connection_type:a.effective_connection_type,network_downlink_bps:a.downlink_megabits*1e3,network_rtt_ms:a.rtt_ms,client_rev:b("SiteData").client_revision,server_rev:b("SiteData").server_revision,spin_mode:b("SiteData").spin,start_uri:f.startURI,end_uri:i};a=b("FBLoomSerializer").serialize(a,f.traceContext.buffer,f.traceContext.jsSelfProfilerData);if(a!=null){a={trace:a,session_id:e.$9,sequence_number:f.traceContext.sequenceNumber,qpl_marker_id:h.qpl_marker_id,trace_policy:h.trace_policy,sample_rate:h.sample_rate};b("Banzai").post("loom_trace",a,{compress:!1,callback:function(){e.$14(f,"COMPLETE"),e.$2["delete"](g)},delay:e.$6?b("Banzai").VITAL_WAIT:b("Banzai").BASIC_WAIT});e.$14(f,"UPLOAD_PENDING")}else e.$14(f,"COMPLETE"),e.$2["delete"](g)},function(a){e.$14(f,"ERROR"),e.$2["delete"](g)});return!0};c.flush=function(a){var c=new Set(),d=new Set();this.$2.forEach(function(a){a.status==="END_PENDING"?c.add(a.traceContext.sequenceNumber):a.status==="UPLOAD_PENDING"&&d.add(a.traceContext.sequenceNumber)});if(c.size>0)var e=this.addStatusListener(function(d){c["delete"](d.sequenceNumber),c.size===0&&(b("Banzai").flush(a,a),e.dispose())});else d.size>0?b("Banzai").flush(a,a):a&&a()};c.setIsDevToolsConnected=function(a){this.$6=a};c.$14=function(a,b){a.status=b,this.$8.forEach(function(b){return b(a.traceContext,a.status)})};return a}();e.exports=new a()}),null);
__d("FBLoomInteractionSampling",["WebLoomConfig"],(function(a,b,c,d,e,f){"use strict";function a(a,c){var d=0;for(var e=b("WebLoomConfig").interactions,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;if(h.trace_policy!==null&&h.trace_policy!==a)continue;if(h.qpl_marker_ids&&!h.qpl_marker_ids.includes(c))continue;d=h.sample_rate;break}return d}e.exports={getSampleRate:a}}),null);
__d("FBLoomBlue",["FBLoom","FBLoomInteractionSampling","Random","performanceNavigationStart"],(function(a,b,c,d,e,f){"use strict";var g=b("performanceNavigationStart")(),h=new Set(["InteractionTracing","ResourceTiming"]);a=function(){function a(){}var c=a.prototype;c.maybeStartTraceForInteraction=function(a,c,d,e,f){var i=b("FBLoomInteractionSampling").getSampleRate(e,d);if(!b("Random").coinflip(i))return null;f=f+g;c={interaction_class:c,interaction_id:a,qpl_marker_id:String(d),sample_rate:i,trace_policy:e,type:"INTERACTION"};return b("FBLoom").startTrace(a,c,f,h)};c.endTraceForInteraction=function(a,c,d,e){d=Object.assign({},d);d.qpl_action=e;e=c+g;return b("FBLoom").endTrace(a,e,d)};return a}();e.exports=new a()}),null);
__d("HeroTracingMetrics",[],(function(a,b,c,d,e,f){"use strict";var g=new Map();function h(a,b){a=g.get(a);if(a==null)return;a.completed==null&&b(a)}a=function(){function a(){}var b=a.prototype;b.start=function(a,b,c,d,e,f){b={metadata:{},start:b,subSpans:{},traceId:a,type:c,qplEvent:e,interactionClass:d,tracePolicy:f};g.set(a,b);return b};b.end=function(a,b){a=g.get(a);a&&(a.completed=b)};b.addSubspan=function(a,b,c,d,e,f){h(a,function(a){var g={data:f,end:e,start:d,type:c};a.subSpans[b]?a.subSpans[b].push(g):a.subSpans[b]=[g]})};b.get=function(a){return g.get(a)};return a}();e.exports=new a()}),null);
__d("HeroInteractionTracing",["FBLoomBlue","HeroTracingMetrics","performanceNow","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g,h=function(){function a(a){this.$2=null,this.$1=a}var c=a.prototype;c.maybeStartLoomTrace=function(){var a=this.$1,c=a.qplEvent,d=a.interactionClass,e=a.tracePolicy;a=a.start;var f=null;if(c!=null&&d!=null){d=b("FBLoomBlue").maybeStartTraceForInteraction(this.$1.traceId,d,c,e,a);f=d==null?void 0:d.traceReferenceId}else b("recoverableViolation")("missing required data to start FBLoom trace for HeroInteractionTracing","comet_infra");this.$2=f;f==null&&b("HeroTracingMetrics").end(this.$1.traceId,(g||(g=b("performanceNow")))())};c.addSubspan=function(a,c,d,e,f){b("HeroTracingMetrics").addSubspan(this.$1.traceId,a,c,d,e,f)};c.addMetadata=function(a,b){var c=this.$1;c.metadata[a]=b};c.end=function(){var a=this.$1,c=a.qplEvent;if(a.completed==null&&c!=null){c=(g||(g=b("performanceNow")))();a.completed=c;b("FBLoomBlue").endTraceForInteraction(a.traceId,c,a.metadata,2)}};return a}();a=function(){function a(){this.$1=new Map()}var c=a.prototype;c.getOrCreate=function(a){var c=this.$1.get(a);if(c!=null)return c;c=b("HeroTracingMetrics").get(a);if(c==null)return null;c=new h(c);c.maybeStartLoomTrace();this.$1.set(a,c);return c};c.end=function(a){if(b("HeroTracingMetrics").get(a)==null)return;a=this.getOrCreate(a);a&&a.end()};return a}();e.exports=new a()}),null);
__d("CometInteractionTracingMetricsBlue",["HeroInteractionTracing"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={addBootload:function(a,b,c,d){},addGlobalMetadata:function(a,b){},addMarkerPoint:function(a,b,c,d){},addMetadata:function(a,b){},addRequireDeferred:function(a,b){return function(a,b){}},addSubspan:function(a,b,c,d,e){},addTag:function(a,b){},endHeroInteraction:function(a){},forEach:function(a){}};return a};c={addFactoryTiming:function(a,b){},addGlobalMetadata:function(a,b,c){},addHiddenTiming:function(a,b){},addImagePreloader:function(a,b,c){},addMarkerPoint:function(a,b,c,d,e){},addMetadata:function(a,b,c){},addOfflineTiming:function(a,b){},addPayloadResource:function(a,b,c){},addPayloadTiming:function(a,b,c){},addReactRender:function(a,b,c,d,e,f,g){},addSubspan:function(a,b,c,d,e,f){},addTag:function(a,b,c){},addTracedInteraction:function(a){return{bootloads:{},commitSet:new Set(),factoryTimings:[],hasVcReport:!1,hiddenTimings:[],imagePreloaderTimings:{},markerPoints:{},metadata:{},navigationTiming:{},offlineTimings:[],payloadResources:{},payloadTimings:{},reactRender:{},requireDeferreds:{},start:a.timestamp,subSpans:{},tagSet:{},traceId:a.name,wasCanceled:!1,wasOffline:!1}},complete:function(a){},currentInteractionLogger:a,getHeroInteractionLogger:function(){return{addMetadata:function(a,c,d){a=b("HeroInteractionTracing").getOrCreate(a);a&&a.addMetadata(c,d)},addSubspan:function(a,c,d,e,f,g){a=b("HeroInteractionTracing").getOrCreate(a);a&&a.addSubspan(c,d,e,f,g)},endHeroInteraction:function(a){b("HeroInteractionTracing").end(a)}}},dump:function(){return{}},get:function(a){return null},init:function(){},listen:function(a){return{cancel:function(){}}},removeMarkerPoint:function(a,b){},setInteractionClass:function(a,b){},setInteractionType:function(a,b,c,d){}};e.exports=c}),null);
__d("EncryptedImg",["EncryptedImgUtils","URI","XHRRequest","getCrossOriginTransport"],(function(a,b,c,d,e,f){var g,h=babelHelpers["extends"]({insertIntoStyleBackgroundImage:function(a,b){b=function(a,b){a&&(a.style.backgroundImage="url('"+b+"')")}.bind(void 0,b);h.load(a,b)},insertIntoDOM:function(a,b){b=function(a,b){a&&a.setAttribute("src",b)}.bind(void 0,b);h.load(a,b)},load:function(a,c,d){d===void 0&&(d=!0);a=new(g||(g=b("URI")))(a);var e=b("EncryptedImgUtils").extractKey(a);e=i.bind(void 0,e,c,d);e.includeHeaders=!0;new(b("XHRRequest"))(a.toString()).setTransportBuilder(b("getCrossOriginTransport")).setMethod("GET").setResponseType("arraybuffer").setResponseHandler(e).send()},dataUrlPrefix:function(a,b){b===void 0&&(b=32);if(!a.startsWith("data:"))return a;var c=a.indexOf(",");(c<0||c>b)&&(c=b);return a.slice(0,c)}},b("EncryptedImgUtils"));e.exports=h;function i(a,b,c,d,e){if(!a){b(l(d,k(e)));return}a=j(a);var f=new Uint8Array(d);d=f.subarray(2,14);f=f.subarray(14,f.length);var g={name:"AES-GCM",iv:d,tagLength:128};window.crypto.subtle.importKey("raw",a,g,!1,["encrypt","decrypt"]).then(function(a){return window.crypto.subtle.decrypt(g,a,f)}).then(function(a){c?b(l(a,k(e))):b(a)})["catch"](function(){})}function j(a){if(typeof a==="string"){var b=new Uint8Array(Math.floor(a.length/2)),c=0;a.replace(/(..)/g,function(a){b[c++]=parseInt(a,16)});return b}return null}function k(a){var b="image/jpeg";a=a.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);a&&a.length>1&&(b=a[1]);return b}function l(a,b){a=new Uint8Array(a);var c="";for(var d=0,e=a.byteLength;d<e;++d)c+=String.fromCharCode(a[d]);return"data:"+b+";base64,"+window.btoa(c)}}),null);
__d("InteractionTracingLoomProviderBlue",["HeroTracingMetrics","performanceNavigationStart"],(function(a,b,c,d,e,f){"use strict";var g=b("performanceNavigationStart")(),h=function(){var c=a.prototype;c.$2=function(a,b){var c=this.$1;if(!c)return;c.buffer.addEvent(a,g+b)};c.$3=function(a,b,c){var d=this,e=a.subSpans;c=function(c){e[c].forEach(function(e,f){if(e.type==="HeroTracing"){f={blockName:c+"_"+f,blockType:e.type,execUnitName:c,traceId:b,traceType:a.type};d.$2(babelHelpers["extends"]({type:"INTERACTION_TRACE_START"},f),e.start);d.$2(babelHelpers["extends"]({blockAnnotations:e.data,type:"INTERACTION_TRACE_END"},f),e.end)}})};for(var f in e)c(f)};function a(a){this.$1=a}c.loomTraceWillEnd=function(){var a=this.$1;if(!a)return;a=a.triggerInfo;if(a.type==="INTERACTION"&&a.interaction_id!=null){a=b("HeroTracingMetrics").get(a.interaction_id);a&&this.$3(a,a.traceId,a.qplEvent)}};return a}();e.exports={loomProviderId:"InteractionTracing",isSupported:function(){return!0},getInstance:function(a){return new h(a)}}}),null);
__d("VisualCompletionLoomProviderBlue",[],(function(a,b,c,d,e,f){"use strict";var g=function(){function a(){}var b=a.prototype;b.loomTraceDidBegin=function(a){};b.loomTraceWillEnd=function(){};return a}();e.exports={loomProviderId:"VisualCompletion",isSupported:function(){return!1},getInstance:function(a){return new g()}}}),null);
__d("bs_caml_builtin_exceptions",[],(function(a,b,c,d,e,f){"use strict";a=["Out_of_memory",0];b=["Sys_error",-1];c=["Failure",-2];d=["Invalid_argument",-3];e=["End_of_file",-4];var g=["Division_by_zero",-5],h=["Not_found",-6],i=["Match_failure",-7],j=["Stack_overflow",-8],k=["Sys_blocked_io",-9],l=["Assert_failure",-10],m=["Undefined_recursive_module",-11];a.tag=248;b.tag=248;c.tag=248;d.tag=248;e.tag=248;g.tag=248;h.tag=248;i.tag=248;j.tag=248;k.tag=248;l.tag=248;m.tag=248;f.out_of_memory=a;f.sys_error=b;f.failure=c;f.invalid_argument=d;f.end_of_file=e;f.division_by_zero=g;f.not_found=h;f.match_failure=i;f.stack_overflow=j;f.sys_blocked_io=k;f.assert_failure=l;f.undefined_recursive_module=m}),null);
__d("bs_caml_array",["bs_caml_builtin_exceptions"],(function(a,b,c,d,e,f){"use strict";function a(b,c,a){var d=new Array(a),e=0;c=c;while(e<a)d[e]=b[c],e=e+1|0,c=c+1|0;return d}function g(a,b){while(!0){var c=b,d=a;if(c){b=c[1];a=c[0].length+d|0;continue}else return d}}function h(a,b,c){while(!0){var d=c,e=b;if(d){var f=d[0],g=f.length;e=e;var h=0;while(h<g)a[e]=f[h],e=e+1|0,h=h+1|0;c=d[1];b=e;continue}else return 0}}function c(a){var b=g(0,a);b=new Array(b);h(b,0,a);return b}function d(a,c,d){if(c<0||c>=a.length)throw[b("bs_caml_builtin_exceptions").invalid_argument,"index out of bounds"];a[c]=d;return 0}function e(a,c){if(c<0||c>=a.length)throw[b("bs_caml_builtin_exceptions").invalid_argument,"index out of bounds"];return a[c]}function i(a,b){var c=new Array(a);for(var d=0,a=a-1|0;d<=a;++d)c[d]=b;return c}function j(a){var b=new Array(a);for(var c=0,a=a-1|0;c<=a;++c)b[c]=0;return b}function k(b,c,d,e,a){if(e<=c){for(var f=0,h=a-1|0;f<=h;++f)d[f+e|0]=b[f+c|0];return 0}else{for(var f=a-1|0;f>=0;--f)d[f+e|0]=b[f+c|0];return 0}}function l(a){return a.slice(0)}f.caml_array_dup=l;f.caml_array_sub=a;f.caml_array_concat=c;f.caml_make_vect=i;f.caml_make_float_vect=j;f.caml_array_blit=k;f.caml_array_get=e;f.caml_array_set=d}),null);
__d("bs_caml_option",[],(function(a,b,c,d,e,f){"use strict";var g=[];function h(a){if(a===void 0){var b=[g,0];b.tag=256;return b}else if(a!==null&&a[0]===g){b=a[1]+1|0;b=[g,b];b.tag=256;return b}else return a}function a(a){if(a===null||a===void 0)return;else return h(a)}function b(a){if(a===void 0)return;else return h(a)}function c(a){if(a===null)return;else return h(a)}function i(a){if(a!==null&&a[0]===g){var b=a[1];if(b===0)return;else return[g,b-1|0]}else return a}function d(a){if(a===void 0)return;else return i(a)}function e(a){if(a===void 0)return;else return i(a)[1]}f.nullable_to_opt=a;f.undefined_to_opt=b;f.null_to_opt=c;f.valFromOption=i;f.some=h;f.option_get=d;f.option_get_unwrap=e}),null);
__d("bs_curry",["bs_caml_array"],(function(a,b,c,d,e,f){"use strict";function g(a,c){while(!0){var d=c,e=a,f=e.length;f=f===0?1:f;var h=d.length;h=f-h|0;if(h===0)return e.apply(null,d);else if(h<0){c=b("bs_caml_array").caml_array_sub(d,f,-h|0);a=e.apply(null,b("bs_caml_array").caml_array_sub(d,0,f));continue}else return function(b,a){return function(c){return g(b,a.concat([c]))}}(e,d)}}function h(a,b,c){switch(c){case 1:return a(b);case 2:return function(c){return a(b,c)};case 3:return function(c,d){return a(b,c,d)};case 4:return function(c,d,e){return a(b,c,d,e)};case 5:return function(c,d,e,f){return a(b,c,d,e,f)};case 6:return function(c,d,e,f,g){return a(b,c,d,e,f,g)};case 7:return function(c,d,e,f,g,h){return a(b,c,d,e,f,g,h)};default:return g(a,[b])}}function i(a,b){var c=a.length;if(c===1)return a(b);else return h(a,b,c)}function a(a){var b=a.length;if(b===1)return a;else return function(b){return i(a,b)}}function j(a,b,c,d){switch(d){case 1:return g(a(b),[c]);case 2:return a(b,c);case 3:return function(d){return a(b,c,d)};case 4:return function(d,e){return a(b,c,d,e)};case 5:return function(d,e,f){return a(b,c,d,e,f)};case 6:return function(d,e,f,g){return a(b,c,d,e,f,g)};case 7:return function(d,e,f,g,h){return a(b,c,d,e,f,g,h)};default:return g(a,[b,c])}}function k(a,b,c){var d=a.length;if(d===2)return a(b,c);else return j(a,b,c,d)}function c(a){var b=a.length;if(b===2)return a;else return function(b,c){return k(a,b,c)}}function l(a,b,c,d,e){switch(e){case 1:return g(a(b),[c,d]);case 2:return g(a(b,c),[d]);case 3:return a(b,c,d);case 4:return function(e){return a(b,c,d,e)};case 5:return function(e,f){return a(b,c,d,e,f)};case 6:return function(e,f,g){return a(b,c,d,e,f,g)};case 7:return function(e,f,g,h){return a(b,c,d,e,f,g,h)};default:return g(a,[b,c,d])}}function m(a,b,c,d){var e=a.length;if(e===3)return a(b,c,d);else return l(a,b,c,d,e)}function d(a){var b=a.length;if(b===3)return a;else return function(b,c,d){return m(a,b,c,d)}}function n(a,b,c,d,e,f){switch(f){case 1:return g(a(b),[c,d,e]);case 2:return g(a(b,c),[d,e]);case 3:return g(a(b,c,d),[e]);case 4:return a(b,c,d,e);case 5:return function(f){return a(b,c,d,e,f)};case 6:return function(f,g){return a(b,c,d,e,f,g)};case 7:return function(f,g,h){return a(b,c,d,e,f,g,h)};default:return g(a,[b,c,d,e])}}function o(a,b,c,d,e){var f=a.length;if(f===4)return a(b,c,d,e);else return n(a,b,c,d,e,f)}function e(a){var b=a.length;if(b===4)return a;else return function(b,c,d,e){return o(a,b,c,d,e)}}function p(a,b,c,d,e,f,h){switch(h){case 1:return g(a(b),[c,d,e,f]);case 2:return g(a(b,c),[d,e,f]);case 3:return g(a(b,c,d),[e,f]);case 4:return g(a(b,c,d,e),[f]);case 5:return a(b,c,d,e,f);case 6:return function(g){return a(b,c,d,e,f,g)};case 7:return function(g,h){return a(b,c,d,e,f,g,h)};default:return g(a,[b,c,d,e,f])}}function q(a,b,c,d,e,f){var g=a.length;if(g===5)return a(b,c,d,e,f);else return p(a,b,c,d,e,f,g)}function r(a){var b=a.length;if(b===5)return a;else return function(b,c,d,e,f){return q(a,b,c,d,e,f)}}function s(a,b,c,d,e,f,h,i){switch(i){case 1:return g(a(b),[c,d,e,f,h]);case 2:return g(a(b,c),[d,e,f,h]);case 3:return g(a(b,c,d),[e,f,h]);case 4:return g(a(b,c,d,e),[f,h]);case 5:return g(a(b,c,d,e,f),[h]);case 6:return a(b,c,d,e,f,h);case 7:return function(g){return a(b,c,d,e,f,h,g)};default:return g(a,[b,c,d,e,f,h])}}function t(a,b,c,d,e,f,g){var h=a.length;if(h===6)return a(b,c,d,e,f,g);else return s(a,b,c,d,e,f,g,h)}function u(a){var b=a.length;if(b===6)return a;else return function(b,c,d,e,f,g){return t(a,b,c,d,e,f,g)}}function v(a,b,c,d,e,f,h,i,j){switch(j){case 1:return g(a(b),[c,d,e,f,h,i]);case 2:return g(a(b,c),[d,e,f,h,i]);case 3:return g(a(b,c,d),[e,f,h,i]);case 4:return g(a(b,c,d,e),[f,h,i]);case 5:return g(a(b,c,d,e,f),[h,i]);case 6:return g(a(b,c,d,e,f,h),[i]);case 7:return a(b,c,d,e,f,h,i);default:return g(a,[b,c,d,e,f,h,i])}}function w(a,b,c,d,e,f,g,h){var i=a.length;if(i===7)return a(b,c,d,e,f,g,h);else return v(a,b,c,d,e,f,g,h,i)}function x(a){var b=a.length;if(b===7)return a;else return function(b,c,d,e,f,g,h){return w(a,b,c,d,e,f,g,h)}}function y(a,b,c,d,e,f,h,i,j,k){switch(k){case 1:return g(a(b),[c,d,e,f,h,i,j]);case 2:return g(a(b,c),[d,e,f,h,i,j]);case 3:return g(a(b,c,d),[e,f,h,i,j]);case 4:return g(a(b,c,d,e),[f,h,i,j]);case 5:return g(a(b,c,d,e,f),[h,i,j]);case 6:return g(a(b,c,d,e,f,h),[i,j]);case 7:return g(a(b,c,d,e,f,h,i),[j]);default:return g(a,[b,c,d,e,f,h,i,j])}}function z(a,b,c,d,e,f,g,h,i){var j=a.length;if(j===8)return a(b,c,d,e,f,g,h,i);else return y(a,b,c,d,e,f,g,h,i,j)}function A(a){var b=a.length;if(b===8)return a;else return function(b,c,d,e,f,g,h,i){return z(a,b,c,d,e,f,g,h,i)}}f.app=g;f.curry_1=h;f._1=i;f.__1=a;f.curry_2=j;f._2=k;f.__2=c;f.curry_3=l;f._3=m;f.__3=d;f.curry_4=n;f._4=o;f.__4=e;f.curry_5=p;f._5=q;f.__5=r;f.curry_6=s;f._6=t;f.__6=u;f.curry_7=v;f._7=w;f.__7=x;f.curry_8=y;f._8=z;f.__8=A}),null);