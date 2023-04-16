"use strict";(self["webpackChunkvue_simple_shop"]=self["webpackChunkvue_simple_shop"]||[]).push([[511],{700:function(t,n,e){e.d(n,{Z:function(){return d}});var a=e(3396),r=e(9242);const c={class:"counter-block"};function i(t,n,e,i,o,u){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("button",{class:"counter-btn btn btn-round",onClick:n[0]||(n[0]=(...t)=>u.decrement&&u.decrement(...t))},"-"),(0,a.wy)((0,a._)("input",{type:"number",class:"counter-input","onUpdate:modelValue":n[1]||(n[1]=t=>o.quantity=t),min:1,max:20,onCange:n[2]||(n[2]=(...t)=>u.inputChange&&u.inputChange(...t))},null,544),[[r.nr,o.quantity]]),(0,a._)("button",{class:"counter-btn btn btn-round",onClick:n[3]||(n[3]=(...t)=>u.increment&&u.increment(...t))},"+")])}var o={name:"v-counter",props:{quantity_data:{type:Number,default:1}},data(){return{quantity:this.quantity_data}},methods:{increment(){this.quantity++},decrement(){this.quantity>1&&this.quantity--},inputChange(){}},watch:{quantity_data:function(t){this.quantity=t},quantity(){this.$emit("changeCounter",this.quantity)}}},u=e(89);const s=(0,u.Z)(o,[["render",i]]);var d=s},2380:function(t,n,e){e.r(n),e.d(n,{default:function(){return R}});var a=e(3396);const r={class:"section-cart"},c={class:"container"},i=(0,a._)("div",{class:"section-header"},[(0,a._)("h1",{class:"section-title"},"Cart")],-1),o={key:0};function u(t,n,e,u,s,d){const l=(0,a.up)("router-link"),m=(0,a.up)("v-cart-grid");return(0,a.wg)(),(0,a.iD)("section",r,[(0,a._)("div",c,[i,t.CART.length?((0,a.wg)(),(0,a.j4)(m,{key:1})):((0,a.wg)(),(0,a.iD)("div",o,[(0,a.Uk)(" Cart is empty. Go to "),(0,a.Wm)(l,{to:{name:"home"}},{default:(0,a.w5)((()=>[(0,a.Uk)("catalog")])),_:1}),(0,a.Uk)(" and add products ")]))])])}var s=e(65);const d={class:"cart-grid"};function l(t,n,e,r,c,i){const o=(0,a.up)("v-cart-item");return(0,a.wg)(),(0,a.iD)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.CART,(t=>((0,a.wg)(),(0,a.j4)(o,{key:t.id,product_data:t},null,8,["product_data"])))),128))])}var m=e(7139);const p={class:"cart-item"},v=["src","alt"],h={class:"cart-item-summary"},_={class:"cart-item-cost"},g={class:"cart-item-price"},C={key:0,class:"cart-item-price-old"},y={class:"cart-item-quantity"},k={class:"cart-item-actions"};function f(t,n,e,r,c,i){const o=(0,a.up)("router-link"),u=(0,a.up)("v-counter");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a.Wm)(o,{class:"cart-item-thumbnail",to:{name:"single",params:{productLink:c.product.link}}},{default:(0,a.w5)((()=>[(0,a._)("img",{loading:"lazy",src:c.product.image,alt:c.product.title,class:"cart-item-media"},null,8,v)])),_:1},8,["to"]),(0,a._)("div",h,[(0,a.Wm)(o,{class:"cart-item-title",to:{name:"single",params:{productLink:c.product.link}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,m.zw)(c.product.title),1)])),_:1},8,["to"])]),(0,a._)("div",_,[(0,a._)("data",g,"$"+(0,m.zw)(c.product.price),1),c.product?.price_old?((0,a.wg)(),(0,a.iD)("p",C)):(0,a.kq)("",!0)]),(0,a._)("div",y,[(0,a.Wm)(u,{quantity_data:c.product.quantity,onChangeCounter:i.changeCounter},null,8,["quantity_data","onChangeCounter"])]),(0,a._)("div",k,[(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:n[0]||(n[0]=(...t)=>i.removeProduct&&i.removeProduct(...t))}," Delete ")])])}var w=e(700),b={name:"v-cart-item",components:{vCounter:w.Z},props:{product_data:{type:Object,required:!0}},data(){return{product:{...this.product_data}}},methods:{...(0,s.nv)(["addToCart","removeFromCart"]),changeCounter(t){this.product.quantity=t,this.addToCart(this.product)},removeProduct(){this.removeFromCart(this.product.id)}}},q=e(89);const D=(0,q.Z)(b,[["render",f]]);var Z=D,T={name:"v-cart-grid",components:{vCartItem:Z},computed:{...(0,s.Se)(["CART"])}};const U=(0,q.Z)(T,[["render",l]]);var W=U,A={name:"CartView",components:{vCartGrid:W},computed:{...(0,s.Se)(["CART"])}};const P=(0,q.Z)(A,[["render",u]]);var R=P},7508:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var a=e(3396);const r={class:"section-404"},c={class:"container"},i={class:"section-header"},o=(0,a._)("h1",{class:"section-title"},"Page not found",-1);function u(t,n,e,u,s,d){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",r,[(0,a._)("div",c,[(0,a._)("div",i,[o,(0,a.Wm)(l,{to:{name:"home"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Go home")])),_:1})])])])}var s={name:"NotFoundView"},d=e(89);const l=(0,d.Z)(s,[["render",u]]);var m=l}}]);
//# sourceMappingURL=cart.04f9cbbb.js.map