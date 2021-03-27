<script>
  let id = parseInt(location.pathname.replaceAll("/pro/", ""));
  import Xbutton from "../components/button.svelte";
  import { getJson } from "../javascript/lib";
  async function stop() {
    console.log(await getJson("http://localhost:10/api/pm2/restart/" + id));
  }
</script>

<div class="page">
  <div class="flex p-4">
    <img src="/assets/nodejs.png" alt="" class="img m-2" />
    <div class="about w-full flexed justify-center ">
      <h1 class="text-2xl">name of proget</h1>
    </div>
    <Xbutton>
        stop
    </Xbutton>
  </div>
  <div class="flex">
    <Xbutton>
        stop
    </Xbutton>
    <Xbutton>
        stop
    </Xbutton>
    <Xbutton>
        stop
    </Xbutton>
  </div>
</div>
