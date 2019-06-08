<template>
	<header class="header">
		<div class="container">
			<div class="logo">
				<a href="#" title=""><img src="@/assets/header.png"><span>茶道部</span></a>
			</div>
			<div class="sitenav">
				<ul>
					<li class="menu-item">
						<a href="/music">音乐区</a>
					</li>
					<li class="menu-item">
						<a href="/picture">美图区</a>
					</li>
					<li class="menu-item">
						<a href="/library">图书馆</a>
					</li>
					<li class="menu-item">
						<a href="/relaxation">后花园</a>
					</li>
					<li class="menu-item">
						<a href="/staff">工作组</a>
					</li>
					<li class="menu-item menu-item-object-custom">
					</li>
				</ul>
			</div>
			<span class="sitenav-on" onclick="history.go(-1)"><i class="fa">&#xe610;</i></span>
			<span class="sitenav-mask"></span>
            
				<div class="usersign">
			</div>
		</div>
	</header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>

</style>
