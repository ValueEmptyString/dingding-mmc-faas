"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dingtalkDocsCoolApp = require("dingtalk-docs-cool-app");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var t = _dingtalkDocsCoolApp.fieldDecoratorKit.t;

// 通过addDomainList添加请求接口的域名
_dingtalkDocsCoolApp.fieldDecoratorKit.setDomainList(['api.exchangerate-api.com', 'alidocs2-zjk-cdn.dingtalk.com', 'api.ezlinkai.com', 'saas.jcbbi.com', 'jcbbi.com', 'www.mmcjt.cn']);
_dingtalkDocsCoolApp.fieldDecoratorKit.setDecorator({
  name: '图像生成',
  authorizations: {
    id: 'auth_id',
    // 授权的id，用于context.fetch第三个参数指定使用
    platform: '毛毛虫',
    // 授权平台，目前可以填写当前平台名称
    type: _dingtalkDocsCoolApp.AuthorizationType.HeaderBearerToken,
    // 授权类型
    required: false,
    // 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
    instructionsUrl: "https://www.mmcjt.cn/",
    // 帮助链接，告诉使用者如何填写这个apikey
    label: '授权',
    // 授权平台，告知用户填写哪个平台的信息
    tooltips: '请联系公司AI管理员获取授权（1.0.0）',
    // 提示，引导用户添加授权
    /**
    * 也支持配置链接
    **/
    icon: {
      // 当前平台的图标
      light: 'https://saas.jcbbi.com/upload/2026/01/29/767965034025029.jpg',
      dark: 'https://saas.jcbbi.com/upload/2026/01/29/767965034025029.jpg'
    }
  },
  // 定义捷径的i18n语言资源
  i18nMap: {
    'zh-CN': {
      "param_image_label": "图片",
      "param_prompt_label": "提示词",
      "param_temperature_label": "Temperature",
      "param_top_p_label": "topP",
      "param_top_K_label": "topK",
      "param_candidateCount_label": "candidateCount"
    }
  },
  // 定义捷径的入参
  formItems: [{
    key: 'prompt',
    label: t('param_prompt_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入图片编辑指令',
      enableFieldReference: true
    },
    validator: {
      required: true
    }
  }, {
    key: 'imageUrl1',
    label: "".concat(t('param_image_label')),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    props: {
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Attachment]
    },
    validator: {
      required: false
    }
  }, {
    key: 'temperature',
    label: t('param_temperature_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入0.0-2.0之间数字'
    },
    validator: {
      required: false
    }
  }, {
    key: 'topP',
    label: t('param_top_p_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入0.0-1.0之间数字'
    },
    validator: {
      required: false
    }
  }, {
    key: 'topK',
    label: t('param_top_K_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入10-100之间数字'
    },
    validator: {
      required: false
    }
  }, {
    key: 'candidateCount',
    label: t('param_candidateCount_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入1-8之间数字'
    },
    validator: {
      required: false
    }
  }],
  // 定义捷径的返回结果类型
  resultType: {
    type: _dingtalkDocsCoolApp.FieldType.Text
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: function () {
    var _execute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context, formData) {
      var imageUrl1, prompt, temperature, topP, topK, candidateCount, _imageUrl1$, url, requestBody, image, imageResponse, arrayBuffer, buffer, base64, contentType, init, res, resJson, resultText, candidate, content, _iterator, _step, part, _t, _t2, _t3, _t4;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            imageUrl1 = formData.imageUrl1, prompt = formData.prompt, temperature = formData.temperature, topP = formData.topP, topK = formData.topK, candidateCount = formData.candidateCount;
            _context.p = 1;
            // 1. 调用Gemini API
            url = 'https://api.ezlinkai.com/v1beta/models/gemini-3-pro-preview:generateContent'; // Build request payload
            requestBody = {
              model: "gemini-3-pro-preview",
              "contents": [{
                "role": "user",
                "parts": []
              }],
              "generationConfig": {
                "temperature": Number(temperature),
                "topP": Number(topP),
                "topK": Number(topK),
                "candidateCount": Number(candidateCount),
                "responseModalities": ["TEXT"]
              }
            }; // Add images first (inlineData with camelCase)
            if (!(Array.isArray(imageUrl1) && imageUrl1.length > 0 && (_imageUrl1$ = imageUrl1[0]) !== null && _imageUrl1$ !== void 0 && _imageUrl1$.tmp_url)) {
              _context.n = 6;
              break;
            }
            image = imageUrl1[0];
            _context.p = 2;
            _context.n = 3;
            return context.fetch(image.tmp_url, {
              method: 'GET'
            });
          case 3:
            imageResponse = _context.v;
            _context.n = 4;
            return imageResponse.arrayBuffer();
          case 4:
            arrayBuffer = _context.v;
            // Convert ArrayBuffer to Buffer
            buffer = Buffer.from(arrayBuffer); // Convert Buffer to base64 string without data URI prefix
            base64 = buffer.toString('base64');
            contentType = image.type + '/' + image.name.split('.').pop() || 'image/png'; // Add image to request using inlineData (camelCase)
            requestBody.contents[0].parts.push({
              "inlineData": {
                "data": base64,
                "mimeType": contentType
              }
            });
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.log({
              '===图片处理错误': String(_t)
            });
          case 6:
            // Add prompt text last
            requestBody.contents[0].parts.push({
              "text": prompt
            });
            init = {
              method: 'POST',
              body: JSON.stringify(requestBody)
            }; // 直接使用context.fetch
            _context.n = 7;
            return context.fetch(url, init, 'auth_id');
          case 7:
            res = _context.v;
            _context.p = 8;
            _context.n = 9;
            return res.json();
          case 9:
            resJson = _context.v;
            console.log({
              '===完整响应': JSON.stringify(resJson)
            });

            // 解析响应，获取文字结果
            resultText = ''; // 检查candidates是否存在
            if (!(resJson.candidates && Array.isArray(resJson.candidates) && resJson.candidates.length > 0)) {
              _context.n = 16;
              break;
            }
            candidate = resJson.candidates[0];
            console.log({
              '===candidate': JSON.stringify(candidate)
            });

            // 检查content
            if (!candidate.content) {
              _context.n = 16;
              break;
            }
            content = candidate.content;
            console.log({
              '===content': JSON.stringify(content)
            });

            // 检查parts
            if (!(content.parts && Array.isArray(content.parts))) {
              _context.n = 16;
              break;
            }
            // console.log({ '===parts数量': content.parts.length });
            // 查找text类型的content
            _iterator = _createForOfIteratorHelper(content.parts);
            _context.p = 10;
            _iterator.s();
          case 11:
            if ((_step = _iterator.n()).done) {
              _context.n = 13;
              break;
            }
            part = _step.value;
            if (!part.text) {
              _context.n = 12;
              break;
            }
            resultText = part.text;
            // console.log({ '===找到text': resultText.substring(0, 100) });
            return _context.a(3, 13);
          case 12:
            _context.n = 11;
            break;
          case 13:
            _context.n = 15;
            break;
          case 14:
            _context.p = 14;
            _t2 = _context.v;
            _iterator.e(_t2);
          case 15:
            _context.p = 15;
            _iterator.f();
            return _context.f(15);
          case 16:
            console.log({
              '===最终提取的text': resultText.substring(0, 100)
            });

            // 返回文字结果
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              data: resultText
            });
          case 17:
            _context.p = 17;
            _t3 = _context.v;
            console.log({
              '===读取响应错误': String(_t3)
            });
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error
            });
          case 18:
            _context.p = 18;
            _t4 = _context.v;
            console.log('====error', String(_t4));
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error
            });
          case 19:
            return _context.a(2);
        }
      }, _callee, null, [[10, 14, 15, 16], [8, 17], [2, 5], [1, 18]]);
    }));
    function execute(_x, _x2) {
      return _execute.apply(this, arguments);
    }
    return execute;
  }()
});
var _default = exports["default"] = _dingtalkDocsCoolApp.fieldDecoratorKit;