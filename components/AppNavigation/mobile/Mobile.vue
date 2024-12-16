<script setup lang="ts">
    import type {IAppNavigationProps} from "~/components/AppNavigation/model/IAppNavigationProps";
    import anime from "animejs";

    const props = defineProps<{items: IAppNavigationProps[]}>()

    const isActive = ref(false)
    const toggleMenu = function () {
      isActive.value = !isActive.value
    }

    useHead({
      bodyAttrs: {
        class: computed(() => {
          if(isActive.value) {
            return 'overflow-y-hidden'
          }
          return ''
        })
      }
    })

    const onClose = function () {
      anime({
        targets: '#components-list',
        duration: 500,
        opacity: [1, 0],
        complete(anim) {
            if(anim.completed) {
              isActive.value = false
            }
        },
      })
    }

</script>

<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <div>
        <span class="font-bold text-3xl"><span class="text-secondary">:</span>(){ :|:& };<span class="text-secondary">:</span></span>
      </div>
      <div @click="toggleMenu" class="text-4xl">
        <nuxt-icon name="menu"/>
      </div>
    </div>

    <div class="fixed bg-primary h-screen w-screen top-0 left-0 z-[55] flex flex-col items-center" v-if="isActive">
      <div  class="w-screen p-5">
        <div class="flex items-center justify-between">
          <div>
            <span class="font-bold text-3xl"><span class="text-secondary">:</span>(){ :|:& };<span class="text-secondary">:</span></span>
          </div>
          <div @click="toggleMenu" class="text-4xl">
            <nuxt-icon  name="close"/>
          </div>
        </div>
      </div>
      <div>
        <app-navigation-mobile-components-list @select="toggleMenu" :items="props.items" />
      </div>
    </div>
  </div>
</template>