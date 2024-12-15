export interface IAppGithubCardProps {
    name: string
    description: string
    repositoryTopics: IRepositoryTopics
}

interface IRepositoryTopics {
    edges: ITopicEdge[];
}

interface ITopicEdge {
    node: {
        topic: {
            name: string;
        }
    };
}