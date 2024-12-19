import {Octokit} from "@octokit/core";

export default defineEventHandler(async (event) => {
    const octokit: Octokit = new Octokit({auth: process.env.NUXT_ACCESS_TOKEN});
    const { user: { pinnedItems } } = await octokit.graphql<any>(`
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
})