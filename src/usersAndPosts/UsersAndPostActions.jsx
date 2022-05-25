//action page


export const getAllUser=(data)=>{
    return{type:"GET_ALL_USERS",payload:data}
}

export const getAllPosts=(data)=>{
    return{type:"GET_ALL_POSTS",payload:data}
}

export const ChangeAddPost=()=>{
    return{type:"CHENGE_ADD_POSTS"}
}

export const AddPostes=(data)=>{
    return{type:"ADD_POST",payload:data}
}
