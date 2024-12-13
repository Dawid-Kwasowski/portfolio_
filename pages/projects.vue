<script setup lang="ts">

const { t } = useI18n()

</script>

<template>
  <div class="px-5">
    <div class="flex flex-col">
      <div class="mx-20">
        <app-header>
          {{t('stack.title')}}
        </app-header>
      </div>
      <div class="my-20 flex flex-col md:flex-row">
        <div class="basis-1/2">
          <app-marquee />
        </div>
        <div class="basis-1/2 p-20 text-2xl">
          {{t('stack.description')}}
        </div>
      </div>
    </div>
    <div class="bg-secondary size-[150px] md:size-[300px] rounded-full blur-[200px] fixed top-1/4 right-2.5 animate-pulse"></div>
    <div class="bg-secondary size-[150px] md:size-[300px] rounded-full blur-[200px] fixed bottom-2.5 left-2.5 animate-pulse"></div>
  </div>
</template>