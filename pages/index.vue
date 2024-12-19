<script setup lang="ts">
  import AppSocials from "~/components/AppSocials/AppSocials.vue";
  import anime from "animejs";

  const { t } = useI18n()
  const {isMobile} = useDevice()
  onMounted(() => {

    const indexTl = anime.timeline({
      easing: 'easeInExpo',
      duration: 500,
    })

    indexTl.add({
      delay: 700,
      targets: "#subheader",
      translateY: [10,0],
      easing: "easeInOutQuad",
      opacity: [0,1],
    })
    indexTl.add({
      targets: "#description",
      opacity: [0,1],
      easing: "easeInOutQuad",
      translateY: [10,0],
      complete(anim) {
        if(anim.completed) {
          anime.remove('#subheader, #description')
        }
      },
    })
  })

</script>

<template>
  <div class="px-5 flex flex-col items-center">
    <div>
    <app-header>
      {{t('general.title')}} Dawid Kwasowski
    </app-header>
      <h2 id="subheader" class="text-2xl md:text-3xl font-bold opacity-0 mt-10 ">
        <span class="text-secondary">console</span>.log("{{t('main.description.title')}}"); <span class="text-secondary">_</span>
      </h2>

      <div id="description" class="opacity-0">
        <div class="py-5 max-w-[700px] text-sm md:text-lg font-bold leading-7 text-tertiary/80">
          <div class="mb-3">
            {{t('main.description.part1')}}
          </div>
          <div>
            {{t('main.description.part2')}}
          </div>
        </div>
        <div class="max-w-fit text-2xl mt-5">
          <div class="flex items-center cursor-pointer">
            <h5 class="mr-2">{{t('main.description.more')}}</h5>
            <nuxt-icon class="animate-move-right" name="arrow"></nuxt-icon>
          </div>
            <div class="bg-secondary h-[1px] my-5"></div>
            <app-socials />
        </div>
      </div>

      <div v-if="!isMobile" class="bg-secondary size-[150px] md:size-[300px] rounded-full blur-[200px] fixed bottom-2.5 right-2.5 animate-pulse"></div>
    </div>
  </div>
</template>