<template>
  <div class="m-classify">
      <ul class="titleNav">
        <li
          v-for="(item,index) in titleNav"
          :key="index"
          :class="currentIndex===index?'active':''"
          @click="changIndex(index)"
        >
          {{item}}
        </li>
      </ul>
      <div class="main">
        <Item/>
      </div>
  </div>
</template>

<script>
import "@/mock/index.js";
import Item from "@/components/item.vue";

export default {
  data(){
    return{
      titleNav:["热门","新书","免费","完本"],
      currentIndex:0,
    }
  },
  components:{
    Item,
  },
  methods:{
    changIndex(index){
      this.currentIndex=index;
    }
  },
  created(){
        this.$http("/api/classify").then(res=>{
            console.log(res.data.list);
        })
    }
}
</script>

<style lang="scss" scoped>
.titleNav{
  width: 100%;
  height: 55px;
  display: flex;
  padding:5px 0;
  li{
    margin:5px;
    height: 35px;
    flex: 1;
    text-align: center;
    line-height: 35px;
    border-radius: 3px;
    font-size: 13px;
    background:#f2f2f2;
  }
}
.titleNav li.active{
  background:#ff4544;
  color:#fff;
}
</style>