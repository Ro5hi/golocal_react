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
        height: 500px;
        left: 0px;
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

    const BusinessCity = styled.div`
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

    const Address = styled.div`
        position: relative;
        width: 184px;
        height: 24px;
        left: -33px;
        top: -20px;
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
        overflow-y: scroll;
        position: relative;
        width: 227px;
        height: 153px;
        left: 23px;
        top: 55px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    `

    export default connect(mapStateToProps )(PostCard)