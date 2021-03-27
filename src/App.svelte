<script>
	import page from "page";
	import Home from "./page/home.svelte";
	import login from "./page/login.svelte";
	import progect from "./page/progect.svelte";
	let current = Home;
	page('/', () => (current = Home));
	page('/login', () => (current = login));
	page('/pro/:id', () => (current = progect));
	if(!localStorage.getItem("key")) {
		page.redirect('/login');
	}
	page.start();
</script>

<svelte:component this={current} />

<style lang="scss" global>
	@import "./style/main";
</style>