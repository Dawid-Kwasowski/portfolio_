<script setup lang="ts">
  import anime from "animejs";
  onMounted(() => {
    const text = document.getElementById('text')

    text!.innerHTML = text!.innerText.split("").map((char: string) => {
      if(char == " ") {
        char = "&nbsp;"
      }
      return `<span class="inline-block">${char}</span>`
    }).join("")

    anime({
      targets: "#text span",
      easing: "easeInOutQuad",
      duration: 1000,
      elasticity: 600,
      delay: (el, i) => 60 * (i+1),
      translateY: [0,-100]
    })
  })

</script>

<template>
  <div>
    <header class="select-none overflow-hidden">
      <h1 id="text" class="text-3xl md:text-7xl text-tertiary font-custom font-semibold text-balance translate-y-[100px]">
        <slot></slot>
      </h1>
    </header>
  </div>
</template>