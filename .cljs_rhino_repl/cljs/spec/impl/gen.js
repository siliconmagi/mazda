// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42297 = arguments.length;
var i__26163__auto___42298 = (0);
while(true){
if((i__26163__auto___42298 < len__26162__auto___42297)){
args__26169__auto__.push((arguments[i__26163__auto___42298]));

var G__42299 = (i__26163__auto___42298 + (1));
i__26163__auto___42298 = G__42299;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq42296){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42296));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42301 = arguments.length;
var i__26163__auto___42302 = (0);
while(true){
if((i__26163__auto___42302 < len__26162__auto___42301)){
args__26169__auto__.push((arguments[i__26163__auto___42302]));

var G__42303 = (i__26163__auto___42302 + (1));
i__26163__auto___42302 = G__42303;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq42300){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42300));
});

var g_QMARK__42304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_42305 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__42304){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__42304))
,null));
var mkg_42306 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__42304,g_42305){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__42304,g_42305))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__42304,g_42305,mkg_42306){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__42304).call(null,x);
});})(g_QMARK__42304,g_42305,mkg_42306))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__42304,g_42305,mkg_42306){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_42306).call(null,gfn);
});})(g_QMARK__42304,g_42305,mkg_42306))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__42304,g_42305,mkg_42306){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_42305).call(null,generator);
});})(g_QMARK__42304,g_42305,mkg_42306))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32489__auto___42325 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32489__auto___42325){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42326 = arguments.length;
var i__26163__auto___42327 = (0);
while(true){
if((i__26163__auto___42327 < len__26162__auto___42326)){
args__26169__auto__.push((arguments[i__26163__auto___42327]));

var G__42328 = (i__26163__auto___42327 + (1));
i__26163__auto___42327 = G__42328;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42325))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42325){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42325),args);
});})(g__32489__auto___42325))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32489__auto___42325){
return (function (seq42307){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42307));
});})(g__32489__auto___42325))
;


var g__32489__auto___42329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32489__auto___42329){
return (function cljs$spec$impl$gen$list(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42330 = arguments.length;
var i__26163__auto___42331 = (0);
while(true){
if((i__26163__auto___42331 < len__26162__auto___42330)){
args__26169__auto__.push((arguments[i__26163__auto___42331]));

var G__42332 = (i__26163__auto___42331 + (1));
i__26163__auto___42331 = G__42332;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42329))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42329){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42329),args);
});})(g__32489__auto___42329))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32489__auto___42329){
return (function (seq42308){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42308));
});})(g__32489__auto___42329))
;


var g__32489__auto___42333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32489__auto___42333){
return (function cljs$spec$impl$gen$map(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42334 = arguments.length;
var i__26163__auto___42335 = (0);
while(true){
if((i__26163__auto___42335 < len__26162__auto___42334)){
args__26169__auto__.push((arguments[i__26163__auto___42335]));

var G__42336 = (i__26163__auto___42335 + (1));
i__26163__auto___42335 = G__42336;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42333))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42333){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42333),args);
});})(g__32489__auto___42333))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32489__auto___42333){
return (function (seq42309){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42309));
});})(g__32489__auto___42333))
;


var g__32489__auto___42337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32489__auto___42337){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42338 = arguments.length;
var i__26163__auto___42339 = (0);
while(true){
if((i__26163__auto___42339 < len__26162__auto___42338)){
args__26169__auto__.push((arguments[i__26163__auto___42339]));

var G__42340 = (i__26163__auto___42339 + (1));
i__26163__auto___42339 = G__42340;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42337))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42337){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42337),args);
});})(g__32489__auto___42337))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32489__auto___42337){
return (function (seq42310){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42310));
});})(g__32489__auto___42337))
;


var g__32489__auto___42341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32489__auto___42341){
return (function cljs$spec$impl$gen$set(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42342 = arguments.length;
var i__26163__auto___42343 = (0);
while(true){
if((i__26163__auto___42343 < len__26162__auto___42342)){
args__26169__auto__.push((arguments[i__26163__auto___42343]));

var G__42344 = (i__26163__auto___42343 + (1));
i__26163__auto___42343 = G__42344;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42341))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42341){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42341),args);
});})(g__32489__auto___42341))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32489__auto___42341){
return (function (seq42311){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42311));
});})(g__32489__auto___42341))
;


