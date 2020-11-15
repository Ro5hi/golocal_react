import React from "react";
import { connect } from "react-redux";
import PostCard from "./PostCard";
import { getPosts } from "../actions/post";

    const Posts = props => {
        const postCards = props.posts.length > 0 ?
        props.posts.map( p => <PostCard post={p} key={p.id}/>):
        null

        return (
            postCards 
        )
    }                     
    const mapStateToProps = (state) => {
        return {
            posts: state.Posts
        }
    }

    export default connect(mapStateToProps, { getPosts })(Posts);