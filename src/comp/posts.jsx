import { getAlpost } from "../usersAndPosts/UsersAndPostAxios"
import { getAllPosts } from "../usersAndPosts/UsersAndPostActions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as React from 'react';
import { AddPost } from "../comp/addPost"
import { ChangeAddPost } from "../usersAndPosts/UsersAndPostActions"





export const Posts = (props) => {


    //הפרמטר שהועבר בכתובת ה-URL
    // console.log(props.match.params.id);

    let posts
    //יצירת החיבור של ה-redux
    let dis = useDispatch();

    //שמירה ב-STATE
    //useSelector-מתעדכן עם כל שינוי
    let AllPosts = useSelector(store => {
        return store.users.posts;
    })
    console.log(AllPosts);

    let Add = useSelector(store => {
        return store.users.AddPost;
    })


    //קריאה מהשרת
    useEffect(async () => {
        posts = await getAlpost()
        console.log(posts);
        dis(getAllPosts(posts));
    }, [])

    //סינון השורות 
    let ueserPost = AllPosts.filter((x) => x.userId == props.id)
    // let ueserPost = AllPosts.filter((x) => x.userId == props.match.params.id)


    //propsכ idופותח את הקומפ' של הוספה שולח את ה storבעת לחיצה הופך את המשתנה ששמור ב
    const AddPost = () => {
        ChangeAddPost();
    }


    return <>
        <table>
            <tr>
                <th>title</th>
                <th>body</th>
            </tr>
            {
                ueserPost != undefined &&
                ueserPost.length > 0 &&
                ueserPost.map((item) =>
                    <>
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    </>)
            }
        </table>

        <input type="button" onClick={() => { AddPost() }}>AddPost</input>
        {
             Add &&
            <AddPost id={props.match.params.id}></AddPost>
        }

    </>

}    