import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import Textarea from "../../../common/FormsControls/FormsControls";


function MyPosts(props: MyPostsPropsType) {

    let posts = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    const addPostHandler = (values: FormDataType) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPostHandler}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder={"post text"}/>
                <button>Add post</button>
            </div>
        </form>
    )
};

type FormDataType = {
    newPostText: string
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts