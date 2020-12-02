import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
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
                            <h2>{user.attributes.username}</h2>
                        </Username>
                            <BusinessCity>
                                <h4>{user.attributes.business.city}</h4>
                            </BusinessCity>
                            <Address>
                                <h4>{user.attributes.business.address}</h4>
                            </Address>    
                        <Caption>
                        {this.props.posts.map( posts => {
                            if (user.id === posts.relationships.user.data.id)
                            { return <div key={posts.id}>{posts.attributes.caption}</div>}
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
            }
        }
    }

    const mapStateToProps = ({ user, users, posts }) => {
        return {
            user, 
            users,
            posts
        }
    }

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
        left: 15px;
        top: 55px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    `

    export default connect(mapStateToProps )(PostCard)