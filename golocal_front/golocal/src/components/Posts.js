import React from "react";
import styled from "styled-components";
import { getPosts } from '../actions/post.js'
import { connect } from 'react-redux'

  class Posts extends React.Component {
        state = {
          posts: []
        }

        componentDidMount(){
          debugger
          this.props.getPosts()
        }
      
        render(){
          return (
            <Container>
                <Card>
                  {this.state.posts.map(function(post){
                    return <div key={post.id}>{post.caption}</div>
                  })}
                </Card>
            </Container>
          );
        }
      }

      const mapStateToProps = state => {
        return {
          posts: state.posts
        }
      }

      export default connect(mapStateToProps, { getPosts })(Posts)

    const Container = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
      background: #fbeabe;
      border: 1px solid rgba(9, 112, 38, 0.1);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `;

    const Card = styled.div`
      position: absolute;
      width: 75%;
      height: 100%;
      left: 14%;
      top: 0px;
      background: #FFFFFF;
    `;