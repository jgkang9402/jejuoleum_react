<template>
  <div>
    <ul>
      <li v-for="item in result" :key="item.oleumEname">
        {{ item.oleumKname }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      result: [],
    };
  },
  async mounted() {
    const res = await axios.get('/rest/JejuOleumVRImg/getOleumADetailList');
    console.log(res);
    if (res.status) {
      this.result = res.data.resultSummary;
    }
  },
};
</script>





const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target: 'https://gis.jeju.go.kr', // API 주소 입력
        pathRewrite: { '^/': '' },
        changeOrigin: true,
        secure: false,
        ws: false,
      },
    },
  },
});

/////////////
# CORS ISSUE

## vue.config.js 수정

- devServer 설정 값 추가

```json
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/': {
        target: 'https://gis.jeju.go.kr',
        pathRewrite: { '^/': '' },
        changeOrigin: true,
        secure: false,
        ws: false,
      },
    },
  },
});
```

## npm 재시동 후 아래 처럼 호출

기존 `axios.get('https://gis.jeju.go.kr/rest/JejuOleumVRImg/getOleumADetailList')` 처럼 호출하던 것을 `axios.get('/rest/JejuOleumVRImg/getOleumADetailList')`처럼 devServer의 target 속성 값에 적은 주소만 빼고 호출
