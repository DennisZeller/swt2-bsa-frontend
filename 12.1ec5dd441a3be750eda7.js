(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Os0n:function(t,n,e){"use strict";e.r(n);var l=e("CcnG"),i=function(){return function(){}}(),r=e("pMnS"),o=e("r0Mn"),a=e("U9hD"),u=e("MQMe"),s=e("hIfO"),c=e("s5Z2"),d=e("A7o+"),f=e("zLSN"),h=e("M/5E"),p=e("JiLI"),b=e("xOPY"),E=e("mrSG"),m={moduleTranslationKey:"VEREINE",pageTitleTranslationKey:"VEREINE.VEREINE.TITLE",navigationCardsConfig:{navigationCards:[]}},g={columns:[{translationKey:"VEREINE.VEREINE.TABLE.HEADERS.VERANSTALTUNG",propertyName:"veranstaltung_name",width:20},{translationKey:"VEREINE.VEREINE.TABLE.HEADERS.WETTKAMPF",propertyName:"wettkampfTag",width:20},{translationKey:"VEREINE.VEREINE.TABLE.HEADERS.MANNSCHAFT",propertyName:"mannschaftsName",width:20}]},v=e("X628"),C=e("YfBl"),y=(e("th7h"),function(){function t(){}return t.copyFrom=function(n){void 0===n&&(n={});var e=new t;return e.id=n.id>=0?n.id:null,e.regionId=n.regionId>=0?n.regionId:null,e.name=n.name||"",e.identifier=n.identifier||"",e.regionName=n.regionName||"",e.version=n.version||null,e},t}());function w(t){return y.copyFrom(t)}var I=e("GxkG"),S=e("rOts"),T=function(t){function n(n,e){var l=t.call(this)||this;return l.restClient=n,l.currentUserService=e,l.serviceSubUrl="v1/vereine",l}return E.c(n,t),n.prototype.findAll=function(){var t=this;return new Promise(function(n,e){t.restClient.GET(t.getUrl()).then(function(t){var e,l;n({result:C.b.SUCCESS,payload:(e=t,l=[],e.forEach(function(t){return l.push(w(t))}),l)})},function(t){e(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.deleteById=function(t){var n=this;return new Promise(function(e,l){n.restClient.DELETE((new C.d).fromPath(n.getUrl()).path(t).build()).then(function(t){e({result:C.b.SUCCESS})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.findById=function(t){var n=this;return new Promise(function(e,l){n.restClient.GET((new C.d).fromPath(n.getUrl()).path(t).build()).then(function(t){e({result:C.b.SUCCESS,payload:w(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.update=function(t){var n=this;return new Promise(function(e,l){n.restClient.PUT((new C.d).fromPath(n.getUrl()).build(),t).then(function(t){e({result:C.b.SUCCESS,payload:w(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.create=function(t){var n=this;return new Promise(function(e,l){n.restClient.POST((new C.d).fromPath(n.getUrl()).build(),t).then(function(t){e({result:C.b.SUCCESS,payload:w(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.ngInjectableDef=l.U({factory:function(){return new n(l.Y(I.a),l.Y(S.a))},token:n,providedIn:"root"}),n}(C.a),O=e("PEb7"),N=e("ny2l"),U=function(){function t(){}return t.copyFrom=function(n){void 0===n&&(n={});var e=new t;return e.id=n.id>=0?n.id:null,e.veranstaltungsId=n.veranstaltungsId>=0?n.veranstaltungsId:null,e.wettkampfTag=n.wettkampfTag>=0?n.wettkampfTag:null,e.wettkampfDisziplinId=n.wettkampfDisziplinId>=0?n.wettkampfDisziplinId:null,e.wettkampfTypId=n.wettkampfTypId>=0?n.wettkampfTypId:null,e.createdByUserId=n.createdByUserId>=0?n.createdByUserId:null,e.version=n.version>=0?n.version:null,e.datum=n.datum||"",e.wettkampfOrt=n.wettkampfOrt||"",e.wettkampfBeginn=n.wettkampfBeginn||"",e.createdAtUtc=n.createdAtUtc||"",e},t}();function P(t){return U.copyFrom(t)}function R(t){var n=[];return t.forEach(function(t){return n.push(P(t))}),n}var F=function(t){function n(n){var e=t.call(this)||this;return e.restClient=n,e.serviceSubUrl="v1/wettkampf",e}return E.c(n,t),n.prototype.findAllWettkaempfeByMannschaftsId=function(t){var n=this;return new Promise(function(e,l){n.restClient.GET((new C.d).fromPath(n.getUrl()).path("byMannschaftsId/"+t).build()).then(function(t){console.log("wettaempfe kraw data"),console.log(t),e({result:C.b.SUCCESS,payload:R(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.findAll=function(){var t=this;return new Promise(function(n,e){t.restClient.GET(t.getUrl()).then(function(t){n({result:C.b.SUCCESS,payload:R(t)})},function(t){e(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.findById=function(t){var n=this;return new Promise(function(e,l){n.restClient.GET((new C.d).fromPath(n.getUrl()).path(t).build()).then(function(t){e({result:C.b.SUCCESS,payload:P(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.update=function(t){var n=this;return new Promise(function(e,l){n.restClient.PUT((new C.d).fromPath(n.getUrl()).build(),t).then(function(t){e({result:C.b.SUCCESS,payload:P(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.create=function(t){var n=this;return new Promise(function(e,l){n.restClient.POST((new C.d).fromPath(n.getUrl()).build(),t).then(function(t){e({result:C.b.SUCCESS,payload:P(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.deleteById=function(t){var n=this;return new Promise(function(e,l){n.restClient.DELETE((new C.d).fromPath(n.getUrl()).path(t).build()).then(function(t){e({result:C.b.SUCCESS})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.ngInjectableDef=l.U({factory:function(){return new n(l.Y(I.a))},token:n,providedIn:"root"}),n}(C.a),k=function(){function t(){}return t.copyFrom=function(n){void 0===n&&(n={});var e=new t;return e.id=n.id>=0?n.id:null,e.sportjahr=n.sportjahr>=0?n.sportjahr:null,e.ligaleiterID=n.ligaleiterID>=0?n.ligaleiterID:null,e.wettkampfTypId=n.wettkampfTypId>=0?n.wettkampfTypId:null,e.version=n.version>=0?n.version:null,e.meldeDeadline=n.meldeDeadline||"",e.name=n.name||"",e},t}();function L(t){return k.copyFrom(t)}var z=function(t){function n(n){var e=t.call(this)||this;return e.restClient=n,e.serviceSubUrl="v1/veranstaltung",e}return E.c(n,t),n.prototype.findAll=function(){var t=this;return new Promise(function(n,e){t.restClient.GET(t.getUrl()).then(function(t){var e,l;n({result:C.b.SUCCESS,payload:(e=t,l=[],e.forEach(function(t){return l.push(L(t))}),l)})},function(t){e(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.findById=function(t){var n=this;return new Promise(function(e,l){n.restClient.GET((new C.d).fromPath(n.getUrl()).path(t).build()).then(function(t){console.log(t),e({result:C.b.SUCCESS,payload:L(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.update=function(t){var n=this;return new Promise(function(e,l){n.restClient.PUT((new C.d).fromPath(n.getUrl()).build(),t).then(function(t){e({result:C.b.SUCCESS,payload:L(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.create=function(t){var n=this;return new Promise(function(e,l){n.restClient.POST((new C.d).fromPath(n.getUrl()).build(),t).then(function(t){e({result:C.b.SUCCESS,payload:L(t)})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.prototype.deleteById=function(t){var n=this;return new Promise(function(e,l){n.restClient.DELETE((new C.d).fromPath(n.getUrl()).path(t).build()).then(function(t){e({result:C.b.SUCCESS})},function(t){l(0===t.status?{result:C.b.CONNECTION_PROBLEM}:{result:C.b.FAILURE})})})},n.ngInjectableDef=l.U({factory:function(){return new n(l.Y(I.a))},token:n,providedIn:"root"}),n}(C.a),D=function(t,n,e){this.veranstaltung_name=t,this.wettkampfTag=n,this.mannschaftsName=e,this.id=1,this.version=1},A=function(t){function n(n,e,l,i){var r=t.call(this)||this;return r.wettkampfDataProvider=n,r.veranstaltungsDataProvider=e,r.vereinDataProvider=l,r.mannschaftsDataProvider=i,r.config=m,r.config_table=g,r.multipleSelections=!0,r.loadingVereine=!0,r.loadingTable=!1,r.tableContent=[],r}return E.c(n,t),n.prototype.ngOnInit=function(){this.loadVereine()},n.prototype.onSelect=function(t){this.selectedDTOs=[],this.selectedDTOs=t,this.selectedDTOs&&this.selectedDTOs.length>0&&(this.selectedVereinsId=this.selectedDTOs[0].id),this.rows=[],this.tableContent=[],this.loadTableRows()},n.prototype.getSelectedDTO=function(){if(Object(v.a)(this.selectedDTOs))return"";console.log("Auswahllisten: selectedDTO = "+JSON.stringify(this.selectedDTOs));var t=[];return this.selectedDTOs.forEach(function(n){t.push(n.name)}),t.join(", ")},n.prototype.onView=function(t){},n.prototype.onEdit=function(t){},n.prototype.onDelete=function(t){},n.prototype.loadVereine=function(){var t=this;this.vereine=[],this.vereinDataProvider.findAll().then(function(n){t.vereine=n.payload,t.loadingVereine=!1}).catch(function(n){t.vereine=n.payload})},n.prototype.loadTableRows=function(){var t=this;this.loadingTable=!0,this.mannschaftsDataProvider.findAllByVereinsId(this.selectedVereinsId).then(function(n){return t.handleFindMannschaftenSuccess(n)}).catch(function(n){return t.handleFindMannschaftenFailure(n)})},n.prototype.handleFindMannschaftenFailure=function(t){this.rows=[],this.loadingTable=!1},n.prototype.handleFindMannschaftenSuccess=function(t){var n,e=this;this.rows=[],this.remainingMannschaftsRequests=t.payload.length,t.payload.length<=0&&(this.loadingTable=!1);var l=function(){var l=i.selectedDTOs[0].name+" "+t.payload[n].nummer+". Mannschaft";i.wettkampfDataProvider.findAllWettkaempfeByMannschaftsId(t.payload[n].id).then(function(t){return e.handleFindWettkaempfeSuccess(t,l)}).catch(function(t){return e.handleFindWettkaempfeFailure(t)})},i=this;for(n=0;n<t.payload.length;n++)l()},n.prototype.handleFindWettkaempfeFailure=function(t){this.rows=[],this.loadingTable=!1},n.prototype.handleFindWettkaempfeSuccess=function(t,n){var e=this;console.log("success"),this.remainingRequests=t.payload.length,this.remainingMannschaftsRequests-=1,t.payload.length<=0&&(this.loadingTable=!1);for(var l=function(t){var l=t.wettkampfTag+". Wettkampftag";i.veranstaltungsDataProvider.findById(t.veranstaltungsId).then(function(t){return e.handleFindVeranstaltungSuccess(t,n,l)}).catch(function(t){return e.handleFindVeranstaltungFailure(t)})},i=this,r=0,o=t.payload;r<o.length;r++)l(o[r]);if(0===t.payload.length){var a=new D("","",n);this.tableContent.push(a)}this.remainingMannschaftsRequests<=0&&(this.rows=Object(O.h)(this.tableContent))},n.prototype.handleFindVeranstaltungFailure=function(t){this.rows=[],this.loadingTable=!1},n.prototype.handleFindVeranstaltungSuccess=function(t,n,e){var l=new D(t.payload.name,e,n);this.tableContent.push(l),this.remainingRequests-=1,this.remainingRequests<=0&&(this.rows=Object(O.h)(this.tableContent),this.tableContent=[],this.loadingTable=!1)},n}(O.c),M=l.pb({encapsulation:0,styles:[[".row[_ngcontent-%COMP%]{margin:20px;display:flex;flex-direction:column}"]],data:{}});function B(t){return l.Kb(0,[(t()(),l.rb(0,0,null,null,14,"bla-navigation-dialog",[],null,null,null,o.b,o.a)),l.qb(1,114688,null,0,a.a,[],{config:[0,"config"]},null),(t()(),l.rb(2,0,null,0,7,"div",[["class","row"]],null,null,null,null,null)),(t()(),l.rb(3,0,null,null,6,"bla-col-layout",[],null,null,null,u.b,u.a)),l.qb(4,114688,null,0,s.a,[],null,null),(t()(),l.rb(5,0,null,0,1,"h2",[],null,null,null,null,null)),(t()(),l.Ib(6,null,["Vereinsauswahl: ",""])),(t()(),l.rb(7,0,null,0,2,"bla-quicksearch-list",[["selectionListHeight","15em"],["style","width: 50%; flex-grow: 0;"]],null,[[null,"onSelect"]],function(t,n,e){var l=!0;return"onSelect"===n&&(l=!1!==t.component.onSelect(e)&&l),l},c.b,c.a)),l.Fb(131584,null,d.j,d.j,[d.k,l.h]),l.qb(9,638976,null,0,f.a,[d.j],{loading:[0,"loading"],multipleSelections:[1,"multipleSelections"],selectionListHeight:[2,"selectionListHeight"],items:[3,"items"],optionFieldSelector:[4,"optionFieldSelector"]},{onSelect:"onSelect"}),(t()(),l.rb(10,0,null,0,4,"div",[["class","row"]],null,null,null,null,null)),(t()(),l.rb(11,0,null,null,3,"bla-data-table",[],null,[[null,"onDeleteClicked"],[null,"onEditClicked"],[null,"onViewClicked"]],function(t,n,e){var l=!0,i=t.component;return"onDeleteClicked"===n&&(l=!1!==i.onDelete(e)&&l),"onEditClicked"===n&&(l=!1!==i.onEdit(e)&&l),"onViewClicked"===n&&(l=!1!==i.onView(e)&&l),l},h.b,h.a)),l.Fb(512,null,p.a,p.a,[]),l.Fb(131584,null,d.j,d.j,[d.k,l.h]),l.qb(14,638976,null,0,b.a,[p.a,d.j],{loading:[0,"loading"],config:[1,"config"],rows:[2,"rows"]},null)],function(t,n){var e=n.component;t(n,1,0,e.config),t(n,4,0),t(n,9,0,e.loadingVereine,!e.multipleSelections,"15em",e.vereine,"name"),t(n,14,0,e.loadingTable,e.config_table,e.rows)},function(t,n){t(n,6,0,n.component.getSelectedDTO())})}function V(t){return l.Kb(0,[(t()(),l.rb(0,0,null,null,1,"bla-vereine",[],null,null,null,B,M)),l.qb(1,114688,null,0,A,[F,z,T,N.a],null,null)],function(t,n){t(n,1,0)},null)}var j=l.nb("bla-vereine",A,V,{id:"id",visible:"visible",loading:"loading",disabled:"disabled"},{},[]),_=e("Ip0R"),q=e("gIcY"),G=e("t/Na"),K=e("22Ks"),H=e("ZYCi"),W=e("Hf/j"),Y=e("FpXt");e.d(n,"VereineModuleNgFactory",function(){return x});var x=l.ob(i,[],function(t){return l.yb([l.zb(512,l.j,l.db,[[8,[r.a,j]],[3,l.j],l.z]),l.zb(4608,_.n,_.m,[l.v,[2,_.x]]),l.zb(4608,q.z,q.z,[]),l.zb(4608,q.e,q.e,[]),l.zb(4608,G.i,G.o,[_.c,l.D,G.m]),l.zb(4608,G.p,G.p,[G.i,G.n]),l.zb(5120,G.a,function(t){return[t]},[G.p]),l.zb(4608,G.l,G.l,[]),l.zb(6144,G.j,null,[G.l]),l.zb(4608,G.h,G.h,[G.j]),l.zb(6144,G.b,null,[G.h]),l.zb(4608,G.f,G.k,[G.b,l.r]),l.zb(4608,G.c,G.c,[G.f]),l.zb(5120,K.b,K.f,[]),l.zb(5120,K.a,K.e,[]),l.zb(4608,d.g,d.f,[]),l.zb(4608,d.c,d.e,[]),l.zb(4608,d.i,d.d,[]),l.zb(4608,d.b,d.a,[]),l.zb(4608,d.k,d.k,[d.l,d.g,d.c,d.i,d.b,d.m,d.n]),l.zb(1073742336,_.b,_.b,[]),l.zb(1073742336,H.o,H.o,[[2,H.u],[2,H.l]]),l.zb(1073742336,q.w,q.w,[]),l.zb(1073742336,q.f,q.f,[]),l.zb(1073742336,q.r,q.r,[]),l.zb(1073742336,G.e,G.e,[]),l.zb(1073742336,G.d,G.d,[]),l.zb(1073742336,d.h,d.h,[]),l.zb(1073742336,W.f,W.f,[]),l.zb(1073742336,K.c,K.c,[]),l.zb(1073742336,Y.a,Y.a,[]),l.zb(1073742336,i,i,[]),l.zb(256,G.m,"XSRF-TOKEN",[]),l.zb(256,G.n,"X-XSRF-TOKEN",[]),l.zb(256,d.n,void 0,[]),l.zb(256,d.m,void 0,[]),l.zb(1024,H.j,function(){return[[{path:"",pathMatch:"full",component:A}]]},[])])})}}]);