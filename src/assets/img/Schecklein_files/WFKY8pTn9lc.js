if (self.CavalryLogger) { CavalryLogger.start_js(["2\/maQ"]); }

__d("Live",["Arbiter","AsyncDOM","AsyncSignal","ChannelConstants","DataStore","DOM","ServerJS","emptyFunction"],(function(a,b,c,d,e,f){function g(a,c){c=JSON.parse(JSON.stringify(c)),new(b("ServerJS"))().setRelativeTo(a).handle(c)}var h={logAll:!1,startup:function(a){h.logAll=a,h.startup=b("emptyFunction"),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("live"),h.handleMessage.bind(h))},lookupLiveNode:function(a,c){a=b("DOM").scry(document.body,".live_"+a+"_"+c);a.forEach(function(a){if(b("DataStore").get(a,"seqnum")===void 0){var c=JSON.parse(a.getAttribute("data-live"));b("DataStore").set(a,"seqnum",c.seq)}});return a},handleMessage:function(a,c){var d=c.obj;a=d.fbid;c=d.assoc;a=this.lookupLiveNode(a,c);if(!a)return!1;a.forEach(function(a){b("AsyncDOM").invoke(d.updates,a),d.js&&g(a,d.js)})},log:function(){if(h.logAll){var a=Array.from(arguments).join(":");new(b("AsyncSignal"))("/common/scribe_endpoint.php",{c:"live_sequence",m:a}).send()}}};e.exports=h}),null);