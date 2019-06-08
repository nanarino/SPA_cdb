<template>
    <div>
        <headerIndex/>
        <focusbox/>
        <section class="container">
            <div class="tagslist">
                <ul>
                    <li v-for='album in results'>
                        <router-link tag='a' :to="{ name:'watch',params:{id:album.id}}" class="name">{{album.motif}}</router-link>
                        <small>{{album.imglen}}张</small>
                        <p><a class="tit" href="">{{album.title}}</a></p>
                    </li>
               </ul>
            </div>
        </section>
        <myFooter/>
        <rewardsPopoverMask/>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      results: []
    }
  },
  async created(){
    let {data:{results}} = await this.$axios.get('http://www.akokono.com/api/albums/?format=json&page=1')
    this.results = results
  }
}
</script>


<style scoped>

</style>
