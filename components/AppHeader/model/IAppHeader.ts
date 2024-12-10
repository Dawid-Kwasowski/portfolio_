export interface IAppHeader {
    title: string;
    routes?: IRoute[]
}

export interface IRoute {
    name: string;
    link: string;
}