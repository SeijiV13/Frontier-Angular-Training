import { User } from 'src/app/shared/models/User';

export class EditUser {
    static readonly type = ' [User] Edit User';
    constructor(public payload: User) {}
}

export class CreateUser {
    static readonly type = '[User] Create USer';
    constructor(public payload: User) {}
}

export class GetListOfUsers {
    static readonly type  = '[User] Get List of User';
    constructor(){}
}


export class SelectUser {
    static readonly type = '[User] Select User';
    constructor(public payload: User) {}
}

export class DeleteUser {
    static readonly type = '[User] Delete User';
    constructor(public payload: string) {}
}