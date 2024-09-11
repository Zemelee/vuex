(function(){var t={5093:function(t,s,e){"use strict";var n=e(27195),o=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("nav",[s("router-link",{attrs:{to:"/x"}},[t._v("xxx")]),t._v("| "),s("router-link",{attrs:{to:"/css"}},[t._v("css")]),t._v("| ")],1),s("div",{staticStyle:{border:"1px solid red"}},[s("router-view")],1),s("hr")])},r=[],i=e(1001),a={},l=(0,i.Z)(a,o,r,!1,null,null,null),u=l.exports,c=e(42241),j=function(){var t=this,s=t._self._c;return s("div",[s("a-input",{staticClass:"my_ipt",attrs:{value:t.inputValue,placeholder:"请输入任务"},on:{change:t.handleInputChange}}),s("a-button",{attrs:{type:"primary"},on:{click:t.addItemToList}},[t._v("添加事项")]),s("a-list",{staticClass:"dt_list",attrs:{bordered:"",dataSource:t.viewHandel},scopedSlots:t._u([{key:"renderItem",fn:function(e){return s("a-list-item",{},[s("a-checkbox",{attrs:{checked:e.done},on:{change:function(s){return t.handleChange(s,e.id)}}},[t._v(t._s(e.info))]),s("a",{attrs:{slot:"actions"},on:{click:function(s){return t.removeItemById(e.id)}},slot:"actions"},[t._v("删除")])],1)}}])},[s("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[s("span",[t._v(t._s(t.$store.getters.undoneCount)+"条剩余")]),s("a-button-group",[s("a-button",{attrs:{type:"all"==t.view?"primary":"default"},on:{click:function(s){return t.changList("all")}}},[t._v("全部")]),s("a-button",{attrs:{type:"undone"==t.view?"primary":"default"},on:{click:function(s){return t.changList("undone")}}},[t._v("未完成")]),s("a-button",{attrs:{type:"done"==t.view?"primary":"default"},on:{click:function(s){return t.changList("done")}}},[t._v("已完成")])],1),s("a",{on:{click:t.clean}},[t._v("清除已完成")])],1)])],1)},d=[],h=e(90408),f={name:"app",methods:{handleInputChange(t){console.log("e.target.value",t.target.value),this.$store.commit("inputValueChange",t.target.value),console.log("state",this.$store.state.inputValue)},addItemToList(){if(this.inputValue.trim().length<=0)return this.$message.warning("文本框内容不能为空");this.$store.commit("addItem")},removeItemById(t){console.log(t),this.$store.commit("removeItem",t)},handleChange(t,s){console.log(t,s);const e={id:s,status:t.target.checked};this.$store.commit("changeStaus",e)},clean(){this.$store.commit("doneClean")},changList(t){this.$store.commit("changeView",t)}},created(){this.$store.dispatch("getList")},computed:{...(0,h.rn)(["list","inputValue","view"]),...(0,h.Se)(["viewHandel"])}},m=f,v=(0,i.Z)(m,j,d,!1,null,"0a2c83e8",null),p=v.exports;n.ZP.use(c.ZP);const g=[{path:"/x",name:"x",component:p}],b=new c.ZP({mode:"history",base:"",routes:g});var k=b,y=(e(57658),e(36040));n.ZP.use(h.ZP);var w=new h.ZP.Store({state:{list:[],inputValue:"aaa",nextId:5,view:"all"},mutations:{initList(t,s){t.list=s},inputValueChange(t,s){t.inputValue=s},addItem(t){const s={id:t.nextId,info:t.inputValue.trim(),done:!1};t.list.push(s),t.nextId++,t.inputValue=""},removeItem(t,s){const e=t.list.findIndex((t=>t.id===s));-1!==e&&t.list.splice(e,1),console.log("remove")},changeStaus(t,s){const e=t.list.findIndex((t=>t.id===s.id));-1!==e&&(t.list[e].done=s.status)},doneClean(t){const s=t.list.filter((t=>!1===t.done));console.log(s),t.list=s},changeView(t,s){t.view=s}},getters:{undoneCount(t){const s=t.list.filter((t=>0==t.done));return console.log("未完成的表项:",s),s.length},viewHandel(t){return"all"==t.view?t.list:"undone"==t.view?t.list.filter((t=>!1===t.done)):"done"==t.view?t.list.filter((t=>!0===t.done)):void 0}},actions:{getList(t){y.Z.get("/list.json").then((s=>{console.log("res:",s),t.commit("initList",s.data)}))}}}),x=e(474);e(62467);n.ZP.use(x.ZP),n.ZP.config.productionTip=!1,new n.ZP({router:k,store:w,render:t=>t(u)}).$mount("#app")},46700:function(t,s,e){var n={"./af":52496,"./af.js":52496,"./ar":70186,"./ar-dz":46881,"./ar-dz.js":46881,"./ar-kw":16265,"./ar-kw.js":16265,"./ar-ly":40451,"./ar-ly.js":40451,"./ar-ma":68625,"./ar-ma.js":68625,"./ar-sa":88819,"./ar-sa.js":88819,"./ar-tn":87092,"./ar-tn.js":87092,"./ar.js":70186,"./az":44421,"./az.js":44421,"./be":17067,"./be.js":17067,"./bg":43871,"./bg.js":43871,"./bm":54242,"./bm.js":54242,"./bn":8189,"./bn-bd":82507,"./bn-bd.js":82507,"./bn.js":8189,"./bo":5799,"./bo.js":5799,"./br":97803,"./br.js":97803,"./bs":78434,"./bs.js":78434,"./ca":85320,"./ca.js":85320,"./cs":38004,"./cs.js":38004,"./cv":14464,"./cv.js":14464,"./cy":60163,"./cy.js":60163,"./da":80803,"./da.js":80803,"./de":60233,"./de-at":57607,"./de-at.js":57607,"./de-ch":86777,"./de-ch.js":86777,"./de.js":60233,"./dv":66969,"./dv.js":66969,"./el":59618,"./el.js":59618,"./en-au":9245,"./en-au.js":9245,"./en-ca":45036,"./en-ca.js":45036,"./en-gb":31438,"./en-gb.js":31438,"./en-ie":26053,"./en-ie.js":26053,"./en-il":10134,"./en-il.js":10134,"./en-in":847,"./en-in.js":847,"./en-nz":1363,"./en-nz.js":1363,"./en-sg":59022,"./en-sg.js":59022,"./eo":58990,"./eo.js":58990,"./es":79817,"./es-do":78155,"./es-do.js":78155,"./es-mx":80952,"./es-mx.js":80952,"./es-us":39358,"./es-us.js":39358,"./es.js":79817,"./et":25396,"./et.js":25396,"./eu":24338,"./eu.js":24338,"./fa":77030,"./fa.js":77030,"./fi":72292,"./fi.js":72292,"./fil":13578,"./fil.js":13578,"./fo":8900,"./fo.js":8900,"./fr":26067,"./fr-ca":8362,"./fr-ca.js":8362,"./fr-ch":99404,"./fr-ch.js":99404,"./fr.js":26067,"./fy":46742,"./fy.js":46742,"./ga":8152,"./ga.js":8152,"./gd":6920,"./gd.js":6920,"./gl":37234,"./gl.js":37234,"./gom-deva":23578,"./gom-deva.js":23578,"./gom-latn":97054,"./gom-latn.js":97054,"./gu":28166,"./gu.js":28166,"./he":88927,"./he.js":88927,"./hi":12153,"./hi.js":12153,"./hr":39329,"./hr.js":39329,"./hu":32782,"./hu.js":32782,"./hy-am":85023,"./hy-am.js":85023,"./id":96655,"./id.js":96655,"./is":2e4,"./is.js":2e4,"./it":75107,"./it-ch":13045,"./it-ch.js":13045,"./it.js":75107,"./ja":99175,"./ja.js":99175,"./jv":74853,"./jv.js":74853,"./ka":68684,"./ka.js":68684,"./kk":60312,"./kk.js":60312,"./km":91271,"./km.js":91271,"./kn":67256,"./kn.js":67256,"./ko":14833,"./ko.js":14833,"./ku":45258,"./ku.js":45258,"./ky":73430,"./ky.js":73430,"./lb":97665,"./lb.js":97665,"./lo":2238,"./lo.js":2238,"./lt":50920,"./lt.js":50920,"./lv":28769,"./lv.js":28769,"./me":10818,"./me.js":10818,"./mi":15722,"./mi.js":15722,"./mk":17117,"./mk.js":17117,"./ml":69904,"./ml.js":69904,"./mn":8590,"./mn.js":8590,"./mr":29544,"./mr.js":29544,"./ms":40176,"./ms-my":28850,"./ms-my.js":28850,"./ms.js":40176,"./mt":70291,"./mt.js":70291,"./my":64830,"./my.js":64830,"./nb":4893,"./nb.js":4893,"./ne":8782,"./ne.js":8782,"./nl":38337,"./nl-be":62297,"./nl-be.js":62297,"./nl.js":38337,"./nn":58272,"./nn.js":58272,"./oc-lnc":50277,"./oc-lnc.js":50277,"./pa-in":6198,"./pa-in.js":6198,"./pl":35231,"./pl.js":35231,"./pt":93141,"./pt-br":19626,"./pt-br.js":19626,"./pt.js":93141,"./ro":42797,"./ro.js":42797,"./ru":30048,"./ru.js":30048,"./sd":60023,"./sd.js":60023,"./se":7339,"./se.js":7339,"./si":72851,"./si.js":72851,"./sk":89764,"./sk.js":89764,"./sl":40646,"./sl.js":40646,"./sq":81751,"./sq.js":81751,"./sr":79016,"./sr-cyrl":31368,"./sr-cyrl.js":31368,"./sr.js":79016,"./ss":21943,"./ss.js":21943,"./sv":91751,"./sv.js":91751,"./sw":46014,"./sw.js":46014,"./ta":21571,"./ta.js":21571,"./te":24819,"./te.js":24819,"./tet":78646,"./tet.js":78646,"./tg":38641,"./tg.js":38641,"./th":25714,"./th.js":25714,"./tk":57082,"./tk.js":57082,"./tl-ph":39830,"./tl-ph.js":39830,"./tlh":38757,"./tlh.js":38757,"./tr":22015,"./tr.js":22015,"./tzl":6785,"./tzl.js":6785,"./tzm":44924,"./tzm-latn":59126,"./tzm-latn.js":59126,"./tzm.js":44924,"./ug-cn":52134,"./ug-cn.js":52134,"./uk":63350,"./uk.js":63350,"./ur":83397,"./ur.js":83397,"./uz":88556,"./uz-latn":93562,"./uz-latn.js":93562,"./uz.js":88556,"./vi":27751,"./vi.js":27751,"./x-pseudo":61505,"./x-pseudo.js":61505,"./yo":95943,"./yo.js":95943,"./zh-cn":74186,"./zh-cn.js":74186,"./zh-hk":2243,"./zh-hk.js":2243,"./zh-mo":5437,"./zh-mo.js":5437,"./zh-tw":33843,"./zh-tw.js":33843};function o(t){var s=r(t);return e(s)}function r(t){if(!e.o(n,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id=46700}},s={};function e(n){var o=s[n];if(void 0!==o)return o.exports;var r=s[n]={id:n,loaded:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}e.m=t,function(){var t=[];e.O=function(s,n,o,r){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(c--,1);var u=o();void 0!==u&&(s=u)}}return s}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,o,r]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,n){var o,r,i=n[0],a=n[1],l=n[2],u=0;if(i.some((function(s){return 0!==t[s]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(l)var c=l(e)}for(s&&s(n);u<i.length;u++)r=i[u],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(c)},n=self["webpackChunkvue_x"]=self["webpackChunkvue_x"]||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(5093)}));n=e.O(n)})();
//# sourceMappingURL=app.ed8a67de.js.map