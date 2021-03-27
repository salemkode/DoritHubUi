<script>
  import Xlist from "../components/listProgect.svelte";
  import Xnav from "../components/navBar.svelte";
  import Xloading from "../components/loading.svelte";
  import { stop, restart , remove} from "../javascript/conectApi";
  import { getJson } from "../javascript/lib";
  import { getContext } from 'svelte';
  console.log(getContext("simple-modal"))
  let promise = getJson("http://localhost:10/api/pm2/list");
  let ubdate = () => (promise = getJson("http://localhost:10/api/pm2/list"));
  let load = false;


  async function edit(event) {
    let name = event.detail.key;
    let checked = event.detail.checked;
    load = true;
    if (!checked) {
      await stop(name);
    } else {
      await restart(name);
    }
    load = false
    ubdate();
  }
  async function clear(event){
    let name = event.detail.key;
    load = true;
   // open()
    //await remove(name);
    load = false;
    ubdate();
  }

</script>

<div class="page full flexed">
  <Xnav />
  <Xlist on:edit={edit} bind:progect={promise} on:remove="{clear}">
      <Xloading />
  </Xlist>
  {#if load}
    <Xloading type="popup"/>
  {/if}
  
</div>
