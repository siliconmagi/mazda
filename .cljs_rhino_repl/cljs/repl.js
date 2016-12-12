// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41311){
var map__41336 = p__41311;
var map__41336__$1 = ((((!((map__41336 == null)))?((((map__41336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41336):map__41336);
var m = map__41336__$1;
var n = cljs.core.get.call(null,map__41336__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41338_41360 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41339_41361 = null;
var count__41340_41362 = (0);
var i__41341_41363 = (0);
while(true){
if((i__41341_41363 < count__41340_41362)){
var f_41364 = cljs.core._nth.call(null,chunk__41339_41361,i__41341_41363);
cljs.core.println.call(null,"  ",f_41364);

var G__41365 = seq__41338_41360;
var G__41366 = chunk__41339_41361;
var G__41367 = count__41340_41362;
var G__41368 = (i__41341_41363 + (1));
seq__41338_41360 = G__41365;
chunk__41339_41361 = G__41366;
count__41340_41362 = G__41367;
i__41341_41363 = G__41368;
continue;
} else {
var temp__4657__auto___41369 = cljs.core.seq.call(null,seq__41338_41360);
if(temp__4657__auto___41369){
var seq__41338_41370__$1 = temp__4657__auto___41369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41338_41370__$1)){
var c__25898__auto___41371 = cljs.core.chunk_first.call(null,seq__41338_41370__$1);
var G__41372 = cljs.core.chunk_rest.call(null,seq__41338_41370__$1);
var G__41373 = c__25898__auto___41371;
var G__41374 = cljs.core.count.call(null,c__25898__auto___41371);
var G__41375 = (0);
seq__41338_41360 = G__41372;
chunk__41339_41361 = G__41373;
count__41340_41362 = G__41374;
i__41341_41363 = G__41375;
continue;
} else {
var f_41376 = cljs.core.first.call(null,seq__41338_41370__$1);
cljs.core.println.call(null,"  ",f_41376);

var G__41377 = cljs.core.next.call(null,seq__41338_41370__$1);
var G__41378 = null;
var G__41379 = (0);
var G__41380 = (0);
seq__41338_41360 = G__41377;
chunk__41339_41361 = G__41378;
count__41340_41362 = G__41379;
i__41341_41363 = G__41380;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41381 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25087__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25087__auto__)){
return or__25087__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41381);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41381)))?cljs.core.second.call(null,arglists_41381):arglists_41381));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41342_41382 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41343_41383 = null;
var count__41344_41384 = (0);
var i__41345_41385 = (0);
while(true){
if((i__41345_41385 < count__41344_41384)){
var vec__41346_41386 = cljs.core._nth.call(null,chunk__41343_41383,i__41345_41385);
var name_41387 = cljs.core.nth.call(null,vec__41346_41386,(0),null);
var map__41349_41388 = cljs.core.nth.call(null,vec__41346_41386,(1),null);
var map__41349_41389__$1 = ((((!((map__41349_41388 == null)))?((((map__41349_41388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41349_41388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41349_41388):map__41349_41388);
var doc_41390 = cljs.core.get.call(null,map__41349_41389__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41391 = cljs.core.get.call(null,map__41349_41389__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41387);

cljs.core.println.call(null," ",arglists_41391);

if(cljs.core.truth_(doc_41390)){
cljs.core.println.call(null," ",doc_41390);
} else {
}

var G__41392 = seq__41342_41382;
var G__41393 = chunk__41343_41383;
var G__41394 = count__41344_41384;
var G__41395 = (i__41345_41385 + (1));
seq__41342_41382 = G__41392;
chunk__41343_41383 = G__41393;
count__41344_41384 = G__41394;
i__41345_41385 = G__41395;
continue;
} else {
var temp__4657__auto___41396 = cljs.core.seq.call(null,seq__41342_41382);
if(temp__4657__auto___41396){
var seq__41342_41397__$1 = temp__4657__auto___41396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41342_41397__$1)){
var c__25898__auto___41398 = cljs.core.chunk_first.call(null,seq__41342_41397__$1);
var G__41399 = cljs.core.chunk_rest.call(null,seq__41342_41397__$1);
var G__41400 = c__25898__auto___41398;
var G__41401 = cljs.core.count.call(null,c__25898__auto___41398);
var G__41402 = (0);
seq__41342_41382 = G__41399;
chunk__41343_41383 = G__41400;
count__41344_41384 = G__41401;
i__41345_41385 = G__41402;
continue;
} else {
var vec__41351_41403 = cljs.core.first.call(null,seq__41342_41397__$1);
var name_41404 = cljs.core.nth.call(null,vec__41351_41403,(0),null);
var map__41354_41405 = cljs.core.nth.call(null,vec__41351_41403,(1),null);
var map__41354_41406__$1 = ((((!((map__41354_41405 == null)))?((((map__41354_41405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41354_41405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41354_41405):map__41354_41405);
var doc_41407 = cljs.core.get.call(null,map__41354_41406__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41408 = cljs.core.get.call(null,map__41354_41406__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41404);

cljs.core.println.call(null," ",arglists_41408);

if(cljs.core.truth_(doc_41407)){
cljs.core.println.call(null," ",doc_41407);
} else {
}

var G__41409 = cljs.core.next.call(null,seq__41342_41397__$1);
var G__41410 = null;
var G__41411 = (0);
var G__41412 = (0);
seq__41342_41382 = G__41409;
chunk__41343_41383 = G__41410;
count__41344_41384 = G__41411;
i__41345_41385 = G__41412;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41356 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41357 = null;
var count__41358 = (0);
var i__41359 = (0);
while(true){
if((i__41359 < count__41358)){
var role = cljs.core._nth.call(null,chunk__41357,i__41359);
var temp__4657__auto___41413__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41413__$1)){
var spec_41414 = temp__4657__auto___41413__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41414));
} else {
}

var G__41415 = seq__41356;
var G__41416 = chunk__41357;
var G__41417 = count__41358;
var G__41418 = (i__41359 + (1));
seq__41356 = G__41415;
chunk__41357 = G__41416;
count__41358 = G__41417;
i__41359 = G__41418;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41356);
if(temp__4657__auto____$1){
var seq__41356__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41356__$1)){
var c__25898__auto__ = cljs.core.chunk_first.call(null,seq__41356__$1);
var G__41419 = cljs.core.chunk_rest.call(null,seq__41356__$1);
var G__41420 = c__25898__auto__;
var G__41421 = cljs.core.count.call(null,c__25898__auto__);
var G__41422 = (0);
seq__41356 = G__41419;
chunk__41357 = G__41420;
count__41358 = G__41421;
i__41359 = G__41422;
continue;
} else {
var role = cljs.core.first.call(null,seq__41356__$1);
var temp__4657__auto___41423__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41423__$2)){
var spec_41424 = temp__4657__auto___41423__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41424));
} else {
}

var G__41425 = cljs.core.next.call(null,seq__41356__$1);
var G__41426 = null;
var G__41427 = (0);
var G__41428 = (0);
seq__41356 = G__41425;
chunk__41357 = G__41426;
count__41358 = G__41427;
i__41359 = G__41428;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map