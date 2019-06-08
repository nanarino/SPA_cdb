<template>
    <div>
        <headerIndex/>
        <focusbox/>
		<section class="container">
            <div class="content-wrap">
                <div class="content">
                    <header class="article-header">
                        <h1 class="article-title">{{album.title}}</h1>
                        <div class="article-meta">
                            <span class="item item-1">{{album.time.slice(0,10)}}</span>
                            <span class="item item-2">作者：{{album.publisher.username}}</span>
                            <span class="item item-3">分类：{{album.motif||"无"}}</span>
                        </div>
                    </header>
                    <article class="article-content">
                        <p v-for='img in JSON.parse(album.imgurl)'><img class="aligncenter size-full" :src="'http://www.akokono.com/'+img"/></p>
                    </article>
                </div>
            </div>
		</section>
        <myFooter/>
        <rewardsPopoverMask/>
    </div>
</template>

<script>
export default {
  name: 'watch',
  data () {
    return {
      album: {
         imgurl:'[]',
         time:'1980-00-00T08:51:44.769952+08:00',
         publisher:{
            id:'加载中',
            username:'加载中'
         }
      }
    }
  },
  async created(){
    let {data} = await this.$axios.get('http://www.akokono.com/api/album/'+this.$route.params.id+'/?format=json')
    this.album = data
  }
}
</script>


<style scoped>

</style>
