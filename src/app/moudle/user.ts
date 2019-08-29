enum UserType {
    admin,
    user
}

class User {
    type: UserType;
    username: string;
    password: string;
}