<template>
  <div class="m-home">
      <header>
            <router-link
                v-for="(item,index) in navList"
                :key="index"
                :to="item.path"
                tag="span"
            >
                {{item.text}}
            </router-link>
      </header>
      <div class="m-home-main">
            <router-view/>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            navList:[
                {
                    path:"/home/homes",
                    text:"首页",
                },{
                    path:"/home/classify",
                    text:"分类",
                },{
                    path:"/home/seniority",
                    text:"排行",
                },{
                    path:"/home/bookrack",
                    text:"书架",
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.m-home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
header{
    width: 100%;
    height: 50px;
    display: flex; 
    justify-content: space-around;
    align-items: center;
    background: #333;
    span{
        flex: 1;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        color: #a1a1a1;
        &.router-link-active{
            background: #454545;
            color:#f2f2f2;
        }
    } 
}
</style>