import React from 'react'
import styled from 'styled-components'
import { getAllUsers } from '../actions/user'
import { getPosts } from '../actions/post'
import { connect } from 'react-redux'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class PostCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
        this.transformProps = this.transformProps.bind(this)
    }

    componentDidMount() {
        this.props.getAllUsers()
        this.props.getPosts()
    }

    toggleSort= () => {
        this.setState({ toggle: !this.state.toggle })
    }

    getComparator = () => {
        if (this.state.toggle) {
            return (a, b) => a.relationships.posts.data.length < b.relationships.posts.data.length ? 1 : -1
        } 
        else {
            return (a, b) => a.relationships.posts.data.length > b.relationships.posts.data.length ? -1 : 1
        }
    }

    transformProps= () => {
        const compare = this.getComparator()
            return [...this.props.users].sort(compare)
    }

    toggleBtn = () => {
        const btn = <Button>
                        <button 
                            type="button" 
                            onClick={this.toggleSort} 
                            name="sort">Sort in ascending order</button>
                    </Button> 
            return btn
    }

    allPostCards = () => {
        return this.transformProps().map(user => 
            <>{this.toggleBtn()}
                <Card>
                    <Username>
                        <Link to={`/profile/${user.id}`}><h2>{user.attributes.username}</h2></Link>
                    </Username>
                    <Caption>
                        {this.props.posts.map( post => 
                            {if (user.id == post.relationships.user.data.id) 
                                {return <div key={post.id}>{post.attributes.caption}</div>}
                            }
                            )}
                    </Caption>
                </Card>
            </>
        )
    }

    render() {
        return (
                this.allPostCards()
                )
            }
        }

        const mapStateToProps = ({ users, posts }) => {
            return {
                users,
                posts
            }
        }

    export default connect(mapStateToProps, { getAllUsers, getPosts } )(PostCard)

    const Button = styled.div`
        position: absolute;
        width: 100%;
        height: 100px;
        left: -1px;
        top: 0px;
    `

    const Card = styled.div`
        position: relative;
        width: 100%;
        height: 350px;
        left: 10px;
        top: 100px;
        background: #FFFFFF;
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
