<script setup lang="ts">
  import type {IAppCardProps} from "~/components/AppCard/model/IAppCardProps";

  const props = withDefaults(defineProps<IAppCardProps>(), {
    height: '300px',
    width: '400px'
  })

</script>

<template>
  <div :style="{width: props.width, height: props.height}"
      class="border-2 border-tertiary/30 rounded-2xl">
    <div class="flex flex-col justify-between h-full p-5">
      <div>
        <slot v-if="$slots.header" name="header"></slot>
        <slot name="body"></slot>
      </div>
      <slot v-if="$slots.footer" name="footer"></slot>
    </div>
  </div>
</template>