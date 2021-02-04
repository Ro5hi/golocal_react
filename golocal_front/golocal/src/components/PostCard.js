import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class PostCard extends Component {
    render(){
             if (this.props.posts) {
            return (
                <>
                {this.props.users.map( user => {
                    return(
                        <Card>
                            <Username>
                                <Link to={`/profile/${user.id}`}><h2>{user.attributes.username}</h2></Link>
                            </Username>
                            <BusinessCity>
                                <h4>{user.attributes.business.city}</h4>
                            </BusinessCity>
                            <Address>
                                <h4>{user.attributes.business.address}</h4>
                            </Address>    
                            <Caption>
                                {this.props.posts.map( post => {
                                if (user.id === post.relationships.user.data.id)
                                { return <div key={post.id}>{post.attributes.caption}</div>}
                                })}
                            </Caption>
                        </Card> 
                    )
                })
            } </>
        )}
             else {
                 return (
                    <Box><p>No content has been made.</p></Box>
                )}
        }
    }

    const mapStateToProps = ({ users, posts }) => {
        return {
            users,
            posts
        }
    }
    export default connect(mapStateToProps )(PostCard)

    const Card = styled.div`
        position: relative;
        width: 100%;
        height: 400px;
        left: 10px;
        top: 100px;
        background: #FFFFFF;
        border: 1px solid black;
    `

    const Box = styled.div`
        position: relative;
        background: #FFFFFF;
        top: 20px;
        left: -5px;
        width: 200px;
        text-align: center;
        border: 1px solid black;
    `

    const Username = styled.div`
        position: relative;
        width: 200px;
        height: 24px;
        left: 10px;
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

    const BusinessCity = styled.div`
        position: relative;
        width: 184px;
        height: 24px;
        left: 10px;
        top: 10px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.035em;
        color: #000000;
    `

    const Address = styled.div`
        position: relative;
        width: 184px;
        height: 24px;
        left: 10px;
        top: 20px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 10px;
        text-align: center;
        letter-spacing: -0.035em;
        color: #000000;
    `

    const Caption = styled.div`
        overflow-y: scroll;
        position: relative;
        width: 227px;
        height: 153px;
        left: 0px;
        top: 55px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    `
