import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Component } from 'react'


    class PostCard extends Component {  

        render(){
             if (this.props.posts) {
            return (
                <>
                {this.props.users.map( user => {
                    return(
                    <Card>
                        <Username>
                    <Link to={`/profile/${user.attributes.username}`}><h2>{user.attributes.username}</h2></Link>
                </Username>
                    <Business>
                        <h4>{user.attributes.business.name}</h4>
                    </Business>
                            <Caption>
                        {this.props.posts.map( post => {
                            if (user.id === post.relationships.user.data.id)
                            { return <div key={post.id}>{post.attributes.caption}</div>}
                        })}
                        </Caption>
                        </Card> )
                    })
                } </>
        )}
             else {
                 return (
        <Box><p>No content has been made.</p></Box>
            )
        }}
    }

    const mapStateToProps = ({ user, users, posts }) => {
        return {
            users,
            user, 
            posts
        }
    }

    const Card = styled.div`
        position: relative;
        width: 275px;
        height: 287px;
        left: 112px;
        top: 10px;
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
        left: -40px;
        top: 0px;
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
        left: -43px;
        top: -10px;
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
        left: 23px;
        top: 1px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    `

    export default connect(mapStateToProps)(PostCard)