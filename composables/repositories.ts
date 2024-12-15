import {Octokit} from "@octokit/core";
export const useRepositories = () => {
    const octokit: Octokit = new Octokit({auth: process.env.NUXT_ACCESS_TOKEN});

    const getPinnedRepos = async (): Promise<any> => {
        const {user: {pinnedItems}} = await octokit.graphql<any>(`
        query {
            user(login: "Dawid-Kwasowski") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      name
                      description
                      repositoryTopics(first: 10) {
                        edges {
                          node {
                            topic {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
            }
        }
    `)
        return pinnedItems
    }
    const {data} = useAsyncData<any>('repositories', async (): Promise<any> =>  await getPinnedRepos())
    return useState<any>('repositories', () => data)
}
