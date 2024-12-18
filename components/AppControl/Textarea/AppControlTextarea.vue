<script setup lang="ts">
  import type {IAppControlTextareaProps} from "~/components/AppControl/Textarea/model/IAppControlTextareaProps";

  const props = defineProps<IAppControlTextareaProps>()
  const id = useId()
  const model = defineModel<string>()
  const textareaRef = useTemplateRef('textareaRef')

  const adjustHeight = function () {
    if (!textareaRef.value) return

    textareaRef.value.style.height = 'auto'

    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
  }

  watch(
      () => model.value,
      () => {
        adjustHeight()
      }
  )

  onMounted(() => {
    adjustHeight()
  })
</script>

<template>
  <div class="m-1">
    <div class="flex flex-col">
      <label class="my-3" :for="id"> {{props.label}} </label>
      <textarea v-model="model" rows="4" ref="textareaRef" :id  :placeholder="props.placeholder" class="h-12 p-3 border-2 bg-transparent border-tertiary/30 rounded-2xl outline-none"></textarea>
      <p v-show="props.errorMessage" class="mt-2 text-sm text-secondary">
        <span class="font-bold">{{props.errorMessage}}</span>
      </p>
    </div>
  </div>
</template>
