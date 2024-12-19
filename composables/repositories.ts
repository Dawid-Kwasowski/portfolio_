import {Octokit} from "@octokit/core";
export const useRepositories = () => {
    const repositories = useState<any[]>('repositories', () => []);

    const getPinnedRepos = async (): Promise<any> => {
        const {data} = await useFetch('/api/github')
        repositories.value = data.value.nodes
    }

    return {
        repositories,
        getPinnedRepos
    }
}
