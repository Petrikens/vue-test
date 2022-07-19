(function(){"use strict";var t={4602:function(t,o,e){var n=e(9242),s=e(3396);const r={class:"app"};function a(t,o,e,n,a,i){const u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(u)])}var i={},u=e(89);const l=(0,u.Z)(i,[["render",a],["__scopeId","data-v-6aaa0b9f"]]);var p=l;const c={class:"btn"};function d(t,o,e,n,r,a){return(0,s.wg)(),(0,s.iD)("button",c,[(0,s.WI)(t.$slots,"default",{},void 0,!0)])}var v={name:"my-button"};const f=(0,u.Z)(v,[["render",d],["__scopeId","data-v-46be7528"]]);var h=f;const m=["value"];function g(t,o,e,n,r,a){return(0,s.wg)(),(0,s.iD)("input",{type:"text",class:"input",value:e.value,onInput:o[0]||(o[0]=(...t)=>a.updateInput&&a.updateInput(...t))},null,40,m)}var w={name:"my-input",props:{value:[String,Number]},methods:{updateInput(t){this.$emit("update:value",t.target.value)}}};const y=(0,u.Z)(w,[["render",g],["__scopeId","data-v-1d9b44e9"]]);var b=y;function _(t,o,e,r,a,i){return e.show?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"dialog",onClick:o[1]||(o[1]=(...t)=>i.hideDialog&&i.hideDialog(...t))},[(0,s._)("div",{class:"dialog_content",onClick:o[0]||(o[0]=(0,n.iM)((()=>{}),["stop"]))},[(0,s.WI)(t.$slots,"default",{},void 0,!0)])])):(0,s.kq)("",!0)}var D={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const k=(0,u.Z)(D,[["render",_],["__scopeId","data-v-aad2f580"]]);var C=k,P=[h,b,C];const O=(0,s._)("h1",null,"Posts page",-1),I=(0,s.Uk)("Create post");function W(t,o,e,n,r,a){const i=(0,s.up)("my-button"),u=(0,s.up)("post-form"),l=(0,s.up)("my-dialog"),p=(0,s.up)("post-list");return(0,s.wg)(),(0,s.iD)("div",null,[O,(0,s.Wm)(i,{onClick:a.showDialog},{default:(0,s.w5)((()=>[I])),_:1},8,["onClick"]),(0,s.Wm)(l,{show:r.dialogVisible,"onUpdate:show":o[0]||(o[0]=t=>r.dialogVisible=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{onCreate:a.createPost},null,8,["onCreate"])])),_:1},8,["show"]),(0,s.Wm)(p,{posts:r.posts,onRemove:a.removePost},null,8,["posts","onRemove"])])}const j=t=>((0,s.dD)("data-v-119f40af"),t=t(),(0,s.Cn)(),t),U={key:0},$=j((()=>(0,s._)("h3",null,"List of posts",-1))),Z={key:1,class:"emptyPosts"};function x(t,o,e,r,a,i){const u=(0,s.up)("post-item");return e.posts.length>0?((0,s.wg)(),(0,s.iD)("div",U,[$,(0,s.Wm)(n.W3,{name:"user-list"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.posts,(o=>((0,s.wg)(),(0,s.j4)(u,{post:o,key:o.id,onRemove:e=>t.$emit("remove",o)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,s.wg)(),(0,s.iD)("h2",Z,"No posts yet"))}var E=e(7139);const N=t=>((0,s.dD)("data-v-67dfa504"),t=t(),(0,s.Cn)(),t),T={class:"post"},V=N((()=>(0,s._)("strong",null,"Name:",-1))),M=N((()=>(0,s._)("strong",null,"Description:",-1))),R={class:"post_btns"},S=(0,s.Uk)("Open"),q=(0,s.Uk)("Delete post");function z(t,o,e,n,r,a){const i=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("div",T,[(0,s._)("div",null,[(0,s._)("div",null,[V,(0,s.Uk)((0,E.zw)(e.post.title),1)]),(0,s._)("div",null,[M,(0,s.Uk)((0,E.zw)(e.post.body),1)])]),(0,s._)("div",R,[(0,s.Wm)(i,{onClick:o[0]||(o[0]=o=>t.$router.push(`/${e.post.id}`))},{default:(0,s.w5)((()=>[S])),_:1}),(0,s.Wm)(i,{onClick:o[1]||(o[1]=o=>t.$emit("remove",e.post))},{default:(0,s.w5)((()=>[q])),_:1})])])}var F={props:{post:{type:Object,required:!0}}};const L=(0,u.Z)(F,[["render",z],["__scopeId","data-v-67dfa504"]]);var B=L,A={components:{PostItem:B},props:{posts:{type:Array,required:!0}}};const H=(0,u.Z)(A,[["render",x],["__scopeId","data-v-119f40af"]]);var J=H;const K=t=>((0,s.dD)("data-v-e2363a5c"),t=t(),(0,s.Cn)(),t),Y=K((()=>(0,s._)("h4",null,"Create a new post!",-1))),G=(0,s.Uk)("Create");function Q(t,o,e,r,a,i){const u=(0,s.up)("my-input"),l=(0,s.up)("my-button");return(0,s.wg)(),(0,s.iD)("form",{onSubmit:o[2]||(o[2]=(0,n.iM)((()=>{}),["prevent"]))},[Y,(0,s.Wm)(u,{value:a.post.title,"onUpdate:value":o[0]||(o[0]=t=>a.post.title=t),placeholder:"Name",type:"text"},null,8,["value"]),(0,s.Wm)(u,{value:a.post.body,"onUpdate:value":o[1]||(o[1]=t=>a.post.body=t),class:"input",placeholder:"Description",type:"text"},null,8,["value"]),(0,s.Wm)(l,{onClick:i.createPost,class:"create_btn"},{default:(0,s.w5)((()=>[G])),_:1},8,["onClick"])],32)}var X={data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const tt=(0,u.Z)(X,[["render",Q],["__scopeId","data-v-e2363a5c"]]);var ot=tt,et=e(6265),nt=e.n(et),st={components:{PostForm:ot,PostList:J,MyButton:h},data(){return{posts:[],dialogVisible:!1,page:1,limit:10}},methods:{createPost(t){this.dialogVisible=!1,this.posts=fetch("http://localhost:3001/posts",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((t=>t.json())).then((t=>console.log(t)))},removePost(t){this.posts=fetch("http://localhost:3001/posts/"+t.id,{method:"DELETE"}).then((t=>t.json())).then((t=>console.log(t)))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{const t=await nt().get("http://localhost:3001/posts");this.posts=t.data}catch(t){alert("Error!")}}},mounted(){this.fetchPosts()}};const rt=(0,u.Z)(st,[["render",W]]);var at=rt;function it(t,o,e,n,r,a){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("h1",null,"Страница с ID = "+(0,E.zw)(t.$route.params.id),1)])}var ut={};const lt=(0,u.Z)(ut,[["render",it]]);var pt=lt,ct=e(2483);const dt=[{path:"/",component:at},{path:"/:id",component:pt}],vt=(0,ct.p7)({routes:dt,history:(0,ct.PO)("/")});var ft=vt;const ht=(0,n.ri)(p);P.forEach((t=>{ht.component(t.name,t)})),ht.use(ft).mount("#app")}},o={};function e(n){var s=o[n];if(void 0!==s)return s.exports;var r=o[n]={exports:{}};return t[n](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(o,n,s,r){if(!n){var a=1/0;for(p=0;p<t.length;p++){n=t[p][0],s=t[p][1],r=t[p][2];for(var i=!0,u=0;u<n.length;u++)(!1&r||a>=r)&&Object.keys(e.O).every((function(t){return e.O[t](n[u])}))?n.splice(u--,1):(i=!1,r<a&&(a=r));if(i){t.splice(p--,1);var l=s();void 0!==l&&(o=l)}}return o}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[n,s,r]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var s,r,a=n[0],i=n[1],u=n[2],l=0;if(a.some((function(o){return 0!==t[o]}))){for(s in i)e.o(i,s)&&(e.m[s]=i[s]);if(u)var p=u(e)}for(o&&o(n);l<a.length;l++)r=a[l],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(p)},n=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(4602)}));n=e.O(n)})();
//# sourceMappingURL=app.c2dfa63c.js.map