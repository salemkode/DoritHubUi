<script>
  import Xinput from "../components/input.svelte";
  import Xbutton from "../components/button.svelte";
  import { login } from "../javascript/conectApi";
  import page from "page";

  let username , password;

  if(localStorage.getItem("key")) {
		page.redirect('/');
	}
  let err = false;
  function loging(){
    login(username , password , page).catch(
      bug=> err = bug.message
    )
  }
</script>

<main class="full relative">
  <div class="cover absolute z-0" />
  <div class="absolute full flex">
    <div class="p-2 w-6/12 m-auto flexed z-10">
      <Xinput bind:value={username} type="text" placeholder="username" name="username" />
      <Xinput bind:value={password} type="password" placeholder="password" name="password" />
      {#if err}
        <label for="" id="err" class="text-light text-2x p-2 my-2 bg-red-600">
          {err}
        </label>
      {/if}
      <Xbutton on:click={loging} className="w-full my-2">login</Xbutton>
    </div>
  </div>
</main>

<style>
  main {
    background-image: url("../assets/img.jpg");
    color: white;
  }
  .cover {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: 0.6;
  }
</style>
