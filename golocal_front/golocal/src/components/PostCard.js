import React from 'react'
import styled from 'styled-components'
import { getAllUsers } from '../actions/user'
import { connect } from 'react-redux'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class PostCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            sorted: true /* set current state to true */
        }
    }
    componentDidMount() {
        this.props.getAllUsers() /* get props of all registered users */
    }

    toggleSort() {
        const usersPosts = this.props.users.relationships.posts.data 
        let sortedPosts = usersPosts 
        if (this.state.sorted) {
            sortedPosts = usersPosts.sort((a,b) => a.length > b.length)
        } else { /* compare each user's length of posts created in ascending order until all sorted */
            sortedPosts = usersPosts.sort((a,b) => a.length < b.length) 
        }
        this.setState({ /* setState re-renders updated state change of sorted & posts */
            sorted: false,
            posts: sortedPosts 
        })
    }

    render(){
        if (this.props.posts) {
            return (
                <>
                    <div>
                        <button onClick={this.toggleSort}>Sort</button>
                    </div>
                        {this.props.users.map( user => {
                            let userNumPosts = user.relationships.posts.data.length 
                            return(
                                <Card>
                                    <Username>
                                        <p>Total posts: {userNumPosts}</p>
                                        <Link to={`/profile/${user.id}`}><h2>{user.attributes.username}</h2></Link>
                                    </Username>
                                    <Caption>
                                        {this.props.posts.map( post => 
                                            { if (user.id === post.relationships.user.data.id)
                                                { return <div key={post.id}>{post.attributes.caption}</div>}
                                            }
                                        )}
                                    </Caption>
                                </Card> 
                            )
                        })}  
                </>
            )
        }
            else {
                    return (
                        <Box><p>No content has been made.</p></Box>
                    )
                }
            }
    }
    const mapStateToProps = ({ users, posts }) => {
        return {
            users,
            posts
    }}
    export default connect(mapStateToProps, { getAllUsers } )(PostCard)

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

    const Caption = styled.div`
        overflow-y: scroll;
        position: relative;
        width: 227px;
        height: 140px;
        left: 0px;
        top: 100px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    `
