<template>
  <div class="my-container">
    <!-- 头部蓝色区域 -->
    <van-cell-group>
      <van-cell title="单元格" value="内容" center>
        <van-image round slot="icon" fit="cover" width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div slot="title">昵称</div>
        <van-button size="small" round>编辑资料</van-button>
      </van-cell>
      <van-grid>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <div class="span">123</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 收藏, 历史 -->
    <van-grid :column-num="2">
      <van-grid-item icon-prefix="icon" icon="shoucang" text="文字" />
      <van-grid-item icon-prefix="icon" icon="lishi" text="文字" />
    </van-grid>
    <!-- 页面导航部分 -->
    <van-cell title="消息通知" is-link to="/" />
    <van-cell title="小智同学" is-link to="/" />
    <van-cell title="退出登录" />
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
