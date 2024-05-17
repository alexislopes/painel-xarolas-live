<script lang="ts" setup>

interface Props {
  text: string
  animationLength: number
}

const pop = ref()

const props = withDefaults(defineProps<Props>(), { text: "🤣👉12:00⌚", animationLength: 10 })

function createElement() {
  const container = document.querySelector('#container')
  var span = document.createElement('span')
  span.className = `el absolute animate-[pop_${props.animationLength}s_linear_forwards] px-2 py-1 rounded-full bg-cloudy min-w-max border border-ivy`
  span.innerHTML = props.text
  span.style.left = Math.random() * (window.innerWidth - 35) + 'px'
  span.style.top = Math.random() * (window.innerHeight * .5) + 'px'
  container.appendChild(span)

  //remove excess kernals
  setTimeout(function () {
    var pop = document.querySelector('.el')
    pop.remove()
  }, 1000 * props.animationLength)

  //create kernal every second
  setTimeout(createElement, 5000)
}

onMounted(() => {
  createElement()
})
</script>

<template>
<div id="container" class="fixed top-0 bottom-0 left-0 right-0">
</div>
</template>

<style >
@keyframes pop {
  0% {
    transform: scale(.1);
    /* font-size: .1rem; */
  }

  3% {
    transform: scale(2);
    /* font-size: 1.25rem; */
  }

  6% {
    transform: scale(1);
    /* font-size: 1rem; */
  }

  100% {
    transform: scale(1) rotate(720deg);
    top: 105%;
    /* font-size: 1rem; */
  }
}
</style>
