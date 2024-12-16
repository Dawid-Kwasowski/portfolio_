<script setup lang="ts">
import type {IAppNavigationProps} from "~/components/AppNavigation/model/IAppNavigationProps";
import anime from "animejs";

const props = defineProps<{items: IAppNavigationProps[]}>()
const emit = defineEmits(['select'])

onMounted(() => {
  anime({
    targets: '#item-list .el',
    easing: 'easeInExpo',
    duration: 400,
    opacity: [0, 1],
    delay: anime.stagger(200),
  })
})

</script>

<template>
  <div id="item-list" class="flex flex-col items-center mt-20 gap-5">
    <div v-for="(item, index) in props.items" :key="index" class="text-4xl el" @click="emit('select')">
      <nuxt-link :to="item.link">
        {{item.name}}
      </nuxt-link>
    </div>
  </div>
</template>