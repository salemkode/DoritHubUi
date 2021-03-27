<script>
    export let checked = true;
    export let className = "";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
	function change() {
		dispatch('change', {
			key: this
		});
	}
</script>

<label key for="toogleA" class="flex items-center cursor-pointer {className}">
    <div class="relative">
        <input id="toogleA" type="checkbox" on:change="{change}" bind:checked class="hidden" />
        <div
        class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
        />
        <div
        class="toggle__dot bg-red-400 absolute w-6 h-6 rounded-full shadow inset-y-0 left-0"
        />
    </div>
</label>

<style>
  .toggle__dot {
    top: -0.25rem;
    left: -0.25rem;
    transition: all 0.3s ease-in-out;
  }

  input:checked ~ .toggle__dot {
    transform: translateX(100%);
    background-color: #48bb78;
  }
</style>
