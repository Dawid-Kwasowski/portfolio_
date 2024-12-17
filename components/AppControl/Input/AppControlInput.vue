<script setup lang="ts">

  import type {IAppControlInputProps} from "~/components/AppControl/Input/model/IAppControlInputProps";

  const id = useId()
  const props = defineProps<IAppControlInputProps>()
  const model = defineModel<string>()
</script>

<template>
  <div class="m-1">
    <div class="flex flex-col">
      <label class="my-3" :for="id"> {{props.label}} </label>
      <input v-model="model" :id  :placeholder="props.placeholder" class="h-12 px-3 border-2 bg-transparent border-tertiary/30 rounded-2xl outline-none"/>
      <p v-show="props.errorMessage" class="mt-2 text-sm text-secondary">
        <span class="font-bold">{{props.errorMessage}}</span>
      </p>
    </div>
  </div>
</template>