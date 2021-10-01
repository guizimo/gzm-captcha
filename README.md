## gzm-captcha

#### 说明

利用canvas实现图片验证码

#### 安装

```zsh
npm i gzm-captcha
```

#### 使用

```js
// 导入
import captcha from 'gzm-captcha'
// 配置
const conf = { 
  width: 300, 
  height: 100, 
  len: 4,
  type: '',
  lineShow: false, 
  pointShow: false 
}
// 获得图片验证码base64数据
const imagedata = captcha(conf).value()
```

#### 配置说明

##### props

| 属性名    | 说明                     | 类型    | 可选值                         | 默认值                   |
| --------- | ------------------------ | ------- | ------------------------------ | ------------------------ |
| width     | 图片验证码的宽度         | number  | -                              | 100                      |
| height    | 图片验证码的高度         | number  | -                              | 30                       |
| len       | 验证码的长度             | number  | -                              | 4                        |
| type      | 图片验证码中字符串的类型 | string  | letter(字母)/digital(数字 0-9) | 不传为（digital+letter） |
| lineShow  | 是否有干扰线             | boolean | false/true                     | true                     |
| pointShow | 是否有干扰点             | boolean | false/true                     | true                     |

##### methods

| 方法名   | 说明                       |
| -------- | -------------------------- |
| refresh  | 刷新验证码                 |
| value    | 获取图片验证的 base64 数据 |
| validate | 校验验证码                 |

#### vue上使用

```vue
<template>
  <div>
    <p>测试验证码</p>
    <img :src="codeImage" alt="" @click="refresh">
    <p>验证验证码</p>
    <input name="code" v-model="code" />
    <button @click="validate">提交</button>
  </div>
</template>

<script>
import captcha from 'gzm-captcha'
export default {
  name: 'Captcha',
  mounted () {
    this.init()
  },
  data () {
    return {
      code: '',
      codeImage: ''
    }
  },
  methods: {
    init () {
      const conf = { width: 300, height: 100, lineShow: false, pointShow: false }
      if (this.type !== undefined) {
        conf['type'] = this.type
      }
      this.instance = captcha(conf)
      this.codeImage = this.instance.value()
    },
    refresh () {
      this.codeImage = this.instance.refresh()
    },
    validate () {
      if (this.instance.validate(this.code)) {
        alert('验证码正确')
      } else {
        alert('验证码错误')
      }
      this.refresh()
    }
  }
}
</script>
```

