<script>
    export let type = "";
</script>

<div class="flex {type} items-center justify-center">
  <div class="contain">
		<div class="box1"></div>
		<div class="box2"></div>
		<div class="box3"></div>
	</div>
</div>
<style>
.flex{
  width: 100%;
  height: 100%;
}
.popup{
	position: fixed;
    top: 0;
    left: 0;
    background: #00000059;
}
.contain {
  width: 112px;
  height: 112px;
}
.contain .box1,
.contain .box2,
.contain .box3 {
  border: 16px solid #616161;
  box-sizing: border-box;
  position: absolute;
  display: block;
}
.contain .box1 {
  width: 112px;
  height: 48px;
  margin-top: 64px;
  margin-left: 0px;
  -webkit-animation: anime1 4s 0s forwards ease-in-out infinite;
          animation: anime1 4s 0s forwards ease-in-out infinite;
}
.contain .box2 {
  width: 48px;
  height: 48px;
  margin-top: 0px;
  margin-left: 0px;
  -webkit-animation: anime2 4s 0s forwards ease-in-out infinite;
          animation: anime2 4s 0s forwards ease-in-out infinite;
}
.contain .box3 {
  width: 48px;
  height: 48px;
  margin-top: 0px;
  margin-left: 64px;
  -webkit-animation: anime3 4s 0s forwards ease-in-out infinite;
          animation: anime3 4s 0s forwards ease-in-out infinite;
}
@-webkit-keyframes anime1 {
  0% {
    width: 112px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  12.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  25% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  37.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  50% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  62.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  75% {
    width: 48px;
    height: 112px;
    margin-top: 0px;
    margin-left: 0px;
  }
  87.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  100% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
}
@keyframes anime1 {
  0% {
    width: 112px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  12.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  25% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  37.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  50% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  62.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
  75% {
    width: 48px;
    height: 112px;
    margin-top: 0px;
    margin-left: 0px;
  }
  87.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  100% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
}
@-webkit-keyframes anime2 {
  0% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  12.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  25% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  37.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  50% {
    width: 112px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  62.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  75% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  87.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  100% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
}
@keyframes anime2 {
  0% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  12.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  25% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  37.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  50% {
    width: 112px;
    height: 48px;
    margin-top: 0px;
    margin-left: 0px;
  }
  62.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  75% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  87.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  100% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
}
@-webkit-keyframes anime3 {
  0% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  12.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  25% {
    width: 48px;
    height: 112px;
    margin-top: 0px;
    margin-left: 64px;
  }
  37.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  50% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  62.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  75% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  87.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  100% {
    width: 112px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
}
@keyframes anime3 {
  0% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  12.5% {
    width: 48px;
    height: 48px;
    margin-top: 0px;
    margin-left: 64px;
  }
  25% {
    width: 48px;
    height: 112px;
    margin-top: 0px;
    margin-left: 64px;
  }
  37.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  50% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  62.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  75% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  87.5% {
    width: 48px;
    height: 48px;
    margin-top: 64px;
    margin-left: 64px;
  }
  100% {
    width: 112px;
    height: 48px;
    margin-top: 64px;
    margin-left: 0px;
  }
}

</style>