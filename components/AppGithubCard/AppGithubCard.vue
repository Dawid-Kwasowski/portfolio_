<script setup lang="ts">
import AppCard from "~/components/AppCard/AppCard.vue";
import type {IAppGithubCardProps} from "~/components/AppGithubCard/model/IAppGithubCardProps";

const props = withDefaults(defineProps<IAppGithubCardProps>(), {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa finibus, semper tortor nec, ultrices est. Morbi diam magna, semper a commodo at, maximus eget nisl. Phasellus eget eleifend eros. Nullam feugiat pellentesque enim, vitae pharetra leo tristique nec.",
  name: "xyz",
})

const techs = computed(() => {
  return props.repositoryTopics.edges.map(({node: {topic: {name}}}) => name)
})

</script>

<template>
  <div class="md:w-[400px] md:h-[300px] my-5 cursor-pointer">
    <nuxt-link external :to="`https://github.com/Dawid-Kwasowski/${props.name}`" target="_blank" rel="noopener noreferrer">
      <app-card height="100%" width="100%">
        <template #header>
          <div class="flex">
            <div class="text-6xl">
              <nuxt-icon name="github" />
            </div>
            <span class="mx-2 font-bold">Dawid-Kwasowski<span class="text-secondary">/{{props.name}}</span></span>
          </div>
        </template>
        <template #body>
          <div>
        <span class="text-xs">
         {{props.description}}
        </span>
          </div>
        </template>
        <template #footer>
          <div class="flex flex-col bottom-0 right-0">
            <span class="font-bold">Stack<span class="text-secondary">_</span></span>
            <div class="flex text-3xl my-1 gap-3">
              <nuxt-icon v-for="tech in techs" :key="tech" filled :name="`logos/${tech}`"></nuxt-icon>
            </div>
          </div>
        </template>
      </app-card>
    </nuxt-link>

  </div>

</template>