import type {Ref} from "vue";

export default defineNuxtPlugin((nuxtApp): void => {
    nuxtApp.vueApp.directive('typewriter', {
        mounted: (el, binding) => {
            const currentPhrasesIndex: Ref<number> = ref(0)
            const currentCharacterIndex: Ref<number>  = ref(0)
            const currentPhrase: Ref<string> = ref("")
            const isDeleting: Ref<boolean> = ref(false)

            const loop = function () {

                const currentPhraseText = binding.value[currentPhrasesIndex.value]

                if(!isDeleting.value) {
                    currentPhrase.value += currentPhraseText[currentCharacterIndex.value]
                    currentCharacterIndex.value++
                } else {
                    currentPhrase.value = currentPhrase.value.slice(0, -1);
                    currentCharacterIndex.value--;
                }

                if (currentCharacterIndex.value === currentPhraseText.length) {
                    isDeleting.value = true;
                }

                if (currentCharacterIndex.value === 0) {
                    currentPhrase.value = "";
                    isDeleting.value = false;
                    currentPhrasesIndex.value++;
                    if (currentPhrasesIndex.value === binding.value.length) {
                        currentPhrasesIndex.value = 0;
                    }
                }

                const spedUp: number = Math.random() * (80 - 50) + 80;
                const normalSpeed: number = Math.random() * 800;
                const time: number = isDeleting.value ? spedUp : normalSpeed;

                el.innerHTML = currentPhrase.value + '<span class="animate-pulse">_</span>'
                setTimeout(loop, time)
            }

            loop()
        }
    })
})