<script setup lang="ts">

interface Social {
  name: string;
  link: string;
}

const socials: Social[] = [
  {
    name: 'github',
    link: 'https://github.com/Dawid-Kwasowski'
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/dawidkwasowski/'
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/DawidKwasowski.k/'
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/dawid-kwasowski-832a94214/'
  }
];

</script>

<template>
    <div class="flex items-center justify-evenly gap-2 cursor-pointer">
      <div :key="social.name" v-for="social in socials">
        <nuxt-link :to="social.link" external target="_blank" rel="noopener noreferrer">
          <nuxt-icon :name="social.name" />
        </nuxt-link>
      </div>
    </div>
</template>
