(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{FlTZ:function(n,t,e){"use strict";var l=e("mrSG"),i=e("YfBl"),o=(e("th7h"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var e=new n;return e.id=t.id>=0?t.id:null,e.regionId=t.regionId>=0?t.regionId:null,e.name=t.name||"",e.identifier=t.identifier||"",e.regionName=t.regionName||"",e.version=t.version||null,e},n}());function r(n){return o.copyFrom(n)}var a=e("CcnG"),u=e("GxkG"),s=e("rOts");e.d(t,"a",function(){return c});var c=function(n){function t(t,e){var l=n.call(this)||this;return l.restClient=t,l.currentUserService=e,l.serviceSubUrl="v1/vereine",l}return l.d(t,n),t.prototype.findAll=function(){var n=this;return new Promise(function(t,e){n.restClient.GET(n.getUrl()).then(function(n){var e,l;t({result:i.b.SUCCESS,payload:(e=n,l=[],e.forEach(function(n){return l.push(r(n))}),l)})},function(n){e(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.deleteById=function(n){var t=this;return new Promise(function(e,l){t.restClient.DELETE((new i.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:i.b.SUCCESS})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.findById=function(n){var t=this;return new Promise(function(e,l){t.restClient.GET((new i.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:i.b.SUCCESS,payload:r(n)})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.update=function(n){var t=this;return new Promise(function(e,l){t.restClient.PUT((new i.d).fromPath(t.getUrl()).build(),n).then(function(n){e({result:i.b.SUCCESS,payload:r(n)})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.create=function(n){var t=this;return new Promise(function(e,l){t.restClient.POST((new i.d).fromPath(t.getUrl()).build(),n).then(function(n){e({result:i.b.SUCCESS,payload:r(n)})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.ngInjectableDef=a.U({factory:function(){return new t(a.Y(u.a),a.Y(s.a))},token:t,providedIn:"root"}),t}(i.a)},Os0n:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),o=e("pMnS"),r=e("r0Mn"),a=e("U9hD"),u=e("MQMe"),s=e("hIfO"),c=e("s5Z2"),d=e("A7o+"),f=e("zLSN"),h=e("M/5E"),b=e("JiLI"),p=e("xOPY"),g=e("rOts"),m=e("mrSG"),E=e("tY1a"),v={moduleTranslationKey:"VEREINE",pageTitleTranslationKey:"VEREINE.VEREINE.TITLE",navigationCardsConfig:{navigationCards:[]}},y={columns:[{translationKey:"VEREINE.VEREINE.TABLE.HEADERS.VERANSTALTUNG",propertyName:"veranstaltung_name",width:20},{translationKey:"VEREINE.VEREINE.TABLE.HEADERS.WETTKAMPF",propertyName:"wettkampfTag",width:20},{translationKey:"TABLE.PLACE",propertyName:"wettkampfOrt",width:20},{translationKey:"VEREINE.VEREINE.TABLE.HEADERS.MANNSCHAFT",propertyName:"mannschaftsName",width:20}],actions:{actionTypes:[E.a.DOWNLOAD],width:6}},C=e("X628"),w=e("FlTZ"),I=e("PEb7"),S=e("ny2l"),O=e("sQ0O"),T=e("nr0C"),N=function(n,t,e,l){this.veranstaltung_name=n,this.wettkampfTag=t,this.wettkampfOrt=e,this.mannschaftsName=l,this.id=1,this.version=1},P=(e("gQPg"),function(n){function t(t,e,l,i,o,r,a){var u=n.call(this)||this;return u.router=t,u.route=e,u.notificationService=l,u.wettkampfDataProvider=i,u.veranstaltungsDataProvider=o,u.vereinDataProvider=r,u.mannschaftsDataProvider=a,u.PLACEHOLDER_VAR="Bitte Verein eingeben...",u.config=v,u.config_table=y,u.multipleSelections=!0,u.loadingVereine=!0,u.loadingTable=!1,u.tableContent=[],u}return m.d(t,n),t.prototype.ngOnInit=function(){var n=this;console.log("Bin in Vereine"),this.providedID=null,this.loadVereine(),this.loading=!0,this.notificationService.discardNotification(),this.route.params.subscribe(function(t){Object(C.c)(t.id)||(n.providedID=t.id,console.log("This.providedID: "+n.providedID),n.selectedVereinsId=n.providedID)})},t.prototype.onSelect=function(n){this.selectedDTOs=[],this.selectedDTOs=n,this.selectedDTOs&&this.selectedDTOs.length>0&&(this.selectedVereinsId=this.selectedDTOs[0].id),this.changeVerein()},t.prototype.changeVerein=function(){this.rows=[],this.tableContent=[],null!=this.selectedVereinsId&&this.loadTableRows()},t.prototype.getSelectedDTO=function(){if(Object(C.a)(this.selectedDTOs))return"";console.log("Auswahllisten: selectedDTO = "+JSON.stringify(this.selectedDTOs));var n=[];return this.selectedDTOs.forEach(function(t){n.push(t.name)}),n.join(", ")},t.prototype.onView=function(n){},t.prototype.onEdit=function(n){},t.prototype.onDelete=function(n){},t.prototype.onDownload=function(n){var t;t=n.wettkampfOrt.split(", ",5),window.open("https://www.google.de/maps/place/"+t[0]+"+"+t[1]+"+"+t[2])},t.prototype.loadVereine=function(){var n=this;this.vereine=[],this.vereinDataProvider.findAll().then(function(t){n.vereine=t.payload,n.loadingVereine=!1}).catch(function(t){n.vereine=t.payload})},t.prototype.loadTableRows=function(){var n=this;this.loadingTable=!0,this.mannschaftsDataProvider.findAllByVereinsId(this.selectedVereinsId).then(function(t){return n.handleFindMannschaftenSuccess(t)}).catch(function(t){return n.handleFindMannschaftenFailure(t)})},t.prototype.handleFindMannschaftenFailure=function(n){this.rows=[],this.loadingTable=!1},t.prototype.handleFindMannschaftenSuccess=function(n){var t,e=this;this.rows=[],this.remainingMannschaftsRequests=n.payload.length,n.payload.length<=0&&(this.loadingTable=!1);var l=function(){var l=i.selectedDTOs[0].name+" "+n.payload[t].nummer+". Mannschaft";i.wettkampfDataProvider.findAllWettkaempfeByMannschaftsId(n.payload[t].id).then(function(n){return e.handleFindWettkaempfeSuccess(n,l)}).catch(function(n){return e.handleFindWettkaempfeFailure(n)})},i=this;for(t=0;t<n.payload.length;t++)l()},t.prototype.handleFindWettkaempfeFailure=function(n){this.rows=[],this.loadingTable=!1},t.prototype.handleFindWettkaempfeSuccess=function(n,t){var e=this;console.log("success"),this.remainingRequests=n.payload.length,this.remainingMannschaftsRequests-=1,n.payload.length<=0&&(this.loadingTable=!1);for(var l=function(n){var l=n.wettkampfTag+". Wettkampftag",o=n.wettkampfOrt;i.veranstaltungsDataProvider.findById(n.wettkampfVeranstaltungsId).then(function(n){return e.handleFindVeranstaltungSuccess(n,t,l,o)}).catch(function(n){return e.handleFindVeranstaltungFailure(n)})},i=this,o=0,r=n.payload;o<r.length;o++)l(r[o]);if(0===n.payload.length){var a=new N("","","",t);this.tableContent.push(a)}this.remainingMannschaftsRequests<=0&&(this.rows=Object(I.i)(this.tableContent))},t.prototype.handleFindVeranstaltungFailure=function(n){this.rows=[],this.loadingTable=!1},t.prototype.handleFindVeranstaltungSuccess=function(n,t,e,l){console.log("Content:"+n.payload.name+e+t);var i=new N(n.payload.name,e,l,t);this.tableContent.push(i),this.remainingRequests-=1,this.remainingRequests<=0&&(this.rows=Object(I.i)(this.tableContent),this.tableContent=[],this.loadingTable=!1)},t}(I.d)),R=e("ZYCi"),D=e("zcPl"),L=l.pb({encapsulation:0,styles:[[".row[_ngcontent-%COMP%]{margin:20px;display:flex;flex-direction:column}"]],data:{}});function F(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,14,"bla-navigation-dialog",[],null,null,null,r.b,r.a)),l.qb(1,114688,null,0,a.a,[],{config:[0,"config"]},null),(n()(),l.rb(2,0,null,0,7,"div",[["class","row"]],null,null,null,null,null)),(n()(),l.rb(3,0,null,null,6,"bla-col-layout",[],null,null,null,u.b,u.a)),l.qb(4,114688,null,0,s.a,[],null,null),(n()(),l.rb(5,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Jb(6,null,["Vereinsauswahl: ",""])),(n()(),l.rb(7,0,null,0,2,"bla-quicksearch-list",[["selectionListHeight","15em"],["style","width: 50%; flex-grow: 0;"]],null,[[null,"onSelect"]],function(n,t,e){var l=!0;return"onSelect"===t&&(l=!1!==n.component.onSelect(e)&&l),l},c.b,c.a)),l.Gb(131584,null,d.j,d.j,[d.k,l.h]),l.qb(9,638976,null,0,f.a,[d.j],{loading:[0,"loading"],multipleSelections:[1,"multipleSelections"],placeholderTranslationKey:[2,"placeholderTranslationKey"],selectionListHeight:[3,"selectionListHeight"],items:[4,"items"],optionFieldSelector:[5,"optionFieldSelector"]},{onSelect:"onSelect"}),(n()(),l.rb(10,0,null,0,4,"div",[["class","row"]],null,null,null,null,null)),(n()(),l.rb(11,0,null,null,3,"bla-data-table",[],null,[[null,"onDownloadEntry"]],function(n,t,e){var l=!0;return"onDownloadEntry"===t&&(l=!1!==n.component.onDownload(e)&&l),l},h.b,h.a)),l.Gb(512,null,b.a,b.a,[]),l.Gb(131584,null,d.j,d.j,[d.k,l.h]),l.qb(14,638976,null,0,p.a,[b.a,d.j,g.a],{loading:[0,"loading"],config:[1,"config"],rows:[2,"rows"]},{onDownloadEntry:"onDownloadEntry"})],function(n,t){var e=t.component;n(t,1,0,e.config),n(t,4,0),n(t,9,0,e.loadingVereine,!e.multipleSelections,e.PLACEHOLDER_VAR,"15em",e.vereine,"name"),n(t,14,0,e.loadingTable,e.config_table,e.rows)},function(n,t){n(t,6,0,t.component.getSelectedDTO())})}function z(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,1,"bla-vereine",[],null,null,null,F,L)),l.qb(1,114688,null,0,P,[R.l,R.a,D.a,O.a,T.a,w.a,S.a],null,null)],function(n,t){n(t,1,0)},null)}var U=l.nb("bla-vereine",P,z,{id:"id",visible:"visible",loading:"loading",disabled:"disabled"},{},[]),V=e("Ip0R"),A=e("gIcY"),M=e("t/Na"),B=e("22Ks"),k=e("Hf/j"),G=e("FpXt");e.d(t,"VereineModuleNgFactory",function(){return j});var j=l.ob(i,[],function(n){return l.yb([l.zb(512,l.j,l.db,[[8,[o.a,U]],[3,l.j],l.z]),l.zb(4608,V.n,V.m,[l.v,[2,V.z]]),l.zb(4608,A.z,A.z,[]),l.zb(4608,A.e,A.e,[]),l.zb(4608,M.i,M.o,[V.c,l.D,M.m]),l.zb(4608,M.p,M.p,[M.i,M.n]),l.zb(5120,M.a,function(n){return[n]},[M.p]),l.zb(4608,M.l,M.l,[]),l.zb(6144,M.j,null,[M.l]),l.zb(4608,M.h,M.h,[M.j]),l.zb(6144,M.b,null,[M.h]),l.zb(4608,M.f,M.k,[M.b,l.r]),l.zb(4608,M.c,M.c,[M.f]),l.zb(5120,B.b,B.f,[]),l.zb(5120,B.a,B.e,[]),l.zb(4608,d.g,d.f,[]),l.zb(4608,d.c,d.e,[]),l.zb(4608,d.i,d.d,[]),l.zb(4608,d.b,d.a,[]),l.zb(4608,d.k,d.k,[d.l,d.g,d.c,d.i,d.b,d.m,d.n]),l.zb(1073742336,V.b,V.b,[]),l.zb(1073742336,R.o,R.o,[[2,R.u],[2,R.l]]),l.zb(1073742336,A.w,A.w,[]),l.zb(1073742336,A.f,A.f,[]),l.zb(1073742336,A.r,A.r,[]),l.zb(1073742336,M.e,M.e,[]),l.zb(1073742336,M.d,M.d,[]),l.zb(1073742336,d.h,d.h,[]),l.zb(1073742336,k.f,k.f,[]),l.zb(1073742336,B.c,B.c,[]),l.zb(1073742336,G.a,G.a,[]),l.zb(1073742336,i,i,[]),l.zb(256,M.m,"XSRF-TOKEN",[]),l.zb(256,M.n,"X-XSRF-TOKEN",[]),l.zb(256,d.n,void 0,[]),l.zb(256,d.m,void 0,[]),l.zb(1024,R.j,function(){return[[{path:"",pathMatch:"full",component:P},{path:"/:id",pathMatch:"full",component:P}]]},[])])})},eQGX:function(n,t,e){"use strict";var l=e("CcnG"),i=e("gIcY"),o=e("Ip0R");e("yljE"),e.d(t,"a",function(){return r}),e.d(t,"b",function(){return s});var r=l.pb({encapsulation:0,styles:[[".selection-list[_ngcontent-%COMP%]{height:100%;max-height:100%;min-height:100%;width:100%;min-width:100%;max-width:100%;overflow-y:scroll}"]],data:{}});function a(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,3,"option",[],null,null,null,null,null)),l.qb(1,147456,null,0,i.p,[l.k,l.F,[8,null]],{ngValue:[0,"ngValue"]},null),l.qb(2,147456,null,0,i.A,[l.k,l.F,[2,i.u]],{ngValue:[0,"ngValue"]},null),(n()(),l.Jb(3,null,[" "," "]))],function(n,t){n(t,1,0,t.context.$implicit.id),n(t,2,0,t.context.$implicit.id)},function(n,t){n(t,3,0,t.context.$implicit[t.component.optionFieldSelector])})}function u(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,a)),l.qb(2,278528,null,0,o.k,[l.Q,l.N,l.t],{ngForOf:[0,"ngForOf"]},null),(n()(),l.ib(0,null,null,0))],function(n,t){n(t,2,0,t.component.items)},null)}function s(n){return l.Lb(0,[(n()(),l.rb(0,0,null,null,7,"select",[["class","form-control selection-list"]],[[8,"id",0],[8,"multiple",0],[8,"size",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,t,e){var i=!0,o=n.component;return"change"===t&&(i=!1!==l.Bb(n,1).onChange(e.target)&&i),"blur"===t&&(i=!1!==l.Bb(n,1).onTouched()&&i),"focus"===t&&(i=!1!==o.focusChanged(e)&&i),"ngModelChange"===t&&(i=!1!==o.onSelectionChanged(e)&&i),"ngModelChange"===t&&(i=!1!==(o.selectedItemIds=e)&&i),i},null,null)),l.qb(1,16384,null,0,i.u,[l.F,l.k],null,null),l.Gb(1024,null,i.j,function(n){return[n]},[i.u]),l.qb(3,671744,[["selectModel",4]],0,i.o,[[8,null],[8,null],[8,null],[6,i.j]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),l.Gb(2048,null,i.k,null,[i.o]),l.qb(5,16384,null,0,i.l,[[4,i.k]],null,null),(n()(),l.ib(16777216,null,null,1,null,u)),l.qb(7,16384,null,0,o.l,[l.Q,l.N],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,3,0,e.id,e.isDisabled(),e.selectedItemIds),n(t,7,0,!e.showLoadingPlaceholder()&&!e.showEmptyItemListPlaceholder())},function(n,t){var e=t.component;n(t,0,0,e.id,e.isMultibleSelectionAllowed(),e.getListSize(),l.Bb(t,5).ngClassUntouched,l.Bb(t,5).ngClassTouched,l.Bb(t,5).ngClassPristine,l.Bb(t,5).ngClassDirty,l.Bb(t,5).ngClassValid,l.Bb(t,5).ngClassInvalid,l.Bb(t,5).ngClassPending)})}},ny2l:function(n,t,e){"use strict";var l=e("mrSG"),i=e("YfBl"),o=(e("NJqk"),function(){function n(){}return n.copyFrom=function(t){void 0===t&&(t={});var e=new n;return e.id=t.id>=0?t.id:null,e.benutzerId=t.benutzerId>=0?t.benutzerId:null,e.vereinId=t.vereinId>=0?t.vereinId:null,e.veranstaltungId=t.veranstaltungId>=0?t.veranstaltungId:null,e.sortierung=t.sortierung>=0?t.sortierung:null,e.version=t.version||null,e.nummer=t.nummer||"",e.name=t.name||"",e},n}());function r(n){return o.copyFrom(n)}function a(n){var t=[];return n.forEach(function(n){return t.push(r(n))}),t}var u=e("CcnG"),s=e("GxkG"),c=e("rOts");e.d(t,"a",function(){return d});var d=function(n){function t(t,e){var l=n.call(this)||this;return l.restClient=t,l.currentUserService=e,l.serviceSubUrl="v1/dsbmannschaft",l}return l.d(t,n),t.prototype.create=function(n,t){var e=this;return new Promise(function(t,l){e.restClient.POST((new i.d).fromPath(e.getUrl()).build(),n).then(function(n){t({result:i.b.SUCCESS,payload:r(n)})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.deleteById=function(n){var t=this;return new Promise(function(e,l){t.restClient.DELETE((new i.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:i.b.SUCCESS})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.findAll=function(){var n=this;return new Promise(function(t,e){n.restClient.GET(n.getUrl()).then(function(n){t({result:i.b.SUCCESS,payload:a(n)})},function(n){e(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.findAllByVereinsId=function(n){var t=this;return new Promise(function(e,l){t.restClient.GET((new i.d).fromPath(t.getUrl()).path("byVereinsID/"+n).build()).then(function(n){e({result:i.b.SUCCESS,payload:a(n)})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.findAllByVeranstaltungsId=function(n){var t=this;return new Promise(function(e,l){t.restClient.GET((new i.d).fromPath(t.getUrl()).path("byVeranstaltungsID/"+n).build()).then(function(n){e({result:i.b.SUCCESS,payload:a(n)})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.findById=function(n){var t=this;return new Promise(function(e,l){t.restClient.GET((new i.d).fromPath(t.getUrl()).path(n).build()).then(function(n){e({result:i.b.SUCCESS,payload:r(n)})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.prototype.update=function(n){var t=this;return new Promise(function(e,l){t.restClient.PUT((new i.d).fromPath(t.getUrl()).build(),n).then(function(n){e({result:i.b.SUCCESS,payload:r(n)})},function(n){l(0===n.status?{result:i.b.CONNECTION_PROBLEM}:{result:i.b.FAILURE})})})},t.ngInjectableDef=u.U({factory:function(){return new t(u.Y(s.a),u.Y(c.a))},token:t,providedIn:"root"}),t}(i.a)}}]);