var g__32489__auto___42345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32489__auto___42345){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42346 = arguments.length;
var i__26163__auto___42347 = (0);
while(true){
if((i__26163__auto___42347 < len__26162__auto___42346)){
args__26169__auto__.push((arguments[i__26163__auto___42347]));

var G__42348 = (i__26163__auto___42347 + (1));
i__26163__auto___42347 = G__42348;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42345))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42345){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42345),args);
});})(g__32489__auto___42345))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32489__auto___42345){
return (function (seq42312){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42312));
});})(g__32489__auto___42345))
;


var g__32489__auto___42349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32489__auto___42349){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42350 = arguments.length;
var i__26163__auto___42351 = (0);
while(true){
if((i__26163__auto___42351 < len__26162__auto___42350)){
args__26169__auto__.push((arguments[i__26163__auto___42351]));

var G__42352 = (i__26163__auto___42351 + (1));
i__26163__auto___42351 = G__42352;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42349))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42349),args);
});})(g__32489__auto___42349))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32489__auto___42349){
return (function (seq42313){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42313));
});})(g__32489__auto___42349))
;


var g__32489__auto___42353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32489__auto___42353){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42354 = arguments.length;
var i__26163__auto___42355 = (0);
while(true){
if((i__26163__auto___42355 < len__26162__auto___42354)){
args__26169__auto__.push((arguments[i__26163__auto___42355]));

var G__42356 = (i__26163__auto___42355 + (1));
i__26163__auto___42355 = G__42356;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42353))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42353){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42353),args);
});})(g__32489__auto___42353))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32489__auto___42353){
return (function (seq42314){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42314));
});})(g__32489__auto___42353))
;


var g__32489__auto___42357 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32489__auto___42357){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42358 = arguments.length;
var i__26163__auto___42359 = (0);
while(true){
if((i__26163__auto___42359 < len__26162__auto___42358)){
args__26169__auto__.push((arguments[i__26163__auto___42359]));

var G__42360 = (i__26163__auto___42359 + (1));
i__26163__auto___42359 = G__42360;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42357))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42357){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42357),args);
});})(g__32489__auto___42357))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32489__auto___42357){
return (function (seq42315){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42315));
});})(g__32489__auto___42357))
;


var g__32489__auto___42361 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32489__auto___42361){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42362 = arguments.length;
var i__26163__auto___42363 = (0);
while(true){
if((i__26163__auto___42363 < len__26162__auto___42362)){
args__26169__auto__.push((arguments[i__26163__auto___42363]));

var G__42364 = (i__26163__auto___42363 + (1));
i__26163__auto___42363 = G__42364;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42361))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42361){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42361),args);
});})(g__32489__auto___42361))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32489__auto___42361){
return (function (seq42316){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42316));
});})(g__32489__auto___42361))
;


var g__32489__auto___42365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32489__auto___42365){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42366 = arguments.length;
var i__26163__auto___42367 = (0);
while(true){
if((i__26163__auto___42367 < len__26162__auto___42366)){
args__26169__auto__.push((arguments[i__26163__auto___42367]));

var G__42368 = (i__26163__auto___42367 + (1));
i__26163__auto___42367 = G__42368;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42365))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42365){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42365),args);
});})(g__32489__auto___42365))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32489__auto___42365){
return (function (seq42317){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42317));
});})(g__32489__auto___42365))
;


var g__32489__auto___42369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32489__auto___42369){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42370 = arguments.length;
var i__26163__auto___42371 = (0);
while(true){
if((i__26163__auto___42371 < len__26162__auto___42370)){
args__26169__auto__.push((arguments[i__26163__auto___42371]));

var G__42372 = (i__26163__auto___42371 + (1));
i__26163__auto___42371 = G__42372;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42369))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42369){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42369),args);
});})(g__32489__auto___42369))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32489__auto___42369){
return (function (seq42318){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42318));
});})(g__32489__auto___42369))
;


