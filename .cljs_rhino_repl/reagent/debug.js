// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__43425__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43426__i = 0, G__43426__a = new Array(arguments.length -  0);
while (G__43426__i < G__43426__a.length) {G__43426__a[G__43426__i] = arguments[G__43426__i + 0]; ++G__43426__i;}
  args = new cljs.core.IndexedSeq(G__43426__a,0);
} 
return G__43425__delegate.call(this,args);};
G__43425.cljs$lang$maxFixedArity = 0;
G__43425.cljs$lang$applyTo = (function (arglist__43427){
var args = cljs.core.seq(arglist__43427);
return G__43425__delegate(args);
});
G__43425.cljs$core$IFn$_invoke$arity$variadic = G__43425__delegate;
return G__43425;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__43428__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43429__i = 0, G__43429__a = new Array(arguments.length -  0);
while (G__43429__i < G__43429__a.length) {G__43429__a[G__43429__i] = arguments[G__43429__i + 0]; ++G__43429__i;}
  args = new cljs.core.IndexedSeq(G__43429__a,0);
} 
return G__43428__delegate.call(this,args);};
G__43428.cljs$lang$maxFixedArity = 0;
G__43428.cljs$lang$applyTo = (function (arglist__43430){
var args = cljs.core.seq(arglist__43430);
return G__43428__delegate(args);
});
G__43428.cljs$core$IFn$_invoke$arity$variadic = G__43428__delegate;
return G__43428;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map