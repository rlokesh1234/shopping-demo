(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1569:function(e,t,a){"use strict";var n=a(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(84)),c=n(a(66));var m=function(e,t){var a=function(t){return r.default.createElement(c.default,t,e)};return a.displayName="".concat(t,"Icon"),(a=(0,l.default)(a)).muiName="SvgIcon",a};t.default=m},1570:function(e,t,a){"use strict";var n=a(51),r=a.n(n),l="[E-COMMERCE APP] GET PRODUCTS",c="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function m(){var e=r.a.get("/api/e-commerce-app/products");return function(t){return e.then(function(e){return t({type:l,payload:e.data})})}}function s(e){return{type:c,searchText:e.target.value}}var i=a(4),o=a(46),u="[E-COMMERCE APP] GET PRODUCT",d="[E-COMMERCE APP] SAVE PRODUCT";function E(e){var t=r.a.get("/api/e-commerce-app/product",{params:e});return function(e){return t.then(function(t){return e({type:u,payload:t.data})})}}function p(e){var t=r.a.post("/api/e-commerce-app/product/save",e);return function(e){return t.then(function(t){return e(Object(o.H)({message:"Product Saved"})),e({type:d,payload:t.data})})}}function h(){var e={id:i.A.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0};return{type:u,payload:e}}var b="[E-COMMERCE APP] GET ORDERS",f="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";function v(){var e=r.a.get("/api/e-commerce-app/orders");return function(t){return e.then(function(e){return t({type:b,payload:e.data})})}}function g(e){return{type:f,searchText:e.target.value}}var N="[E-COMMERCE APP] GET ORDER",y="[E-COMMERCE APP] SAVE ORDER";function x(e){var t=r.a.get("/api/e-commerce-app/order",{params:e});return function(e){return t.then(function(t){return e({type:N,payload:t.data})})}}function w(e){var t=r.a.post("/api/e-commerce-app/order/save",e);return function(e){return t.then(function(t){return e(Object(o.H)({message:"Order Saved"})),e({type:y,payload:t.data})})}}a.d(t,"d",function(){return l}),a.d(t,"h",function(){return c}),a.d(t,"l",function(){return m}),a.d(t,"q",function(){return s}),a.d(t,"c",function(){return u}),a.d(t,"f",function(){return d}),a.d(t,"k",function(){return E}),a.d(t,"o",function(){return p}),a.d(t,"m",function(){return h}),a.d(t,"b",function(){return b}),a.d(t,"g",function(){return f}),a.d(t,"j",function(){return v}),a.d(t,"p",function(){return g}),a.d(t,"a",function(){return N}),a.d(t,"e",function(){return y}),a.d(t,"i",function(){return x}),a.d(t,"n",function(){return w})},1582:function(e,t,a){"use strict";var n=a(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=(0,n(a(1569)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ExpandMore");t.default=l},1583:function(e,t,a){"use strict";var n=a(16),r=a(10),l=a(1570),c={data:[],searchText:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.d:return Object(r.a)({},e,{data:t.payload});case l.h:return Object(r.a)({},e,{searchText:t.searchText});default:return e}},s={data:null},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.c:case l.f:return Object(r.a)({},e,{data:t.payload});default:return e}},o={data:[],searchText:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.b:return Object(r.a)({},e,{data:t.payload});case l.g:return Object(r.a)({},e,{searchText:t.searchText});default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:case l.e:return Object(r.a)({},t.payload);default:return e}},E=Object(n.d)({products:m,product:i,orders:u,order:d});t.a=E},1618:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(5),c=a.n(l),m=a(7),s=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-dark text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-dark text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-light text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-dark text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-darker text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-dark text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-darker text-white"}];t.a=function(e){var t=e.name;return r.a.createElement("div",{className:c()("inline text-12 p-4 rounded truncate",m.a.find(s,{name:t}).color)},t)}},2431:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),l=a(15),c=a(13),m=a(14),s=a(0),i=a.n(s),o=a(1),u=a(4),d=a(24),E=a(93),p=a(1582),h=a.n(p),b=a(25),f=a(16),v=a(1663),g=a.n(v),N=a(219),y=a(1618),x=a(54),w=a(5),C=a.n(w),O=Object(x.withStyles)(function(e){return{root:{"& table ":{"& th:first-child, & td:first-child":{paddingLeft:"0!important"},"& th:last-child, & td:last-child":{paddingRight:"0!important"}}},divider:{width:1,backgroundColor:e.palette.divider,height:144},seller:{backgroundColor:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:e.palette.getContrastText(e.palette.primary.dark),opacity:.5}}}},{withTheme:!0})(function(e){var t=e.classes,a=e.order,n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return i.a.createElement("div",{className:C()(t.root,"flex-grow flex-no-shrink p-0")},a&&i.a.createElement(o.d,{className:"w-xl mx-auto",elevation:0},i.a.createElement(o.f,{className:"p-88 print:p-0"},i.a.createElement(o.vb,{color:"textSecondary",className:"mb-32"},a.date),i.a.createElement("div",{className:"flex justify-between"},i.a.createElement("div",null,i.a.createElement("table",{className:"mb-16"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"pr-16 pb-4"},i.a.createElement(o.vb,{className:"font-light",variant:"h6",color:"textSecondary"},"INVOICE")),i.a.createElement("td",{className:"pb-4"},i.a.createElement(o.vb,{className:"font-light",variant:"h6",color:"inherit"},a.reference))))),i.a.createElement(o.vb,{color:"textSecondary"},a.customer.firstName+" "+a.customer.lastName),a.customer.invoiceAddress.address&&i.a.createElement(o.vb,{color:"textSecondary"},a.customer.invoiceAddress.address),a.customer.phone&&i.a.createElement(o.vb,{color:"textSecondary"},a.customer.phone),a.customer.email&&i.a.createElement(o.vb,{color:"textSecondary"},a.customer.email)),i.a.createElement("div",{className:C()(t.seller,"flex items-center p-16")},i.a.createElement("img",{className:"w-80",src:"assets/images/logos/fuse.svg",alt:"logo"}),i.a.createElement("div",{className:C()(t.divider,"divider ml-8 mr-16 h-96")}),i.a.createElement("div",null,i.a.createElement(o.vb,{color:"inherit"},"FUSE INC."),i.a.createElement(o.vb,{color:"inherit"},"2810 Country Club Road Cranford, NJ 07016"),i.a.createElement(o.vb,{color:"inherit"},"+66 123 455 87"),i.a.createElement(o.vb,{color:"inherit"},"hello@fuseinc.com"),i.a.createElement(o.vb,{color:"inherit"},"www.fuseinc.com")))),i.a.createElement("div",{className:"mt-64"},i.a.createElement(o.kb,{className:"simple"},i.a.createElement(o.nb,null,i.a.createElement(o.pb,null,i.a.createElement(o.mb,null,"PRODUCT"),i.a.createElement(o.mb,null,"PRICE"),i.a.createElement(o.mb,{align:"right"},"QUANTITY"),i.a.createElement(o.mb,{align:"right"},"TOTAL"))),i.a.createElement(o.lb,null,a.products.map(function(e){return i.a.createElement(o.pb,{key:e.id},i.a.createElement(o.mb,null,i.a.createElement(o.vb,{variant:"subtitle1"},e.name)),i.a.createElement(o.mb,{align:"right"},n.format(e.price)),i.a.createElement(o.mb,{align:"right"},e.quantity),i.a.createElement(o.mb,{align:"right"},n.format(e.price*e.quantity)))}))),i.a.createElement(o.kb,{className:"simple mt-32"},i.a.createElement(o.lb,null,i.a.createElement(o.pb,null,i.a.createElement(o.mb,null,i.a.createElement(o.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),i.a.createElement(o.mb,{align:"right"},i.a.createElement(o.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},n.format(a.subtotal)))),i.a.createElement(o.pb,null,i.a.createElement(o.mb,null,i.a.createElement(o.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),i.a.createElement(o.mb,{align:"right"},i.a.createElement(o.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},n.format(a.tax)))),i.a.createElement(o.pb,null,i.a.createElement(o.mb,null,i.a.createElement(o.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),i.a.createElement(o.mb,{align:"right"},i.a.createElement(o.vb,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},n.format(a.discount)))),i.a.createElement(o.pb,null,i.a.createElement(o.mb,null,i.a.createElement(o.vb,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),i.a.createElement(o.mb,{align:"right"},i.a.createElement(o.vb,{className:"font-light",variant:"h4",color:"textSecondary"},n.format(a.total))))))),i.a.createElement("div",{className:"mt-96"},i.a.createElement(o.vb,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex-no-shrink mr-24"},i.a.createElement("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),i.a.createElement(o.vb,{className:"font-medium mb-64",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."))))))}),S=a(1570),A=a(1583);function T(e){var t=e.text;return i.a.createElement(o.ub,{title:t,placement:"top"},i.a.createElement(o.G,{className:"text-red"},"place"))}var P=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,m=new Array(r),s=0;s<r;s++)m[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(m)))).state={tabValue:0,form:null,map:"shipping"},a.handleChangeTab=function(e,t){a.setState({tabValue:t})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getOrder(this.props.match.params)}},{key:"render",value:function(){var e=this,t=this.props.order,a=this.state.tabValue;return i.a.createElement(u.r,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:t&&i.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},i.a.createElement("div",{className:"flex flex-1 flex-col items-center sm:items-start"},i.a.createElement(u.d,{animation:"transition.slideRightIn",delay:300},i.a.createElement(o.vb,{className:"normal-case flex items-center sm:mb-12",component:d.a,role:"button",to:"/apps/e-commerce/orders"},i.a.createElement(o.G,{className:"mr-4 text-20"},"arrow_back"),"Orders")),i.a.createElement("div",{className:"flex flex-col min-w-0 items-center sm:items-start"},i.a.createElement(u.d,{animation:"transition.slideLeftIn",delay:300},i.a.createElement(o.vb,{className:"text-16 sm:text-20 truncate"},"Order "+t.reference)),i.a.createElement(u.d,{animation:"transition.slideLeftIn",delay:300},i.a.createElement(o.vb,{variant:"caption"},"From "+t.customer.firstName+" "+t.customer.lastName))))),contentToolbar:i.a.createElement(o.rb,{value:a,onChange:this.handleChangeTab,indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},i.a.createElement(o.jb,{className:"h-64 normal-case",label:"Order Details"}),i.a.createElement(o.jb,{className:"h-64 normal-case",label:"Products"}),i.a.createElement(o.jb,{className:"h-64 normal-case",label:"Invoice"})),content:t&&i.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl w-full"},0===a&&i.a.createElement("div",null,i.a.createElement("div",{className:"pb-48"},i.a.createElement("div",{className:"pb-16 flex items-center"},i.a.createElement(o.G,{className:"mr-16",color:"action"},"account_circle"),i.a.createElement(o.vb,{className:"h2",color:"textSecondary"},"Customer")),i.a.createElement("div",{className:"mb-24"},i.a.createElement("div",{className:"table-responsive mb-16"},i.a.createElement("table",{className:"simple"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Email"),i.a.createElement("th",null,"Phone"),i.a.createElement("th",null,"Company"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("div",{className:"flex items-center"},i.a.createElement(o.b,{className:"mr-8",src:t.customer.avatar}),i.a.createElement(o.vb,{className:"truncate"},t.customer.firstName+" "+t.customer.lastName))),i.a.createElement("td",null,i.a.createElement(o.vb,{className:"truncate"},t.customer.email)),i.a.createElement("td",null,i.a.createElement(o.vb,{className:"truncate"},t.customer.phone)),i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},t.customer.company)))))),i.a.createElement(o.s,{elevation:1,expanded:"shipping"===this.state.map,onChange:function(){return e.setState({map:"shipping"!==e.state.map&&"shipping"})}},i.a.createElement(o.u,{expandIcon:i.a.createElement(h.a,null)},i.a.createElement(o.vb,{className:"font-600"},"Shipping Address")),i.a.createElement(o.t,{className:"flex flex-col md:flex-row"},i.a.createElement(o.vb,{className:"w-full md:max-w-256 mb-16 md:mb-0"},t.customer.shippingAddress.address),i.a.createElement("div",{className:"w-full h-320"},i.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[t.customer.shippingAddress.lat,t.customer.shippingAddress.lng]},i.a.createElement(T,{text:t.customer.shippingAddress.address,lat:t.customer.shippingAddress.lat,lng:t.customer.shippingAddress.lng}))))),i.a.createElement(o.s,{elevation:1,expanded:"invoice"===this.state.map,onChange:function(){return e.setState({map:"invoice"!==e.state.map&&"invoice"})}},i.a.createElement(o.u,{expandIcon:i.a.createElement(h.a,null)},i.a.createElement(o.vb,{className:"font-600"},"Invoice Address")),i.a.createElement(o.t,{className:"flex flex-col md:flex-row"},i.a.createElement(o.vb,{className:"w-full md:max-w-256 mb-16 md:mb-0"},t.customer.invoiceAddress.address),i.a.createElement("div",{className:"w-full h-320"},i.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[t.customer.invoiceAddress.lat,t.customer.invoiceAddress.lng]},i.a.createElement(T,{text:t.customer.invoiceAddress.address,lat:t.customer.invoiceAddress.lat,lng:t.customer.invoiceAddress.lng}))))))),i.a.createElement("div",{className:"pb-48"},i.a.createElement("div",{className:"pb-16 flex items-center"},i.a.createElement(o.G,{className:"mr-16",color:"action"},"access_time"),i.a.createElement(o.vb,{className:"h2",color:"textSecondary"},"Order Status")),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"simple"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Status"),i.a.createElement("th",null,"Updated On"))),i.a.createElement("tbody",null,t.status.map(function(e){return i.a.createElement("tr",{key:e.id},i.a.createElement("td",null,i.a.createElement(y.a,{name:e.name})),i.a.createElement("td",null,e.date))}))))),i.a.createElement("div",{className:"pb-48"},i.a.createElement("div",{className:"pb-16 flex items-center"},i.a.createElement(o.G,{className:"mr-16",color:"action"},"attach_money"),i.a.createElement(o.vb,{className:"h2",color:"textSecondary"},"Payment")),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"simple"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"TransactionID"),i.a.createElement("th",null,"Payment Method"),i.a.createElement("th",null,"Amount"),i.a.createElement("th",null,"Date"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},t.payment.transactionId)),i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},t.payment.method)),i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},t.payment.amount)),i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},t.payment.date))))))),i.a.createElement("div",{className:"pb-48"},i.a.createElement("div",{className:"pb-16 flex items-center"},i.a.createElement(o.G,{className:"mr-16",color:"action"},"local_shipping"),i.a.createElement(o.vb,{className:"h2",color:"textSecondary"},"Shipping")),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"simple"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Tracking Code"),i.a.createElement("th",null,"Carrier"),i.a.createElement("th",null,"Weight"),i.a.createElement("th",null,"Fee"),i.a.createElement("th",null,"Date"))),i.a.createElement("tbody",null,t.shippingDetails.map(function(e){return i.a.createElement("tr",{key:e.date},i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},e.tracking)),i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},e.carrier)),i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},e.weight)),i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},e.fee)),i.a.createElement("td",null,i.a.createElement("span",{className:"truncate"},e.date)))})))))),1===a&&i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"simple"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ID"),i.a.createElement("th",null,"Image"),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Price"),i.a.createElement("th",null,"Quantity"))),i.a.createElement("tbody",null,t.products.map(function(e){return i.a.createElement("tr",{key:e.id},i.a.createElement("td",{className:"w-64"},e.id),i.a.createElement("td",{className:"w-80"},i.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),i.a.createElement("td",null,i.a.createElement(o.vb,{component:d.a,to:"/apps/e-commerce/products/"+e.id,className:"truncate",style:{color:"inherit",textDecoration:"underline"}},e.name)),i.a.createElement("td",{className:"w-64 text-right"},i.a.createElement("span",{className:"truncate"},"$",e.price)),i.a.createElement("td",{className:"w-64 text-right"},i.a.createElement("span",{className:"truncate"},e.quantity)))})))),2===a&&i.a.createElement(O,{order:t})),innerScroll:!0})}}]),t}(s.Component);t.default=Object(N.a)("eCommerceApp",A.a)(Object(E.g)(Object(b.a)(function(e){return{order:e.eCommerceApp.order}},function(e){return Object(f.c)({getOrder:S.i,saveOrder:S.n},e)})(P)))}}]);