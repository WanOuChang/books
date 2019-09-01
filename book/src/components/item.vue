<template>
  <div class="itemList">
      <dl>
          <dt><img :src="''+item.coverUrl" alt=""></dt>
          <dd>
              <h4>{{item.bookName}}</h4>
              <p><label for="">作者：</label><span>{{item.authorName}}</span></p>
              <p><label for="">更新至：</label><span>{{item.updteChapterName}}</span></p>
              <p><label for="">简介：</label><span>{{item.description}}</span></p>
          </dd>
      </dl>
  </div>
</template>

<script>
export default {
    props:{
        item:Object,
    }
}
</script>

<style lang="scss" scoped>
.itemList{
    padding: 14px 8px;
    width: 100%;
    dl{
        width: 100%;
        display: flex;
            dt{
                width: 100px;
            }
            dd{
                flex:1;
                padding: 0 10px;
                h4{
                    font-size: 16px;
                    font-weight: 500;
                    color:#4c4c4c;
                    height: 30px;
                    line-height: 30px;  
                }
                p{
                    width: 280px;
                    height: 30px;
                    line-height: 30px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    label{
                        font-size: 13px;
                        color:#a8a8a8;
                    }
                    span{
                        font-size: 13px;
                    }
                }
                p:nth-child(2){
                    span{
                        color:#a8a8a8;
                    }
                }
            }
    }
}

</style>