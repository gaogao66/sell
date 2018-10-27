<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(0,$event)" class="block positive" :class="{'active':stype===0}">{{desc.all}}<span class="count">{{rating.length}}</span></span>
      <span @click="select(1,$event)" class="block positive" :class="{'active':stype===1}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(2,$event)" class="block negative" :class="{'active':stype===2}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div @click="toggleContent($event)" class="switch" :class="{'on':onlyContent}">
      <span class="icon-check_circle" ></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const ALL = 0;
const positive = 1;
const negative = 2;
export default {
  props: {
    rating: {
      type: Array,
      default () {
        return [];
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default () {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        };
      }
    }
  },
  data () {
    return {
      stype: this.selectType,
      ocontent: this.onlyContent
    };
  },
  computed: {
    positives () {
      return this.rating.filter((rating) => {
        return rating.rateType === positive;
      });
    },
    negatives () {
      return this.rating.filter((rating) => {
        return rating.rateType === negative;
      });
    }
  },
  methods: {
    select (type, event) {
      if (!event._constructed) {
        return;
      }
      this.stype = type;
      this.$emit('ratingevent', 'selectType', this.stype);
    },
    toggleContent (event) {
      if (!event._constructed) {
        return;
      }
      this.ocontent = !this.ocontent;
      this.$emit('ratingevent', 'onlyContent', this.ocontent);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl';
.ratingselect
  .rating-type
    padding: 18px 0
    margin: 0 18px
    font-size: 0
    border-1px(rgba(7,17,27,0.1))
    .block
      display: inline-block
      padding: 8px 12px
      line-height: 16px
      margin-right: 8px
      border-radius: 1px
      font-size: 12px
      color: rgb(77,85,93)
      &.active
        color: #fff
      .count
        margin-left: 2px
        font-size: 8px
      &.positive
        background: rgba(0,160,220,0.2)
        &.active
          background: rgb(0,160,220)
      &.negative
        background: rgba(77,85,93,0.2)
        &.active
          background: rgb(77,85,93)
  .switch
    padding: 12px 18px
    line-height: 24px
    border-bottom: 1px solid rgba(7,17,27,0.1)
    color: rgb(147,153,159)
    font-size: 0
    &.on
      .icon-check_circle
        color: #00c850
    .icon-check_circle
      display: inline-block
      vertical-align: top
      margin-right: 4px
      font-size: 24px
    .text
      display: inline-block
      vertical-align: top
      font-size: 12px
</style>
