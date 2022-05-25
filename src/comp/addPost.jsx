import {ChangeAddPost} from "../usersAndPosts/UsersAndPostActions"
import {AddPostes} from "../usersAndPosts/UsersAndPostActions"

export const AddPost = (props) => {

const add=(e)=>{
    e.preventDefault();
    ChangeAddPost(); 
    AddPostes({
        title:e.target.title.value,
        body:e.target.body.value
    });
}

    return<>
   <form onSubmit={e => add(e)} >
            <input type="text" placeholder="input title" id="title"></input>
            <input type="text" placeholder="input body" id="body"></input>
            <input type="submit" ></input>
    </form>
    </>
}