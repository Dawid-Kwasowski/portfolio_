<script setup lang="ts">


  import type {IAppButtonProps} from "~/components/AppButton/model/IAppButtonProps";

  const props = withDefaults(defineProps<IAppButtonProps>(), {
    block: false
  })
</script>

<template>
  <div class="m-2">
    <button
        :class="{
           'w-full': props.block
        }"
        class="text-tertiary bg-secondary md:min-w-[130px] h-[35px] rounded-full shadow-2xl shadow-secondary">
      <slot></slot>
    </button>
  </div>
</template>