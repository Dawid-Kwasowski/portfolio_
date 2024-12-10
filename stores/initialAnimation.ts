import anime from "animejs";
import type {AnimeTimelineInstance} from 'animejs'

interface IState {
    mainTl: AnimeTimelineInstance
}

export const useInitAnimations = defineStore('initialAnimation',{
    state: (): IState => {
        return {
            mainTl: anime.timeline({
                easing: 'easeInExpo',
                duration: 500,
            })
        }
    }
})