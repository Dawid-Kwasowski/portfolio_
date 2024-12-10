<script setup lang="ts">
    import type {IAppNavigation} from "~/components/AppNavigation/model/IAppNavigation";

    const props = defineProps<{items: IAppNavigation[]}>()

</script>

<template>
  <div class="flex justify-end p-5">
    <div class="relative mx-5 text-xl md:text-2xl text-tertiary cursor-pointer" v-for="(item, index) in props.items" :key="index">
      <nuxt-link :to="item.link">
        {{item.name}}
      </nuxt-link>
    </div>
  </div>
</template>
