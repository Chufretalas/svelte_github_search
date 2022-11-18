import type IRepo from "./IRepo";
import type IUserSimple from "./IUserSimple";

export default interface IUser extends IUserSimple {
    followers_url: string,
    followers: IUserSimple[],
    starred_url: string,
    starred: IRepo[],
    repos_url: string,
    repos: IRepo[],
}