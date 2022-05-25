import produce from "immer";

const UsersAndPostsIntialState={
    users:[],
    posts:[],
    AddPost:false
}

export const userReduser=produce((state,action)=>{
    switch (action.type) {
        case  "GET_ALL_CATEGORY":
            state.users= action.payload
            break;
        case  "GET_ALL_POSTS":
                state.posts= action.payload
                break;
        case  "CHENGE_ADD_POSTS":
                state.AddPost=!state.AddPost
                break;
        case  "ADD_POSTS":
                state.posts.push(action.payload)
                break;
    }
},UsersAndPostsIntialState);
