(function(){var e={228:function(){},494:function(){},782:function(){},787:function(){},132:function(){},259:function(e,n,t){var s=t(228);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(346).Z("6c33f4d4",s,!0,{})},262:function(e,n,t){var s=t(494);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(346).Z("1e877f1c",s,!0,{})},288:function(e,n,t){var s=t(782);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(346).Z("2bad29ae",s,!0,{})},577:function(e,n,t){var s=t(787);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(346).Z("004f6500",s,!0,{})},700:function(e,n,t){var s=t(132);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(346).Z("1afa291d",s,!0,{})},346:function(e,n,t){"use strict";function s(e,n){for(var t=[],s={},i=0;i<n.length;i++){var a=n[i],l=a[0],o={id:e+":"+i,css:a[1],media:a[2],sourceMap:a[3]};s[l]?s[l].parts.push(o):t.push(s[l]={id:l,parts:[o]})}return t}t.d(n,{Z:function(){return u}});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},l=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,c=0,r=!1,d=function(){},m=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(e,n,t,i){r=t,m=i||{};var l=s(e,n);return g(l),function(n){for(var t=[],i=0;i<l.length;i++){var o=a[l[i].id];o.refs--,t.push(o)}n?g(l=s(e,n)):l=[];for(var i=0;i<t.length;i++){var o=t[i];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete a[o.id]}}}}function g(e){for(var n=0;n<e.length;n++){var t=e[n],s=a[t.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](t.parts[i]);for(;i<t.parts.length;i++)s.parts.push(w(t.parts[i]));s.parts.length>t.parts.length&&(s.parts.length=t.parts.length)}else{for(var l=[],i=0;i<t.parts.length;i++)l.push(w(t.parts[i]));a[t.id]={id:t.id,refs:1,parts:l}}}}function b(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function w(e){var n,t,s=document.querySelector("style["+p+'~="'+e.id+'"]');if(s){if(r)return d;s.parentNode.removeChild(s)}if(f){var i=c++;n=h.bind(null,s=o||(o=b()),i,!1),t=h.bind(null,s,i,!0)}else n=C.bind(null,s=b()),t=function(){s.parentNode.removeChild(s)};return n(e),function(s){s?(s.css!==e.css||s.media!==e.media||s.sourceMap!==e.sourceMap)&&n(e=s):t()}}var v=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function h(e,n,t,s){var i=t?"":s.css;if(e.styleSheet)e.styleSheet.cssText=v(n,i);else{var a=document.createTextNode(i),l=e.childNodes;l[n]&&e.removeChild(l[n]),l.length?e.insertBefore(a,l[n]):e.appendChild(a)}}function C(e,n){var t=n.css,s=n.media,i=n.sourceMap;if(s&&e.setAttribute("media",s),m.ssrId&&e.setAttribute(p,n.id),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},n={};function t(s){var i=n[s];if(void 0!==i)return i.exports;var a=n[s]={id:s,exports:{}};return e[s](a,a.exports,t),a.exports}t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="bundles/factfinder/",window?.__sw__?.assetPath&&(t.p=window.__sw__.assetPath+"/bundles/factfinder/"),function(){"use strict";let{Component:e}=Shopware;e.register("sw-cms-block-listing",{template:'{% block cms_block_commerce_factfinder_listing %}\n  <div>\n    <slot name="toolbarFilters"></slot>\n    <div class="ff-flex-container">\n      <slot name="toolbarPaging"></slot>\n      <slot name="toolbarSorting"></slot>\n    </div>\n    <slot name="records"></slot>\n  </div>\n{% endblock %}\n'});let{Component:n}=Shopware;n.register("sw-cms-block-listing-preview",{template:"{% block cms_block_commerce_factfinder_listing_preview %}\n  <div class=\"ff-preview-container\">\n    {{ $tc('sw-cms.blocks.commerce.factfinderWebComponentsListing.title') }}\n  </div>\n{% endblock %}\n\n"}),Shopware.Service("cmsService").registerCmsBlock({name:"listing",label:"sw-cms.blocks.commerce.factfinderWebComponentsListing.label",category:"commerce",component:"sw-cms-block-listing",previewComponent:"sw-cms-block-listing-preview",slots:{toolbarFilters:"asn",toolbarPaging:"paging",toolbarSorting:"sortbox",records:"record-list"}});let{Component:s}=Shopware;s.register("sw-cms-block-campaigns",{template:'{% block cms_block_commerce_factfinder_campaigns %}\n      <div class="ff-flex-container">\n        <slot name="campaigns"></slot>\n      </div>\n{% endblock %}\n'});let{Component:i}=Shopware;i.register("sw-cms-block-campaigns-preview",{template:"{% block cms_block_commerce_factfinder_campaigns_preview %}\n  <div class=\"ff-preview-container\">\n    {{ $tc('sw-cms.blocks.commerce.factfinderWebComponentsCampaigns.title') }}\n  </div>\n{% endblock %}\n\n"}),Shopware.Service("cmsService").registerCmsBlock({name:"campaigns",label:"sw-cms.blocks.commerce.factfinderWebComponentsCampaigns.label",category:"commerce",component:"sw-cms-block-campaigns",previewComponent:"sw-cms-block-campaigns-preview",slots:{campaigns:"campaigns"}});let{Component:a}=Shopware;a.register("sw-cms-block-filters",{template:'{% block cms_block_commerce_factfinder_filters %}\n      <div class="ff-flex-container">\n        <slot name="filters"></slot>\n      </div>\n{% endblock %}\n'});let{Component:l}=Shopware;l.register("sw-cms-block-filters-preview",{template:"{% block cms_block_commerce_factfinder_filters_preview %}\n  <div class=\"ff-preview-container\">\n    {{ $tc('sw-cms.blocks.commerce.factfinderWebComponentsFilters.title') }}\n  </div>\n{% endblock %}\n\n"}),Shopware.Service("cmsService").registerCmsBlock({name:"filters",label:"sw-cms.blocks.commerce.factfinderWebComponentsFilters.label",category:"commerce",component:"sw-cms-block-filters",previewComponent:"sw-cms-block-filters-preview",defaultConfig:{cssClass:"cms-block-sidebar-filter"},slots:{filters:"asn"}}),Shopware.Component.register("sw-cms-el-record-list",{template:'{% block sw_cms_element_record_list %}\n  <div class="ff-flex-container">\n    <div>FF-RECORD-LIST</div>\n  </div>\n{% endblock %}\n\n',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("record-list")}}}),Shopware.Component.register("sw-cms-el-config-record-list",{template:'{% block sw_cms_element_record_list_config %}\n  <div>\n    <sw-switch-field :label="$tc(\'sw-cms.elements.recordList.base.subscribe\')" v-model="element.config.subscribe.value"></sw-switch-field>\n\n    <sw-switch-field :label="$tc(\'sw-cms.elements.recordList.base.infiniteScrolling\')" v-model="element.config.infiniteScrolling.value"></sw-switch-field>\n\n    <sw-text-field\n      :label="$tc(\'sw-cms.elements.recordList.base.debounceDelay\')"\n      :placeholder="$tc(\'sw-cms.elements.recordList.base.debounceDelay\')"\n      v-model="element.config.infiniteDebounceDelay.value">\n    </sw-text-field>\n\n    <sw-text-field :label="$tc(\'sw-cms.elements.recordList.base.ident\')"\n                   :placeholder="$tc(\'sw-cms.elements.recordList.base.ident\')"\n                   v-tooltip="{ message:$tc(\'sw-cms.elements.recordList.config.id\')}"\n                   v-model="element.config.id.value">\n    </sw-text-field>\n\n    <sw-text-field :label="$tc(\'sw-cms.elements.recordList.base.callbackArg\')"\n                   :placeholder="$tc(\'sw-cms.elements.recordList.base.callbackArg\')"\n                   v-tooltip="{ message:$tc(\'sw-cms.elements.recordList.config.callbackArg\')}"\n                   v-model="element.config.callbackArg.value">\n    </sw-text-field>\n\n    <sw-textarea-field :label="$tc(\'sw-cms.elements.recordList.base.callback\')"\n                       :placeholder="$tc(\'sw-cms.elements.recordList.base.callback\')"\n                       size="medium"\n                       v-model="element.config.callback.value"\n                       v-tooltip="{ message:$tc(\'sw-cms.elements.recordList.config.callback\')}">\n    </sw-textarea-field>\n\n    <sw-textarea-field :label="$tc(\'sw-cms.elements.recordList.base.domUpdated\')"\n                       :placeholder="$tc(\'sw-cms.elements.recordList.base.domUpdated\')"\n                       size="medium"\n                       v-model="element.config.domUpdated.value"\n                       v-tooltip="{ message:$tc(\'sw-cms.elements.recordList.config.domUpdated\')}">\n    </sw-textarea-field>\n  </div>\n{% endblock %}\n',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("record-list")}}}),Shopware.Component.register("sw-cms-el-preview-record-list",{template:'{% block sw_cms_element_record_list_preview %}\n  <div class="ff-preview-container">\n    FF-RECORD-LIST\n  </div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsElement({name:"record-list",label:"sw-cms.elements.recordList.label",component:"sw-cms-el-record-list",configComponent:"sw-cms-el-config-record-list",previewComponent:"sw-cms-el-preview-record-list",defaultConfig:{subscribe:{value:!0,source:"static"},infiniteScrolling:{value:!1,source:"static"},restoreScrollPosition:{value:!1,source:"static"},infiniteDebounceDelay:{value:"32",source:"static"},infiniteScrollMargin:{value:0,source:"static"},callbackArg:{value:"records",source:"static"},callback:{value:"",source:"static"},id:{value:"",source:"static"},domUpdated:{value:"",source:"static"}}}),Shopware.Component.register("sw-cms-el-asn",{template:'{% block sw_cms_element_asn %}\n  <div class="ff-flex-container">\n    <div>FF-ASN</div>\n  </div>\n{% endblock %}\n\n',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("asn")}}}),t(577),Shopware.Component.register("sw-cms-el-config-asn",{template:'{% block sw_cms_element_asn_config %}\n  <div>\n    <sw-switch-field :label="$tc(\'sw-cms.elements.asn.base.subscribe\')" v-model="element.config.subscribe.value"></sw-switch-field>\n\n    <sw-switch-field :label="$tc(\'sw-cms.elements.asn.base.vertical\')"\n                     v-tooltip="{ message:$tc(\'sw-cms.elements.asn.config.veritcal\')}"\n                     v-model="element.config.vertical.value">\n    </sw-switch-field>\n\n    <sw-text-field :label="$tc(\'sw-cms.elements.asn.base.ident\')"\n                   :placeholder="$tc(\'sw-cms.elements.asn.base.ident\')"\n                   v-tooltip="{ message:$tc(\'sw-cms.elements.asn.config.id\')}"\n                   v-model="element.config.id.value">\n    </sw-text-field>\n\n    <sw-text-field :label="$tc(\'sw-cms.elements.asn.base.topic\')"\n                   :placeholder="$tc(\'sw-cms.elements.asn.base.topic\')"\n                   v-tooltip="{ message:$tc(\'sw-cms.elements.asn.config.topic\')}"\n                   v-model="element.config.topic.value">\n    </sw-text-field>\n\n    <sw-text-field :label="$tc(\'sw-cms.elements.asn.base.callbackArg\')"\n                   :placeholder="$tc(\'sw-cms.elements.asn.base.callbackARG\')"\n                   v-tooltip="{ message:$tc(\'sw-cms.elements.asn.config.callbackArg\')}"\n                   v-model="element.config.callbackArg.value">\n    </sw-text-field>\n    <sw-textarea-field :label="$tc(\'sw-cms.elements.asn.base.callback\')"\n                       :placeholder="$tc(\'sw-cms.elements.asn.base.callback\')"\n                       size="medium"\n                       v-model="element.config.callback.value"\n                       v-tooltip="{ message:$tc(\'sw-cms.elements.asn.config.callback\')}">\n    </sw-textarea-field>\n    <sw-textarea-field :label="$tc(\'sw-cms.elements.asn.base.domUpdated\')"\n                       :placeholder="$tc(\'sw-cms.elements.asn.base.domUpdated\')"\n                       size="medium"\n                       v-model="element.config.domUpdated.value"\n                       v-tooltip="{ message:$tc(\'sw-cms.elements.asn.config.domUpdated\')}">\n    </sw-textarea-field>\n\n    <wrapper class="secondary">\n      <div class="h3 ff-filter-cloud">{{ $tc(\'sw-cms.elements.asn.base.filterCloud\') }}</div>\n      <sw-switch-field :label="$tc(\'sw-cms.elements.asn.base.useFilterCloud\')" v-model="element.config.filterCloud.value"></sw-switch-field>\n\n      <sw-container v-if="element.config.filterCloud.value">\n        <sw-text-field :label="$tc(\'sw-cms.elements.asn.base.blacklist\')"\n                       :placeholder="$tc(\'sw-cms.elements.asn.base.blacklist\')"\n                       v-model="element.config.filterCloudBlacklist.value"></sw-text-field>\n\n        <sw-text-field :label="$tc(\'sw-cms.elements.asn.base.whitelist\')"\n                       :placeholder="$tc(\'sw-cms.elements.asn.base.whitelist\')"\n                       v-model="element.config.filterCloudWhitelist.value"></sw-text-field>\n\n        <sw-select-field :label="$tc(\'sw-cms.elements.asn.base.order\')" :placeholder="$tc(\'sw-cms.elements.asn.base.order\')" v-model="element.config.filterCloudOrder.value">\n          <option value="fact-finder">{{ $tc(\'sw-cms.elements.asn.base.factfinder\') }}</option>\n          <option value="alphabetical">{{ $tc(\'sw-cms.elements.asn.base.alphabetical\') }}</option>\n          <option value="user-selection">{{ $tc(\'sw-cms.elements.asn.base.userSelection\') }}</option>\n        </sw-select-field>\n      </sw-container>\n    </wrapper>\n  </div>\n{% endblock %}\n',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("asn")}}}),Shopware.Component.register("sw-cms-el-preview-asn",{template:'{% block sw_cms_preview_element_asn %}\n  <div class="ff-preview-container">\n    FF-ASN\n  </div>\n{% endblock %}\n\n'}),Shopware.Service("cmsService").registerCmsElement({name:"asn",label:"sw-cms.elements.asn.label",component:"sw-cms-el-asn",configComponent:"sw-cms-el-config-asn",previewComponent:"sw-cms-el-preview-asn",defaultConfig:{subscribe:{value:!0,source:"static"},vertical:{value:!1,source:"static"},topic:{value:"asn",source:"static"},callbackArg:{value:"groups",source:"static"},callback:{value:"",source:"static"},id:{value:"",source:"static"},domUpdated:{value:"",source:"static"},filterCloud:{value:!0,source:"static"},filterCloudBlacklist:{value:"",source:"static"},filterCloudWhitelist:{value:"",source:"static"},filterCloudOrder:{value:"fact-finder",source:"static"}}}),Shopware.Component.register("sw-cms-el-sortbox",{template:'{% block sw_cms_element_sortbox %}\n  <div class="ff-flex-container">\n    <div>FF-SORTBOX</div>\n  </div>\n{% endblock %}\n',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("sortbox")}}}),Shopware.Component.register("sw-cms-el-config-sortbox",{template:'{% block sw_cms_element_sortbox_config %}\n  <div>\n    <sw-switch-field :label="$tc(\'sw-cms.elements.sortbox.base.subscribe\')" v-model="element.config.subscribe.value"></sw-switch-field>\n    <sw-switch-field :label="$tc(\'sw-cms.elements.sortbox.base.opened\')" v-model="element.config.showSelected.value"></sw-switch-field>\n    <sw-switch-field :label="$tc(\'sw-cms.elements.sortbox.base.showSelected\')" v-model="element.config.showSelectedFirst.value"></sw-switch-field>\n    <sw-switch-field :label="$tc(\'sw-cms.elements.sortbox.base.showSelectedFirst\')" v-if="element.config.showSelected.value" v-model="element.config.showSelectedFirst.value"></sw-switch-field>\n    <sw-switch-field :label="$tc(\'sw-cms.elements.sortbox.base.collapseOnblur\')" v-model="element.config.collapseOnblur.value"></sw-switch-field>\n  </div>\n{% endblock %}\n',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("sortbox")}}}),Shopware.Component.register("sw-cms-el-preview-sortbox",{template:'{% block sw_cms_element_sortbox_preview %}\n  <div class="ff-preview-container">\n    FF-SORTBOX\n  </div>\n{% endblock %}\n'}),Shopware.Service("cmsService").registerCmsElement({name:"sortbox",label:"sw-cms.elements.sortbox.label",component:"sw-cms-el-sortbox",configComponent:"sw-cms-el-config-sortbox",previewComponent:"sw-cms-el-preview-sortbox",defaultConfig:{subscribe:{value:!0,source:"static"},opened:{value:!0,source:"static"},showSelected:{value:!1,source:"static"},showSelectedFirst:{value:!1,source:"static"},collapseOnblur:{value:!1,source:"static"}}}),Shopware.Component.register("sw-cms-el-paging",{template:'{% block sw_cms_element_paging %}\n  <div class="ff-flex-container">\n    <div>FF-PAGING</div>\n  </div>\n{% endblock %}\n\n',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("paging")}}}),Shopware.Component.register("sw-cms-el-config-paging",{template:'{% block sw_cms_element_paging_config %}\n  <div>\n    <sw-text-field\n      :label="$tc(\'sw-cms.elements.paging.showOnly\')"\n      :placeholder="$tc(\'sw-cms.elements.paging.showOnly\')"\n      v-model="element.config.showOnly.value">\n    </sw-text-field>\n    <sw-switch-field :label="$tc(\'sw-cms.elements.paging.subscribe\')" v-model="element.config.subscribe.value"></sw-switch-field>\n  </div>\n{% endblock %}\n',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("paging")}}}),Shopware.Component.register("sw-cms-el-preview-paging",{template:'{% block sw_cms_element_paging_preview %}\n  <div class="ff-preview-container">\n    FF-PAGING\n  </div>\n{% endblock %}\n\n'}),Shopware.Service("cmsService").registerCmsElement({name:"paging",label:"sw-cms.elements.paging.label",component:"sw-cms-el-paging",configComponent:"sw-cms-el-config-paging",previewComponent:"sw-cms-el-preview-paging",defaultConfig:{subscribe:{value:!0,source:"static"},showOnly:{value:"true",source:"static"}}}),Shopware.Component.register("sw-cms-el-campaigns",{template:'{% block sw_cms_element_campaigns %}\n  <div class="ff-flex-container">\n    <div>FF-CAMPAIGNS</div>\n  </div>\n{% endblock %}\n\n',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("campaigns")}}}),Shopware.Component.register("sw-cms-el-config-campaigns",{template:'{% block sw_cms_element_campaigns_config %}\n  <div>\n\n    <sw-switch-field :label="$tc(\'sw-cms.elements.campaigns.base.advisorCampaign\')" v-model="element.config.enableAdvisorCampaign.value">\n    </sw-switch-field>\n\n    <sw-container v-if="element.config.enableAdvisorCampaign.value">\n      <sw-text-field\n        :label="$tc(\'sw-cms.elements.campaigns.base.name\')"\n        :placeholder="$tc(\'sw-cms.elements.campaigns.base.advisorCampaignName\')"\n        v-tooltip="$tc(\'sw-cms.elements.campaigns.config.leaveFreeIfNotSpecified\')"\n        v-model="element.config.advisorCampaignName.value">\n      </sw-text-field>\n    </sw-container>\n\n    <sw-switch-field :label="$tc(\'sw-cms.elements.campaigns.base.feedbackCampaign\')" v-model="element.config.enableFeedbackCampaign.value">\n    </sw-switch-field>\n\n    <sw-container v-if="element.config.enableFeedbackCampaign.value">\n      <sw-text-field\n        :label="$tc(\'sw-cms.elements.campaigns.base.label\')"\n        :placeholder="$tc(\'sw-cms.elements.campaigns.base.feedbackCampaignLabel\')"\n        v-tooltip="$tc(\'sw-cms.elements.campaigns.config.leaveFreeIfNotSpecified\')"\n        v-model="element.config.feedbackCampaignLabel.value">\n      </sw-text-field>\n\n      <sw-select-field :label="Flag"\n                       v-model="element.config.feedbackCampaignFlag.value">\n        <option v-for="(flag, index) in campaignFlags"\n                :key="index"\n                :value="flag"\n                :selected="element.config.feedbackCampaignFlag.value === flag">\n          {{ flag }}\n        </option>\n      </sw-select-field>\n    </sw-container>\n\n    <sw-switch-field :label="$tc(\'sw-cms.elements.campaigns.base.redirectCampaign\')" v-model="element.config.enableRedirectCampaign.value">\n    </sw-switch-field>\n\n\n    <sw-switch-field :label="$tc(\'sw-cms.elements.campaigns.base.pushedCampaign\')" v-model="element.config.enablePushedProducts.value">\n    </sw-switch-field>\n    <sw-container v-if="element.config.enablePushedProducts.value">\n      <sw-select-field :label="Flag"\n                       v-model="element.config.pushedProductsFlag.value">\n        <option v-for="(flag, index) in campaignFlags"\n                :key="index"\n                :value="flag"\n                :selected="element.config.pushedProductsFlag.value === flag">\n          {{ flag }}\n        </option>\n      </sw-select-field>\n      <sw-text-field\n        :label="$tc(\'sw-cms.elements.campaigns.base.name\')"\n        :placeholder="$tc(\'sw-cms.elements.campaigns.base.name\')"\n        v-tooltip="$tc(\'sw-cms.elements.campaigns.config.leaveFreeIfNotSpecified\')"\n        v-model="element.config.pushedProductsName.value">\n      </sw-text-field>\n    </sw-container>\n  </div>\n{% endblock %}\n',mixins:["cms-element"],created(){this.createdComponent()},data(){return{campaignFlags:["None","is-product-campaign","is-landing-page-campaign"]}},methods:{createdComponent(){this.initElementConfig("campaigns")}}}),Shopware.Component.register("sw-cms-el-preview-campaigns",{template:'{% block sw_cms_element_campaigns_preview %}\n  <div class="ff-preview-container">\n    CAMPAIGNS\n  </div>\n{% endblock %}\n\n'}),Shopware.Service("cmsService").registerCmsElement({name:"campaigns",label:"sw-cms.elements.campaigns.label",component:"sw-cms-el-campaigns",configComponent:"sw-cms-el-config-campaigns",previewComponent:"sw-cms-el-preview-campaigns",defaultConfig:{advisorCampaignName:{value:"",source:"static"},feedbackCampaignLabel:{value:"",source:"static"},feedbackCampaignFlag:{value:"",source:"static"},enableFeedbackCampaign:{value:!1,source:"static"},enableAdvisorCampaign:{value:!1,source:"static"},enableRedirectCampaign:{value:!1,source:"static"},enablePushedProducts:{value:!1,source:"static"},pushedProductsFlag:{value:"",source:"static"},pushedProductsName:{value:"",source:"static"}}}),t(700),t(288);let{Component:o,Mixin:c}=Shopware;o.register("ui-feed-export-form",{template:'{% block factfinder_module_ui_feed_export %}\n<sw-card-view>\n\n  <sw-card>\n    <sw-container columns="repeat(auto-fit, minmax(250px, 1fr)" gap="0px 30px">\n      <sw-entity-single-select\n        v-model:value ="salesChannelValue"\n        entity="sales_channel"\n        id="sales_channel"\n        :label="$tc(\'ui-feed-export.component.export_form.sales_channel.label\')">\n      </sw-entity-single-select>\n\n      <sw-entity-single-select\n        v-model:value ="salesChannelLanguageValue"\n        entity="language"\n        id="sales_channel_language"\n        :label="$tc(\'ui-feed-export.component.export_form.sales_channel_language.label\')">\n      </sw-entity-single-select>\n\n      <sw-select-field id="export_type"\n                       v-model:value ="exportTypeValue"\n                       :label="$tc(\'ui-feed-export.component.export_form.export_type.label\')">\n        <option v-for="(key, value) in typeSelectOptions" :value="value">\n          {{ value | capitalize }}\n        </option>\n      </sw-select-field>\n\n    </sw-container>\n    <sw-button @click="getFeedExportFile(\'_action/fact-finder/generate-feed\')"\n               :isLoading="isLoadingExport"\n               :disabled="isLoadingExport"\n               variant="success"\n               block="true"\n               size="large">\n\n      {{ $tc(\'ui-feed-export.component.export_form.button.title\') }}\n    </sw-button>\n  </sw-card>\n</sw-card-view>\n{% endblock %}\n',data(){return{salesChannelValue:null,salesChannelLanguageValue:null,exportTypeValue:null,typeSelectOptions:[],isLoadingExport:!1}},mixins:[c.getByName("notification")],mounted(){this.getExportTypeValues()},filters:{capitalize:function(e){return e?(e=e.toString()).charAt(0).toUpperCase()+e.slice(1):""}},methods:{getExportTypeValues(){let e=Shopware.Service("syncService").httpClient,n={Authorization:`Bearer ${Shopware.Context.api.authToken.access}`,"Content-Type":"application/json"};e.get("_action/fact-finder/get-export-type-options",{headers:n}).then(e=>{200===e.status&&(this.typeSelectOptions=e.data)})},successFeedGenerationWindow(){this.createNotificationSuccess({message:Shopware.Snippet.tc("ui-feed-export.component.export_form.alert_success.text")})},errorFeedGenerationWindow(){this.createNotificationError({message:Shopware.Snippet.tc("ui-feed-export.component.export_form.alert_error.text")})},errorNotValidParams(){this.createNotificationError({message:Shopware.Snippet.tc("ui-feed-export.component.export_form.alert_not_valid_params.text")})},validateParams(e){return null!==e.salesChannelValue&&null!==e.salesChannelLanguageValue&&null!==e.exportTypeValue},getFeedExportFile(e){let n={salesChannelValue:this.salesChannelValue,salesChannelLanguageValue:this.salesChannelLanguageValue,exportTypeValue:this.exportTypeValue};if(!this.validateParams(n)){this.errorNotValidParams();return}this.isLoadingExport=!0;let t=Shopware.Service("syncService").httpClient,s={Authorization:`Bearer ${Shopware.Context.api.authToken.access}`,"Content-Type":"application/json"};t.get(e,{headers:s,params:n}).then(e=>{200===e.status?this.successFeedGenerationWindow():this.errorFeedGenerationWindow(),this.isLoadingExport=!1})}}});let{Component:r}=Shopware;r.register("ui-feed-export-index",{template:'{% block factfinder_ui_feed_export_index %}\n  <sw-page class="ui-feed-export-index">\n    <template #content>\n      <ui-feed-export-form></ui-feed-export-form>\n    </template>\n  </sw-page>\n{% endblock %}\n',metaInfo(){return{title:this.$createTitle()}}});var d=JSON.parse('{"ui-feed-export":{"title":"FACT-Finder\xae Feed-Export","component":{"export_form":{"sales_channel":{"label":"Verkaufskanal"},"sales_channel_language":{"label":"Sprache"},"button":{"title":"Export erstellen"},"alert_success":{"text":"Der Export wurde generiert"},"alert_error":{"text":"W\xe4hrend des Integrationsprozesses ist ein Fehler aufgetreten"},"export_type":{"label":"W\xe4hlen Sie den Exporttyp aus"},"alert_not_valid_params":{"text":"Bitte w\xe4hlen Sie Exportparameter aus"}}}}}'),m=JSON.parse('{"ui-feed-export":{"title":"FACT-Finder\xae Feed Export","component":{"export_form":{"sales_channel":{"label":"Sales Channel"},"sales_channel_language":{"label":"Language"},"button":{"title":"Create Export"},"alert_success":{"text":"Export has been generated"},"alert_error":{"text":"An error occurred during integration process"},"export_type":{"label":"Select export type"},"alert_not_valid_params":{"text":"Please choose export parameters"}}}}}');let{Module:p}=Shopware;p.register("ui-feed-export",{color:"#ff3d58",icon:"default-shopping-paper-bag-product",title:"ui-feed-export.title",description:"",snippets:{"de-DE":d,"en-GB":m},routes:{index:{component:"ui-feed-export-index",path:"index"}},navigation:[{label:"ui-feed-export.title",path:"ui.feed.export.index",position:100,parent:"sw-extension"}]});let{Component:f,Mixin:u}=Shopware;f.register("update-field-roles",{template:'{% block factfinder_module_configuration_update_field_roles %}\n  <sw-button-process\n    variant="primary"\n    :isLoading="isLoading"\n    :disabled="isLoading"\n    :processSuccess="isSaveSuccessful"\n    @click="onClick">\n    {{ $tc(\'configuration.updateFieldRoles.update\') }}\n  </sw-button-process>\n{% endblock %}\n',inject:["fieldRolesService"],mixins:[u.getByName("notification"),u.getByName("sw-inline-snippet")],data(){return{isLoading:!1,isSaveSuccessful:!1}},methods:{async onClick(){this.isLoading=!0,await this.fieldRolesService.sendUpdateFieldRoles(),this.isSaveSuccessful=!0,this.isLoading=!1,this.createNotificationSuccess({message:Shopware.Snippet.tc("configuration.updateFieldRoles.update")})}}}),t(259);let{Component:g,Mixin:b}=Shopware;g.register("test-api-connection",{template:'{% block factfinder_module_configuration_test_api_connection %}\n  <sw-button-process\n    class="ff-test-connection-btn"\n    variant="primary"\n    :isLoading="isLoading"\n    :disabled="isLoading"\n    :processSuccess="isSaveSuccessful"\n    @click="onClick">\n    {{ $tc(\'configuration.testApiConnection.testConnection\') }}\n  </sw-button-process>\n{% endblock %}\n',mixins:[b.getByName("notification"),b.getByName("sw-inline-snippet")],data(){return{isLoading:!1,isSaveSuccessful:!1}},methods:{async onClick(){this.isLoading=!0;let e=Shopware.Service("syncService").httpClient,n={Authorization:`Bearer ${Shopware.Context.api.authToken.access}`,"Content-Type":"application/json"};e.get("_action/test-connection/api",{headers:n}).then(e=>{200===e.status?this.createNotificationSuccess({message:Shopware.Snippet.tc("configuration.testConnection.success")}):this.createNotificationError({title:Shopware.Snippet.tc("configuration.testConnection.fail"),message:Shopware.Snippet.tc("configuration.testConnection.helpText")})}).catch(()=>{this.createNotificationError({title:Shopware.Snippet.tc("configuration.testConnection.fail"),message:Shopware.Snippet.tc("configuration.testConnection.helpText")})}).finally(()=>{this.isSaveSuccessful=!0,this.isLoading=!1})}}}),t(262);let{Component:w,Mixin:v}=Shopware;w.register("test-ftp-connection",{template:'{% block factfinder_module_configuration_test_ftp_connection %}\n  <sw-button-process\n    class="ff-test-ftp-connection-btn"\n    variant="primary"\n    :isLoading="isLoading"\n    :disabled="isLoading"\n    :processSuccess="isSaveSuccessful"\n    @click="onClick">\n    {{ $tc(\'configuration.testFtpConnection.testConnection\') }}\n  </sw-button-process>\n{% endblock %}\n',mixins:[v.getByName("notification"),v.getByName("sw-inline-snippet")],data(){return{isLoading:!1,isSaveSuccessful:!1}},methods:{async onClick(){this.isLoading=!0;let e=Shopware.Service("syncService").httpClient,n={Authorization:`Bearer ${Shopware.Context.api.authToken.access}`,"Content-Type":"application/json"};e.get("_action/test-connection/ftp",{headers:n}).then(e=>{200===e.status?this.createNotificationSuccess({message:Shopware.Snippet.tc("configuration.testConnection.success")}):this.createNotificationError({title:Shopware.Snippet.tc("configuration.testConnection.fail"),message:Shopware.Snippet.tc("configuration.testConnection.helpText")})}).catch(()=>{this.createNotificationError({title:Shopware.Snippet.tc("configuration.testConnection.fail"),message:Shopware.Snippet.tc("configuration.testConnection.helpText")})}).finally(()=>{this.isSaveSuccessful=!0,this.isLoading=!1})}}});let h=Shopware.Classes.ApiService;var C=class extends h{constructor(e,n){super(e,n,null,"application/json"),this.name="fieldRolesServiceApi"}sendUpdateFieldRoles(){let e=this.getBasicHeaders();return this.httpClient.get("_action/field-roles/update",{headers:e}).then(e=>h.handleResponse(e))}};Shopware.Service().register("fieldRolesService",()=>new C(Shopware.Application.getContainer("init").httpClient,Shopware.Service("loginService")));var S=JSON.parse('{"sw-cms":{"blocks":{"commerce":{"factfinderWebComponentsListing":{"title":"FACT-Finder Suchergebnis","label":"Typische Sammlung von Webkomponenten, die eine Suchergebnisseite implementiert"},"factfinderWebComponentsCampaigns":{"title":"FACT-Finder-Kampagnen","label":"FACT-Finder\xae Web Components Kampagnen"},"factfinderWebComponentsFilters":{"title":"FACT-Finder-Filter","label":"FACT-Finder\xae Web Components Filter"},"factfinderWebComponentsRecordList":{"label":"FACT-Finder\xae Web Components Rekordliste"}}},"elements":{"recordList":{"label":"FACT-Finder\xae Web Components ff-record-list element","config":{"callbackArg":"Name des Arguments, das im Callback-Bereich verf\xfcgbar sein wird","callback":"R\xfcckruf zum abonnierten Thema. Es wird empfohlen, nur einen R\xfcckruf pro Thema und Seite durchzuf\xfchren.","domUpdated":"Listener f\xfcr das dom-update-Ereignis dieses Elements","id":"Der Wert wird als „id“-Attribut an das Element \xfcbergeben. Wenn nicht angegeben, wird die Standard-CMS-Element-ID verwendet"},"base":{"subscribe":"Abonnieren","infiniteScrolling":"Unendliches Scrollen","ident":"ID","debounceDelay":"Entprellverz\xf6gerung","callbackArg":"R\xfcckrufargument","callback":"Ruf zur\xfcck","domUpdated":"Dom aktualisiert"}},"asn":{"label":"FACT-Finder\xae Web Components ff-asn element","config":{"callbackArg":"Name des Arguments, das im Callback-Bereich verf\xfcgbar sein wird","callback":"R\xfcckruf zum abonnierten Thema. Es wird empfohlen, nur einen R\xfcckruf pro Thema und Seite durchzuf\xfchren.","domUpdated":"Listener f\xfcr das dom-update-Ereignis dieses Elements.","id":"Der Wert wird als „id“-Attribut an das Element \xfcbergeben. Wenn nicht angegeben, wird die Standard-CMS-Element-ID verwendet","topic":"Wenn Sie dieses Feld leer lassen, abonniert das Element sein Standardthema (ASN).","vertical":"Durch die Einstellung „true“ wird die zus\xe4tzliche CSS-Klasse „btn-block“ zu „ff-asn-group“ und „<div slots=\\"groupCaption\\"“ sowie zu ffw-asn-vertical, ffw-asn-group-vertical und ffw-asn hinzugef\xfcgt -group-element-vertikal zu entsprechenden Elementen"},"base":{"subscribe":"Abonnieren","vertical":"Vertikal","ident":"ID","topic":"Thema","callbackArg":"R\xfcckrufargument","callback":"Ruf zur\xfcck","domUpdated":"Dom aktualisiert","filterCloud":"Cloud filtern","blacklist":"Schwarze Liste","whitelist":"Whitelist","order":"Befehl","useFilterCloud":"Verwenden Sie Filter Cloud","alphabetical":"alphabetisch","factfinder":"factfinder","userSelection":"Benutzerauswahl"}},"sortbox":{"label":"FACT-Finder\xae Web Components ff-sortbox element","base":{"subscribe":"abonnieren","opened":"ge\xf6ffnet","showSelected":"Ausgew\xe4hlt anzeigen","showSelectedFirst":"Ausgew\xe4hlte zuerst anzeigen","collapseOnblur":"Zusammenbruch auf Unsch\xe4rfe"}},"paging":{"label":"FACT-Finder\xae Web Components ff-paging element","showOnly":"Nur Anzeigen","subscribe":"abonnieren"},"campaigns":{"label":"FACT-Finder\xae Web Components Sammlung von Kampagnenelementen","config":{"leaveFreeIfNotSpecified":"Lassen Sie diesen Wert frei, wenn die Seite alle Kampagnen akzeptieren soll, die den Kriterien entsprechen"},"base":{"advisorCampaign":"Beraterkampagne","feedbackCampaign":"Feedback-Kampagne","redirectCampaign":"Redirect-Kampagne","pushedCampaign":"Gepushte Produkte","advisorCampaignName":"Name der Beraterkampagne","name":"Name","label":"Etikett","feedbackCampaignLabel":"Label der Feedback-Kampagne"}}}}}'),k=JSON.parse('{"sw-cms":{"blocks":{"commerce":{"factfinderWebComponentsListing":{"title":"FACT-Finder Search Result","label":"Typical collection of Web Components that implements search result page "},"factfinderWebComponentsCampaigns":{"title":"FACT-Finder Campaigns","label":"FACT-Finder\xae Web Components Campaigns"},"factfinderWebComponentsFilters":{"title":"FACT-Finder Filters","label":"FACT-Finder\xae Web Components Filters"},"factfinderWebComponentsRecordList":{"label":"FACT-Finder\xae Web Components Record List"}}},"elements":{"recordList":{"label":"FACT-Finder\xae Web Components ff-record-list element","config":{"callbackArg":"Name of argument which will be available inside the callback scope","callback":"callback to the subscribed topic. It is recommended to have only one callback per topic, per page.","domUpdated":"listener to dom-update event of that element.","id":"Value will be passed as `id` attribute to element. If not specified, the default CMS element id will be used"},"base":{"subscribe":"Subscribe","infiniteScrolling":"Infinite Scrolling","ident":"ID","debounceDelay":"Debounce Delay","callbackArg":"Callback Argument","callback":"Callback","domUpdated":"Dom Updated"}},"asn":{"label":"FACT-Finder\xae Web Components ff-asn element","config":{"callbackArg":"Name of argument which will be available inside the callback scope","callback":"callback to the subscribed topic. It is recommended to have only one callback per topic, per page.","domUpdated":"listener to dom-update event of that element.","id":"Value will be passed as `id` attribute to element. If not specified, the default CMS element id will be used","topic":"Leaving this field empty causes element subscribe to its default topic (asn)","vertical":"Setting to true will add additional CSS class `btn-block` to the `ff-asn-group` and `<div slot=\\"groupCaption\\"` and ffw-asn-vertical, ffw-asn-group-vertical and ffw-asn-group-element-vertical to corresponding elements"},"base":{"subscribe":"Subscribe","vertical":"Vertical","ident":"ID","topic":"Topic","callbackArg":"Callback Argument","callback":"Callback","domUpdated":"Dom Updated","filterCloud":"Filter Cloud","blacklist":"Blacklist","whitelist":"Whitelist","order":"order","useFilterCloud":"Use Filter Cloud","alphabetical":"alphabetical","factfinder":"factfinder","userSelection":"userSelection"}},"sortbox":{"label":"FACT-Finder\xae Web Components ff-sortbox element","base":{"subscribe":"subscribe","opened":"opened","showSelected":"show selected","showSelectedFirst":"show selected first","collapseOnblur":"collapse onblur"}},"paging":{"label":"FACT-Finder\xae Web Components ff-paging element","showOnly":"Show Only","subscribe":"subscribe"},"campaigns":{"label":"FACT-Finder\xae Web Components campaigns elements collection","config":{"leaveFreeIfNotSpecified":"Leave this value free if you want page to accept all campaigns matching the criteria"},"base":{"advisorCampaign":"Advisor Campaign","feedbackCampaign":"Feedback Campaign","redirectCampaign":"Redirect Campaign","pushedCampaign":"Pushed Products","advisorCampaignName":"Advisor Campaign name","name":"Name","label":"Label","feedbackCampaignLabel":"Feedback Campaign Label"}}}}}'),x=JSON.parse('{"configuration":{"updateFieldRoles":{"update":"Feldrollen aktualisieren","successMessage":"Feldrollen erfolgreich aktualisiert. Bitte pr\xfcfen Sie, ob die Werte korrekt sind"},"testConnection":{"success":"Verbindung erfolgreich hergestellt.","fail":"Die Verbindung konnte nicht hergestellt werden.","helpText":"Bitte speichern Sie Ihre aktuelle Konfiguration, bevor Sie die Verbindung testen"},"testApiConnection":{"testConnection":"Testverbindung"},"testFtpConnection":{"testConnection":"FTP/SFTP Testverbindung "}}}'),_=JSON.parse('{"configuration":{"updateFieldRoles":{"update":"Update Field Roles","successMessage":"Updated Field Roles successfully. Please check if values are correct"},"testConnection":{"success":"Connection successfully established.","fail":"Connection could not be established.","helpText":"Please save you current configuration before test connection"},"testApiConnection":{"testConnection":"Test Connection"},"testFtpConnection":{"testConnection":"Test FTP/SFTP Connection"}}}');Shopware.Locale.extend("de-DE",x),Shopware.Locale.extend("de-DE",S),Shopware.Locale.extend("en-GB",_),Shopware.Locale.extend("en-GB",k)}()})();
//# sourceMappingURL=fact-finder.js.map