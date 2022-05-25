import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../usersAndPosts/UsersAndPostAxios";
import { getAllUser } from "../usersAndPosts/UsersAndPostActions"
import { Link } from "react-router-dom";

//לא רואים את הטבלה הראשונה משום מה
//  material לא הספקתי לבדוק למה ולכן לא כל כך יכולתי לעצב ולא הצלחתי להתקין את 
//...(הסינון) עובד מצוין שם כן רואים את הטבלה post-ה





export const ShowUsers = (props) => {
    let users
    //יצירת החיבור של ה-redux
    let dis = useDispatch();


    //שמירה ב-STATE
    //useSelector-מתעדכן עם כל שינוי
    let AllUsers = useSelector(store => {
        return store.users.users;
    })

    console.log(AllUsers);

    //מיד עים טעינת הקומפ
    //קריאה מהשרת
    useEffect(async () => {
        users = await getAllUsers()
        console.log(users);
        dis(getAllUser(users));
    }, [])

    //דחיפה של הקומפ עים שרשור של
    //id
    // של הנוכחי
    const SeePosts = (id) => {
        props.history.push({ pathname: '/To see your posts/' + id })
    }


    //חיפוס לפי שם
    const FindByName = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        AllUsers = AllUsers.filter(x => x.name == name)
        console.log(AllUsers);
    }

    //חיפוס לפי מייל
    const FindByEmail = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        AllUsers = AllUsers.filter(x => x.email == email)
        console.log(AllUsers);
    }
    return <>

        <form onSubmit={e => FindByName(e)} >
            <input type="text" placeholder="find by name" id="name"></input>
            <input type="submit" ></input>
        </form>


        <form onSubmit={e => FindByEmail(e)}>
            <input type="text" placeholder="find by email" id="email" ></input>
            <input type="submit" ></input>
        </form>

        <table>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>company name</th>
            </tr>
            {
                AllUsers != undefined &&
                AllUsers.length > 0 &&
                AllUsers.map((item) =>
                    <>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.company.name}</td>
                            <td>
                                <input type="button" onClick={() => { SeePosts(item.id) }}>To see your posts</input>
                            </td>
                        </tr>
                    </>
                )
            }
        </table>
    </>
}