var g__32489__auto___42373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32489__auto___42373){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42374 = arguments.length;
var i__26163__auto___42375 = (0);
while(true){
if((i__26163__auto___42375 < len__26162__auto___42374)){
args__26169__auto__.push((arguments[i__26163__auto___42375]));

var G__42376 = (i__26163__auto___42375 + (1));
i__26163__auto___42375 = G__42376;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42373))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42373),args);
});})(g__32489__auto___42373))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32489__auto___42373){
return (function (seq42319){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42319));
});})(g__32489__auto___42373))
;


var g__32489__auto___42377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32489__auto___42377){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42378 = arguments.length;
var i__26163__auto___42379 = (0);
while(true){
if((i__26163__auto___42379 < len__26162__auto___42378)){
args__26169__auto__.push((arguments[i__26163__auto___42379]));

var G__42380 = (i__26163__auto___42379 + (1));
i__26163__auto___42379 = G__42380;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42377))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42377),args);
});})(g__32489__auto___42377))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32489__auto___42377){
return (function (seq42320){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42320));
});})(g__32489__auto___42377))
;


var g__32489__auto___42381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32489__auto___42381){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42382 = arguments.length;
var i__26163__auto___42383 = (0);
while(true){
if((i__26163__auto___42383 < len__26162__auto___42382)){
args__26169__auto__.push((arguments[i__26163__auto___42383]));

var G__42384 = (i__26163__auto___42383 + (1));
i__26163__auto___42383 = G__42384;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42381))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42381),args);
});})(g__32489__auto___42381))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32489__auto___42381){
return (function (seq42321){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42321));
});})(g__32489__auto___42381))
;


var g__32489__auto___42385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32489__auto___42385){
return (function cljs$spec$impl$gen$return(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42386 = arguments.length;
var i__26163__auto___42387 = (0);
while(true){
if((i__26163__auto___42387 < len__26162__auto___42386)){
args__26169__auto__.push((arguments[i__26163__auto___42387]));

var G__42388 = (i__26163__auto___42387 + (1));
i__26163__auto___42387 = G__42388;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42385))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42385),args);
});})(g__32489__auto___42385))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32489__auto___42385){
return (function (seq42322){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42322));
});})(g__32489__auto___42385))
;


var g__32489__auto___42389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32489__auto___42389){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42390 = arguments.length;
var i__26163__auto___42391 = (0);
while(true){
if((i__26163__auto___42391 < len__26162__auto___42390)){
args__26169__auto__.push((arguments[i__26163__auto___42391]));

var G__42392 = (i__26163__auto___42391 + (1));
i__26163__auto___42391 = G__42392;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42389))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42389),args);
});})(g__32489__auto___42389))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32489__auto___42389){
return (function (seq42323){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42323));
});})(g__32489__auto___42389))
;


var g__32489__auto___42393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__32489__auto___42393){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42394 = arguments.length;
var i__26163__auto___42395 = (0);
while(true){
if((i__26163__auto___42395 < len__26162__auto___42394)){
args__26169__auto__.push((arguments[i__26163__auto___42395]));

var G__42396 = (i__26163__auto___42395 + (1));
i__26163__auto___42395 = G__42396;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32489__auto___42393))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32489__auto___42393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32489__auto___42393),args);
});})(g__32489__auto___42393))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__32489__auto___42393){
return (function (seq42324){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42324));
});})(g__32489__auto___42393))
;

var g__32502__auto___42418 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32502__auto___42418){
return (function cljs$spec$impl$gen$any(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42419 = arguments.length;
var i__26163__auto___42420 = (0);
while(true){
if((i__26163__auto___42420 < len__26162__auto___42419)){
args__26169__auto__.push((arguments[i__26163__auto___42420]));

var G__42421 = (i__26163__auto___42420 + (1));
i__26163__auto___42420 = G__42421;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42418))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42418){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42418);
});})(g__32502__auto___42418))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32502__auto___42418){
return (function (seq42397){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42397));
});})(g__32502__auto___42418))
;


