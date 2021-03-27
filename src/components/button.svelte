<script>
    export let className = "";
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
	function clicked() {
		dispatch('click', {
			key: this.getAttribute("key")
		});
	}
</script>

<button on:click="{clicked}" 
class="bg-indigo-100 text-indigo-700 text-base font-semibold p-2 rounded-lg {className}">
    <slot></slot>
</button>
<style>
	.fit{
		height: fit-content;
	}
</style>