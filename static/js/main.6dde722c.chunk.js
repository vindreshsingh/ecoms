(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{1:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"k",(function(){return _})),a.d(t,"c",(function(){return i})),a.d(t,"j",(function(){return l})),a.d(t,"i",(function(){return m})),a.d(t,"g",(function(){return E})),a.d(t,"a",(function(){return h})),a.d(t,"f",(function(){return b})),a.d(t,"e",(function(){return O})),a.d(t,"b",(function(){return f})),a.d(t,"h",(function(){return v})),a.d(t,"l",(function(){return C}));var n=a(2);function r(e,t){return{type:n.g,title:e,detail:t}}function c(){return{type:n.c}}function _(e,t){return{type:n.f,title:e,detail:t}}function i(){return{type:n.b}}function s(){return{type:n.d}}function l(){return{type:n.e}}var o=a(7),u=a.n(o),d=a(17),p=a(4);function m(){return function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(s());case 2:return a=p.a.getProducts(),e.next=5,fetch(a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){var a;t((a=e,{type:n.i,product:a}))}));case 5:return e.next=7,t(l());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function E(){return function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(s());case 2:return a=p.a.getCartItem(),e.next=5,fetch(a,{method:"GET"}).then((function(e){return e.json()})).then((function(e){var a;t((a=e,{type:n.h,cart:a,itemCount:a.length}))}));case 5:return e.next=7,t(l());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function h(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(s());case 2:return n=p.a.getProducts(),t.next=5,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){a(r("Successful","Product Added")),a(m())}));case 5:return t.next=7,a(l());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function b(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(s());case 2:return n=p.a.deleteProductUrl(e),t.next=5,fetch(n,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){a(r("Successful","Product Deleted")),a(m())}));case 5:return t.next=7,a(l());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function f(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(s());case 2:return n=p.a.getCartItem(),t.next=5,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){a(E()),a(r("Successful","Product Added to Cart"))}));case 5:return t.next=7,a(l());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function O(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(s());case 2:return n=p.a.deleteCartItemUrl(e),t.next=5,fetch(n,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){a(E()),a(r("Successful","Item removed from Cart Successfully"))}));case 5:return t.next=7,a(l());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function C(e,t){return function(){var a=Object(d.a)(u.a.mark((function a(n){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n(s());case 2:c=p.a.updateProductUrl(e),fetch(c,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){n(m()),n(r("Successful","Product Update Successfully"))})),n(l());case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function v(e){return function(){var t=Object(d.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(s());case 2:return r=p.a.fetchOneProductUrl(e),fetch(r,{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t;a((t=e,{type:n.a,currentProduct:t}))})),t.next=6,a(l());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},2:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"g",(function(){return c})),a.d(t,"c",(function(){return _})),a.d(t,"f",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"i",(function(){return l})),a.d(t,"h",(function(){return o})),a.d(t,"a",(function(){return u}));var n="LOADING_START",r="LOADING_STOP",c="SET_MESSAGE",_="CLEAR_MESSAGE",i="SET_ERROR",s="CLEAR_ERROR",l="UPDATE_PRODUCT",o="UPDATE_CART",u="ADD_CURRENT_PRODUCT"},25:function(e,t,a){"use strict";var n=a(8),r=a(9),c=a(12),_=a(11),i=a(0),s=a.n(i),l=a(16),o=function(e){Object(c.a)(a,e);var t=Object(_.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChange=function(e,t){"detail"===e?r.setState({detail:t}):"title"===e?r.setState({title:t}):"rating"===e?r.setState({rating:t}):"price"===e&&r.setState({price:t})},r.handleCancle=function(){r.props.setEditableID("")},r.handleSubmit=function(e){r.props.handleSaveButton(e,r.state),r.props.setEditableID("")},r.handleCartButtonClick=function(e){r.props.cartButtonClick(e)},r.handlePencilClick=function(e){r.props.setEditableID(e)},r.handleDeleteButton=function(e){r.props.deleteButtonClick(e)},r.state={price:"",title:"",rating:"",detail:"",image:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.product,t=e.id,a=e.title,n=e.rating,r=e.price,c=e.detail,_=e.image;this.setState({id:t,title:a,rating:n,price:r,detail:c,image:_})}},{key:"render",value:function(){var e=this,t=this.props.product,a=this.state,n=a.id,r=a.title,c=a.rating,_=a.price,i=a.detail,o=a.image,u=this.props,d=u.editable,p=u.isCart;return s.a.createElement("div",{className:"product-item-container",key:n},!d&&s.a.createElement("div",{className:"container-div"},s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:o,alt:r})),s.a.createElement("div",{className:"product-detail"},s.a.createElement(l.b,{to:"/product-detail/".concat(n)},s.a.createElement("div",{className:"title"},s.a.createElement("span",{className:"heads"},"Title:"),r)),s.a.createElement("div",{className:"detail"},s.a.createElement("span",{className:"heads"},"Details:"),i),s.a.createElement("div",{className:"rating"},s.a.createElement("span",{className:"heads"},"Rating:")," ",[1,2,3,4,5].map((function(e){return e<=c?s.a.createElement("i",{className:"fa fa-star","aria-hidden":"true",key:e}):s.a.createElement("span",{key:e})})))),s.a.createElement("div",{className:"option-container"},s.a.createElement("div",{className:"price"},s.a.createElement("span",null,"Price:"),s.a.createElement("div",{className:"tag"},"Rs ",_)),s.a.createElement("div",{className:"add-to-cart",onClick:function(){e.handleCartButtonClick(t)}},p?"Remove from Cart":"Add to Cart"),!p&&s.a.createElement("div",{className:"buttons"},s.a.createElement("i",{className:"fa fa-pencil",onClick:function(){e.handlePencilClick(n)}}),s.a.createElement("i",{className:"fa fa-trash",onClick:function(){e.handleDeleteButton(n)}})))),d&&s.a.createElement("div",{className:"container-div"},s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:o,alt:r})),s.a.createElement("div",{className:"product-detail"},s.a.createElement("div",{className:"title"},s.a.createElement("input",{type:"text",value:r,required:!0,onChange:function(t){e.handleChange("title",t.target.value)}})),s.a.createElement("div",{className:"detail"},s.a.createElement("textarea",{type:"text",value:i,"data-label":"detail",required:!0,onChange:function(t){e.handleChange("detail",t.target.value)}})),s.a.createElement("div",{className:"rating"},s.a.createElement("input",{type:"number",value:c,required:!0,onChange:function(t){e.handleChange("rating",t.target.value)}}))),s.a.createElement("div",{className:"option-container"},s.a.createElement("div",{className:"price"},s.a.createElement("div",null,"Price:"),s.a.createElement("div",{className:"tag"},"Rs:",s.a.createElement("input",{type:"number",value:_,required:!0,onChange:function(t){e.handleChange("price",t.target.value)}}))),s.a.createElement("div",{className:"buttons"},s.a.createElement("i",{className:"fa fa-times",onClick:this.handleCancle}),s.a.createElement("i",{className:"fa fa-check",onClick:function(){e.handleSubmit(n)}})))))}}]),a}(i.Component);t.a=o},26:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"d",(function(){return h})),a.d(t,"e",(function(){return b.a})),a.d(t,"h",(function(){return f})),a.d(t,"a",(function(){return v})),a.d(t,"c",(function(){return D.a})),a.d(t,"g",(function(){return M.a})),a.d(t,"f",(function(){return g}));var n=a(8),r=a(9),c=a(12),_=a(11),i=a(0),s=a.n(i),l=a(10),o=(a(51),a(16)),u=a(3),d=function(e){Object(c.a)(a,e);var t=Object(_.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.isLoading;return s.a.createElement(o.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"blank-nav"}),s.a.createElement(h,null),s.a.createElement("div",{className:"blank-progress-bar"}),e&&s.a.createElement(f,null),s.a.createElement(u.c,null,s.a.createElement(u.a,{path:"/add-product",component:v}),s.a.createElement(u.a,{path:"/",exact:!0,component:b.a}),s.a.createElement(u.a,{path:"/cart",component:D.a}),s.a.createElement(u.a,{path:"/product-detail/:id",component:g}))))}}]),a}(i.Component);var p=Object(l.b)((function(e){return{isLoading:e.progress.isLoading,error:e.alert.error,message:e.alert.message}}))(d),m=a(1),E=function(e){Object(c.a)(a,e);var t=Object(_.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleMenuIconClick=function(){r.setState({menuIconClicked:!r.state.menuIconClicked})},r.handleButtonClick=function(){r.setState({menuIconClicked:!1})},r.state={menuIconClicked:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.g)())}},{key:"render",value:function(){var e=this.props.cartItemCount;return s.a.createElement("nav",{className:"navbar-container unselectable"},s.a.createElement("div",{className:"navbar-logo"},s.a.createElement(o.b,{to:"/",onClick:this.handleButtonClick},"EComs")),s.a.createElement("div",{className:"menu-icon",onClick:this.handleMenuIconClick},s.a.createElement("i",{className:this.state.menuIconClicked?"fa fa-times":"fa fa-bars","aria-hidden":"true"})),s.a.createElement("ul",{className:this.state.menuIconClicked?"navbar-menu active":"navbar-menu"},s.a.createElement("li",null,s.a.createElement(o.b,{className:"navbar-links",to:"/",onClick:this.handleButtonClick},"Products")),s.a.createElement("li",null,s.a.createElement(o.b,{className:"navbar-links",to:"/add-product",onClick:this.handleButtonClick},"Add Product")),s.a.createElement("li",null,s.a.createElement(o.b,{className:"navbar-links cart",to:"/cart",onClick:this.handleButtonClick},s.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}),s.a.createElement("span",null,e>0?e:"")))))}}]),a}(i.Component);var h=Object(l.b)((function(e){return{cartItemCount:e.product.cartItemCount}}))(E),b=a(35),f=function(){return i.createElement("div",{className:"progress-bar-container"},i.createElement("div",{className:"progress-bar-line"}))},O=a(4),C=function(e){Object(c.a)(a,e);var t=Object(_.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChange=function(e,t){"title"===e?r.setState({title:t}):"rating"===e?r.setState({rating:t}):"detail"===e?r.setState({detail:t}):"price"===e?r.setState({price:t}):"image"===e&&r.setState({image:t})},r.handleSubmit=function(e){e.preventDefault();var t=r.state,a=t.title,n=t.price,c=t.detail,_=t.rating,i=t.image,s=r.props.dispatch;0!==a.length&&0!==n.length&&0!==c.length&&0!==_.length&&0!==i.length?(s(Object(m.a)(r.state)),r.formRef.current.reset()):s(Object(m.k)("Missing Field","Please Enter All Fields"))},r.state={title:"",price:"",detail:"",rating:0,image:""},r.formRef=Object(i.createRef)(),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isLoading,a=e.dispatch;!0===t&&a(Object(m.j)())}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.error,a=e.dispatch,n=e.message;null!=n&&(Object(O.c)(n.title,n.detail),a(Object(m.d)())),null!=t&&(Object(O.b)(t.title,t.detail),a(Object(m.c)()))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"add-product-container"},s.a.createElement("div",{className:"heading"},"Add Product"),s.a.createElement("form",{ref:this.formRef},s.a.createElement("div",{className:"input-container"},s.a.createElement("label",null,"Title"),s.a.createElement("input",{type:"text",required:!0,placeholder:"Title",onChange:function(t){e.handleChange("title",t.target.value)}})),s.a.createElement("div",{className:"input-container"},s.a.createElement("label",null,"Price"),s.a.createElement("input",{type:"number",required:!0,placeholder:"Price",onChange:function(t){e.handleChange("price",t.target.value)}})),s.a.createElement("div",{className:"input-container"},s.a.createElement("label",null,"Rating"),s.a.createElement("input",{type:"number",required:!0,placeholder:"Rating",onChange:function(t){e.handleChange("rating",t.target.value)}})),s.a.createElement("div",{className:"input-container"},s.a.createElement("label",null,"Detail"),s.a.createElement("textarea",{rows:"5",type:"text",required:!0,placeholder:"Detail",onChange:function(t){e.handleChange("detail",t.target.value)}})),s.a.createElement("div",{className:"input-container"},s.a.createElement("label",null,"Image URL"),s.a.createElement("input",{type:"text",placeholder:"Image URL",onChange:function(t){e.handleChange("image",t.target.value)}})),s.a.createElement("button",{onClick:this.handleSubmit},"Submit")))}}]),a}(i.Component);var v=Object(l.b)((function(e){return{error:e.alert.error,message:e.alert.message,isLoading:e.progress.isLoading}}))(C),D=a(36),P=function(e){Object(c.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),_=0;_<r;_++)c[_]=arguments[_];return(e=t.call.apply(t,[this].concat(c))).handleCartButtonClick=function(){e.props.dispatch(Object(m.b)(e.props.product))},e}return Object(r.a)(a,[{key:"componentWillMount",value:function(){var e=this.props,t=e.isLoading,a=e.dispatch;!0===t&&a(Object(m.j)());var n=this.props.match.params.id;a(Object(m.h)(n))}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.error,a=e.dispatch,n=e.message;null!=n&&(Object(O.c)(n.title,n.detail),a(Object(m.d)())),null!=t&&(Object(O.b)(t.title,t.detail),a(Object(m.c)()))}},{key:"render",value:function(){if(null===this.props.product)return s.a.createElement("div",null);var e=this.props.product,t=e.title,a=e.price,n=e.detail,r=e.image,c=e.rating;return s.a.createElement("div",{className:"product-detail-container"},s.a.createElement("div",{className:"heading"},"Product Detail"),s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{src:r,alt:t})),s.a.createElement("div",{className:"creadential-container"},s.a.createElement("div",null,"Name :"),s.a.createElement("div",null,t)),s.a.createElement("div",{className:"creadential-container"},s.a.createElement("div",null,"Price :"),s.a.createElement("div",null,a)),s.a.createElement("div",{className:"creadential-container"},s.a.createElement("div",null,"Rating :"),s.a.createElement("div",null,[1,2,3,4,5].map((function(e){return e<=c?s.a.createElement("i",{className:"fa fa-star","aria-hidden":"true",key:e}):s.a.createElement("span",null)})))),s.a.createElement("div",{className:"creadential-container detail-container"},s.a.createElement("div",{className:"detail"},"Detail :"),s.a.createElement("div",{className:"text"},n)),s.a.createElement("button",{className:"button",onClick:this.handleCartButtonClick},"Add to Cart"))}}]),a}(i.Component);var g=Object(l.b)((function(e){return{product:e.product.currentProduct,isLoading:e.progress.isLoading,error:e.alert.error,message:e.alert.message}}))(P),M=a(25)},35:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(40),C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_ProductItem__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(25),react_redux__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),_actions__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1),_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(4);function compare_item(a,b){return eval(a.price)<eval(b.price)?-1:eval(a.price)>eval(b.price)?1:0}var Products=function(e){Object(C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(a,e);var t=Object(C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(a);function a(e){var n;return Object(C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,a),(n=t.call(this,e)).onClickSortByPrice=function(){var e=n.state.sortByPrice;n.setState({sortByPrice:!e})},n.setEditableItem=function(e){n.setState({editableID:e})},n.handleAddToCart=function(e){n.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.b)(e))},n.handleDeleteButton=function(e){n.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.f)(e))},n.handleSaveButton=function(e,t){n.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.l)(e,t))},n.state={editableID:"",sortByPrice:!1},n}return Object(C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isLoading,a=e.dispatch;!0===t&&a(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.j)()),a(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.i)())}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.error,a=e.dispatch,n=e.message;null!=n&&(Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.c)(n.title,n.detail),a(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.d)())),null!=t&&(Object(_helpers__WEBPACK_IMPORTED_MODULE_9__.b)(t.title,t.detail),a(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.c)()))}},{key:"render",value:function(){var e=this,t=this.state,a=t.editableID,n=t.sortByPrice,r=this.props.product;if(n){r=Object(C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(r).sort(compare_item)}else r=this.props.product;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"products-container"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"products-heading"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"heading"},"Products "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"sort-price",onClick:this.onClickSortByPrice},n?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}):"Sort By Price")),r.map((function(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ProductItem__WEBPACK_IMPORTED_MODULE_6__.a,{product:t,editable:a===t.id,setEditableID:e.setEditableItem,cartButtonClick:e.handleAddToCart,deleteButtonClick:e.handleDeleteButton,handleSaveButton:e.handleSaveButton,key:t.id,isCart:!1})})))}}]),a}(react__WEBPACK_IMPORTED_MODULE_5__.Component);function mapStateToProps(e){return{isLoading:e.progress.isLoading,error:e.alert.error,message:e.alert.message,product:e.product.products}}__webpack_exports__.a=Object(react_redux__WEBPACK_IMPORTED_MODULE_7__.b)(mapStateToProps)(Products)},36:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(26),react_redux__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_helpers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4),_actions__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1),Cart=function(_Component){Object(C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Cart,_Component);var _super=Object(C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Cart);function Cart(){var e;Object(C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Cart);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(e=_super.call.apply(_super,[this].concat(a))).deleteItemFromCart=function(t){e.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.e)(t.id))},e}return Object(C_Users_Vindresh_Desktop_React_cart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Cart,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isLoading,a=e.dispatch;!0===t&&a(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.j)()),a(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.g)())}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.error,a=e.dispatch,n=e.message;null!=n&&(Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.c)(n.title,n.detail),a(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.d)())),null!=t&&(Object(_helpers__WEBPACK_IMPORTED_MODULE_7__.b)(t.title,t.detail),a(Object(_actions__WEBPACK_IMPORTED_MODULE_8__.c)()))}},{key:"render",value:function render(){for(var _this2=this,product=this.props.product,total=0,i=0;i<product.length;i++)total+=eval(product[i].price);return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"products-container"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"products-heading"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"heading"},"Cart"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"sort-price",style:{background:"transparent",color:"black",cursor:"default"},onClick:this.onClickSortByPrice},"Total : ",total)),product.map((function(e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.g,{product:e,editable:!1,cartButtonClick:_this2.deleteItemFromCart,key:e.id,isCart:!0})})))}}]),Cart}(react__WEBPACK_IMPORTED_MODULE_4__.Component);function mapStateToProps(e){return{error:e.alert.error,message:e.alert.message,isLoading:e.progress.isLoading,product:e.product.cart}}__webpack_exports__.a=Object(react_redux__WEBPACK_IMPORTED_MODULE_6__.b)(mapStateToProps)(Cart)},4:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return _})),a.d(t,"a",(function(){return s}));var n=a(27),r=a.n(n);function c(e,t){r()({title:e,text:t,icon:"warning",button:"Ok"})}function _(e,t){r()({title:e,text:t,icon:"success",button:"Ok"})}var i="https://5fbf466ffd14be00167486cd.mockapi.io/api/v1",s={getProducts:function(){return"".concat(i,"/product")},getCartItem:function(){return"".concat(i,"/cart")},deleteProductUrl:function(e){return"".concat(i,"/product/").concat(e)},deleteCartItemUrl:function(e){return"".concat(i,"/cart/").concat(e)},updateProductUrl:function(e){return"".concat(i,"/product/").concat(e)},fetchOneProductUrl:function(e){return"".concat(i,"/product/").concat(e)}}},41:function(e,t,a){e.exports=a(56)},46:function(e,t,a){},51:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),_=a.n(c),i=(a(46),a(26)),s=a(18),l=a(38),o=a(5),u=a(2),d={message:null,error:null};var p={isLoading:!1};var m={products:[],cart:[],cartItemCount:0,currentProduct:null};var E=Object(s.c)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.g:return Object(o.a)(Object(o.a)({},e),{},{message:{title:t.title,detail:t.detail}});case u.c:return Object(o.a)(Object(o.a)({},e),{},{message:null});case u.f:return Object(o.a)(Object(o.a)({},e),{},{error:{title:t.title,detail:t.detail}});case u.b:return Object(o.a)(Object(o.a)({},e),{},{error:null});default:return e}},progress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.d:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0});case u.e:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!1});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.i:return Object(o.a)(Object(o.a)({},e),{},{products:t.product});case u.h:return Object(o.a)(Object(o.a)({},e),{},{cart:t.cart,cartItemCount:t.itemCount});case u.a:return Object(o.a)(Object(o.a)({},e),{},{currentProduct:t.currentProduct});default:return e}}}),h=a(39),b=a.n(h);var f=a(10),O=Object(s.d)(E,Object(s.a)(l.a,b.a));_.a.render(r.a.createElement(f.a,{store:O},r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.b,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6dde722c.chunk.js.map