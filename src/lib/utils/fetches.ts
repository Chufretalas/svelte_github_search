import type { IFollowersResponse, IReposResponse, IStarredResponse, IUsersResponse } from "$lib/interfaces/ApiResponses";
import { mapUser } from "./mappers";

export async function fetchUser(nickname: string) {
    const response = await fetch(`https://api.github.com/users/${nickname}`)
    const userData: IUsersResponse = await response.json()

    if(response.ok){
        const reposData = await fetchRepos(userData.repos_url)
        const followersData = await fetchFollowers(userData.followers_url)
        const starredData = await fetchStarred(userData.starred_url.substring(0, userData.starred_url.length - 15))
        return mapUser(userData, followersData, reposData, starredData)
    }
}

async function fetchRepos(url: string) {
    const response = await fetch(url)
    const data: IReposResponse[] = await response.json()
    return data
}

async function fetchFollowers(url: string) {
    const response = await fetch(url)
    const data: IFollowersResponse[] = await response.json()
    return data
}

async function fetchStarred(url: string) {
    const response = await fetch(url)
    const data: IStarredResponse[] = await response.json()
    return data
}