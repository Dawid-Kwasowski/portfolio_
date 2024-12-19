<script setup lang="ts">

import anime from "animejs";
import {useRepositories} from "~/composables/repositories";

const { t } = useI18n()
const {repositories, getPinnedRepos} = useRepositories()
getPinnedRepos()
onMounted(() => {

  const projectsTl = anime.timeline({
    easing: 'easeInExpo',
    duration: 500,
  })

  projectsTl.add({
    delay: 700,
    targets: "#marquee",
    translateY: [10,0],
    easing: "easeInOutQuad",
    opacity: [0,1],
  })
  projectsTl.add({
    targets: "#projects-description",
    opacity: [0,1],
    easing: "easeInOutQuad",
    translateY: [10,0],
  })
  projectsTl.add({
    targets: "#projects-carousel",
    opacity: [0,1],
    easing: "easeInOutQuad",
    translateY: [10,0],
  })
})

</script>

<template>
  <div class="px-5">
    <div class="flex flex-col mx-2">
      <div>
        <app-header>
          {{t('stack.title')}}
        </app-header>
      </div>
      <div class="my-20 flex flex-col md:flex-row">
        <div id="marquee" class="basis-1/2">
          <app-marquee />
        </div>
        <div id="projects-description" class="basis-1/2 md:p-20 text-2xl">
          {{t('stack.description')}}
        </div>
      </div>
      <div id="projects-carousel">
        <div class="text-3xl font-bold">{{t('stack.projects')}}</div>
        <div>
          <app-carousel :items="repositories"/>
        </div>
      </div>

    </div>
    <div class="bg-secondary size-[150px] md:size-[300px] rounded-full blur-[200px] fixed top-1/4 right-2.5 animate-pulse"></div>
    <div class="bg-secondary size-[150px] md:size-[300px] rounded-full blur-[200px] fixed bottom-2.5 left-2.5 animate-pulse"></div>
  </div>
</template>