var g__32502__auto___42422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32502__auto___42422){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42423 = arguments.length;
var i__26163__auto___42424 = (0);
while(true){
if((i__26163__auto___42424 < len__26162__auto___42423)){
args__26169__auto__.push((arguments[i__26163__auto___42424]));

var G__42425 = (i__26163__auto___42424 + (1));
i__26163__auto___42424 = G__42425;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42422))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42422){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42422);
});})(g__32502__auto___42422))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32502__auto___42422){
return (function (seq42398){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42398));
});})(g__32502__auto___42422))
;


var g__32502__auto___42426 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32502__auto___42426){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42427 = arguments.length;
var i__26163__auto___42428 = (0);
while(true){
if((i__26163__auto___42428 < len__26162__auto___42427)){
args__26169__auto__.push((arguments[i__26163__auto___42428]));

var G__42429 = (i__26163__auto___42428 + (1));
i__26163__auto___42428 = G__42429;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42426))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42426){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42426);
});})(g__32502__auto___42426))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32502__auto___42426){
return (function (seq42399){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42399));
});})(g__32502__auto___42426))
;


var g__32502__auto___42430 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32502__auto___42430){
return (function cljs$spec$impl$gen$char(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42431 = arguments.length;
var i__26163__auto___42432 = (0);
while(true){
if((i__26163__auto___42432 < len__26162__auto___42431)){
args__26169__auto__.push((arguments[i__26163__auto___42432]));

var G__42433 = (i__26163__auto___42432 + (1));
i__26163__auto___42432 = G__42433;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42430))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42430){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42430);
});})(g__32502__auto___42430))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32502__auto___42430){
return (function (seq42400){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42400));
});})(g__32502__auto___42430))
;


var g__32502__auto___42434 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32502__auto___42434){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42435 = arguments.length;
var i__26163__auto___42436 = (0);
while(true){
if((i__26163__auto___42436 < len__26162__auto___42435)){
args__26169__auto__.push((arguments[i__26163__auto___42436]));

var G__42437 = (i__26163__auto___42436 + (1));
i__26163__auto___42436 = G__42437;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42434))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42434){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42434);
});})(g__32502__auto___42434))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32502__auto___42434){
return (function (seq42401){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42401));
});})(g__32502__auto___42434))
;


var g__32502__auto___42438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32502__auto___42438){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42439 = arguments.length;
var i__26163__auto___42440 = (0);
while(true){
if((i__26163__auto___42440 < len__26162__auto___42439)){
args__26169__auto__.push((arguments[i__26163__auto___42440]));

var G__42441 = (i__26163__auto___42440 + (1));
i__26163__auto___42440 = G__42441;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42438))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42438){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42438);
});})(g__32502__auto___42438))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32502__auto___42438){
return (function (seq42402){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42402));
});})(g__32502__auto___42438))
;


var g__32502__auto___42442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32502__auto___42442){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42443 = arguments.length;
var i__26163__auto___42444 = (0);
while(true){
if((i__26163__auto___42444 < len__26162__auto___42443)){
args__26169__auto__.push((arguments[i__26163__auto___42444]));

var G__42445 = (i__26163__auto___42444 + (1));
i__26163__auto___42444 = G__42445;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42442))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42442){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42442);
});})(g__32502__auto___42442))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32502__auto___42442){
return (function (seq42403){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42403));
});})(g__32502__auto___42442))
;


var g__32502__auto___42446 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32502__auto___42446){
return (function cljs$spec$impl$gen$double(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42447 = arguments.length;
var i__26163__auto___42448 = (0);
while(true){
if((i__26163__auto___42448 < len__26162__auto___42447)){
args__26169__auto__.push((arguments[i__26163__auto___42448]));

var G__42449 = (i__26163__auto___42448 + (1));
i__26163__auto___42448 = G__42449;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42446))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42446){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42446);
});})(g__32502__auto___42446))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32502__auto___42446){
return (function (seq42404){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42404));
});})(g__32502__auto___42446))
;


