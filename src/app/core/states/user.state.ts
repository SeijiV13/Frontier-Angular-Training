import { User } from 'src/app/shared/models/User';
import { State, Selector, Action, StateContext, Store } from '@ngxs/store';
import { CreateUser, GetListOfUsers, SelectUser, DeleteUser } from '../actions/user.action';
import { UserService } from 'src/app/shared/services/user.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export class UserStateModel {
    listOfUsers: User[];
    selectedUser: User;
}


@State<UserStateModel> ({
    name: 'user',
    defaults: {
        listOfUsers: [],
        selectedUser: null
    }
})


export class UserState {
    constructor(private userService: UserService, private store: Store) {}

    @Selector()
    static getSelectedUser(state: UserStateModel) {
        return  state.selectedUser;
    }

    @Selector()
    static getListOfUsers(state: UserStateModel) {
        return state.listOfUsers;
    }

    @Action(CreateUser)
    createUser(  { patchState , getState } : StateContext<UserStateModel>, ctx: StateContext<UserStateModel>, {payload}: any){
     const state = getState();
     return this.userService.createUser(payload).pipe(
         tap((data) => {
          this.store.dispatch(new GetListOfUsers()).subscribe();
         },
         catchError((error) => throwError(`error`))
         )
     )
    }

    @Action(GetListOfUsers)
    getListOfUser(  {  patchState, getState }: StateContext<UserStateModel>) {
        const state = getState();
        return this.userService.getUsers().pipe(
           tap((data: User[]) => {
               patchState({
                   ...state,
                   listOfUsers: data
               });
           })
        );

       }

    @Action(SelectUser)
    selectUser( {patchState, getState}: StateContext<UserStateModel>, { payload }: any) {
        const state = getState();
        patchState({
            ...state,
            selectedUser: payload
        });
    }

    @Action(DeleteUser)
    deleteUser({patchState, getState}: StateContext<UserStateModel>, {payload}: any) {
        return this.userService.deleteUser(payload).pipe(
            tap(() => {
                this.store.dispatch(new GetListOfUsers()).subscribe();
            })
        )
    }
}
