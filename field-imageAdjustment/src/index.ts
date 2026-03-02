import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';
const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList(['api.exchangerate-api.com', 'alidocs2-zjk-cdn.dingtalk.com', 'api.ezlinkai.com', 'saas.jcbbi.com', 'jcbbi.com', 'www.mmcjt.cn']);

fieldDecoratorKit.setDecorator({
  name: '图像调整',
  authorizations: {
    id: 'auth_id',// 授权的id，用于context.fetch第三个参数指定使用
    platform: '毛毛虫',// 授权平台，目前可以填写当前平台名称
    type: AuthorizationType.HeaderBearerToken, // 授权类型
    required: false,// 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
    instructionsUrl: "https://www.mmcjt.cn/",// 帮助链接，告诉使用者如何填写这个apikey
    label: '授权', // 授权平台，告知用户填写哪个平台的信息
    tooltips: '请联系公司AI管理员获取授权（1.0.0）', // 提示，引导用户添加授权
    /**
    * 也支持配置链接
    **/
    icon: { // 当前平台的图标
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
      "param_image_model":"模式",
    }
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'imageUrl1',
      label: t('param_image_label'),
      component: FormItemComponent.FieldSelect,
      props: {
        supportTypes: [FieldType.Attachment],
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'imageSize',
      label: t('param_image_size_label'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '请输入图像大小，格式如：100*100',
        enableFieldReference: true,
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'imageName',
      label: t('param_image_name_label'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '请输入图像名称',
        enableFieldReference: true,
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'imageModel',
      label: t('param_image_model'),
      component: FormItemComponent.SingleSelect,
      props: {
        defaultValue: 'contain',
        placeholder: "请选择",
        options: [
          {
            key: "stretch",
            title: "缩放"
          },
          {
            key: "cover",
            title: "等比例（会裁剪）"
          },
          {
            key: "contain",
            title: "完全缩放（会填充）"
          },
        ]
      },
      validator: {
        required: false,
      }
    },
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: FieldType.Attachment,
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (context, formItemParams) => {
    const { imageSize, imageUrl1, imageName, imageModel } = formItemParams;

    try {
      // 解析图像大小
      const sizeMatch = imageSize.match(/^(\d+)\*(\d+)$/);
      if (!sizeMatch) {
        return {
          code: FieldExecuteCode.Error,
          data: '图像大小格式错误，请输入如 100*100 的格式',
        };
      }

      const targetWidth = parseInt(sizeMatch[1], 10);
      const targetHeight = parseInt(sizeMatch[2], 10);

      if (isNaN(targetWidth) || isNaN(targetHeight) || targetWidth <= 0 || targetHeight <= 0) {
        return {
          code: FieldExecuteCode.Error,
          data: '图像大小必须为正整数',
        };
      }

      // 调用图像调整API
      const uploadUrl = 'https://saas.jcbbi.com:8180/api/sysChatChannel/resizeimageasync';
      const accessKey = 'mmcimages';
      const accessSecret = '0Gs18sWyIEiL5Y9mh6cpqQ';
      const method = 'POST';
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const nonce = generateNonce();

      // 生成签名
      const sign = generateSign(method, uploadUrl, accessKey, timestamp, nonce, accessSecret);

      const requestBody: any = {
        "model": imageModel,
        "imageBase64": "",
        "targetWidth": targetWidth,
        "targetHeight": targetHeight
      };
      if (Array.isArray(imageUrl1) && imageUrl1.length > 0 && imageUrl1[0]?.tmp_url) {
        const image = imageUrl1[0];
        try {
          // Fetch the image from the temporary URL
          const imageResponse = await context.fetch(image.tmp_url, {
            method: 'GET',
          });
          const arrayBuffer = await imageResponse.arrayBuffer();

          // Convert ArrayBuffer to Buffer
          const buffer = Buffer.from(arrayBuffer);

          // Convert Buffer to base64 string without data URI prefix
          let base64 = buffer.toString('base64');
          const contentType = image.type + '/' + image.name.split('.').pop() || 'image/png';
          requestBody.imageBase64 = `data:${contentType};base64,${base64}`;
        } catch (error) {
          console.log({ '===图片处理错误': String(error) });
          return {
            code: FieldExecuteCode.Error,
            data: '图像处理错误，请检查图像文件是否有效',
          };
        }
      }
      // 调用上传API
      const uploadResponse = await context.fetch(uploadUrl, {
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


      // 生成随机数
      function generateNonce(): string {
        return Math.floor(100000 + Math.random() * 900000).toString();
      }

      // 生成签名
      function generateSign(method: string, url: string, accessKey: string, timestamp: string, nonce: string, accessSecret: string): string {
        // 处理url，去除协议、域名、参数，以/开头
        const path = url.replace(/^https?:\/\/[^\/]+/, '').split('?')[0];
        // 按照顺序拼接参数
        const str = `${method.toUpperCase()}&${path}&${accessKey}&${timestamp}&${nonce}`;
        // 使用HMAC-SHA256计算签名
        const hmac = require('crypto').createHmac('sha256', accessSecret);
        const signData = hmac.update(str).digest('base64');
        return signData;
      }

      // 处理响应
      try {
        const resJson = await uploadResponse.json();

        if (resJson?.code === 200) {
          return {
            code: FieldExecuteCode.Success,
            data: [{
              fileName: imageName || '调整后.png',
              type: 'image/png',
              url: resJson?.result?.imageUrl
            }],
          };
        }else {
          return {
            code: FieldExecuteCode.Success,
            data: [{
              fileName: imageName || '调整后.png',
              type: 'image',
              url: resJson?.result?.imageUrl || ''
            }],
          };
        }
      } catch (e) {
        console.log({ '===读取响应错误': String(e) });
        return {
          code: FieldExecuteCode.Error,
        };
      }
    } catch (e) {
      console.log('====error', String(e));
      return {
        code: FieldExecuteCode.Error,
      }
    }
  },
});
export default fieldDecoratorKit;
