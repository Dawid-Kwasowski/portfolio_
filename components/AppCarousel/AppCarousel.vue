<script setup lang="ts">
import AppGithubCard from "~/components/AppGithubCard/AppGithubCard.vue";
import type {IAppCarouselProps} from "~/components/AppCarousel/model/IAppCarouselProps";

const props = defineProps<IAppCarouselProps>()

</script>

<template>
  <div class="flex overflow-x-auto scrollbar snap-x gap-5">
    <div :key="name" v-for="{name, description, repositoryTopics} in props.items" class="snap-center scroll-mx-1.5 flex">
      <app-github-card :repositoryTopics :name :description/>
    </div>
  </div>
</template>