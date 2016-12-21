// Compiled by ClojureScript 1.9.229 {}
goog.provide('mazda.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mazda.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return mazda.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__40756){
var vec__40757 = p__40756;
var _ = cljs.core.nth.call(null,vec__40757,(0),null);
var active_panel = cljs.core.nth.call(null,vec__40757,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=events.js.map