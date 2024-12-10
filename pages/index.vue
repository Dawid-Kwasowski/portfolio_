<script setup lang="ts">
  import {useInitAnimations} from "~/stores/initialAnimation";
  import AppSocials from "~/components/AppSocials/AppSocials.vue";

  const { t } = useI18n()
  const { isMobile } = useDevice()

  onMounted(() => {
    const { mainTl } = useInitAnimations()
    mainTl.add({
      targets: "#subheader",
      opacity: [0,1],
    })
    mainTl.add({
      targets: "#description",
      opacity: [0,1],
    })
  })

</script>

<template>
  <div class="px-5 flex flex-col items-center mt-20">
    <div class="z-50">
    <app-header title="general.title"></app-header>
      <h2 id="subheader" class="text-2xl md:text-3xl font-bold opacity-0 mt-10 ">
        <span class="text-secondary">console</span>.log("{{t('main.description.title')}}"); <span class="text-secondary">_</span>
      </h2>

      <div id="description" class="opacity-0">
        <div class="py-5 max-w-[700px] text-sm md:text-lg  font-bold leading-7">
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
          <template v-if="!isMobile">
            <div class="bg-secondary h-[1px] my-5"></div>
            <app-socials />
          </template>
        </div>
      </div>

    <div v-if="!isMobile" class="bg-secondary size-[150px] md:size-[300px] rounded-full blur-[200px] fixed bottom-2.5 right-2.5 animate-pulse"></div>
    </div>
  </div>
</template>