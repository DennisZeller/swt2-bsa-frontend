(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FlTZ:function(n,t,l){"use strict";var e=l("mrSG"),r=l("YfBl"),u=(l("th7h"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var l=new n;return l.id=t.id>=0?t.id:null,l.regionId=t.regionId>=0?t.regionId:null,l.name=t.name||"",l.identifier=t.identifier||"",l.regionName=t.regionName||"",l.version=t.version||null,l},n}());function i(n){return u.copyFrom(n)}var o=l("CcnG"),a=l("GxkG"),c=l("rOts");l.d(t,"a",function(){return s});var s=function(n){function t(t,l){var e=n.call(this)||this;return e.restClient=t,e.currentUserService=l,e.serviceSubUrl="v1/vereine",e}return e.c(t,n),t.prototype.findAll=function(){var n=this;return new Promise(function(t,l){n.restClient.GET(n.getUrl()).then(function(n){var l,e;t({result:r.b.SUCCESS,payload:(l=n,e=[],l.forEach(function(n){return e.push(i(n))}),e)})},function(n){l(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.deleteById=function(n){var t=this;return new Promise(function(l,e){t.restClient.DELETE((new r.d).fromPath(t.getUrl()).path(n).build()).then(function(n){l({result:r.b.SUCCESS})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.findById=function(n){var t=this;return new Promise(function(l,e){t.restClient.GET((new r.d).fromPath(t.getUrl()).path(n).build()).then(function(n){l({result:r.b.SUCCESS,payload:i(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.update=function(n){var t=this;return new Promise(function(l,e){t.restClient.PUT((new r.d).fromPath(t.getUrl()).build(),n).then(function(n){l({result:r.b.SUCCESS,payload:i(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.create=function(n){var t=this;return new Promise(function(l,e){t.restClient.POST((new r.d).fromPath(t.getUrl()).build(),n).then(function(n){l({result:r.b.SUCCESS,payload:i(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.ngInjectableDef=o.U({factory:function(){return new t(o.Y(a.a),o.Y(c.a))},token:t,providedIn:"root"}),t}(r.a)},MQMe:function(n,t,l){"use strict";var e=l("CcnG");l("hIfO"),l.d(t,"a",function(){return r}),l.d(t,"b",function(){return u});var r=e.pb({encapsulation:0,styles:[[".col-layout[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:row}[_nghost-%COMP%]     *{flex-grow:1}"]],data:{}});function u(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"div",[["class","col-layout"]],null,null,null,null,null)),e.Ab(null,0)],null,null)}},Oxnw:function(n,t,l){"use strict";var e=l("mrSG"),r=l("YfBl"),u=(l("th7h"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var l=new n;return l.id=t.id>=0?t.id:null,l.regionId=t.regionId>=0?t.regionId:null,l.ligaUebergeordnetId=t.ligaUebergeordnetId>=0?t.ligaUebergeordnetId:null,l.ligaVerantwortlichId=t.ligaVerantwortlichId>=0?t.ligaVerantwortlichId:null,l.name=t.name||"",l.regionName=t.regionName||"",l.ligaUebergeordnetName=t.ligaUebergeordnetName||"",l.ligaVerantwortlichMail=t.ligaVerantwortlichMail||"",l},n}());function i(n){return u.copyFrom(n)}var o=l("CcnG"),a=l("GxkG"),c=l("rOts");l.d(t,"a",function(){return s});var s=function(n){function t(t,l){var e=n.call(this)||this;return e.restClient=t,e.currentUserService=l,e.serviceSubUrl="v1/liga",e}return e.c(t,n),t.prototype.findAll=function(){var n=this;return new Promise(function(t,l){n.restClient.GET(n.getUrl()).then(function(n){var l,e;t({result:r.b.SUCCESS,payload:(l=n,e=[],l.forEach(function(n){return e.push(i(n))}),e)})},function(n){l(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.deleteById=function(n){var t=this;return new Promise(function(l,e){t.restClient.DELETE((new r.d).fromPath(t.getUrl()).path(n).build()).then(function(n){l({result:r.b.SUCCESS})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.findById=function(n){var t=this;return new Promise(function(l,e){t.restClient.GET((new r.d).fromPath(t.getUrl()).path(n).build()).then(function(n){l({result:r.b.SUCCESS,payload:i(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.update=function(n){var t=this;return new Promise(function(l,e){t.restClient.PUT((new r.d).fromPath(t.getUrl()).build(),n).then(function(n){l({result:r.b.SUCCESS,payload:i(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.create=function(n){var t=this;return new Promise(function(l,e){t.restClient.POST((new r.d).fromPath(t.getUrl()).build(),n).then(function(n){l({result:r.b.SUCCESS,payload:i(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.ngInjectableDef=o.U({factory:function(){return new t(o.Y(a.a),o.Y(c.a))},token:t,providedIn:"root"}),t}(r.a)},eQGX:function(n,t,l){"use strict";var e=l("CcnG"),r=l("gIcY"),u=l("Ip0R");l("yljE"),l.d(t,"a",function(){return i}),l.d(t,"b",function(){return c});var i=e.pb({encapsulation:0,styles:[[".selection-list[_ngcontent-%COMP%]{height:100%;max-height:100%;min-height:100%;width:100%;min-width:100%;max-width:100%;overflow-y:scroll}"]],data:{}});function o(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.qb(1,147456,null,0,r.p,[e.k,e.F,[8,null]],{ngValue:[0,"ngValue"]},null),e.qb(2,147456,null,0,r.z,[e.k,e.F,[2,r.u]],{ngValue:[0,"ngValue"]},null),(n()(),e.Ib(3,null,[" "," "]))],function(n,t){n(t,1,0,t.context.$implicit.id),n(t,2,0,t.context.$implicit.id)},function(n,t){n(t,3,0,t.context.$implicit[t.component.optionFieldSelector])})}function a(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,o)),e.qb(2,278528,null,0,u.k,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.ib(0,null,null,0))],function(n,t){n(t,2,0,t.component.items)},null)}function c(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,7,"select",[["class","form-control selection-list"]],[[8,"id",0],[8,"multiple",0],[8,"size",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,t,l){var r=!0,u=n.component;return"change"===t&&(r=!1!==e.Bb(n,1).onChange(l.target)&&r),"blur"===t&&(r=!1!==e.Bb(n,1).onTouched()&&r),"focus"===t&&(r=!1!==u.focusChanged(l)&&r),"ngModelChange"===t&&(r=!1!==u.onSelectionChanged(l)&&r),"ngModelChange"===t&&(r=!1!==(u.selectedItemIds=l)&&r),r},null,null)),e.qb(1,16384,null,0,r.u,[e.F,e.k],null,null),e.Fb(1024,null,r.j,function(n){return[n]},[r.u]),e.qb(3,671744,[["selectModel",4]],0,r.o,[[8,null],[8,null],[8,null],[6,r.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,r.k,null,[r.o]),e.qb(5,16384,null,0,r.l,[[4,r.k]],null,null),(n()(),e.ib(16777216,null,null,1,null,a)),e.qb(7,16384,null,0,u.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,3,0,l.id,l.isDisabled(),l.selectedItemIds),n(t,7,0,!l.showLoadingPlaceholder()&&!l.showEmptyItemListPlaceholder())},function(n,t){var l=t.component;n(t,0,0,l.id,l.isMultibleSelectionAllowed(),l.getListSize(),e.Bb(t,5).ngClassUntouched,e.Bb(t,5).ngClassTouched,e.Bb(t,5).ngClassPristine,e.Bb(t,5).ngClassDirty,e.Bb(t,5).ngClassValid,e.Bb(t,5).ngClassInvalid,e.Bb(t,5).ngClassPending)})}},kNLF:function(n,t,l){"use strict";var e=l("CcnG");l("3bVr"),l.d(t,"a",function(){return r}),l.d(t,"b",function(){return u});var r=e.pb({encapsulation:0,styles:[[".grid-layout[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;flex-direction:row;flex-wrap:wrap}.align-center[_ngcontent-%COMP%]{justify-content:space-between}"]],data:{}});function u(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"div",[["class","grid-layout"]],[[2,"align-center",null]],null,null,null,null)),e.Ab(null,0)],null,function(n,t){n(t,0,0,t.component.alignCenter)})}},r0Mn:function(n,t,l){"use strict";var e=l("CcnG"),r=l("R6bV"),u=l("w90F"),i=l("ZYCi"),o=l("Ip0R"),a=l("fNgX"),c=l("Hf/j"),s=l("ZYjt"),f=l("A7o+"),d=l("kNLF"),b=l("3bVr"),g=l("mrSG"),h=function(n){function t(){var t=n.call(this)||this;return t.config={navigationCards:[]},t}return g.c(t,n),t.prototype.ngOnInit=function(){},t}(l("yT4t").a),p=e.pb({encapsulation:0,styles:[[".navigation-card[_ngcontent-%COMP%]{width:18rem;margin:1em 1em 0 0}.card-header-link[_ngcontent-%COMP%], .card-header-link[_ngcontent-%COMP%]:active, .card-header-link[_ngcontent-%COMP%]:hover, .card-header-link[_ngcontent-%COMP%]:visited{color:#000}.card-header[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function C(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,16,"div",[["class","card navigation-card"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,4,"a",[["class","card-header-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var r=!0;return"click"===t&&(r=!1!==e.Bb(n,2).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&r),r},null,null)),e.qb(2,671744,null,0,i.n,[i.l,i.a,o.i],{routerLink:[0,"routerLink"]},null),(n()(),e.rb(3,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["size","3x"]],[[8,"innerHTML",1]],null,null,a.b,a.a)),e.qb(5,573440,null,0,c.a,[s.b,c.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(n()(),e.rb(6,0,null,null,10,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.rb(7,0,null,null,2,"h5",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Ib(8,null,["",""])),e.Db(131072,f.j,[f.k,e.h]),(n()(),e.rb(10,0,null,null,2,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),e.Ib(11,null,["",""])),e.Db(131072,f.j,[f.k,e.h]),(n()(),e.rb(13,0,null,null,3,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,t,l){var r=!0;return"click"===t&&(r=!1!==e.Bb(n,14).onClick()&&r),r},null,null)),e.qb(14,16384,null,0,i.m,[i.l,i.a,[8,null],e.F,e.k],{routerLink:[0,"routerLink"]},null),(n()(),e.Ib(15,null,[""," "])),e.Db(131072,f.j,[f.k,e.h])],function(n,t){n(t,2,0,t.context.$implicit.route),n(t,5,0,t.context.$implicit.icon,"3x"),n(t,14,0,t.context.$implicit.route)},function(n,t){n(t,1,0,e.Bb(t,2).target,e.Bb(t,2).href),n(t,4,0,e.Bb(t,5).renderedIconHTML),n(t,8,0,e.Jb(t,8,0,e.Bb(t,9).transform(t.context.$implicit.labelKey))),n(t,11,0,e.Jb(t,11,0,e.Bb(t,12).transform(t.context.$implicit.descriptionKey))),n(t,15,0,e.Jb(t,15,0,e.Bb(t,16).transform(t.context.$implicit.labelKey)))})}function m(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,3,"bla-grid-layout",[],null,null,null,d.b,d.a)),e.qb(1,114688,null,0,b.a,[],null,null),(n()(),e.ib(16777216,null,0,1,null,C)),e.qb(3,278528,null,0,o.k,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var l=t.component;n(t,1,0),n(t,3,0,l.config.navigationCards)},null)}l("U9hD"),l.d(t,"a",function(){return v}),l.d(t,"b",function(){return E});var v=e.pb({encapsulation:0,styles:[[""]],data:{}});function E(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"bla-common-dialog",[],null,null,null,r.b,r.a)),e.qb(1,114688,null,0,u.a,[],{config:[0,"config"]},null),(n()(),e.rb(2,0,null,0,1,"bla-navigation-cards",[],null,null,null,m,p)),e.qb(3,114688,null,0,h,[],{config:[0,"config"]},null),e.Ab(0,0)],function(n,t){var l=t.component;n(t,1,0,l.config),n(t,3,0,l.config.navigationCardsConfig)},null)}},v040:function(n,t,l){"use strict";l.d(t,"a",function(){return e});var e=function(){return function(){}}()},vG9B:function(n,t,l){"use strict";var e=l("mrSG"),r=l("YfBl"),u=(l("th7h"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var l=new n;return l.id=t.id>=0?t.id:null,l.regionUebergeordnet=t.regionUebergeordnet>=0?t.regionUebergeordnet:null,l.regionUebergeordnetAsName=t.regionUebergeordnetAsName||"",l.regionName=t.regionName||"",l.regionKuerzel=t.regionKuerzel||"",l.regionTyp=t.regionTyp||"",l.version=t.version||null,l},n}());function i(n){return u.copyFrom(n)}function o(n){var t=[];return n.forEach(function(n){return t.push(i(n))}),t}var a=l("CcnG"),c=l("GxkG"),s=l("rOts");l.d(t,"a",function(){return f});var f=function(n){function t(t,l){var e=n.call(this)||this;return e.restClient=t,e.currentUserService=l,e.serviceSubUrl="v1/regionen",e}return e.c(t,n),t.prototype.findAll=function(){var n=this;return new Promise(function(t,l){n.restClient.GET(n.getUrl()).then(function(n){t({result:r.b.SUCCESS,payload:o(n)})},function(n){l(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.findAllByType=function(n){var t=this;return new Promise(function(l,e){t.restClient.GET((new r.d).fromPath(t.getUrl()).path(n).build()).then(function(n){l({result:r.b.SUCCESS,payload:o(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.deleteById=function(n){var t=this;return new Promise(function(l,e){t.restClient.DELETE((new r.d).fromPath(t.getUrl()).path(n).build()).then(function(n){l({result:r.b.SUCCESS})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.findById=function(n){var t=this;return new Promise(function(l,e){t.restClient.GET((new r.d).fromPath(t.getUrl()).path("ID/"+n).build()).then(function(n){l({result:r.b.SUCCESS,payload:i(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.create=function(n){var t=this;return new Promise(function(l,e){t.restClient.POST((new r.d).fromPath(t.getUrl()).build(),n).then(function(n){l({result:r.b.SUCCESS,payload:i(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.prototype.update=function(n){var t=this;return new Promise(function(l,e){t.restClient.PUT((new r.d).fromPath(t.getUrl()).build(),n).then(function(n){l({result:r.b.SUCCESS,payload:i(n)})},function(n){e(0===n.status?{result:r.b.CONNECTION_PROBLEM}:{result:r.b.FAILURE})})})},t.ngInjectableDef=a.U({factory:function(){return new t(a.Y(c.a),a.Y(s.a))},token:t,providedIn:"root"}),t}(r.a)}}]);