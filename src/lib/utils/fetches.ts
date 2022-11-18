import type { IFollowersResponse, IStarredResponse, IUsersResponse } from "$lib/interfaces/ApiResponses";

export async function fetchUser(nickname: string) {
    const response = await fetch(`https://api.github.com/users/${nickname}`)
    const userData: IUsersResponse = await response.json()

    if(response.ok){
        const repos = await fetchRepos(userData.repos_url)
        const followers = await fetchFollowers(userData.followers_url)
        const starred = await fetchStarred(userData.starred_url.substring(0, userData.starred_url.length - 15))
    }

    console.log(userData)
}

async function fetchRepos(url: string) {
    const response = await fetch(url)
    const data: IFollowersResponse = await response.json()
    return data
}

async function fetchFollowers(url: string) {
    const response = await fetch(url)
    const data: IFollowersResponse = await response.json()
    return data
}

async function fetchStarred(url: string) {
    const response = await fetch(url)
    const data: IStarredResponse = await response.json()
    return data
}