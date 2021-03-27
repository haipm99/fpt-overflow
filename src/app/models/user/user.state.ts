import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "./user";
import { AddUser, DeleteUser } from "./user.action";


export class UserStateModel {
    users: User[] = []
}

@State<UserStateModel>({
    name: "listUser",
    defaults: {
        users: []
    },
})


export class UserState {

    @Selector()
    static getUsers(state: UserStateModel) {
        return state.users;
    }

    @Action(AddUser)
    add({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }

    @Action(DeleteUser)
    delete({ getState, patchState }: StateContext<UserStateModel>, { payload }: DeleteUser) {
        const state = getState();
        var index = -1;
        for(var i =0 ;i < state.users.length; i++){
            if (state.users[i].name == payload) {
               state.users.splice(i, 1)
               break;
            }
        }

        if (index > -1) {
                patchState({
                    users: state.users
                })
        }
    }
}