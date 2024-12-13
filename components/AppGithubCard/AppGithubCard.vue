<script setup lang="ts">
import AppCard from "~/components/AppCard/AppCard.vue";
</script>

<template>
  <div class="md:w-[400px] md:h-[300px] my-5">
    <app-card height="100%" width="100%">
      <template #header>
        <div class="flex">
          <div class="text-6xl">
            <nuxt-icon name="github" />
          </div>
          <span class="mx-2 font-bold">Dawid-Kwasowski<span class="text-secondary">/xyz</span></span>
        </div>
      </template>
      <template #body>
        <div>
        <span class="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa finibus, semper tortor nec, ultrices est. Morbi diam magna, semper a commodo at, maximus eget nisl. Phasellus eget eleifend eros. Nullam feugiat pellentesque enim, vitae pharetra leo tristique nec.
        </span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold">Stack<span class="text-secondary">_</span></span>
          <div class="flex text-3xl my-1 gap-3">
            <nuxt-icon filled name="logos/vue"></nuxt-icon>
            <nuxt-icon filled name="logos/vite"></nuxt-icon>
            <nuxt-icon filled name="logos/pinia"></nuxt-icon>
          </div>
        </div>
      </template>
    </app-card>
  </div>

</template>