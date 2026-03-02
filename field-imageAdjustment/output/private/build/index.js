"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dingtalkDocsCoolApp = require("dingtalk-docs-cool-app");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var t = _dingtalkDocsCoolApp.fieldDecoratorKit.t;

// 通过addDomainList添加请求接口的域名
_dingtalkDocsCoolApp.fieldDecoratorKit.setDomainList(['api.exchangerate-api.com', 'alidocs2-zjk-cdn.dingtalk.com', 'api.ezlinkai.com', 'saas.jcbbi.com', 'jcbbi.com', 'www.mmcjt.cn']);
_dingtalkDocsCoolApp.fieldDecoratorKit.setDecorator({
  name: '图像调整',
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
      "param_image_size_label": "图像大小调整",
      "param_image_label": "图片",
      "param_image_name_label": "图片名称",
      "param_image_model": "模式"
    }
  },
  // 定义捷径的入参
  formItems: [{
    key: 'imageUrl1',
    label: t('param_image_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.FieldSelect,
    props: {
      supportTypes: [_dingtalkDocsCoolApp.FieldType.Attachment]
    },
    validator: {
      required: true
    }
  }, {
    key: 'imageSize',
    label: t('param_image_size_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入图像大小，格式如：100*100',
      enableFieldReference: true
    },
    validator: {
      required: true
    }
  }, {
    key: 'imageName',
    label: t('param_image_name_label'),
    component: _dingtalkDocsCoolApp.FormItemComponent.Textarea,
    props: {
      placeholder: '请输入图像名称',
      enableFieldReference: true
    },
    validator: {
      required: false
    }
  }, {
    key: 'imageModel',
    label: t('param_image_model'),
    component: _dingtalkDocsCoolApp.FormItemComponent.SingleSelect,
    props: {
      defaultValue: 'contain',
      placeholder: "请选择",
      options: [{
        key: "stretch",
        title: "缩放"
      }, {
        key: "cover",
        title: "等比例（会裁剪）"
      }, {
        key: "contain",
        title: "完全缩放（会填充）"
      }]
    },
    validator: {
      required: false
    }
  }],
  // 定义捷径的返回结果类型
  resultType: {
    type: _dingtalkDocsCoolApp.FieldType.Attachment
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: function () {
    var _execute = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context, formItemParams) {
      var imageSize, imageUrl1, imageName, imageModel, _imageUrl1$, generateNonce, generateSign, sizeMatch, targetWidth, targetHeight, uploadUrl, accessKey, accessSecret, method, timestamp, nonce, sign, requestBody, image, imageResponse, arrayBuffer, buffer, base64, contentType, uploadResponse, resJson, _resJson$result, _resJson$result2, _t, _t2, _t3;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            imageSize = formItemParams.imageSize, imageUrl1 = formItemParams.imageUrl1, imageName = formItemParams.imageName, imageModel = formItemParams.imageModel;
            _context.p = 1;
            // 生成随机数
            generateNonce = function generateNonce() {
              return Math.floor(100000 + Math.random() * 900000).toString();
            }; // 生成签名
            generateSign = function generateSign(method, url, accessKey, timestamp, nonce, accessSecret) {
              // 处理url，去除协议、域名、参数，以/开头
              var path = url.replace(/^https?:\/\/[^\/]+/, '').split('?')[0];
              // 按照顺序拼接参数
              var str = "".concat(method.toUpperCase(), "&").concat(path, "&").concat(accessKey, "&").concat(timestamp, "&").concat(nonce);
              // 使用HMAC-SHA256计算签名
              var hmac = require('crypto').createHmac('sha256', accessSecret);
              var signData = hmac.update(str).digest('base64');
              return signData;
            }; // 处理响应
            // 解析图像大小
            sizeMatch = imageSize.match(/^(\d+)\*(\d+)$/);
            if (sizeMatch) {
              _context.n = 2;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              data: '图像大小格式错误，请输入如 100*100 的格式'
            });
          case 2:
            targetWidth = parseInt(sizeMatch[1], 10);
            targetHeight = parseInt(sizeMatch[2], 10);
            if (!(isNaN(targetWidth) || isNaN(targetHeight) || targetWidth <= 0 || targetHeight <= 0)) {
              _context.n = 3;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              data: '图像大小必须为正整数'
            });
          case 3:
            // 调用图像调整API
            uploadUrl = 'https://saas.jcbbi.com:8180/api/sysChatChannel/resizeimageasync';
            accessKey = 'mmcimages';
            accessSecret = '0Gs18sWyIEiL5Y9mh6cpqQ';
            method = 'POST';
            timestamp = Math.floor(Date.now() / 1000).toString();
            nonce = generateNonce(); // 生成签名
            sign = generateSign(method, uploadUrl, accessKey, timestamp, nonce, accessSecret);
            requestBody = {
              "model": imageModel,
              "imageBase64": "",
              "targetWidth": targetWidth,
              "targetHeight": targetHeight
            };
            if (!(Array.isArray(imageUrl1) && imageUrl1.length > 0 && (_imageUrl1$ = imageUrl1[0]) !== null && _imageUrl1$ !== void 0 && _imageUrl1$.tmp_url)) {
              _context.n = 8;
              break;
            }
            image = imageUrl1[0];
            _context.p = 4;
            _context.n = 5;
            return context.fetch(image.tmp_url, {
              method: 'GET'
            });
          case 5:
            imageResponse = _context.v;
            _context.n = 6;
            return imageResponse.arrayBuffer();
          case 6:
            arrayBuffer = _context.v;
            // Convert ArrayBuffer to Buffer
            buffer = Buffer.from(arrayBuffer); // Convert Buffer to base64 string without data URI prefix
            base64 = buffer.toString('base64');
            contentType = image.type + '/' + image.name.split('.').pop() || 'image/png';
            requestBody.imageBase64 = "data:".concat(contentType, ";base64,").concat(base64);
            _context.n = 8;
            break;
          case 7:
            _context.p = 7;
            _t = _context.v;
            console.log({
              '===图片处理错误': String(_t)
            });
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error,
              data: '图像处理错误，请检查图像文件是否有效'
            });
          case 8:
            _context.n = 9;
            return context.fetch(uploadUrl, {
              method: method,
              headers: {
                'Content-Type': 'application/json',
                'accessKey': accessKey,
                'timestamp': timestamp,
                'nonce': nonce,
                'sign': sign
              },
              body: JSON.stringify(requestBody)
            });
          case 9:
            uploadResponse = _context.v;
            _context.p = 10;
            _context.n = 11;
            return uploadResponse.json();
          case 11:
            resJson = _context.v;
            if (!((resJson === null || resJson === void 0 ? void 0 : resJson.code) === 200)) {
              _context.n = 12;
              break;
            }
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              data: [{
                fileName: imageName || '调整后.png',
                type: 'image/png',
                url: resJson === null || resJson === void 0 || (_resJson$result = resJson.result) === null || _resJson$result === void 0 ? void 0 : _resJson$result.imageUrl
              }]
            });
          case 12:
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Success,
              data: [{
                fileName: imageName || '调整后.png',
                type: 'image',
                url: (resJson === null || resJson === void 0 || (_resJson$result2 = resJson.result) === null || _resJson$result2 === void 0 ? void 0 : _resJson$result2.imageUrl) || ''
              }]
            });
          case 13:
            _context.n = 15;
            break;
          case 14:
            _context.p = 14;
            _t2 = _context.v;
            console.log({
              '===读取响应错误': String(_t2)
            });
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error
            });
          case 15:
            _context.n = 17;
            break;
          case 16:
            _context.p = 16;
            _t3 = _context.v;
            console.log('====error', String(_t3));
            return _context.a(2, {
              code: _dingtalkDocsCoolApp.FieldExecuteCode.Error
            });
          case 17:
            return _context.a(2);
        }
      }, _callee, null, [[10, 14], [4, 7], [1, 16]]);
    }));
    function execute(_x, _x2) {
      return _execute.apply(this, arguments);
    }
    return execute;
  }()
});
var _default = exports["default"] = _dingtalkDocsCoolApp.fieldDecoratorKit;