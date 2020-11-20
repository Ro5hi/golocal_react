import React from 'react'
import styled from 'styled-components'
import { deletePost } from '../actions/post.js'
import { Link } from 'react-router-dom'

    const PostCard = ({ user, post }) => {
        return (
            <Card>
                <Username>
                    <h2>{user.attributes.username}</h2> // link to username for profile?
                </Username>
                    <Business>
                        <h2>{user.attributes.business}</h2>
                    </Business>
                    <Caption>
                        <h3>{post.attributes.caption}</h3>
                    </Caption>
                    <Link to={`/posts/${post.id}/edit`}>Update Post</Link>
                <button onClick={deletePost}>Delete</button>
            </Card>
        )
    }

    const Card = styled.div`
        position: absolute;
        width: 673px;
        height: 553px;
        left: 534px;
        top: 204px;
        
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
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