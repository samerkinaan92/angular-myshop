export enum UserType {
    admin,
    user
}

export class User {
    type: UserType;
    username: string;
    token: string;
}