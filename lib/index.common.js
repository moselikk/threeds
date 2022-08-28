/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TdsAuthCode": function() { return /* reexport */ authcode; },
  "TdsButton": function() { return /* reexport */ packages_button; },
  "TdsLink": function() { return /* reexport */ packages_link; },
  "default": function() { return /* binding */ entry_lib; },
  "install": function() { return /* reexport */ install; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/link/src/index.vue?vue&type=template&id=ecc7e0e8&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('a',{class:[`ly-link-${_vm.type}`],attrs:{"href":_vm.href || undefined}},[_vm._t("default")],2)
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/link/src/index.vue?vue&type=script&lang=js&

    /* harmony default export */ var srcvue_type_script_lang_js_ = ({
        // 等下 index.js 里面要用到
        // eslint-disable-next-line vue/multi-word-component-names
        name:"TdsLink",
        props: {
            // 限制类型
            href: String,
            type: {
                type: String,
                default: 'default'
            }
        }
    });

;// CONCATENATED MODULE: ./packages/link/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var link_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/link/src/index.vue?vue&type=style&index=0&id=ecc7e0e8&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/link/src/index.vue?vue&type=style&index=0&id=ecc7e0e8&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/link/src/index.vue



;


/* normalize component */

var component = normalizeComponent(
  link_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ecc7e0e8",
  null
  
)

/* harmony default export */ var link_src = (component.exports);
;// CONCATENATED MODULE: ./packages/link/index.js
// 引入组件


// 提供 install 安装方法，供按需引入
link_src.install = function (Vue) {
    // 注册组件
    Vue.component(link_src.name, link_src)
}
// 暴露组件
/* harmony default export */ var packages_link = (link_src);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/index.vue?vue&type=template&id=49810de2&
var srcvue_type_template_id_49810de2_render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{staticClass:"tds-button",class:[
    _vm.type ? 'tds-button--' + _vm.type : '',
    _vm.size ? 'tds-button--' + _vm.size : ''
  ],attrs:{"autofocus":_vm.autofocus},on:{"click":_vm.handleClick}},[_vm._t("default")],2)
}
var srcvue_type_template_id_49810de2_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var button_srcvue_type_script_lang_js_ = ({
  name: 'TdsButton',
  props: {
    size: String,
    type: {
      type: String,
      default: 'default'
    },
    autofocus: Boolean,
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
});

;// CONCATENATED MODULE: ./packages/button/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_button_srcvue_type_script_lang_js_ = (button_srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/index.vue?vue&type=style&index=0&id=49810de2&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/button/src/index.vue?vue&type=style&index=0&id=49810de2&prod&lang=scss&

;// CONCATENATED MODULE: ./packages/button/src/index.vue



;


/* normalize component */

var src_component = normalizeComponent(
  packages_button_srcvue_type_script_lang_js_,
  srcvue_type_template_id_49810de2_render,
  srcvue_type_template_id_49810de2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_src = (src_component.exports);
;// CONCATENATED MODULE: ./packages/button/index.js



/* istanbul ignore next */
button_src.install = function(Vue) {
  Vue.component(button_src.name, button_src);
};

/* harmony default export */ var packages_button = (button_src);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/authcode/src/index.vue?vue&type=template&id=0977de28&scoped=true&
var srcvue_type_template_id_0977de28_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('h1',[_vm._v(_vm._s(_vm.title ? _vm.title : '请输入验证码'))]),_c('div',{ref:"inputList"},_vm._l((_vm.code),function(item,index){return _c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.code[index]),expression:"code[index]",modifiers:{"number":true}}],key:index,attrs:{"type":"text","maxlength":"1","autofocus":"autofocus"},domProps:{"value":(_vm.code[index])},on:{"keyup":function($event){return _vm.handleKey(index)},"input":function($event){if($event.target.composing)return;_vm.$set(_vm.code, index, _vm._n($event.target.value))},"blur":function($event){return _vm.$forceUpdate()}}})}),0),_c('br'),_c('button',{on:{"click":_vm.handleSubmit}},[_vm._v("提交")])])
}
var srcvue_type_template_id_0977de28_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/authcode/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var authcode_srcvue_type_script_lang_js_ = ({
  name: 'TdsAuthCode',
  props:{
    title: String,
    length:{
      type: String,
      default: '4'
    } 
  },
  data(){
    return{
      code: []
    }
  },
  created(){
    const length = Number(this.length)
    this.code = new Array(length)
  },
  methods: {
    handleSubmit(){
      // 处理数据，发请求
      alert('提交成功')
    },
    handleKey(index){
      const inputNodes = this.$refs.inputList.childNodes
      if(index==(inputNodes.length-1)){
        inputNodes[index].blur()
      }
      if(inputNodes[index].value){
        if(index<(inputNodes.length-1)){
          inputNodes[index+1].focus()
        }
      }else if(!inputNodes[index].value && index>0){
        inputNodes[index-1].focus()
      }
    }
  },
});

;// CONCATENATED MODULE: ./packages/authcode/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_authcode_srcvue_type_script_lang_js_ = (authcode_srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/authcode/src/index.vue?vue&type=style&index=0&id=0977de28&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/authcode/src/index.vue?vue&type=style&index=0&id=0977de28&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./packages/authcode/src/index.vue



;


/* normalize component */

var authcode_src_component = normalizeComponent(
  packages_authcode_srcvue_type_script_lang_js_,
  srcvue_type_template_id_0977de28_scoped_true_render,
  srcvue_type_template_id_0977de28_scoped_true_staticRenderFns,
  false,
  null,
  "0977de28",
  null
  
)

/* harmony default export */ var authcode_src = (authcode_src_component.exports);
;// CONCATENATED MODULE: ./packages/authcode/index.js



/* istanbul ignore next */
authcode_src.install = function(Vue) {
  Vue.component(authcode_src.name, authcode_src);
};

/* harmony default export */ var authcode = (authcode_src);
;// CONCATENATED MODULE: ./packages/index.js
// 引入组件



// 存放组件的数组
const components = [
    packages_link,
    packages_button,
    authcode
]

// 定义 install 方法，接收 Vue 作为参数。
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历 components 数组，来进行全局注册
    components.map(component => {
        Vue.component(component.name, component)
    })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
     install(window.Vue)
}
  

/* harmony default export */ var packages_0 = (install);



;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.common.js.map