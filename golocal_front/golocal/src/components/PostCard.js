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
            toggle: false // set toggle to false since posts array has not been sorted in ascending order
        }
    }

    componentDidMount() {
        this.props.getAllUsers() 
        // get props of all registered users
    }

    toggleSortPosts = (event) => {
        event.preventDefault()
        // prevent app refresh
        this.props.users.map(u => u.relationships.posts.data.length).sort((a,b) => a + b) 
        return this.setState({ toggle: true })
        // grab users and map into u, u representing user object to get posts relationship data
        // and then sort all users posts array in ascending order
    } 

    toggleUnsortPosts = (event) => {
        event.preventDefault() 
        this.props.users.map(u => u.relationships.posts.data.length).sort((a,b) => a > b)
        return this.setState({ toggle: false })
        // sort user posts array back to original order
    }

    // .sort operators
    // (+) console: (6) [29, 13, 3, 2, 3, 5] ascending
    // (-) console: (6) [2, 3, 3, 5, 13, 29] descending
    // (>) console: (6) [29, 13, 3, 2, 3, 5] original order

    render(){
        if (this.props.posts) {
            return (
                <>
                    <div>
                        <button onClick={this.toggleSortPosts}>Sort</button>
                        {this.state.toggle ? this.toggleSortPosts : this.toggleUnsortPosts }
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
        height: 350px;
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
