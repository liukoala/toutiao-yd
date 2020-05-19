<template>
  <div class="search-history">
    <van-cell
      title="搜索历史"
    >
      <div>
        <span>全部删除</span>
        &nbsp;&nbsp;
        <span>完成</span>
      </div>
      <!-- <van-icon name="delete" /> -->
    </van-cell>
    <van-cell
      :title="history"
      v-for="(history, index) in searchHistories"
      :key="index"
    >
      <van-icon name="close" />
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchHistory',
  components: {},
  props: {
    searchHistories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
