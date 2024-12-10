<script setup lang="ts">
  import type {IAppNavigation} from "~/components/AppNavigation/model/IAppNavigation";
  import {useInitAnimations} from "~/stores/initialAnimation";

  const routes: IAppNavigation[] = [
    {name: 'About', link: ''},
    {name: 'Projects', link: '/projects'},
    {name: 'Contact', link: '/contact'},
  ]


  const {isMobile} = useDevice()

  onMounted(() => {
    const { mainTl } = useInitAnimations()

    mainTl.add({
      targets: "#divider",
      width: '100%',
      easing: 'easeInOutQuad',
      direction: 'alternate',
    })

    mainTl.add({
      targets: "#divider",
      height: '100vh',
      easing: 'easeInOutQuad',
      direction: 'alternate',
    })
  })


</script>
<template>
  <div class="h-screen w-screen text-tertiary bg-tertiary">
    <div id="divider" class="h-[5px] bg-primary absolute z-0 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"></div>
    <app-navigation :items="routes"/>
    <NuxtRouteAnnouncer/>
    <main id="page" >
      <NuxtPage/>
    </main>
    <footer v-if="isMobile">
      <div class="w-full fixed bottom-0 left-0 p-5 bg-primary/80 z-50 text-2xl flex justify-evenly backdrop-blur-3xl mt-10">
        <app-socials />
      </div>
    </footer>
  </div>
</template>