var g__32502__auto___42450 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32502__auto___42450){
return (function cljs$spec$impl$gen$int(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42451 = arguments.length;
var i__26163__auto___42452 = (0);
while(true){
if((i__26163__auto___42452 < len__26162__auto___42451)){
args__26169__auto__.push((arguments[i__26163__auto___42452]));

var G__42453 = (i__26163__auto___42452 + (1));
i__26163__auto___42452 = G__42453;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42450))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42450){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42450);
});})(g__32502__auto___42450))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32502__auto___42450){
return (function (seq42405){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42405));
});})(g__32502__auto___42450))
;


var g__32502__auto___42454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32502__auto___42454){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42455 = arguments.length;
var i__26163__auto___42456 = (0);
while(true){
if((i__26163__auto___42456 < len__26162__auto___42455)){
args__26169__auto__.push((arguments[i__26163__auto___42456]));

var G__42457 = (i__26163__auto___42456 + (1));
i__26163__auto___42456 = G__42457;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42454))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42454){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42454);
});})(g__32502__auto___42454))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32502__auto___42454){
return (function (seq42406){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42406));
});})(g__32502__auto___42454))
;


var g__32502__auto___42458 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32502__auto___42458){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42459 = arguments.length;
var i__26163__auto___42460 = (0);
while(true){
if((i__26163__auto___42460 < len__26162__auto___42459)){
args__26169__auto__.push((arguments[i__26163__auto___42460]));

var G__42461 = (i__26163__auto___42460 + (1));
i__26163__auto___42460 = G__42461;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42458))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42458){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42458);
});})(g__32502__auto___42458))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32502__auto___42458){
return (function (seq42407){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42407));
});})(g__32502__auto___42458))
;


var g__32502__auto___42462 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32502__auto___42462){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42463 = arguments.length;
var i__26163__auto___42464 = (0);
while(true){
if((i__26163__auto___42464 < len__26162__auto___42463)){
args__26169__auto__.push((arguments[i__26163__auto___42464]));

var G__42465 = (i__26163__auto___42464 + (1));
i__26163__auto___42464 = G__42465;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42462))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42462){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42462);
});})(g__32502__auto___42462))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32502__auto___42462){
return (function (seq42408){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42408));
});})(g__32502__auto___42462))
;


var g__32502__auto___42466 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32502__auto___42466){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42467 = arguments.length;
var i__26163__auto___42468 = (0);
while(true){
if((i__26163__auto___42468 < len__26162__auto___42467)){
args__26169__auto__.push((arguments[i__26163__auto___42468]));

var G__42469 = (i__26163__auto___42468 + (1));
i__26163__auto___42468 = G__42469;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42466))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42466){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42466);
});})(g__32502__auto___42466))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32502__auto___42466){
return (function (seq42409){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42409));
});})(g__32502__auto___42466))
;


var g__32502__auto___42470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32502__auto___42470){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42471 = arguments.length;
var i__26163__auto___42472 = (0);
while(true){
if((i__26163__auto___42472 < len__26162__auto___42471)){
args__26169__auto__.push((arguments[i__26163__auto___42472]));

var G__42473 = (i__26163__auto___42472 + (1));
i__26163__auto___42472 = G__42473;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42470))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42470){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42470);
});})(g__32502__auto___42470))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32502__auto___42470){
return (function (seq42410){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42410));
});})(g__32502__auto___42470))
;


var g__32502__auto___42474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32502__auto___42474){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42475 = arguments.length;
var i__26163__auto___42476 = (0);
while(true){
if((i__26163__auto___42476 < len__26162__auto___42475)){
args__26169__auto__.push((arguments[i__26163__auto___42476]));

var G__42477 = (i__26163__auto___42476 + (1));
i__26163__auto___42476 = G__42477;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42474))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42474){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42474);
});})(g__32502__auto___42474))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32502__auto___42474){
return (function (seq42411){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42411));
});})(g__32502__auto___42474))
;


