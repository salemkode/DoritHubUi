<script>
  import { createEventDispatcher } from 'svelte';
  import XToggle from "../components/Toggle.svelte";
  import Xbutton from "../components/button.svelte";
  export let progect;
  let stoped = (item)=> item.pm2_env.status === "online" ? "text-green-700 " : "text-red-600 ";
	const dispatch = createEventDispatcher();
	function edit(event) {
		dispatch('edit', {
			key: event.detail.key.parentElement.parentElement.parentElement.getAttribute("key"),
      checked : event.detail.key.checked
		});
	}
  function remove() {
		dispatch('remove', {
			key: this.parentElement.getAttribute("key")
		});
	}
</script>

<div class="full flexed">
  {#await progect}
    <slot></slot>
  {:then items}
      {#each items as item}
        <div class="item flex">
            <div class="flex w-full cursor-pointer items-center shadow-md" key="{item.pm_id}">
                <img src="/assets/nodejs.png" alt="" class="w-10 h-10 m-2">
                <h3 class="p-2 w-full"> {item.name} </h3>
                <h3> {item.pm2_env.exec_mode.replaceAll("_mode" , "")} </h3>
                <h3 class="{stoped(item)}"> {item.pm2_env.status} </h3>
                <XToggle className="m-4" on:change="{edit}"
                 checked={item.pm2_env.status !== "stopped"}/>
            </div>
            <Xbutton on:click="{remove}" className="fit my-auto mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="24" height="24" preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>
            </Xbutton>
        </div>
      {/each}
  {:catch error}
    <p class=" text-red-600 m-auto text-3xl">{error.message}</p>
  {/await}
</div>
<style>
    .item > .flex{
      margin: 5px;
      border: 0.5px solid #968c8c;
    }
    h3{
      margin: 5px;
    }
</style>