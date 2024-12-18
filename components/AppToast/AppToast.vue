<script setup lang="ts">
  const {state} = useToast()
  type TToastStatus = 'success' | 'error'
  const toastIconMap: Record<TToastStatus, string> = {
    error: 'info',
    success: 'check'
  }
</script>

<template>
      <teleport to="#teleports">
        <Transition
            enter-from-class="translate-x-full opacity-0"
            enter-active-class="transition-all duration-250 ease-in"
            leave-to-class="translate-x-full opacity-0"
            leave-active-class="transition-all duration-250 ease-out"
            name="toast"
        >
          <div v-if="state.toasts.length > 0" class="fixed bottom-20 right-5 z-[60]">
            <TransitionGroup
                enter-from-class="translate-x-full opacity-0"
                enter-active-class="transition-all duration-250 ease-in"
                leave-to-class="translate-x-full opacity-0"
                leave-active-class="transition-all duration-250 ease-out"
                name="toast"
                tag="ul"
                class="flex flex-col items-end"
            >
              <li
                  :key="index"
                  v-for="(toast, index) in state.toasts"
                  class="flex justify-between  items-center bg-tertiary rounded-xl my-2 p-2 w-fit"
              >
                <div class="bg-gray-100 rounded-full w-10 h-10 flex justify-center items-center">
                  <div
                      :class="{
                  'text-green-500': toast.status === 'success',
                  'text-red-400': toast.status === 'error'
                }"
                      class="rounded-full w-6 h-6 flex justify-center items-center text-2xl"
                  >
                    <nuxt-icon
                        :name="toastIconMap[toast.status]"
                    ></nuxt-icon>
                  </div>
                </div>
                <div class="flex flex-col justify-between mx-4">
                  <span class="text-lg font-medium text-primary">{{ toast.title }}</span>
                  <span class="text-sm text-primary/50">{{ toast.text }}</span>
                </div>
              </li>
            </TransitionGroup>
          </div>
        </Transition>
      </teleport>

</template>