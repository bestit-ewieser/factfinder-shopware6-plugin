"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["custom_plugins_FactFinder_src_Resources_app_storefront_src_plugin_tracking_plugin_js"],{85:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var n=r(568),i=r(49);class a extends n.Z{init(){this.registerEvents()}registerEvents(){window.PluginManager.getPluginInstances("AddToCart").forEach(t=>t.$emitter.subscribe("beforeFormSubmit",this.trackAddToCart.bind(this)))}getQuantity(t){if("count_as_one"===ffTrackingSettings.addToCart.count)return 1;try{let e=i.Z.querySelector(t,'[name$="[quantity]"]');return parseInt(e.value,10)}catch(t){return 1}}async trackAddToCart(t){let e=i.Z.querySelector(t.target,'[name="product-number"]'),r=this.getQuantity(t.target);e&&new Promise(t=>{void 0!==window.factfinder?t(window.factfinder):document.addEventListener("ffReady",e=>t(e.factfinder))}).then(t=>{let n=t.communication.Util.trackingHelper;t.communication.EventAggregator.addFFEvent({type:"getRecords",recordId:e.value,idType:"productNumber",success:e=>{let[i]=e,a=t.communication.fieldRoles;t.communication.Tracking.cart({id:(t=>{let{record:e}=t;return e[a.trackingProductNumber]||e[a.productNumber]})(i),masterId:(t=>{let{record:e}=t;return e[a.masterArticleNumber]||e[a.masterId]})(i),price:n.getPrice(i),title:n.getTitle(i),count:r,userId:t.communication.globalCommunicationParameter.userId})}})})}}}}]);