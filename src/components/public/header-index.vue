<template>
		<header class="header">
			<div class="container">
				<div class="logo">
					<router-link tag='a' :to="{ name:'index'}"><img src="@/assets/header.png"><span>茶道部</span></router-link>
				</div>
				<div class="sitenav">
					<ul>
						<router-link tag='li' :to="{ name:'music'}" class="menu-item">
							<a>音乐区</a>
						</router-link>
						<router-link tag='li' :to="{ name:'picture'}" class="menu-item">
							<a>美图区</a>
						</router-link>
						<router-link tag='li' :to="{ name:'library'}" class="menu-item">
							<a>图书馆</a>
						</router-link>
						<router-link tag='li' :to="{ name:'relaxation'}" class="menu-item">
							<a>后花园</a>
						</router-link>
						<router-link tag='li' :to="{ name:'staff'}" class="menu-item">
							<a>工作组</a>
						</router-link>
						<!--<router-link tag='li' :to="{ name:'user'}" class="menu-item menu-item-object-custom">

						</router-link>-->
					</ul>
				</div>
				<span class="sitenav-on"><i class="fa">&#xe605;</i></span>
				<span class="sitenav-mask"></span>
                
				<div class="usersign">

				</div>
                
				<div class="accounts"></div> <span class="searchstart-on"><i class="fa">&#xe600;</i></span>
				<span class="searchstart-off"><i class="fa">&#xe606;</i></span>
                
				<form method="get" class="searchform" action="">
					<button class="sbtn" type=""><i class="fa">&#xe600;</i></button><input class="sinput" name="wd" type="text" placeholder="输入关键字" value="">
				</form>
			</div>
		</header>
</template>

<script>
export default {
  name: 'headerIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>

</style>
