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

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = ref<any>({})

const validateForm = function () {
  errors.value = {}
  const schema: any = {
    name: {
      required: !form.name && t('contact.form.validation.required'),
    },
    email: {
      test: !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) && t('contact.form.validation.email'),
      required: !form.email && t('contact.form.validation.required')
    },
    message: {
      required: !form.message && t('contact.form.validation.required'),
    }
  }

  Object.entries(form).forEach(([key, _]) => {
    Object.entries(schema[key]).forEach(([_, value]) => {
      console.log(key, value)
      if(value) {
        errors.value[key] = value
      }
    })
  })
}

const submit = function () {
  validateForm()
  if(Object.entries(errors.value).length > 0) return

}

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
              <form @submit.prevent>
                <app-control-input :error-message="errors.name" v-model="form.name" :label="`${t('contact.form.fields.name')}`"/>
                <app-control-input :error-message="errors.email" v-model="form.email" :label="`${t('contact.form.fields.email')}`"/>
                <app-control-textarea :error-message="errors.message" v-model="form.message" :label="`${t('contact.form.fields.message')}`"/>
                <app-button @click="submit">
                  {{t('contact.form.fields.send')}}
                </app-button>
              </form>
            </div>
          </div>
        </template>
      </app-card>
    </div>
    <div class="bg-secondary size-[300px] rounded-full blur-[200px] fixed bottom-0 right-1/2 animate-pulse"></div>
  </div>
</template>