import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

    const PostCard = () => {
        render() 
            let username = this.props.user.username
            let business = this.props.business.business
            let post = this.props.post.description
            // let image = this.props.post.image 
            return (
                <Card>
                    <Username>
                        <h4>{username}</h4>
                    </Username>
                    <Business>
                        <h4>{business && business.name} </h4>
                    </Business>
                    <Description>
                        <h4>{post && post.description}</h4>
                    </Description>
                    {/* <Image>
                        {image}
                    </Image> */}
                    <Button onClick={()=>this.props.dispatch({type: 'DELETE_POST',id:this.props.post.id})}>Delete Post</Button>
                </Card>
            )
    }

    const Card = styled.div`
        position: absolute;
        width: 673px;
        height: 553px;
        left: 534px;
        top: 204px;
        
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
    `

    const Username = styled.div`
        position: absolute;
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
        position: absolute;
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

    const Address = styled.div`
        position: absolute;
        width: 184px;
        height: 24px;
        left: 433px;
        top: 116px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.035em;
        color: #000000;
    `

    const Description = styled.div`
        position: absolute;
        width: 227px;
        height: 153px;
        left: 411px;
        top: 281px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    `

    export default PostCard