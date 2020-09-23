if (self.CavalryLogger) { CavalryLogger.start_js(["Y0CnT"]); }

__d("AppsDivebarDisplayController",["cx","AppsDivebarConfigData","Arbiter","AsyncRequest","CSS","UIPagelet","$"],(function(a,b,c,d,e,f,g){var h=171;a={isVisible:function(){if(this._visible!==void 0)return this._visible;this._visible=!b("AppsDivebarConfigData").hidden;return this._visible},showApps:function(){this._visible=!0;var a={fb_source_category:"sidebar"};b("UIPagelet").loadFromEndpoint("GamesDivebarPagelet","pagelet_canvas_nav_content",a);b("CSS").show(b("$")("apps_gripper"));b("CSS").show(b("$")("pagelet_canvas_nav_content"));b("CSS").addClass(b("$")("pagelet_canvas_nav_content"),"_4woj");b("Arbiter").inform("AppsDivebar/show-apps");new(b("AsyncRequest"))("/ajax/feed/apps/resize").setData({height:""+h,menu:!0}).setMethod("POST").send()},hideApps:function(){this._visible=!1,b("CSS").hide(b("$")("pagelet_canvas_nav_content")),b("CSS").hide(b("$")("apps_gripper")),b("Arbiter").inform("AppsDivebar/hide-apps"),new(b("AsyncRequest"))("/ajax/feed/apps/resize").setData({height:"1",menu:!0}).setMethod("POST").send()}};e.exports=a}),null);
__d("RequestsJewel",["RequestsJewelController"],(function(a,b,c,d,e,f){a=function(a,c){"use strict";var d=b("RequestsJewelController").create(a.getFlyout(),function(){return a.isOpen()});a.subscribe("marked-seen",function(){return d.markSeen()});a.subscribe("closed",function(){return d.closeHandler()});a.subscribe("opened",function(){return d.openHandler()})};e.exports=a}),null);
__d("ChatSidebarGroupCreateButtonReact.bs",["cx","fbt","bs_curry","React","QE2Logger","Link.react","ReasonReact.bs","joinClasses","MercuryConfig","MessengerGroupCreateDialogReact.bs","XWorkSaveGroupPurposeController","MessengerGroupCreationEntryPoint","WorkSyncedGroupCreationEntryPoint"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=b("MessengerGroupCreationEntryPoint").GCF_CHAT_SIDEBAR;function k(a,c){if(a)return b("ReasonReact.bs").element(void 0,void 0,b("MessengerGroupCreateDialogReact.bs").make(j,!0,c,[]));else return null}function a(a){var c=i.useState(function(){return!1}),d=c[1],e=h._("Neue Gruppe  erstellen");b("QE2Logger").logExposureForUser("workchat_synced_groups_universe",a.viewer);var f=b("MercuryConfig").WorkSyncedGroupAutoCreateEnabled?[b("XWorkSaveGroupPurposeController").getURIBuilder().setString("purpose","work_teamwork").setString("ref",b("WorkSyncedGroupCreationEntryPoint").GROUP_CREATION_ICON_ON_CHAT_SIDEBAR).setBool("back_disallowed",!0).getURI(),function(a){return 0},"dialog"]:["#",function(a){return b("bs_curry")._1(d,function(a){return!0})},""],g="_1-4-";a=a.className;a=a!==void 0?b("joinClasses")(g,a):g;return i.createElement("div",{className:"_46fv"},k(c[0],function(a){return b("bs_curry")._1(d,function(a){return!1})}),i.createElement(b("Link.react"),{"aria-label":e,"data-hover":"tooltip","data-tooltip-content":e,"data-tooltip-position":"below",className:a,href:f[0],onClick:f[1],rel:f[2]}))}f.entryPoint=j;f.renderDialog=k;f.make=a}),null);
__d("ChatSidebarComposeLink.react",["fbt","ChatOpenTabEventLogger","CurrentUser","FantaTabActions","Link.react","MessengerState.bs","React","TooltipData"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(b){return a.call(this,b)||this}var d=c.prototype;d.render=function(){var a=g._("Neue Nachricht");return h.jsx(b("Link.react"),babelHelpers["extends"]({"aria-label":a,className:this.props.className,href:"#",onClick:this.$1},b("TooltipData").propsFor(a,"below")))};d.$1=function(a){var c=b("MessengerState.bs").createNewLocalThreadGenerateID(b("CurrentUser").getID());b("FantaTabActions").openNewMessageTab(c,"compose_link");b("ChatOpenTabEventLogger").logClickOpen("sidebar",c);a.preventDefault()};return c}(h.Component);e.exports=a}),null);
__d("XChatEmojiSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/emoji_settings/",{__asyncDialog:{type:"Int"}})}),null);
__d("XVideoCallOffDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/videocall/off/",{__asyncDialog:{type:"Int"}})}),null);
__d("ChatSidebarDropdown.react",["cx","fbt","AppsDivebarDisplayController","Arbiter","AsyncRequest","BanzaiODS","Bootloader","ChatConfig","ChatOptions","ChatSidebarBotsActions","ChatSidebarBotsStore","ChatSidebarDropdownConstants","ChatVisibility","ContextualDialogArrow","ContextualLayerAutoFlip","ConversationNubUtils","CurrentUser","FantaTabActions","FBRTCCallBlockingStore","LayerHideOnBlur","Link.react","LogHistory","MenuSeparator.react","PinnedConversationNubsConfig","PopoverMenu.react","PresencePrivacy","PresenceState","React","ReactXUIMenu","SubscriptionsHandler","TrackingNodes","URI","XChatEmojiSettingsController","XVideoCallOffDialogController","emptyFunction","joinClasses","qex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("ChatSidebarBotsActions").module,k=b("ChatSidebarBotsStore").module,l=b("React"),m=b("ReactXUIMenu").SelectableItem,n=b("ReactXUIMenu").SelectableMenu,o=b("ReactXUIMenu").Item,p=b("LogHistory").getInstance("blackbird");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={appsVisible:b("AppsDivebarDisplayController").isVisible(),isConversationsEnabled:b("PinnedConversationNubsConfig").isEnabled,isDiscoverBotsHidden:k?k.getState().isHidden:!0,isOnline:b("ChatVisibility").isOnline(),isCallBlocked:b("FBRTCCallBlockingStore").getBlockingStatus(),pendingChange:!1},d.$8=function(a,b){a=b.item.getValue();b=b.item.isSelected&&b.item.isSelected();d.$5(a,!!b)},d.$27=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.startFunnel("WWW_PRESENCE_FUNNEL"),a.appendActionWithTag("WWW_PRESENCE_FUNNEL","click_gear",b("PresencePrivacy").getOnlinePolicyStr())},"ChatSidebarDropdown.react"),d.props.onShow&&d.props.onShow()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Arbiter").subscribe(["AppsDivebar/show-apps","AppsDivebar/hide-apps"],function(){a.setState({appsVisible:b("AppsDivebarDisplayController").isVisible()})}),b("PresencePrivacy").subscribe("privacy-user-presence-changed",function(){a.setState({isOnline:b("ChatVisibility").isOnline()})}),b("Arbiter").subscribe("buddylist/hide",function(){a.refs.menu.hidePopover()}),b("Arbiter").subscribe("sidebar/visibility",function(b,c){c||a.refs.menu.hidePopover()}),b("FBRTCCallBlockingStore").addListener(function(){a.setState({isCallBlocked:b("FBRTCCallBlockingStore").getBlockingStatus()})}));k&&this.$1.addSubscriptions(k.addListener(function(){a.setState({isDiscoverBotsHidden:k.getState().isHidden})}));b("PinnedConversationNubsConfig").userSettingsIsEnabled&&this.$1.addSubscriptions(b("Arbiter").subscribe(b("ConversationNubUtils").TURN_CONVERSATIONS_OFF_EVENT,function(){a.setState({isConversationsEnabled:!1})}),b("Arbiter").subscribe(b("ConversationNubUtils").TURN_CONVERSATIONS_ON_EVENT,function(){a.setState({isConversationsEnabled:!0})}));var c=b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS);this.$2(c)};d.$2=function(a){var c=null;a===void 0?c="turn_off_chat_tabs.uninitialized":a?c="turn_off_chat_tabs.true":c="turn_off_chat_tabs.false";b("BanzaiODS").bumpEntityKey(3303,"messenger_web_chat_options",c)};d.componentWillUnmount=function(){this.$1&&this.$1.release()};d.$3=function(a,b){b=b?"sidebar_dropdown_visibility_error":"sidebar_dropdown_set_visibility";p.debug(b,JSON.stringify({action:a}))};d.$4=function(a,c){var d=this;if(this.state.pendingChange)return;this.setState({pendingChange:!0});var e={};e[a]=!c;b("ChatOptions").setSetting(a,!c,"mini_sidebar_menu");new(b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(function(a){return b("PresenceState").doSync(!0)}).setErrorHandler(function(){return b("ChatOptions").setSetting(a,c,"mini_sidebar_menu_error")}).setFinallyHandler(function(){return d.setState({pendingChange:!1})}).setData(e).setAllowCrossPageTransition(!0).send()};d.$5=function(a,c){var d=!0;switch(a){case b("ChatSidebarDropdownConstants").SOUND:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").ADVANCED_SETTINGS:case b("ChatSidebarDropdownConstants").TURN_OFF_DIALOG:this.$6();this.$3(a,!1);break;case b("ChatSidebarDropdownConstants").LOWER_ALL_TABS:b("FantaTabActions").minimizeAllTabs();break;case b("ChatSidebarDropdownConstants").CLOSE_ALL_TABS:b("FantaTabActions").closeAllTabs();this.$3(a,!1);break;case b("ChatSidebarDropdownConstants").HIDE_GROUPS:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").TOGGLE_DISCOVER_BOTS:j&&j.saveSettings({isHidden:!this.state.isDiscoverBotsHidden});break;case b("ChatSidebarDropdownConstants").SIDEBAR:this.props.onToggleSidebar();d=!1;break;case b("ChatSidebarDropdownConstants").ONLINE:this.$7();this.state.isOnline?this.$3(a,!0):b("ChatVisibility").goOnline();break;case b("ChatSidebarDropdownConstants").VIDEOCALL_ON:b("FBRTCCallBlockingStore").turnOnVideoCalling();break;case b("ChatSidebarDropdownConstants").VIDEOCALL_OFF:break;case b("ChatSidebarDropdownConstants").PAUSE:break;case b("ChatSidebarDropdownConstants").SHOW_TICKER:b("Arbiter").inform("ChatSidebarDropdown/openTicker");break;case b("ChatSidebarDropdownConstants").HIDE_TICKER:b("Arbiter").inform("ChatSidebarDropdown/closeTicker");break;case b("ConversationNubUtils").TURN_CONVERSATIONS_OFF_EVENT:b("ConversationNubUtils").turnConversationsOff();break;case b("ConversationNubUtils").TURN_CONVERSATIONS_ON_EVENT:b("ConversationNubUtils").turnConversationsOn();break;case b("ChatSidebarDropdownConstants").SHOW_APPS:b("AppsDivebarDisplayController").showApps();break;case b("ChatSidebarDropdownConstants").HIDE_APPS:b("AppsDivebarDisplayController").hideApps();break;case b("ChatSidebarDropdownConstants").HIDE_ADMINED_PAGES:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").HIDE_MARKETPLACE:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").HIDE_BUSINESSES:this.$4(a,c);break;case b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS:this.$4(a,c);break}d&&this.refs.menu&&this.refs.menu.hidePopover()};d.$9=function(){return l.jsx(m,{value:b("ChatSidebarDropdownConstants").SOUND,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").SOUND),children:h._("Chat-T\u00f6ne")})};d.$10=function(){var a=b("XChatEmojiSettingsController").getURIBuilder().getURI();return l.jsx(o,{href:a,rel:"dialog",value:b("ChatSidebarDropdownConstants").EMOJI_SETTINGS,children:h._("Emoji")})};d.$11=function(){return b("CurrentUser").isWorkUser()?null:l.jsx(o,{href:new(i||(i=b("URI")))("/settings?tab=blocking"),value:b("ChatSidebarDropdownConstants").BLOCK_SETTINGS,children:h._("Blockierungseinstellungen")})};d.$12=function(){return l.jsx(o,{value:b("ChatSidebarDropdownConstants").LOWER_ALL_TABS,children:h._("Alle Chat-Tabs verbergen")})};d.$13=function(){return l.jsx(o,{value:b("ChatSidebarDropdownConstants").CLOSE_ALL_TABS,children:h._("Alle Chat-Tabs schlie\u00dfen")})};d.$14=function(){return l.jsx(o,{className:"_4kqp",value:b("ChatSidebarDropdownConstants").SIDEBAR,children:h._("Chatleiste verbergen")})};d.$15=function(){return this.props.sidebarType==="buddylist_nub"||!b("ChatConfig").get("show_admined_pages")?null:l.jsx(m,{className:"_4kqp",value:b("ChatSidebarDropdownConstants").HIDE_ADMINED_PAGES,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").HIDE_ADMINED_PAGES),children:h._("Von mir verwaltete Seiten verbergen")})};d.$16=function(){return this.props.sidebarType==="buddylist_nub"||!b("ChatConfig").get("show_businesses")?null:l.jsx(m,{className:"_4kqp",value:b("ChatSidebarDropdownConstants").HIDE_BUSINESSES,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").HIDE_BUSINESSES),children:h._("Seiten zum Kontaktieren verbergen")})};d.$17=function(){return this.props.sidebarType==="buddylist_nub"?null:l.jsx(m,{value:b("ChatSidebarDropdownConstants").HIDE_GROUPS,selected:b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").HIDE_GROUPS),children:h._("Gruppen verbergen")})};d.$18=function(){var a=this,c=b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS);c===void 0&&(c=!1);return l.jsx(m,{onClick:function(){return a.$2(!c)},value:b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS,selected:c,children:h._("Chat-Tabs deaktivieren")})};d.$19=function(){var a=b("ChatVisibility").isOnline(),c=a?new(i||(i=b("URI")))("/ajax/chat/privacy/settings_dialog.php").addQueryData("dialog_type","turn_off_dialog"):"#",d="";d=a?h._("Aktiv-Status ausschalten"):h._("Aktiv-Status einschalten");var e=a?b("ChatSidebarDropdownConstants").TURN_OFF_DIALOG:b("ChatSidebarDropdownConstants").ONLINE;if(this.props.sidebarType==="buddylist"&&!a)return null;if(b("qex")._("971346")){var f=function(){return b("Bootloader").loadModules(["MessengerDialogs.bs","SetActiveStatusViewabilityWrapper.react"],function(a,b){a.showDialog(function(){return l.jsx(b,{})})},"ChatSidebarDropdown.react")};return l.jsx(o,{rel:"",value:e,onClick:f,children:d})}else return l.jsx(o,{href:c,rel:a?"dialog":"",value:e,children:d})};d.$20=function(){var a=this.state.isCallBlocked,c=a?"#":b("XVideoCallOffDialogController").getURIBuilder().getURI(),d=a?h._("Video-\/Sprachanrufe aktivieren"):h._("Video-\/Sprachanrufe deaktivieren"),e=a?b("ChatSidebarDropdownConstants").VIDEOCALL_ON:b("ChatSidebarDropdownConstants").VIDEOCALL_OFF;return l.jsx(o,{href:c,rel:a?"":"dialog",value:e,children:d})};d.$21=function(){var a=k?k.getState().bots:[];if(!j||a.length===0)return null;a=this.state.isDiscoverBotsHidden?h._("Bot Discovery anzeigen"):h._("Bot Discovery verbergen");return l.jsx(o,{value:b("ChatSidebarDropdownConstants").TOGGLE_DISCOVER_BOTS,children:a})};d.$22=function(){if(!b("PinnedConversationNubsConfig").userSettingsIsEnabled)return null;var a=this.state.isConversationsEnabled,c=a?h._("Beitragsfenster deaktivieren"):h._("Beitragsfenster aktivieren");a=a?b("ConversationNubUtils").TURN_CONVERSATIONS_OFF_EVENT:b("ConversationNubUtils").TURN_CONVERSATIONS_ON_EVENT;return l.jsx(o,{value:a,children:c})};d.$23=function(){if(!b("ChatConfig").get("has_apps_option")||this.props.sidebarType!=="sidebar")return null;var a=this.state.appsVisible,c=a?h._("Spiele verbergen"):h._("Spiele anzeigen");a=a?b("ChatSidebarDropdownConstants").HIDE_APPS:b("ChatSidebarDropdownConstants").SHOW_APPS;return[l.jsx(o,{value:a,children:c},"apps_menu")]};d.$24=function(){var a=this.props.sidebarType==="sidebar",c=b("ChatConfig").get("has_apps_option")&&a;a=a&&b("qex")._("690094");return c||a?l.jsx(b("MenuSeparator.react"),{},"extras_separator"):null};d.$25=function(){if(this.props.sidebarType!=="sidebar"||!b("qex")._("690094"))return null;var a=b("ChatSidebarDropdownConstants").HIDE_MARKETPLACE;return[l.jsx(m,{value:a,selected:b("ChatOptions").getSetting(a),children:h._("Marketplace verbergen")},"marketplace_menu")]};d.$26=function(){return l.jsxs(n,{className:"fbChatSidebarDropdown/PopoverMenu",multiple:!0,onItemClick:this.$8,children:[this.$9(),this.$10(),this.$11(),l.jsx(b("MenuSeparator.react"),{}),this.$12(),this.$13(),this.$21(),this.$14(),this.$15(),this.$16(),this.$17(),this.$18(),this.$19(),this.$20(),this.$22(),this.$24(),this.$23(),this.$25()]})};d.render=function(){var a=h._("Optionen"),c=b("joinClasses")(this.props.className,"_5qth _5vm9"+(b("ChatVisibility").isOnline()?"":" _5vma")),d=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.DROPDOWN_BUTTON);return l.jsx(b("PopoverMenu.react"),{alignh:"right",alignv:"top",className:c,layerBehaviors:[b("ContextualLayerAutoFlip"),b("ContextualDialogArrow"),b("LayerHideOnBlur")],menu:this.$26(),onHide:this.props.onHide,onShow:this.$27,ref:"menu",children:l.jsx(b("Link.react"),{"aria-label":a,className:"_5vmb button","data-ft":d,"data-hover":"tooltip","data-tooltip-content":a,"data-tooltip-position":"below",href:"#"})})};d.$7=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.appendActionWithTag("WWW_PRESENCE_FUNNEL","sidebar_dropdown_turn_on_chat",b("PresencePrivacy").getOnlinePolicyStr()),a.endFunnel("WWW_PRESENCE_FUNNEL")},"ChatSidebarDropdown.react")};d.$6=function(){b("Bootloader").loadModules(["FunnelLogger"],function(a){a.appendActionWithTag("WWW_PRESENCE_FUNNEL","open_privacy_dialog",b("PresencePrivacy").getOnlinePolicyStr())},"ChatSidebarDropdown.react")};return c}(l.PureComponent);a.defaultProps={className:"",onHide:b("emptyFunction"),onShow:b("emptyFunction")};e.exports=a}),null);
__d("ChatSidebarGroupCreateButtonReactComponent",["ChatSidebarGroupCreateButtonReact.bs"],(function(a,b,c,d,e,f){"use strict";a=b("ChatSidebarGroupCreateButtonReact.bs").make;e.exports=a}),null);