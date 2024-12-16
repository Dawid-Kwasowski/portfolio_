export function useDevice() {
    const isMobile = ref<boolean>(false)
    const isDesktop = ref<boolean>(false)


    const checkDevice = (): void => {
        const w: number = window.innerWidth;

        if(w < 768) {
            isMobile.value = true
            isDesktop.value = false
        }
        else {
            isMobile.value = false
            isDesktop.value = true
        }
    }


    onMounted(() => {
        checkDevice()
        addEventListener('resize', checkDevice)
    })
    onUnmounted(() => removeEventListener('resize', checkDevice))

    return {
        isMobile,
        isDesktop,
    }
}