import React from 'react'
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img className={s.avaPost}/>
            { props.message }
            <div>
                <span>likes: { props.likesCount }</span>
            </div>
        </div>
    )
}

export default Post