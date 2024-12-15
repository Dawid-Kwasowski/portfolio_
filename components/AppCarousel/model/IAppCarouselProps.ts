import type {IAppGithubCardProps} from "~/components/AppGithubCard/model/IAppGithubCardProps";

export interface IAppCarouselProps {
    items: Array<IItems>
}

export interface IItems extends IAppGithubCardProps {}