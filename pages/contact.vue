<script setup lang="ts">

import AppCard from "~/components/AppCard/AppCard.vue";
import anime from "animejs";
import AppControlTextarea from "~/components/AppControl/Textarea/AppControlTextarea.vue";


const {t} = useI18n()


onMounted(() => {
  anime({
    delay: 700,
    targets: '#contact-form',
    translateY: [10,0],
    easing: "easeInOutQuad",
    opacity: [0,1],
  })
})

</script>

<template>
  <div class="p-5">
    <app-header>
      <{{t('contact.title')}}/>
    </app-header>
    <div id="contact-form" class="mt-5">
      <app-card height="100%" width="100%">
        <template #body>
          <div class="flex flex-col md:flex-row items-center ">
            <div class="md:w-3/4 w-2/6 order-last md:order-first">
              <img src="/assets/img/maniac.png" alt="To ja"/>
            </div>
            <div class="w-full">
              <form>
                <app-control-input :label="`${t('contact.form.fields.name')}`"/>
                <app-control-input :label="`${t('contact.form.fields.email')}`"/>
                <app-control-textarea :label="`${t('contact.form.fields.message')}`"/>
              </form>
            </div>
          </div>

        </template>
      </app-card>
    </div>
    <div class="bg-secondary size-[300px] rounded-full blur-[200px] fixed bottom-0 right-1/2 animate-pulse"></div>
  </div>
</template>