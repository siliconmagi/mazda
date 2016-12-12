// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__43228){
var vec__43229 = p__43228;
var k = cljs.core.nth.call(null,vec__43229,(0),null);
var value = cljs.core.nth.call(null,vec__43229,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__43232 = cljs.core.seq.call(null,value);
var chunk__43233 = null;
var count__43234 = (0);
var i__43235 = (0);
while(true){
if((i__43235 < count__43234)){
var map__43236 = cljs.core._nth.call(null,chunk__43233,i__43235);
var map__43236__$1 = ((((!((map__43236 == null)))?((((map__43236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43236):map__43236);
var effect = map__43236__$1;
var ms = cljs.core.get.call(null,map__43236__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43236__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43232,chunk__43233,count__43234,i__43235,map__43236,map__43236__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43232,chunk__43233,count__43234,i__43235,map__43236,map__43236__$1,effect,ms,dispatch))
,ms);
}

var G__43240 = seq__43232;
var G__43241 = chunk__43233;
var G__43242 = count__43234;
var G__43243 = (i__43235 + (1));
seq__43232 = G__43240;
chunk__43233 = G__43241;
count__43234 = G__43242;
i__43235 = G__43243;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43232);
if(temp__4657__auto__){
var seq__43232__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43232__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__43232__$1);
var G__43244 = cljs.core.chunk_rest.call(null,seq__43232__$1);
var G__43245 = c__25898__auto__;
var G__43246 = cljs.core.count.call(null,c__25898__auto__);
var G__43247 = (0);
seq__43232 = G__43244;
chunk__43233 = G__43245;
count__43234 = G__43246;
i__43235 = G__43247;
continue;
} else {
var map__43238 = cljs.core.first.call(null,seq__43232__$1);
var map__43238__$1 = ((((!((map__43238 == null)))?((((map__43238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43238):map__43238);
var effect = map__43238__$1;
var ms = cljs.core.get.call(null,map__43238__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43238__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43232,chunk__43233,count__43234,i__43235,map__43238,map__43238__$1,effect,ms,dispatch,seq__43232__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43232,chunk__43233,count__43234,i__43235,map__43238,map__43238__$1,effect,ms,dispatch,seq__43232__$1,temp__4657__auto__))
,ms);
}

var G__43248 = cljs.core.next.call(null,seq__43232__$1);
var G__43249 = null;
var G__43250 = (0);
var G__43251 = (0);
seq__43232 = G__43248;
chunk__43233 = G__43249;
count__43234 = G__43250;
i__43235 = G__43251;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__43252 = cljs.core.seq.call(null,value);
var chunk__43253 = null;
var count__43254 = (0);
var i__43255 = (0);
while(true){
if((i__43255 < count__43254)){
var event = cljs.core._nth.call(null,chunk__43253,i__43255);
re_frame.router.dispatch.call(null,event);

var G__43256 = seq__43252;
var G__43257 = chunk__43253;
var G__43258 = count__43254;
var G__43259 = (i__43255 + (1));
seq__43252 = G__43256;
chunk__43253 = G__43257;
count__43254 = G__43258;
i__43255 = G__43259;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43252);
if(temp__4657__auto__){
var seq__43252__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43252__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__43252__$1);
var G__43260 = cljs.core.chunk_rest.call(null,seq__43252__$1);
var G__43261 = c__25898__auto__;
var G__43262 = cljs.core.count.call(null,c__25898__auto__);
var G__43263 = (0);
seq__43252 = G__43260;
chunk__43253 = G__43261;
count__43254 = G__43262;
i__43255 = G__43263;
continue;
} else {
var event = cljs.core.first.call(null,seq__43252__$1);
re_frame.router.dispatch.call(null,event);

var G__43264 = cljs.core.next.call(null,seq__43252__$1);
var G__43265 = null;
var G__43266 = (0);
var G__43267 = (0);
seq__43252 = G__43264;
chunk__43253 = G__43265;
count__43254 = G__43266;
i__43255 = G__43267;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map