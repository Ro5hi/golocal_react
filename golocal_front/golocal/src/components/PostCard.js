import React from 'react'
import styled from 'styled-components'
import { deletePost } from '../actions/post.js'
import { Link } from 'react-router-dom'

    const PostCard = ({ user, post }) => {
        return (
            post ? 
            <Card>
                <Username>
                <Link to={`/profile/${user.attributes.username}`}><h2>{user.attributes.username}</h2></Link>
                </Username>
                    <Business>
                        <h2>{user.attributes.business.name}</h2>
                    </Business>
                    <Caption>
                        <h3>{post.attributes.caption}</h3>
                    </Caption>
                    <Link to={`/posts/${post.id}/edit`}>Edit this Post</Link>
                <button onClick={deletePost}>Delete</button>
            </Card> :
          <p>No content made.</p>
        )
    }

    const Card = styled.div`
        position: absolute;
        width: 475px;
        height: 287px;
        left: 112px;
        top: 430px;
        background: #FFFFFF;
    `

    const Username = styled.div`
        position: absolute;
        width: 184px;
        height: 24px;
        left: 146px;
        top: 60px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.035em;
        color: #000000;
    `

    const Business = styled.div`
        position: absolute;
        width: 184px;
        height: 24px;
        left: 433px;
        top: 60px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.035em;
        color: #000000;
    `

    const Caption = styled.div`
        position: absolute;
        width: 227px;
        height: 153px;
        left: 411px;
        top: 281px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    `

    export default PostCard