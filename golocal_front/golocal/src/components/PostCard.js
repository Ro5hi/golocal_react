import React from 'react'
import styled from 'styled-components'
import { deletePost } from '../actions/post.js'
import { Link } from 'react-router-dom'

    const PostCard = ({ user, posts }) => {
        return (
            posts ? 
            <Card>
                <Username>
                <Link to={`/profile/${user.attributes.username}`}><h2>{user.attributes.username}</h2></Link>
                </Username>
                    <Business>
                        <h2>{user.attributes.business.name}</h2>
                    </Business>
                    <Caption>
                        <h3>{posts.attributes.caption}</h3>
                    </Caption>
                    <Link to={`/posts/${posts.id}/edit`}>Edit this Post</Link>
                <button onClick={deletePost}>Delete</button>
            </Card> :
          <Box><p>No content has been made.</p></Box>
        )
    }

    const Card = styled.div`
        position: relative;
        width: 475px;
        height: 287px;
        left: 112px;
        top: 430px;
        background: #FFFFFF;
    `

    const Box = styled.div`
        position: relative;
        background: #FFFFFF;
        top: 20px;
        left: 20px;
        width: 200px;
        text-align: center;
    `

    const Username = styled.div`
        position: relative;
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
        position: relative;
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
        position: relative;
        width: 227px;
        height: 153px;
        left: 411px;
        top: 281px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    `

    export default PostCard