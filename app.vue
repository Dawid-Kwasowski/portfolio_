<script setup lang="ts">
  import type {IAppNavigationProps} from "~/components/AppNavigation/model/IAppNavigationProps";
  import anime from "animejs";
  const {isMobile} = useDevice()
  const route = useRoute()

  const routes: IAppNavigationProps[] = [
    {name: 'About', link: '/'},
    {name: 'Projects', link: '/projects'},
    // {name: 'Contact', link: '/contact'},
  ]

  useHead({
    title: computed(() => {
      return route.name?.toString() +  ' | Dawid'
    }),
    bodyAttrs: {
      class: 'bg-primary overflow-x-hidden'
    }
  })


  onMounted(() => {
    anime({
      targets: '#navigation',
      easing: 'easeInExpo',
      duration: 500,
      delay: 200,
      opacity: [0,1],
    })
  })

</script>
<template>
  <div class="h-screen w-screen text-tertiary">
    <div id="navigation">
      <app-navigation-mobile :items="routes" v-if="isMobile"/>
      <app-navigation v-else :items="routes"/>
    </div>


    <NuxtRouteAnnouncer/>
    <main class="pt-20 z-50 relative">
      <NuxtPage/>
    </main>
    <footer v-if="isMobile">
      <div class="w-full  bottom-0 left-0 p-5 bg-primary/80 z-50 text-2xl flex justify-evenly backdrop-blur-3xl mt-20">
        <app-socials />
      </div>
    </footer>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>