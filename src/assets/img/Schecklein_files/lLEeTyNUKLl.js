if (self.CavalryLogger) { CavalryLogger.start_js(["kUy7p"]); }

__d("UFIInstanceAction",[],(function(a,b,c,d,e,f){"use strict";a={changeOrderingMode:function(a,b){return{type:"story_change_order_mode",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,mode:b}},toggleComments:function(a){return{type:"story_toggle_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},changeCommentListVisibility:function(a,b){return{type:"story_change_visibility",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,visibility:b}},init:function(a,b){return{type:"instance_init",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,payload:b}},didRequestVODComments:function(a){return{type:"requested_vod_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},didReceiveVODComments:function(a){return{type:"received_vod_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},remove:function(a){return{type:"story_remove",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},toggleAutoTranslateCommments:function(a){return{type:"toggle_auto_translate_comments",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},toggleCommercialBreak:function(a,b){return{type:"story_toggle_commercial_break",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,inCommercial:b}},translateAll:function(a){return{type:"translate_all",instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},foundVideoPlayerController:function(a,b){return{ftentidentifier:a.ftentidentifier,instanceID:a.instanceid,videoPlayerController:b,type:"found_video_player_controller"}}};e.exports=a}),null);
__d("CommentPrivacyValue",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DEFAULT_PRIVACY:0,OWNER_OR_COMMENTER:1,FRIENDS_ONLY:2,FRIENDS_AND_POST_OWNER:3,SIDE_CONVERSATION:4,SIDE_CONVERSATION_AND_POST_OWNER:5,GRAPHQL_MULTIPLE_VALUE_HACK_DO_NOT_USE:-1})}),null);
__d("FacecastStreamingCommentDelayTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:FacecastStreamingCommentDelayLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:FacecastStreamingCommentDelayLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:FacecastStreamingCommentDelayLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.appid=a;return this};c.setAppversion=function(a){this.$1.appversion=a;return this};c.setClientUserID=function(a){this.$1.client_userid=a;return this};c.setCommentID=function(a){this.$1.comment_id=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setProtocol=function(a){this.$1.protocol=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={appid:!0,appversion:!0,client_userid:!0,comment_id:!0,event:!0,protocol:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("UFISubscriptionUpdates",["fbt","BanzaiODS","CommentPrivacyValue","FacecastStreamingCommentDelayTypedLogger","IdentityBadgeUtils","ImmutableObject","ShortProfiles","UFICentralUpdates","UFIComments","UFIConstants","UFIReactionsUtils","UFISharedDispatcher","UFIStoryAction","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";b("BanzaiODS").setEntitySample("feedback",1e-4);var h={handleLiveLike:function(a,c,d){b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_like_received");if(!c||!c.feedback_like_subscribe)return;d=c.feedback_like_subscribe.feedback;var e=c.feedback_like_subscribe.liker;if(!d||!e)return;var f=[{actiontype:b("UFIConstants").UFIActionType.LIKE_ACTION,actorid:e.id,clientid:c.feedback_like_subscribe.client_mutation_id,entidentifier:a,likesentences:{current:d.does_viewer_like?d.viewer_likes_sentence:d.viewer_does_not_like_sentence,alternate:d.does_viewer_like?d.viewer_does_not_like_sentence:d.viewer_likes_sentence},hasviewerliked:d.does_viewer_like,likecount:d.likers.count}],g=d.reactions_summary;if(g){g=b("UFIReactionsUtils").getReactionCountMapFromSummary(d.reactions_summary);var h=d.viewer_feedback_reaction_info?d.viewer_feedback_reaction_info.key:0,i=d.reaction_count_reduced?d.reaction_count_reduced:d.reactors.count;f.push({actiontype:b("UFIConstants").UFIActionType.REACTION,actorid:e.id,clientid:c.feedback_like_subscribe.client_mutation_id,entidentifier:a,viewerreaction:h,reactioncount:d.reactors.count,reactioncountreduced:i,reactioncountmap:g,reactionsentences:{current:h?d.viewer_likes_reaction_sentence:d.viewer_does_not_like_reaction_sentence,alternate:h?d.viewer_does_not_like_reaction_sentence:d.viewer_likes_reaction_sentence}})}b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{actions:f})},handleLiveShares:function(a,c,d){b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_share_received");d=c&&c.feedback.share_count_reduced!==null;if(!d)return;d=[{actiontype:b("UFIConstants").UFIActionType.SHARE_COUNT_UPDATE_ACTION,sharecountreduced:c.feedback.share_count_reduced,entidentifier:a}];b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{actions:d})},handleLiveComment:function(a,c,d){b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_comment_received");d=c&&c.comment;if(!d)return;a=this.prepareCommentData(a,d,c.client_mutation_id);c.serialized_short_profiles&&b("ShortProfiles").setMulti(JSON.parse(c.serialized_short_profiles));b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{comments:[a]})},handleLiveStreamingComment:function(a,c,d,e){b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_streaming_comment_received");var f=c&&c.comment;if(!f)return;e&&new(b("FacecastStreamingCommentDelayTypedLogger"))().setCommentID(f.legacy_fbid).setEvent("push").log();var g=this.prepareCommentData(a,f,c.client_mutation_id);c.serialized_short_profiles&&b("ShortProfiles").setMulti(JSON.parse(c.serialized_short_profiles));b("requireWeak")("UFILiveStreamingComments",function(b){b.enqueueSubscribedComment(a,{comments:[g],streamingstate:"live",priority:f.live_streaming_comment_priority},c.feedback.top_level_comments.total_count)})},handleLiveStreamingReply:function(a,c,d){b("BanzaiODS").bumpEntityKey(2966,"feedback","gql_streaming_reply_received");if(c==null)return;d=c.comment;if(d==null)return;a=this.prepareCommentData(a,d,c.client_mutation_id);c.serialized_short_profiles&&b("ShortProfiles").setMulti(JSON.parse(c.serialized_short_profiles));b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.STREAMING,{comments:[a],streamingstate:"live",priority:d.live_streaming_comment_priority})},prepareCommentData:function(a,c,d){d===void 0&&(d=null);a={__typename:"saved",author:c.author.id,body:c.body,cancomment:c.feedback.can_viewer_comment,canedit:c.can_viewer_edit,canremove:c.can_viewer_delete,canreport:c.can_viewer_report,canembed:c.can_viewer_embed,ftentidentifier:a,id:c.legacy_token,fbid:c.legacy_fbid,legacyid:c.legacy_fbid,timestamp:{time:c.created_time,text:g._("vor einigen Sekunden")},hasviewerliked:c.feedback.does_viewer_like,identityBadges:b("IdentityBadgeUtils").fromLiveVideoCommentCreateSubscription(c.identity_badges_web||[]),isauthorbot:c.isauthorbot,isauthornoncoworker:c.is_author_non_coworker,isfeatured:c.is_featured,istranslatable:c.translation_available_for_viewer,likecount:c.feedback.likers.count,viewercanlike:c.feedback.can_viewer_like,parentcommentid:c.comment_parent&&c.comment_parent.legacy_token,parentcommentauthorid:(a=c)!=null?(a=a.comment_parent)!=null?(a=a.author)!=null?a.id:a:a:a,privacy_value:b("CommentPrivacyValue")[c.comment_privacy_value],spamreplycount:0,hasConstituentBadge:c.has_constituent_badge,videoTimeOffset:c.timestamp_in_video,canviewerpin:c.can_viewer_pin,canviewerunpin:c.can_viewer_unpin,ispinnedbyauthor:c.is_author_pinned};var e=c.written_while_video_was_live;c.timestamp_in_video!=null&&e!=null&&(a.postedLiveState=e?"Live":"OnDemand");d!=null&&(a.clientid=d);if(c.attachments&&c.attachments.length){e=Object.assign({},c.attachments[0]);d=e.style_list;if(d&&d.length){var f=d[0];if(f=="sticker"){var h=e.target;a.attachment={fbid:h.id,metadata:{source_uri:h.img.uri,source_uri_2x:h.img_2x.uri,width:h.img.width,height:h.img.height,frameCount:h.frame_count,frameRate:h.frame_rate,framesPerCol:h.frames_per_column,framesPerRow:h.frames_per_row,sprite_uri:h.sprite_img&&h.sprite_img.uri,sprite_uri_2x:h.sprite_img_2x&&h.sprite_img_2x.uri},type:"sticker"}}else if(f=="photo"){h=e.target;a.attachment={fbid:h.id,metadata:{preview_uri:h.photo_img&&h.photo_img.uri,width:h.photo_img.width,height:h.photo_img.height,url:h.url},type:"photo"}}else if(f=="share"||f=="image_share")e.type="live_share",a.attachment=e;else if(f=="animated_image_share"||f=="animated_image_autoplay"||f=="animated_image_video"||f=="animated_image_video_autoplay")e.type="gif",a.attachment=e;else if(f=="video_inline")e.type="video",a.attachment=e;else if(f=="file_upload")e.type="file",a.attachment=e;else if(f=="comment_place_info")e.type="live_comment_place_info",a.attachment=e;else if(f=="donation")e.type="donation",a.attachment=e;else if(f=="TIP_JAR_PAYMENT")e.type="TIP_JAR_PAYMENT",a.attachment=e;else if(f=="chat_command_result")e.type="chat_command_result",a.attachment=e;else if(f=="COMMENT_MESSAGE_INFO")e.type="upsell_info",a.attachment=e;else if(f=="gaming_video_chat_attachment"){h=d==null?void 0:d[1];h=="marketplace_ecomm_product_item"&&(e.type="marketplace_ecomm_product_item",a.attachment=e)}}}c.translated_body_for_viewer&&(a.translationdata={sourceDialectName:c.translatability_for_viewer.source_dialect_name,targetDialectName:c.translatability_for_viewer.target_dialect_name,translatedText:c.translated_body_for_viewer,trigger:c.translatability_for_viewer.translation_type});f=c.feedback;f.reactions_summary&&(a.canviewerreact=f.can_viewer_react,a.reactioncount=f.reactors.count,a.reactioncountmap=b("UFIReactionsUtils").getReactionCountMapFromSummary(f.reactions_summary),a.reactioncountreduced=f.reaction_count_reduced?f.reaction_count_reduced:f.reactors.count,a.viewerreaction=f.viewer_feedback_reaction_info?f.viewer_feedback_reaction_info.key:0);return a},handlePinnedCommentEvent:function(a,c,d){if(c){c=h.prepareCommentData(a.ftentidentifier,c,d);b("UFIComments").setComment(c.id,new(b("ImmutableObject"))(c));b("UFISharedDispatcher").dispatch(b("UFIStoryAction").pinComment(a,c.id))}else b("UFISharedDispatcher").dispatch(b("UFIStoryAction").unpinComment(a))},handleFeedbackPinnedComment:function(a,b){var c=b.pinned_streaming_comment_pin_subscribe.pin_event.pinned_comment;b=b.pinned_streaming_comment_pin_subscribe.client_subscription_id;this.handlePinnedCommentEvent(a,c,b)},handleLivePinnedComment:function(a,b,c){c=b.pinned_comment_event_create_subscribe;if(c){c=c.pinned_comment_event.pinned_comment;b=b.client_mutation_id;this.handlePinnedCommentEvent(a,c,b)}},handleLiveCommentLike:function(a,c,d){a=c&&c.comment_like_subscribe&&c.comment_like_subscribe.feedback;if(!a)return;d=null;a.reactions_summary&&(d={reactioncount:a.reactors.count,reactioncountmap:b("UFIReactionsUtils").getReactionCountMapFromSummary(a.reactions_summary),reactioncountreduced:a.reaction_count_reduced?a.reaction_count_reduced:a.reactors.count,viewerreaction:a.viewer_feedback_reaction_info?a.viewer_feedback_reaction_info.key:0});b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{actions:[{actiontype:b("UFIConstants").UFIActionType.COMMENT_LIKE,clientid:c.comment_like_subscribe.client_mutation_id,commentid:a.legacy_comment_token,likecount:a.likers&&a.likers.count,reactiondata:d,viewerliked:a.does_viewer_like}]})},handleFacecastCommentUpdate:function(a,c,d){a=c&&c.facecast_comment_update_subscribe&&c.facecast_comment_update_subscribe.comment&&c.facecast_comment_update_subscribe.comment.feedback;if(!a)return;d=null;a.reactions_summary&&(d={reactioncount:a.reactors.count,reactioncountmap:b("UFIReactionsUtils").getReactionCountMapFromSummary(a.reactions_summary),reactioncountreduced:a.reaction_count_reduced?a.reaction_count_reduced:a.reactors.count,viewerreaction:a.viewer_feedback_reaction_info?a.viewer_feedback_reaction_info.key:0});b("UFICentralUpdates").handleUpdate(b("UFIConstants").UFIPayloadSourceType.LIVE_SEND,{actions:[{actiontype:b("UFIConstants").UFIActionType.COMMENT_LIKE,commentid:a.legacy_comment_token,likecount:a.likers&&a.likers.count,reactiondata:d,viewerliked:a.does_viewer_like}]})}};e.exports=h}),null);
__d("UFILiveVideoAutoscrollHandler",["DOM","UFIConstants","UFINewCommentsPillUtils","UFIUnseenCommentsStore","getOrCreateDOMID","queryThenMutateDOM"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){}var c=a.prototype;c.$2=function(a){a=b("DOM").scry(a,".UFILastComment");a=a.length>0?a[0]:null;var c=a?b("getOrCreateDOMID")(a):null;if(c===null||c===this.$1)return null;this.$1=c;return a};c.manageScroll=function(a,c,d,e){var f=this,g,h,i,j=0;b("queryThenMutateDOM")(function(){g=a.scrollHeight;h=a.offsetHeight;i=a.scrollTop;var b=f.$2(a);b&&(j=b.offsetHeight)},function(){var f=b("UFIUnseenCommentsStore").getCommentReactionsMenuShown(c.instanceid),k=g-h-i-j;d||k<b("UFIConstants").maxScrollDistanceForAutoScroll&&!f?(a.scrollTop=g-h,e&&e()):j>0&&b("UFINewCommentsPillUtils").updateScrolledUp(a,c)})};return a}();e.exports=a}),null);
__d("StickerInterfaces",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSAGES:"messages",NEO:"neo",COMMENTS:"comments",STICKERED:"stickered",COMPOSER:"composer",POSTS:"posts",FRAMES:"frames",SMS:"sms",MONTAGE:"montage"})}),null);
__d("UFIStickerButton.react",["cx","fbt","Arbiter","Bootloader","FocusRelocator.react","Link.react","React","StickerInterfaces","createReactClass_DEPRECATED","getObjectValues","prop-types","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");c=b("createReactClass_DEPRECATED")({displayName:"UFIStickerButton",_clickGuard:!1,_updateListener:null,_openFlyoutListener:null,_linkRef:null,propTypes:{customStickerOwnerID:(a=b("prop-types")).string,onStickerFlyoutShow:a.func,onStickerSelected:a.func.isRequired,showTooltip:a.bool,stickerInterface:a.oneOf(b("getObjectValues")(b("StickerInterfaces"))),tabIndex:a.number},getDefaultProps:function(){return{customStickerOwnerID:"",showTooltip:!0,stickerInterface:"comments"}},getInitialState:function(){return{renderFlyout:null,flyoutShown:!1}},componentDidMount:function(){var a=this;this._updateListener=b("Arbiter").subscribe("page_transition",function(){return a._hideFlyout()});this._openFlyoutListener=b("Arbiter").subscribe("GamingStickers/openFlyout",function(b,c){return a._showFlyout(c)})},componentWillUnmount:function(){this._updateListener&&this._updateListener.unsubscribe(),this._openFlyoutListener&&this._openFlyoutListener.unsubscribe()},render:function(){var a=h._("Sticker posten");return i.jsx(b("FocusRelocator.react"),{from:this._linkRef,to:this.refs.icon,children:i.jsxs(b("Link.react"),{"aria-label":a,className:"_r1a UFICommentStickerButton","data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.showTooltip?a:null,linkRef:this._setRef,onClick:this._onLinkClicked,onMouseDown:this._prepareForClick,role:"button",tabIndex:this.props.tabIndex,children:[i.jsx("div",{ref:"icon",className:"UFICommentStickerIcon"+(this.state.flyoutShown?" UFICommentStickerIconActive":"")}),this.props.children,this.state.renderFlyout?this.state.renderFlyout():null]})})},_hideFlyout:function(){this.setState({flyoutShown:!1})},_showFlyout:function(a){var c=this;b("Bootloader").loadModules(["ContextualLayerAutoFlip","LayerTabIsolation","StickersFlyout.react","XUIContextualDialog.react","StickersActions"],function(d,e,f,g,h){c.setState({flyoutShown:!0,renderFlyout:function(){return i.jsx(g,{alignment:"right",behaviors:{ContextualLayerAutoFlip:d,LayerTabIsolation:e},className:"_5e-r",contextRef:function(){return c._linkRef},onBlur:c._hideFlyout,onToggle:function(a){!a&&c.state.flyoutShown&&c._hideFlyout()},position:"above",shown:c.state.flyoutShown,hasActionableContext:!0,width:278,children:i.jsx("div",{children:i.jsx(f,{customStickerOwnerID:c.props.customStickerOwnerID,onEscKeyDown:c._hideFlyout,onStickerSelect:c._onStickerSelected,stickerInterface:c.props.stickerInterface,shown:c.state.flyoutShown})})})}}),c.props.onStickerFlyoutShow&&c.props.onStickerFlyoutShow(),a&&b("setImmediate")(function(){return h.selectTrayPack(a)})},"UFIStickerButton.react")},_prepareForClick:function(){this._clickGuard=this.state.flyoutShown},_onLinkClicked:function(a){a.preventDefault();if(this.state.renderFlyout!==null){this._clickGuard||(this.props.onStickerFlyoutShow&&this.props.onStickerFlyoutShow(),this.setState({flyoutShown:!0}));return}this._showFlyout(null)},_onStickerSelected:function(a,b,c){this.props.onStickerSelected(a,b,c),this._hideFlyout()},_setRef:function(a){this._linkRef=a}});e.exports=c}),null);
__d("LivingRoomProfileTileBadge.react",["cx","Image.react","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=a.isCommentating||a.isSpeaking,d=a.isSpeaking?h.jsx("div",{className:"_6mm6",children:h.jsx("span",{className:"_6mlm"})}):null,e=a.asset===null,f=e||a.size==="small"?null:h.jsx(b("Image.react"),{className:(a.size==="regular"?"_6y-q":"")+(a.size==="large"?" _6y-r":"")+(a.size==="extra large"?" _7a6j":""),src:a.asset}),g="_6z5p"+(c?" _6y-l":"")+(c?"":" _6y-m")+(a.size==="small"?" _6y-n":"")+(a.size==="regular"?" _6y-o":"")+(a.size==="large"?" _6y-p":"")+(a.size==="extra large"?" _7a6k":"");g=h.jsx("div",{className:g,children:f});return h.jsxs(h.Fragment,{children:[a.size!=="small"?h.jsx("div",{className:"_6y-s"+(c?" _6y-t":"")+(c?"":" _6y-u")+(a.useBackgroundColor?" _7a6y":"")}):null,e?null:g,d]})}e.exports=a}),null);