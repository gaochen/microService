<template>
  <div>第四个页面</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'one',
  data() {
    return {
      urlList: [
        'https://m.hexiehealth.com/abwx_cms/up_load/20180329095447_573.jpg',
        'https://m.hexiehealth.com/abwx_cms/up_load/20180522165547_637.jpg',
        'https://m.hexiehealth.com/abwx_cms/up_load/20180511105015_386.jpg',
        'https://m.hexiehealth.com/abwx_cms/up_load/20171211093006_832.jpg',
        'https://m.hexiehealth.com/abwx_cms/up_load/1250122_index.jpg'
      ],
      options: {
        perView: 2, // 一屏多少个图片
        spaceBetween: 20, // 图片的间距
        index: 0, // 轮播起始位置
        autoPlay: true, // 是否自动播放，需要先看起无缝滚动,
        autoSpeed: 2500, // 自动播放的时间间隔
        loop: true, // 无缝滚动
        drag: true, // 是否鼠标可拖动
        slideGroup: true // 是否全屏滚动，针对于一屏有多个图片
      },
      people: [
        { name: 'Check the console', address: { zip: 4444 } },
        { name: 'No address' /* address: {zip: 5555} */ }
      ],
      message: 'Some message',
      inputValue: 'abc'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.slider-demo {
  width: 1400px;
  height: 500px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  background-color: #fff;

  .slider-image {
    width: 100%;
  }
}
.youjian {
  width: 400px;
  height: 400px;
  background-image: url('https://m.hexiehealth.com/abwx_cms/up_load/20180511105015_386.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>