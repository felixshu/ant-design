webpackJsonp([183,201],{

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "按钮用于开始一个即时操作。"], ["h2", "何时使用"], ["p", "标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。"]],
	  "meta": {
	    "category": "Components",
	    "type": "General",
	    "title": "Button",
	    "subtitle": "按钮",
	    "filename": "components/button/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["p", "通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：", ["code", "type"], " -> ", ["code", "shape"], " -> ", ["code", "size"], " -> ", ["code", "loading"], " -> ", ["code", "disabled"]], ["p", "按钮的属性说明如下："], ["table", ["thead", ["tr", ["th", "属性"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "type"], ["td", "设置按钮类型，可选值为 ", ["code", "primary"], " ", ["code", "ghost"], " ", ["code", "dashed"], " 或者不设"], ["td", "string"], ["td", "-"]], ["tr", ["td", "htmlType"], ["td", "设置 ", ["code", "button"], " 原生的 ", ["code", "type"], " 值，可选值请参考 ", ["a", {
	    "title": null,
	    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"
	  }, "HTML 标准"]], ["td", "string"], ["td", ["code", "button"]]], ["tr", ["td", "icon"], ["td", "设置按钮的图标类型"], ["td", "string"], ["td", "-"]], ["tr", ["td", "shape"], ["td", "设置按钮形状，可选值为 ", ["code", "circle"], " 或者不设"], ["td", "string"], ["td", "-"]], ["tr", ["td", "size"], ["td", "设置按钮大小，可选值为 ", ["code", "small"], " ", ["code", "large"], " 或者不设"], ["td", "string"], ["td", ["code", "default"]]], ["tr", ["td", "loading"], ["td", "设置按钮载入状态"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "onClick"], ["td", ["code", "click"], " 事件的 handler"], ["td", "function"], ["td", "-"]]]], ["p", ["code", "<Button>Hello world!</Button>"], " 最终会被渲染为 ", ["code", "<button>Hello world!</button>"], "，并且除了上表中的属性，其它属性都会直接传到 ", ["code", "<button></button>"], "。"], ["style", "\n[id^=\"components-button-demo-\"] .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n[id^=\"components-button-demo-\"] .ant-btn-group > .ant-btn {\n  margin-right: 0;\n}\n"]]
	};

/***/ }

});