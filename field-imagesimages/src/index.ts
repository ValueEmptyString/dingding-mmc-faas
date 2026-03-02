import { FieldType, fieldDecoratorKit, FormItemComponent, FieldExecuteCode, AuthorizationType } from 'dingtalk-docs-cool-app';
const { t } = fieldDecoratorKit;

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList(['api.exchangerate-api.com', 'alidocs2-zjk-cdn.dingtalk.com', 'api.ezlinkai.com', 'saas.jcbbi.com', 'jcbbi.com', 'www.mmcjt.cn']);

fieldDecoratorKit.setDecorator({
  name: '图像生成',
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
      "param_image_label": "素材1",
      "param_image_label2": "素材2",
      "param_image_label3": "素材3",
      "param_prompt_label": "提示词",
      "param_model_label": "型号",
      "param_temperature_label": "Temperature",
      "param_top_p_label": "topP",
      "param_top_K_label": "topK",
      "param_candidateCount_label": "candidateCount",
    }
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'imageUrl1',
      label: `${t('param_image_label')}`,
      component: FormItemComponent.FieldSelect,
      props: {
        supportTypes: [FieldType.Attachment],
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'imageUrl2',
      label: `${t('param_image_label2')}`,
      component: FormItemComponent.FieldSelect,
      props: {
        supportTypes: [FieldType.Attachment],
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'imageUrl3',
      label: `${t('param_image_label3')}`,
      component: FormItemComponent.FieldSelect,
      props: {
        supportTypes: [FieldType.Attachment],
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'prompt',
      label: t('param_prompt_label'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '请输入图片编辑指令',
        enableFieldReference: true,
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'model',
      label: t('param_model_label'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '请输入型号',
        enableFieldReference: true,
      },
      validator: {
        required: true,
      }
    },
    {
      key: 'temperature',
      label: t('param_temperature_label'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '请输入0.0-2.0之间数字',
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'topP',
      label: t('param_top_p_label'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '请输入0.0-1.0之间数字',
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'topK',
      label: t('param_top_K_label'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '请输入10-100之间数字',
      },
      validator: {
        required: false,
      }
    },
    {
      key: 'candidateCount',
      label: t('param_candidateCount_label'),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: '请输入1-8之间数字',
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
  execute: async (context, formData: { imageUrl1: string; prompt: string; model: string; temperature?: string; topP?: string; topK?: string; candidateCount?: string }) => {
    const { imageUrl1, prompt, model, temperature, topP, topK, candidateCount } = formData;
    try {
      // 1. 收集所有图片的临时URL
      const imageFields = [imageUrl1];
      const tmpUrls: string[] = [];

      for (const imageField of imageFields) {
        // 每个imageField是一个图片数组，可能包含多张图片
        if (Array.isArray(imageField)) {
          for (const image of imageField) {
            if (image?.tmp_url) {
              tmpUrls.push(image.tmp_url);
            }
          }
        }
      }

      if (tmpUrls.length === 0) {
        throw new Error('No image URLs found');
      }

      // 2. 调用新的接口 api/sysChatChannel/imagebuilderchat
      const url = 'https://saas.jcbbi.com:8180/api/sysChatChannel/imagebuilderchat';
      const requestBody = {
        "Model": "gemini-3-pro-image-preview",
        "content": prompt,
        "imageUrls": tmpUrls,
        "temperature": Number(temperature),
        "topP": Number(topP),
        "topK": Number(topK),
        "candidateCount": Number(candidateCount),
      };

      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 3lbdC51aWu9RUL6gFa3fFaCcA50b47EaB8B893DeCfEc6716'
        },
        body: JSON.stringify(requestBody)
      };

      const res: any = await context.fetch(url, init);
      const resJson = await res.json();

      // 3. 处理响应
      const uploadedImages = [];

      // console.log('===========<resJson', resJson);
      if (resJson.code === 200 && resJson.result && resJson.result.imageUrl) {
        uploadedImages.push({
          "fileName": `${model}.png`,
          "url": resJson.result.imageUrl,
          "type": "image",
        });
      } else {
        throw new Error('API call failed with code: ' + resJson.code);
      }

      // console.log('===========<uploadedImages', uploadedImages);

      return {
        code: FieldExecuteCode.Success,
        data: uploadedImages
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