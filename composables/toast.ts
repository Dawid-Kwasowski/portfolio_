
type ToastPayload = { timeout?: number; text: string; title: string }
type TToastStatus = 'success' | 'error'
interface IToast {
    title: string
    text: string
    status: TToastStatus
    id: string
}



export const useToast = () => {

    const defaultTimeout: number = 5000
    const id: string = useId()
    const state = useState<{toasts: IToast[]}>('toast', () => ({toasts: []}))

    const createToast = (title: string, text: string, status: TToastStatus): IToast => ({
        title,
        text,
        status,
        id,
    })

    const updateState = (payload: ToastPayload, status: TToastStatus): void => {
        const { text, timeout, title } = payload
        const toast = createToast(title, text, status)
        state.value.toasts.push(toast)

        setTimeout((): void => {
            state.value.toasts = state.value.toasts.filter((t: IToast): boolean => t.id !== toast.id)
        }, timeout ?? defaultTimeout)
    }

    const success = (payload: ToastPayload) => {
        updateState(payload, 'success')
    }

    const error = (payload: ToastPayload): void => {
        updateState(payload, 'error')
    }


    return {
        success,
        error,
        updateState,
        state
    }
}