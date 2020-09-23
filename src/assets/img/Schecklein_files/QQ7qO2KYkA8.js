if (self.CavalryLogger) { CavalryLogger.start_js(["GOP3C"]); }

__d("TranslationRating",[],(function(a,b,c,d,e,f){e.exports={UNDEFINED:0,VERY_BAD:1,BAD:2,OK:3,GOOD:4,VERY_GOOD:5}}),null);
__d("Button.react",["cx","AbstractButton.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.use||"default",c=this.props.size||"medium";c="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(c==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return h.jsx(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,c)}))};return c}(h.Component);a.propTypes={use:b("prop-types").oneOf(["special","confirm","default"]),size:b("prop-types").oneOf(["medium","large"]),suppressed:b("prop-types").bool};e.exports=a}),null);
__d("LiveShoppingViewerTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LiveShoppingViewerLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LiveShoppingViewerLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LiveShoppingViewerLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setProductItemID=function(a){this.$1.product_item_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={event:!0,product_item_id:!0,time:!0,vc:!0,video_id:!0,weight:!0};e.exports=a}),null);
__d("VideoPollsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:VideoPollsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:VideoPollsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:VideoPollsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAdBreakVideoID=function(a){this.$1.ad_break_video_id=a;return this};c.setCometDesign=function(a){this.$1.comet_design=a;return this};c.setCorrectOptionIds=function(a){this.$1.correct_option_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setDerivedFieldsInputMap=function(a){this.$1.derived_fields_input_map=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setDestinationSurface=function(a){this.$1.destination_surface=a;return this};c.setEnableWasLiveVoting=function(a){this.$1.enable_was_live_voting=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExceptionMsg=function(a){this.$1.exception_msg=a;return this};c.setExceptionTrace=function(a){this.$1.exception_trace=a;return this};c.setNumComponentsInPayload=function(a){this.$1.num_components_in_payload=a;return this};c.setNumberOfExistingPolls=function(a){this.$1.number_of_existing_polls=a;return this};c.setOptionIds=function(a){this.$1.option_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setOptionType=function(a){this.$1.option_type=a;return this};c.setOwnerID=function(a){this.$1.owner_id=a;return this};c.setPigeonSessionID=function(a){this.$1.pigeon_session_id=a;return this};c.setPollCreationType=function(a){this.$1.poll_creation_type=a;return this};c.setPublishError=function(a){this.$1.publish_error=a;return this};c.setQuestionText=function(a){this.$1.question_text=a;return this};c.setRankingPayloadAvgCtrValue=function(a){this.$1.ranking_payload_avg_ctr_value=a;return this};c.setReshareMenuComposerSessionID=function(a){this.$1.reshare_menu_composer_session_id=a;return this};c.setShowPollResultsState=function(a){this.$1.show_poll_results_state=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoBroadcastCvc=function(a){this.$1.video_broadcast_cvc=a;return this};c.setVideoCardID=function(a){this.$1.video_card_id=a;return this};c.setVideoChannelEntryPoint=function(a){this.$1.video_channel_entry_point=a;return this};c.setVideoID=function(a){this.$1.video_id=a;return this};c.setVideoOffsetEnd=function(a){this.$1.video_offset_end=a;return this};c.setVideoOffsetStart=function(a){this.$1.video_offset_start=a;return this};c.setVideoPollCardSource=function(a){this.$1.video_poll_card_source=a;return this};c.setVideoPollDuration=function(a){this.$1.video_poll_duration=a;return this};c.setVideoPollID=function(a){this.$1.video_poll_id=a;return this};c.setVideoPollVoterID=function(a){this.$1.video_poll_voter_id=a;return this};c.setVideoPollWwwPlacement=function(a){this.$1.video_poll_www_placement=a;return this};c.setVotingPillRenderSurface=function(a){this.$1.voting_pill_render_surface=a;return this};c.setVpvDuration=function(a){this.$1.vpv_duration=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={ad_break_video_id:!0,comet_design:!0,correct_option_ids:!0,derived_fields_input_map:!0,destination_surface:!0,enable_was_live_voting:!0,event:!0,exception_msg:!0,exception_trace:!0,num_components_in_payload:!0,number_of_existing_polls:!0,option_ids:!0,option_type:!0,owner_id:!0,pigeon_session_id:!0,poll_creation_type:!0,publish_error:!0,question_text:!0,ranking_payload_avg_ctr_value:!0,reshare_menu_composer_session_id:!0,show_poll_results_state:!0,time:!0,vc:!0,video_broadcast_cvc:!0,video_card_id:!0,video_channel_entry_point:!0,video_id:!0,video_offset_end:!0,video_offset_start:!0,video_poll_card_source:!0,video_poll_duration:!0,video_poll_id:!0,video_poll_voter_id:!0,video_poll_www_placement:!0,voting_pill_render_surface:!0,vpv_duration:!0,weight:!0};e.exports=a}),null);
__d("WoodhengePromotionStrings",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={SUPPORT_NOW_CTA_TITLE:g._("Werde Unterst\u00fctzer"),SUPPORT_NOW_CTA_DESCRIPTION:function(a){return g._("Unterst\u00fctze {Page Name} und profitiere von den Vorteilen.",[g._param("Page Name",a)])},SUPPORT_NOW_CTA_BUTTON_TEXT:g._("Jetzt unterst\u00fctzen"),START_FREE_TRIAL_CTA_TITLE:g._("Tritt der Community bei"),START_FREE_TRIAL_CTA_DESCRIPTION:function(a){return g._("Schlie\u00dfe ein Abonnement ab und unterst\u00fctze {Page Name}.",[g._param("Page Name",a)])},START_FREE_TRIAL_CTA_BUTTON_TEXT:g._("1 Monat gratis"),COMPOSER_NUX_TEXT:g._("F\u00fcge einen Call to Action-Button hinzu, um deine Fan-Abonnements bekannt zu machen."),SUPPORTER_GOAL_MODAL_HEADER:g._("Lege ein Ziel fest"),SUPPORTER_GOAL_MODAL_DESCRIPTION_PART_1:g._("Lege ein Ziel fest und biete deiner Community einen Anreiz, um es zu erreichen."),SUPPORTER_GOAL_MODAL_DESCRIPTION_PART_2:g._("Dieses Ziel erscheint, wenn du einen Abonnement-Button zu einem Beitrag hinzuf\u00fcgst. F\u00fcr das Ziel gilt kein Zeitlimit, es kann jederzeit bearbeitet werden und wird automatisch entfernt, sobald es erreicht ist."),SUPPORTER_GOAL_HEADER:g._("Ziel"),SUPPORTER_GOAL_SHOW_CURRENT_TOTAL_NUMBER_CHECKBOX_TEXT:g._("Aktuelle Zielerreichung anzeigen"),SUPPORTER_GOAL_SHOW_CURRENT_TOTAL_NUMBER_CHECKBOX_TOOLTIP:g._("Hier wird die aktuelle Zielerreichung angezeigt. Beispiel: Wenn du neue Unterst\u00fctzer gewinnen m\u00f6chtest, wird hier die aktuelle Anzahl der Unterst\u00fctzer angezeigt."),SUPPORTER_GOAL_TITLE_HEADER:g._("Titel des Ziels"),SUPPORTER_GOAL_TITLE_GHOST_TEXT:function(a){return a?g._("Verfasse einen Titel f\u00fcr dein Ziel ..."):g._("Erweitern wir die Fan-Community!")},SUPPORTER_GOAL_INCENTIVE_HEADER:g._("Motivierende Worte"),SUPPORTER_GOAL_INCENTIVE_GHOST_TEXT:function(a){return a?g._("Verfasse eine Nachricht an deine Abonnenten, sobald du das Ziel erreicht hast und bedanke dich bei ihnen ..."):g._("Wenn wir dieses Ziel erreichen, gew\u00e4hre ich meinen Unterst\u00fctzern einen Einblick in die Erstellung meines Contents!")},SUPPORTER_GOAL_INCENTIVE_TOOLTIP:g._("Durch Belohnungen kannst du andere noch mehr motivieren, dir beim Erreichen deines Ziels zu helfen. Stelle sicher, dass es sich um eine realistische Belohnung handelt."),SUPPORTER_GOAL_DROPDOWN_MENU_WITHOUT_TOTAL_NUMBER:function(a){return g._("{Number of supporters selected} neue Unterst\u00fctzer",[g._param("Number of supporters selected",a)])},SUPPORTER_GOAL_DROPDOWN_MENU_WITH_TOTAL_NUMBER:function(a){return g._("{Number of supporters selected} Unterst\u00fctzer",[g._param("Number of supporters selected",a)])},SUPPORTER_GOAL_DROPDOWN_MENU_PLACEHOLDER_TEXT:g._("Kein Ziel ausgew\u00e4hlt"),ADD_SUPPORTER_GOAL_BUTTON_TEXT:g._("Ziel hinzuf\u00fcgen"),ADD_SUPPORTER_GOAL_BUTTON_TOOLTIP:g._("Erstelle ein Ziel, um neue Unterst\u00fctzer zu gewinnen. Dieses Ziel wird in deinem Beitrag neben dem Abonnement-Button angezeigt."),PROGRESS_BAR_DESCRIPTION_WITH_TOTAL_NUMBER:function(a,b){return g._("{current progress number} von {target progress number} Unterst\u00fctzer",[g._param("current progress number",a),g._param("target progress number",b)])},PROGRESS_BAR_DESCRIPTION_WITHOUT_TOTAL_NUMBER:function(a,b){return g._("{current progress number} von {target progress number} neuen Unterst\u00fctzern",[g._param("current progress number",a),g._param("target progress number",b)])},SUPPORTER_GOAL_NULLSTATE_TEXT:g._("Dein Ziel erscheint hier."),SUPPORTER_GOAL_PROMPT_MESSAGE:g._("Poste etwas \u00fcber dein Ziel")};e.exports=a}),null);
__d("FBBIcon.react",["Image.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx("div",{style:{borderRadius:"50%",backgroundColor:"var(fds-spectrum-grape)",height:"24px",width:"24px"},children:g.jsx(b("Image.react"),{src:a.src})})}e.exports=a}),null);
__d("FBBPluginCollapsedSnippet.react",["cx","CSSAnimationBuilder","FBBIcon.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=300,j=3e3;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isInitialCountdown:!0,visible:!0},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentWillAppear=function(a){this.componentWillEnter(a)};d.componentWillEnter=function(a){if(!this.$2)return;a=b("CSSAnimationBuilder").keyframeAnimation(this.$2).defineKeyframe("0%",{opacity:0}).defineKeyframe("100%",{opacity:1}).setDuration(i/1e3).setIterationCount(1).setFinishedCallback(a);a.start()};d.componentWillLeave=function(a){if(!this.$2)return;a=b("CSSAnimationBuilder").keyframeAnimation(this.$2).defineKeyframe("0%",{opacity:1}).defineKeyframe("100%",{opacity:0}).setDuration(i/1e3).setIterationCount(1).setFinishedCallback(a);a.start()};d.componentDidMount=function(){var a=this;this.$1=this.props.vpc.addListener("VideoControls/visibilityUpdate",function(b){b=b.areControlsVisible;if(a.state.isInitialCountdown)return;a.setState({visible:b})});this.state.isInitialCountdown&&(this.$3=window.setTimeout(function(){var b=a.props.vpc.getOption("VideoControls","areControlsVisible");!b?a.setState({visible:!1,isInitialCountdown:!1}):a.setState({isInitialCountdown:!1})},j))};d.componentWillUnmount=function(){this.$1.remove(),window.clearTimeout(this.$3)};d.render=function(){var a=this;return h.jsx("div",{onClick:this.props.onClick,role:"link",style:{cursor:"pointer",opacity:this.state.visible?1:0},tabIndex:0,className:b("joinClasses")("_3_mp",this.props.className),ref:function(b){a.$2=b},children:h.jsx(b("FBBIcon.react"),{src:this.props.iconSrc})})};return c}(h.Component);e.exports=a}),null);
__d("FBBReactPluginView.react",["ix","cx","AbstractButton.react","Image.react","LeftRight.react","React","asset","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=function(a){return i.jsxs("div",{className:b("joinClasses")("_2kqz",a.className),children:[i.jsxs(b("LeftRight.react"),{direction:"right",children:[i.jsx("span",{className:"_1ip-",children:a.title}),i.jsx(b("AbstractButton.react"),{className:"_7vw5",label:a.labelCloseButton,labelIsHidden:!0,onClick:a.onClick,role:"button",image:i.jsx(b("Image.react"),{src:g("515977")})})]}),i.jsx("div",{className:"_1ip_",children:a.body})]})};e.exports=a}),null);
__d("XVideoPollVoteCardTallyController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/poll_tally/",{poll_id:{type:"Int",required:!0},video_id:{type:"Int",required:!0}})}),null);
__d("FBBTimePluginStateController",["AsyncRequest","VideoPollsTypedLogger","XVideoPollVoteCardTallyController","clearTimeout","Arbiter","gkx","once","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g=Object.freeze({HIDDEN:"Hidden",SNIPPET:"Snippet",EXPANDED:"Expanded",ICON:"Icon",PREVIEW:"Preview"}),h=Object.freeze({EXPAND:"Expand",COLLAPSE:"Collapse",CONDENSE:"Condense"}),i=8e3;a=function(){function a(a,c,d,e,f,j,k){var l=this;this.$5=function(a){};this.tallyPollCardShownOnce=b("once")(function(){l.$14(),l.$15("vote_card_shown")});this.logPreviewPollCardShownOnce=b("once")(function(){l.$15("vote_card_preview_shown")});this.$16=function(a){if(l.$10())return;var c=l.$2.getSource()==="tahoe"||l.$2.getSource()==="permalink",d=c||l.$13;if(!d){b("clearTimeout")(l.$6);l.$17(g.HIDDEN);return}if(!l.$20(a.position)&&!(l.$3===g.HIDDEN)&&!(l.$3===g.EXPANDED)){b("clearTimeout")(l.$6);l.$17(g.HIDDEN);return}switch(l.$3){case g.HIDDEN:l.$20(a.position)&&(!l.$13&&b("gkx")("780732")?l.$17(g.SNIPPET):c?l.$17(g.EXPANDED):l.$17(g.PREVIEW));return;case g.SNIPPET:l.$6=b("setTimeout")(function(){l.$3===g.SNIPPET&&l.$17(g.ICON)},i);return;case g.EXPANDED:l.tallyPollCardShownOnce();l.$8();b("clearTimeout")(l.$6);if(!l.$20(a.position)){l.initiateAction(h.COLLAPSE);return}else if(!c&&l.$13){l.initiateAction(h.CONDENSE);return}return;case g.PREVIEW:l.logPreviewPollCardShownOnce(),b("clearTimeout")(l.$6),!l.$20(a.position)?l.initiateAction(h.COLLAPSE):c&&l.initiateAction(h.EXPAND)}};this.$2=c;this.$3=a;this.$4=d;this.$11=j;this.$12=!1;this.$1=d.key;this.$10=f.bind(this,this.$1);this.$8=e.bind(this,this.$1);this.$9=e.bind(this,null);this.$13=k;this.$7=this.$2.addListener("updateStatus",this.$16);this.$2.addListener("stateChange",function(){if(l.$2.isState("finished")){window.clearTimeout(l.$6);l.$17(g.HIDDEN);return}});b("Arbiter").subscribe("FeedPollPillClicked",this.$18.bind(this));b("Arbiter").subscribe("PollIconClicked",this.$19.bind(this))}var c=a.prototype;c.registerComponentControl=function(a){this.$5=a};c.initiateAction=function(a){if(a===h.COLLAPSE){var b=this.$2.getCurrentTimePosition();this.$20(b)?b=g.ICON:b=g.HIDDEN}else a===h.CONDENSE?b=g.PREVIEW:b=g.EXPANDED;this.$3=b;this.$5(this.$3);(a===h.COLLAPSE||a===h.CONDENSE)&&this.$9()};c.destroy=function(){this.$7.remove()};c.$17=function(a){if(this.$10())return;this.$11.pollID!==null&&this.$11.pollOwnerID!==null&&(a===g.SNIPPET&&this.$12!==!0&&(this.$15("www_full_screen_player_fbb_snippet_rendered"),this.$12=!0));this.$3=a;this.$5(a)};c.$18=function(a,b){b.pluginID!==this.$1?this.initiateAction(h.COLLAPSE):this.initiateAction(h.EXPAND)};c.$19=function(a){a=this.$2.getCurrentTimePosition();this.$20(a)&&this.initiateAction(h.EXPAND)};c.$20=function(a){var b=this.$4,c=b.hideTime;b=b.releaseTime;return a>=b&&(c<0||a<c)};c.$15=function(a){new(b("VideoPollsTypedLogger"))().setEvent(a).setVideoPollID(this.$11.pollID).setOwnerID(this.$11.pollOwnerID).setVideoID(this.$11.videoID).setCometDesign(this.$13).log()};c.updateHideTime=function(b){if(this.$4.hideTime===b)return this;this.destroy();return new a(this.$3,this.$2,babelHelpers["extends"]({},this.$4,{hideTime:b}),this.$8,this.$10,this.$11,this.$13)};c.$14=function(){var a=this.$11,c=a.pollID;a=a.videoID;if(c==null||a==null)return;c=b("XVideoPollVoteCardTallyController").getURIBuilder().setInt("poll_id",c).setInt("video_id",a).getURI();new(b("AsyncRequest"))().setURI(c).setMethod("POST").send()};return a}();e.exports={FBBTimePluginStateController:a,FBBViewStates:g,FBBViewActions:h}}),null);
__d("VideoPlayerFairplayLicenseHandler",["EventEmitter","EventListener","URI","VideoPlayerWindowUtils","XHRRequest","unrecoverableViolation"],(function(a,b,c,d,e,f){var g;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){var g;g=a.call(this)||this;g.$VideoPlayerFairplayLicenseHandler1=d;g.$VideoPlayerFairplayLicenseHandler2=c;g.$VideoPlayerFairplayLicenseHandler3=e;g.$VideoPlayerFairplayLicenseHandler4=f;b("EventListener").listen(d,"webkitneedkey",g.$VideoPlayerFairplayLicenseHandler5.bind(babelHelpers.assertThisInitialized(g)));return g}var d=c.prototype;d.$VideoPlayerFairplayLicenseHandler5=function(a){var c=this;a=a.initData;var d=new Uint16Array(a.buffer);d=String.fromCharCode.apply(null,d).substring(8);var e,f=this.$VideoPlayerFairplayLicenseHandler1;if(f.webkitKeys==null){var g=b("VideoPlayerWindowUtils").WebKitMediaKeys;if(g!=null&&g.isTypeSupported("com.apple.fps.1_0","video/mp4"))e="com.apple.fps.1_0";else throw b("unrecoverableViolation")("Key System not supported","FairplayLicenseHandler");this.$VideoPlayerFairplayLicenseHandler1.webkitSetMediaKeys(new g(e))}if(f.webkitKeys==null)throw b("unrecoverableViolation")("Could not create MediaKeys","FairplayLicenseHandler");g=this.concatInitDataIdAndCertificate(a,d);e=this.$VideoPlayerFairplayLicenseHandler1.webkitKeys.createSession("video/mp4",g);if(!e)throw b("unrecoverableViolation")("Could not create key session",e);e.contentId=d;b("EventListener").listen(e,"webkitkeymessage",this.$VideoPlayerFairplayLicenseHandler6.bind(this));b("EventListener").listen(e,"webkitkeyerror",function(a){c.emit("error",{error:"webkitkeyerror"})})};d.concatInitDataIdAndCertificate=function(a,b){var c=new Uint16Array(new ArrayBuffer(b.length*2));for(var d=0,e=b.length;d<e;d++)c[d]=b.charCodeAt(d);b=window.atob(this.$VideoPlayerFairplayLicenseHandler2);d=new Uint8Array(new ArrayBuffer(b.length));for(var e=0;e<b.length;e++)d[e]=b.charCodeAt(e);e=0;b=new ArrayBuffer(a.byteLength+4+c.byteLength+4+d.byteLength);var f=new DataView(b),g=new Uint8Array(b,e,a.byteLength);g.set(a);e+=a.byteLength;f.setUint32(e,c.byteLength,!0);e+=4;g=new Uint16Array(b,e,c.byteLength/2);g.set(c);e+=g.byteLength;f.setUint32(e,d.byteLength,!0);e+=4;a=new Uint8Array(b,e,d.byteLength);a.set(d);return new Uint8Array(b,0,b.byteLength)};d.$VideoPlayerFairplayLicenseHandler6=function(a){var c=this,d=a.target;a=a.message;a=window.btoa(String.fromCharCode.apply(null,new Uint8Array(a)));var e=this.$VideoPlayerFairplayLicenseHandler4[d.contentId];new(b("XHRRequest"))(new(g||(g=b("URI")))(e)).setMethod("POST").setRawData(a).setResponseType("text").setResponseHandler(function(a){c.$VideoPlayerFairplayLicenseHandler7(a,d)}).setRequestHeader("Content-type","application/x-www-form-urlencoded").setErrorHandler(function(){c.$VideoPlayerFairplayLicenseHandler8()}).send()};d.$VideoPlayerFairplayLicenseHandler7=function(a,b){a=window.atob(a);var c=new Uint8Array(new ArrayBuffer(a.length*2));for(var d=0,e=a.length;d<e;d++)c[d]=a.charCodeAt(d);b.update(c)};d.$VideoPlayerFairplayLicenseHandler8=function(){this.emit("error",{error:"Fairplay License fetch failed"})};return c}(b("EventEmitter"));e.exports=a}),null);
__d("StrSet",[],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.$2={},this.$1=0,a&&this.addAll(a)}var b=a.prototype;b.add=function(a){Object.prototype.hasOwnProperty.call(this.$2,a)||(this.$2[a]=!0,this.$1++);return this};b.addAll=function(a){a.forEach(this.add,this);return this};b.remove=function(a){Object.prototype.hasOwnProperty.call(this.$2,a)&&(delete this.$2[a],this.$1--);return this};b.removeAll=function(a){a.forEach(this.remove,this);return this};b.toArray=function(){return Object.keys(this.$2)};b.toMap=function(a){var b={};Object.keys(this.$2).forEach(function(c){b[c]=typeof a==="function"?a(c):a||!0});return b};b.contains=function(a){return Object.prototype.hasOwnProperty.call(this.$2,a)};b.count=function(){return this.$1};b.clear=function(){this.$2={};this.$1=0;return this};b.clone=function(){return new a(this)};b.forEach=function(a,b){Object.keys(this.$2).forEach(a,b)};b.map=function(a,b){return Object.keys(this.$2).map(a,b)};b.some=function(a,b){return Object.keys(this.$2).some(a,b)};b.every=function(a,b){return Object.keys(this.$2).every(a,b)};b.filter=function(b,c){return new a(Object.keys(this.$2).filter(b,c))};b.union=function(a){return this.clone().addAll(a)};b.intersect=function(a){return this.filter(function(b){return a.contains(b)})};b.difference=function(a){var b=this;return a.filter(function(a){return!b.contains(a)})};b.equals=function(a){var b=function(a,b){return a===b?0:a<b?-1:1},c=this.toArray();a=a.toArray();if(c.length!==a.length)return!1;var d=c.length;c=c.sort(b);a=a.sort(b);while(d--)if(c[d]!==a[d])return!1;return!0};return a}();e.exports=a}),null);
__d("ContentTranslationStrings",["fbt","TranslationRating"],(function(a,b,c,d,e,f,g){a={SEE_TRANSLATION:g._("\u00dcbersetzung anzeigen"),SEE_TRANSLATION_TIP:g._("Diesen Kommentar \u00fcbersetzen"),NO_TRANSLATION_AVAILABLE:g._("Keine \u00dcbersetzung verf\u00fcgbar"),AUTOMATICALLY_TRANSLATED:g._("Automatisch \u00fcbersetzt"),HIDE_ORIGINAL:g._("Original verbergen"),SEE_ORIGINAL:g._("Original anzeigen"),SEE_ORIGINAL_LINK:g._("Original anzeigen"),UNDO:g._("R\u00fcckg\u00e4ngig"),CANCEL:g._("Abbrechen"),SUBMIT:g._("Speichern"),DONE:g._("Fertig"),CLOSE:g._("Schlie\u00dfen"),SEARCH:g._("Suche"),ENTER_TRANSLATION:g._("Gib deine \u00dcbersetzung hier ein"),EDIT_TRANSLATION_THANKS:g._("Vielen Dank! Mit deinem Feedback k\u00f6nnen wir die \u00dcbersetzungsqualit\u00e4t verbessern."),EDIT_TRANSLATION_DIALOG_TITLE_ERROR:g._("Fehler beim Einreichen"),EDIT_TRANSLATION_MENU:g._("Ich habe einen besseren \u00dcbersetzungsvorschlag"),RATE_TRANSLATION:g._("Bewerte diese \u00dcbersetzung"),I_DONT_KNOW:g._("Ich wei\u00df es nicht"),NO_MATCHING_LANGUAGES:g._("Keine \u00fcbereinstimmende Sprache"),LANGUAGE_SETTINGS:g._("Spracheinstellungen"),CLICK_TO_RATE:g._("Klicke zum Bewerten auf einen Stern"),TAP_TO_RATE:g._("Tippe zum Bewerten auf einen Stern"),ORIGINAL_TEXT:g._("Originaltext:"),YOUR_TRANSLATION:g._("Deine \u00dcbersetzung:"),SETTINGS_SAVED:g._("Spracheinstellungen erfolgreich gespeichert."),REPORT_LANGUAGE_THANKS_FACEBOOK:g._("Danke, dass du uns diesen Fehler mitgeteilt hast. Dein Feedback hilft dabei, die \u00dcbersetzungen f\u00fcr alle auf Facebook zu verbessern."),REPORT_LANGUAGE_THANKS_WORKPLACE:g._("Danke, dass du uns diesen Fehler gemeldet hast. Dein Feedback tr\u00e4gt dazu bei, die \u00dcbersetzungen f\u00fcr alle auf Workplace zu verbessern."),LANGUAGE_SETTINGS_REMINDER:g._("Du kannst das jederzeit in deinen Spracheinstellungen \u00e4ndern."),CROWDSOURCING_TARGET_DIALECT_DIALOG:g._("Einstellungen"),TRANSLATE_ALL_TEXT:g._("Alle Kommentare \u00fcbersetzen"),NUM_TRANSLATIONS_TEXT:g._("\u00dcbersetzungen"),getTranslatedFromTo:function(a,b){return g._("\u00dcbersetzung: {source language} &gt; {target language}",[g._param("source language",a),g._param("target language",b)])},getTranslatedFrom:function(a){return g._("\u00dcbersetzung: {source language}",[g._param("source language",a)])},getReportLanguageDialogBody:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("Bist du sicher, dass dieser Content nicht auf {language} war?",[g._param("language",a)]):g._("Bist du sicher, dass dieser Beitrag nicht auf {language} war?",[g._param("language",a)])},getReportLanguage:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("Content war nicht auf {language}",[g._param("language",a)]):g._("Beitrag war nicht in {language}",[g._param("language",a)])},getReportLanguageSelector:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("Dieser Content war urspr\u00fcnglich auf: {language selector}",[g._param("language selector",a)]):g._("Dieser Beitrag war urspr\u00fcnglich auf: {language selector}",[g._param("language selector",a)])},getNeverTranslate:function(a){return g._("{language} nie \u00fcbersetzen",[g._param("language",a)])},getNeverTranslateDialog:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("Bist du sicher? Content auf {language} wird nicht f\u00fcr dich \u00fcbersetzt.",[g._param("language",a)]):g._("Bist du sicher? Beitr\u00e4ge auf {language} werden nicht f\u00fcr dich \u00fcbersetzt.",[g._param("language",a)])},getDisableAutoTranslate:function(a){return g._("Automatische \u00dcbersetzung f\u00fcr {dialect} deaktivieren",[g._param("dialect",a)])},getDisableAutoTranslateDialog:function(a,b){b===void 0&&(b=null);return b==="generic"?g._("Bist du sicher? Content auf {language} wird nicht automatisch f\u00fcr dich \u00fcbersetzt.",[g._param("language",a)]):g._("Bist du sicher? Beitr\u00e4ge auf {dialect} werden nicht automatisch f\u00fcr dich \u00fcbersetzt.",[g._param("dialect",a)])},getUserFeedbackTitleForScore:function(a){switch(a){case b("TranslationRating").VERY_BAD:return g._("Sehr schlecht.");case b("TranslationRating").BAD:return g._("Schlecht.");case b("TranslationRating").OK:return g._("OK.");case b("TranslationRating").GOOD:return g._("Gut.");case b("TranslationRating").VERY_GOOD:return g._("Sehr gut.");default:return null}},getUserFeedbackDescriptionForScore:function(a){switch(a){case b("TranslationRating").VERY_BAD:return g._("Ich verstehe nichts.");case b("TranslationRating").BAD:return g._("Ich verstehe den Gro\u00dfteil nicht.");case b("TranslationRating").OK:return g._("Ich verstehe genug davon.");case b("TranslationRating").GOOD:return g._("Ich verstehe das Meiste.");case b("TranslationRating").VERY_GOOD:return g._("Ich verstehe alles.");default:return null}}};e.exports=a}),null);
__d("Queue",[],(function(a,b,c,d,e,f){var g={};a=function(){"use strict";function a(a){this._timeout=null,this._interval=(a==null?void 0:a.interval)||0,this._processor=a==null?void 0:a.processor,this._queue=[],this._stopped=!0}var b=a.prototype;b._dispatch=function(a){var b=this;a===void 0;if(this._stopped||this._queue.length===0)return;a=this._processor;if(a==null){this._stopped=!0;throw new Error("No processor available")}var c=this._interval;if(c!=null)a.call(this,this._queue.shift()),this._timeout=setTimeout(function(){return b._dispatch()},c);else while(this._queue.length)a.call(this,this._queue.shift())};b.enqueue=function(a){this._processor&&!this._stopped?this._processor(a):this._queue.push(a);return this};b.start=function(a){a&&(this._processor=a);this._stopped=!1;this._dispatch();return this};b.isStarted=function(){return!this._stopped};b.dispatch=function(){this._dispatch(!0)};b.stop=function(a){this._stopped=!0;a&&this._timeout!=null&&clearTimeout(this._timeout);return this};b.merge=function(a,b){if(b){(b=this._queue).unshift.apply(b,a._queue)}else{(b=this._queue).push.apply(b,a._queue)}a._queue=[];this._dispatch();return this};b.getLength=function(){return this._queue.length};a.get=function(b,c){var d;b in g?d=g[b]:d=g[b]=new a(c);return d};a.exists=function(a){return a in g};a.remove=function(a){return delete g[a]};return a}();e.exports=a}),null);
__d("StaticContainer.react",["React"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.shouldComponentUpdate=function(a){return!!a.shouldUpdate};c.render=function(){var a=this.props.children;return a===null||a===!1?null:g.Children.only(a)};return b}(g.Component);e.exports=a}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("object-assign-4.1.1",[],(function(a,b,c,d,e,f){"use strict";a={};var g={exports:a};function h(){var a=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(a){if(a===null||a===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function e(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if(Object.getOwnPropertyNames(a)[0]==="5")return!1;var b={};for(var a=0;a<10;a++)b["_"+String.fromCharCode(a)]=a;a=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if(a.join("")!=="0123456789")return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return Object.keys(Object.assign({},c)).join("")!=="abcdefghijklmnopqrst"?!1:!0}catch(a){return!1}}g.exports=e()?Object.assign:function(e,f){var g,h=d(e),i;for(var j=1;j<arguments.length;j++){g=Object(arguments[j]);for(var k in g)b.call(g,k)&&(h[k]=g[k]);if(a){i=a(g);for(var l=0;l<i.length;l++)c.call(g,i[l])&&(h[i[l]]=g[i[l]])}}return h}}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("symbol-observable-1.2.0",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g};function i(){Object.defineProperty(g,"__esModule",{value:!0});g["default"]=a;function a(a){var b;a=a.Symbol;typeof a==="function"?a.observable?b=a.observable:(b=a("observable"),a.observable=b):b="@@observable";return b}}var j=!1,k=function(){j||(j=!0,i());return h.exports},l={},m={exports:l};function n(){Object.defineProperty(l,"__esModule",{value:!0});var b=k();c=c(b);function c(a){return a&&a.__esModule?a:{"default":a}}typeof self!=="undefined"?b=self:typeof window!=="undefined"?b=window:typeof a!=="undefined"?b=a:typeof m!=="undefined"?b=m:b=Function("return this")();c=c["default"](b);l["default"]=c}var o=!1,p=function(){o||(o=!0,n());return m.exports};b=function(a){switch(a){case void 0:return p()}};e.exports=b}),null);
__d("XCommerceProductItemsDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/commerce/products/{item_id}/_dialog/",{rid:{type:"Int"},rt:{type:"Enum",enumType:0},location:{type:"Enum",enumType:1},share_id:{type:"Int"},surface:{type:"String"},ref:{type:"String"},referral_story_type:{type:"Enum",enumType:1},referral_code:{type:"String"},marketplace_initial_tracking:{type:"String"},marketplace_referral_story_type:{type:"Enum",enumType:1},marketplace_tracking:{type:"String"},item_id:{type:"Int",required:!0},is_sponsored:{type:"Int"},preview_image_id:{type:"Int"},ad_id:{type:"String"}})}),null);
__d("XLiveScheduleSubscriptionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_video_schedule/subscription/",{video_broadcast_schedule_id:{type:"FBID"},video_id:{type:"FBID"},subscribe:{type:"Bool",defaultValue:!1},origin:{type:"String"},suborigin:{type:"String"}})}),null);
__d("XLtgPostTranslationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/see_translation/",{ftid:{type:"String",required:!0},text_size:{type:"Enum",defaultValue:"medium",enumType:1},data_ft:{type:"String"},tn:{type:"String"}})}),null);
__d("XVideoHomeFeedController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/watch/",{comment_id:{type:"FBID"},cursor:{type:"String"},ref:{type:"String"},t:{type:"Int"},v:{type:"String"},external_log_id:{type:"String"},q:{type:"String"},__ft__:{type:"String"},page_id:{type:"FBID"}})}),null);
__d("XWoodhengeSignupFlowDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/becomesupporter/dialog/",{page_id:{type:"FBID",required:!0},surface:{type:"String"},entrypoint_surface:{type:"String"},post_id:{type:"String"}})}),null);