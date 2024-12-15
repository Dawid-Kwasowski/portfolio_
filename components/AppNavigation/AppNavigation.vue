<script setup lang="ts">
    import type {IAppNavigation} from "~/components/AppNavigation/model/IAppNavigation";

    const props = defineProps<{items: IAppNavigation[]}>()

</script>

<template>
  <div class="flex items-center justify-between p-5">
    <div class="basis-1/2">
      <span class="font-bold text-3xl"><span class="text-secondary">:</span>(){ :|:& };<span class="text-secondary">:</span></span>
    </div>
    <div class="basis-1/2 flex justify-end gap-5">
      <div class="text-xl md:text-2xl text-tertiary cursor-pointer" v-for="(item, index) in props.items" :key="index">
        <nuxt-link :to="item.link">
          {{item.name}}
        </nuxt-link>
      </div>
    </div>

  </div>
</template>
