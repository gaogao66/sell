<template>
  <div id="app">
    <div class="pic-wrapper" ref="pic-wrapper">
      <div class="pic-list" ref="pic-list">
        <p>{{sell}}</p>
        <p>it is ok</p>
        <p>{{msg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sell: {
      type: Number
    }
  },
  data: function () {
    return {
      msg: 'lalla'
    }
  },
  watch: {
    'this.sell' () {
      this.changedom()
    }
  },
  methods: {
    changedom () {
      if (this.sell) {
        console.log(this.$refs.picWrapper)
        console.log(this.$refs.picList)
        this.$refs.picWrapper.style.background = 'red'
        this.$refs.picList.style.width = '100%'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.changedom()
    })
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
