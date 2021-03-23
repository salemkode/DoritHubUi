<script>
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./page/Home.svelte";
	import login from "./page/login.svelte";
	export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Router url="{url}">
	<nav>
	   <Link to="/">Home</Link>
	   <Link to="login">login</Link>
	</nav>
	<div>
		<Route path="/"><Home /></Route>
		<Route path="login" component="{login}" /> 
	 </div>
</Router>