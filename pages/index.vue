<script setup lang="ts">

const {t} = useI18n()

const message = ref(t('hello'))
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    {{message}}!
  </h1>

</template>