var g__32502__auto___42478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32502__auto___42478){
return (function cljs$spec$impl$gen$string(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42479 = arguments.length;
var i__26163__auto___42480 = (0);
while(true){
if((i__26163__auto___42480 < len__26162__auto___42479)){
args__26169__auto__.push((arguments[i__26163__auto___42480]));

var G__42481 = (i__26163__auto___42480 + (1));
i__26163__auto___42480 = G__42481;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42478))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42478){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42478);
});})(g__32502__auto___42478))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32502__auto___42478){
return (function (seq42412){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42412));
});})(g__32502__auto___42478))
;


var g__32502__auto___42482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32502__auto___42482){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42483 = arguments.length;
var i__26163__auto___42484 = (0);
while(true){
if((i__26163__auto___42484 < len__26162__auto___42483)){
args__26169__auto__.push((arguments[i__26163__auto___42484]));

var G__42485 = (i__26163__auto___42484 + (1));
i__26163__auto___42484 = G__42485;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42482))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42482){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42482);
});})(g__32502__auto___42482))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32502__auto___42482){
return (function (seq42413){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42413));
});})(g__32502__auto___42482))
;


var g__32502__auto___42486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32502__auto___42486){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42487 = arguments.length;
var i__26163__auto___42488 = (0);
while(true){
if((i__26163__auto___42488 < len__26162__auto___42487)){
args__26169__auto__.push((arguments[i__26163__auto___42488]));

var G__42489 = (i__26163__auto___42488 + (1));
i__26163__auto___42488 = G__42489;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42486))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42486){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42486);
});})(g__32502__auto___42486))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32502__auto___42486){
return (function (seq42414){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42414));
});})(g__32502__auto___42486))
;


var g__32502__auto___42490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32502__auto___42490){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42491 = arguments.length;
var i__26163__auto___42492 = (0);
while(true){
if((i__26163__auto___42492 < len__26162__auto___42491)){
args__26169__auto__.push((arguments[i__26163__auto___42492]));

var G__42493 = (i__26163__auto___42492 + (1));
i__26163__auto___42492 = G__42493;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42490))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42490){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42490);
});})(g__32502__auto___42490))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32502__auto___42490){
return (function (seq42415){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42415));
});})(g__32502__auto___42490))
;


var g__32502__auto___42494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32502__auto___42494){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42495 = arguments.length;
var i__26163__auto___42496 = (0);
while(true){
if((i__26163__auto___42496 < len__26162__auto___42495)){
args__26169__auto__.push((arguments[i__26163__auto___42496]));

var G__42497 = (i__26163__auto___42496 + (1));
i__26163__auto___42496 = G__42497;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42494))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42494){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42494);
});})(g__32502__auto___42494))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32502__auto___42494){
return (function (seq42416){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42416));
});})(g__32502__auto___42494))
;


var g__32502__auto___42498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32502__auto___42498){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42499 = arguments.length;
var i__26163__auto___42500 = (0);
while(true){
if((i__26163__auto___42500 < len__26162__auto___42499)){
args__26169__auto__.push((arguments[i__26163__auto___42500]));

var G__42501 = (i__26163__auto___42500 + (1));
i__26163__auto___42500 = G__42501;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});})(g__32502__auto___42498))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32502__auto___42498){
return (function (args){
return cljs.core.deref.call(null,g__32502__auto___42498);
});})(g__32502__auto___42498))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32502__auto___42498){
return (function (seq42417){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42417));
});})(g__32502__auto___42498))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26169__auto__ = [];
var len__26162__auto___42504 = arguments.length;
var i__26163__auto___42505 = (0);
while(true){
if((i__26163__auto___42505 < len__26162__auto___42504)){
args__26169__auto__.push((arguments[i__26163__auto___42505]));

var G__42506 = (i__26163__auto___42505 + (1));
i__26163__auto___42505 = G__42506;
continue;
} else {
}
break;
}

var argseq__26170__auto__ = ((((0) < args__26169__auto__.length))?(new cljs.core.IndexedSeq(args__26169__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26170__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__42502_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__42502_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq42503){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42503));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__42507_SHARP_){
return (new Date(p1__42507_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map