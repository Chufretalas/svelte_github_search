import type { IFollowersResponse, IReposResponse, IStarredResponse, IUsersResponse } from "$lib/interfaces/ApiResponses";
import type IRepo from "$lib/interfaces/IRepo";
import type IUser from "$lib/interfaces/IUser";
import type IUserSimple from "$lib/interfaces/IUserSimple";

export function mapUser(
    userData: IUsersResponse,
    followersData: IFollowersResponse[],
    reposData: IReposResponse[],
    starredData: IStarredResponse[]): IUser {
        const repos = mapRepos(reposData)
        const starred = mapRepos(starredData)
        const followers = mapFollowers(followersData)
        return {
            nickname: userData.login,
            name: userData.name,
            avatar_url: userData.avatar_url,
            profile_url: userData.html_url,
            repos_url: userData.repos_url,
            repos: repos,
            followers_url: userData.followers_url,
            followers: followers,
            starred_url: userData.starred_url.substring(0, userData.starred_url.length - 15),
            starred: starred
        }
}

function mapFollowers(data: IFollowersResponse[]): IUserSimple[] {
    return data.map((followerData: IFollowersResponse) => {
        return {
            nickname: followerData.login,
            name: null,
            avatar_url: followerData.avatar_url,
            profile_url: followerData.html_url
        }
    })
}

function mapRepos(data: IReposResponse[] | IStarredResponse[]): IRepo[] {
    return data.map((repoData: IReposResponse) => {
        return {
            name: repoData.name,
            url: repoData.html_url,
            description: repoData.description,
            language: repoData.language,
            license: repoData.license?.name ?? null
        }
    })
}