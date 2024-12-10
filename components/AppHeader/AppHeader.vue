<script setup lang="ts">
  import {useInitAnimations} from "~/stores/initialAnimation";
  import type {IAppHeader} from "~/components/AppHeader/model/IAppHeader";

  const {t} = useI18n()
  const props = defineProps<IAppHeader>()
  onMounted(() => {
    const text = document.getElementById('text')

    text!.innerHTML = text!.innerText.split("").map((char: string) => {
      if(char == " ") {
        char = "&nbsp;"
      }
      return `<span class="inline-block">${char}</span>`
    }).join("")

    const { mainTl } = useInitAnimations()

    mainTl.add({
      targets: "#text span",
      duration: 1000,
      elasticity: 600,
      delay: (el, i) => 45 * (i+1),
      translateY: [100,0]
    })
  })

</script>

<template>
  <div>
    <header class="select-none overflow-hidden">
      <h1 id="text" class="text-2xl md:text-7xl text-tertiary font-custom font-semibold ">
        {{ t(props.title) }} Dawid Kwasowski
      </h1>
    </header>
  </div>
</template>