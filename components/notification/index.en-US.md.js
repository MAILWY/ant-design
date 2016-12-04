webpackJsonp([146,201],{

/***/ 1558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "To display a notification message globally."], ["h2", "When To Use"], ["p", "To display a notification message at the top right of the view port. Typically it can be\nused in the following cases:"], ["ul", ["li", ["p", "A notification with complex content."]], ["li", ["p", "A notification providing a feedback based on the user interaction. Or it may show some details\nabout upcoming steps the user may have to follow."]], ["li", ["p", "A notification that is pushed by the application."]]]],
	  "meta": {
	    "category": "Components",
	    "type": "Feedback",
	    "noinstant": true,
	    "title": "Notification",
	    "filename": "components/notification/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["ul", ["li", ["p", ["code", "notification.success(config)"]]], ["li", ["p", ["code", "notification.error(config)"]]], ["li", ["p", ["code", "notification.info(config)"]]], ["li", ["p", ["code", "notification.warning(config)"]]], ["li", ["p", ["code", "notification.warn(config)"]]], ["li", ["p", ["code", "notification.close(key: String)"]]], ["li", ["p", ["code", "notification.destroy()"]]]], ["p", "The properties of config are as follows:"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "message"], ["td", "The title of notification box (required)"], ["td", "React.Node"], ["td", "-"]], ["tr", ["td", "description"], ["td", "The content of notification box (required)"], ["td", "React.Node"], ["td", "-"]], ["tr", ["td", "btn"], ["td", "Customized close button"], ["td", "React.Node"], ["td", "-"]], ["tr", ["td", "icon"], ["td", "Customized icon"], ["td", "React.Node"], ["td", "_"]], ["tr", ["td", "key"], ["td", "The unique identifier of current notification"], ["td", "String"], ["td", "-"]], ["tr", ["td", "onClose"], ["td", "Specify a function that will be called after clicking the default close button"], ["td", "Function"], ["td", "-"]], ["tr", ["td", "duration"], ["td", "A notification box is closed after 4.5s by default. When specifying ", ["code", "duration"], " to null or 0, it will never be closed automatically"], ["td", "Number"], ["td", "4.5"]]]], ["p", ["code", "-tification"], " also provide a global ", ["code", "config()"], " method that can be used for specifying the default options. Once this method is used, all the notification boxes\nwill take into account these globally defined options before displaying."], ["ul", ["li", ["p", ["code", "notification.config(options)"]]]], ["pre", {
	    "lang": "js",
	    "highlighted": "notification<span class=\"token punctuation\" >.</span><span class=\"token function\" >config</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  top<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span>\n  duration<span class=\"token punctuation\" >:</span> <span class=\"token number\" >3</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }, ["code", "notification.config({\n  top: 100,\n  duration: 3,\n});"]], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "top"], ["td", "Offset to top of message"], ["td", "Number"], ["td", "24px"]], ["tr", ["td", "duration"], ["td", "A duration to close notification automatically by default (unit: second)"], ["td", "Number"], ["td", "4.5"]]]]]
	};

/***/ }

});