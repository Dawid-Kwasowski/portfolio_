<script setup lang="ts">
const technologies = [
  [
    { name: 'Vue', icon: 'logos/vue', link: '' },
    { name: 'Nuxt', icon: 'logos/nuxt', link: '' },
    { name: 'VueUse', icon: 'logos/vue-use', link: '' },
    { name: 'Node', icon: 'logos/node', link: '' },
    { name: 'Vue', icon: 'logos/vue', link: '' },
    { name: 'Nuxt', icon: 'logos/nuxt', link: '' },
    { name: 'VueUse', icon: 'logos/vue-use', link: '' },
    { name: 'Node', icon: 'logos/node', link: '' },
  ],
  [
    { name: 'Vite', icon: 'logos/vite', link: '' },
    { name: 'TailwindCSS', icon: 'logos/tailwindcss', link: '' },
    { name: 'Bootstrap', icon: 'logos/bootstrap', link: '' },
    { name: 'Ionic', icon: 'logos/ionic', link: '' },
    { name: 'Vite', icon: 'logos/vite', link: '' },
    { name: 'TailwindCSS', icon: 'logos/tailwindcss', link: '' },
    { name: 'Bootstrap', icon: 'logos/bootstrap', link: '' },
    { name: 'Ionic', icon: 'logos/ionic', link: '' },
  ],
  [
    { name: 'Angular', icon: 'logos/angular', link: '' },
    { name: 'Typescript', icon: 'logos/ts', link: '' },
    { name: 'Python', icon: 'logos/python', link: '' },
    { name: 'Supabase', icon: 'logos/supabase', link: '' },
    { name: 'Angular', icon: 'logos/angular', link: '' },
    { name: 'Typescript', icon: 'logos/ts', link: '' },
    { name: 'Python', icon: 'logos/python', link: '' },
    { name: 'Supabase', icon: 'logos/supabase', link: '' },
  ],
  [
    { name: 'Pinia', icon: 'logos/pinia', link: '' },
    { name: 'RxJS', icon: 'logos/rxjs', link: '' },
    { name: 'Capacitor', icon: 'logos/capacitor', link: '' },
    { name: 'Postgresql', icon: 'logos/postgresql', link: '' },
    { name: 'Pinia', icon: 'logos/pinia', link: '' },
    { name: 'RxJS', icon: 'logos/rxjs', link: '' },
    { name: 'Capacitor', icon: 'logos/capacitor', link: '' },
    { name: 'Postgresql', icon: 'logos/postgresql', link: '' },
  ]
]
</script>

<template>
  <div class="md:flex grow">
    <div class="h-[250px] md:h-[400px] grid grid-rows-3 grid-cols-4 gap-2.5 md:gap-5 overflow-hidden mask-image ">
      <div ref="items" class="row-span-3 h-full w-full even:animate-scroll-down odd:animate-scroll-up" :id="`column-` + index" v-for="(set, index) in technologies" :key="index">
        <div :key="tech.name" v-for="tech in set" class="size-[60px] md:size-[120px] my-5 text-2xl  md:text-7xl border-2 border-tertiary/30 rounded-2xl flex justify-center items-center">
          <nuxt-icon :name="tech.icon" filled></nuxt-icon>
        </div>
      </div>
    </div>
  </div>
</template>
