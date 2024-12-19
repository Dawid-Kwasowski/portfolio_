<script setup lang="ts">
    import type {IAppNavigationProps} from "~/components/AppNavigation/model/IAppNavigationProps";
    const props = defineProps<{items: IAppNavigationProps[]}>()
</script>

<template>
  <div class="flex items-center justify-between p-5">
    <div class="basis-1/2">
      <span class="font-bold text-3xl"><span class="text-secondary">:</span>(){ :|:& };<span class="text-secondary">:</span></span>
    </div>
    <div class="basis-1/2 flex justify-end gap-5">
      <div class="text-xl md:text-2xl text-tertiary cursor-pointer relative
         before:absolute before:-bottom-2 before:bg-tertiary before:h-[2px] before:w-[0px] hover:before:w-full before:rounded-full
         before:translate-x-[-50%]
         before:left-1/2
         before:transition-[width]
        " v-for="(item, index) in props.items" :key="index">
        <nuxt-link active-class="before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-tertiary before:h-[2px] before:w-full before:rounded-full" :to="item.link">
          {{item.name}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
