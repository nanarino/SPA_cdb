<template>
    <div>
        <headerIndex/>
        <focusbox/>
        <section class="container">
            <div class="tagslist">
                <ul>
                    <li>
                        <a class="name" href="">翻唱</a><small>4首</small>
                        <p><a class="tit" href="">akokono的翻唱</a></p>
                    </li>
                    <li>
                        <a class="name" href="">初音</a><small>2首</small>
                        <p><a class="tit" href="">初音のうた</a></p>
                    </li>
                </ul>
            </div>

            <div class="pagination pagination-multi">
				<ul>
					<li class="prev-page"></li>
					<li class="active"><span>1</span></li>
					<li>
						<a href="#">2</a>
					</li>
					<li>
						<a href="#">3</a>
					</li>
					<li>
						<a href="#">4</a>
					</li>
					<li class="next-page">
						<a href="#">下一页</a>
					</li>
					<li>
						<a href="#">尾页</a>
					</li>
					<li><span>共 5 页</span></li>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>

</style>
