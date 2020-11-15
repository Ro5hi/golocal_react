import React from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'

    const ProfileCard = () => {
        render() 
            let user = this.props.user.user;
            let business = this.props.business.business;
            return (
            <Card>
                    <Image>
                    </Image>
                    <Name>
                        <h4>Name: {user && user.name }</h4>
                    </Name>
                    <Business>
                        <h4>
                            Business: 
                            { business && business.name }  
                            { business && business.address }
                            { business && business.city }
                            { business && business.state }
                            { business && business.zipcode }
                            { business && business.country}
                        </h4>
                    </Business>
                <Bio>
                    <h4>Bio: { user && user.bio } </h4>
                </Bio>
            </Card>
        )
    }

    const Card = styled.div`
        position: absolute;
        width: 336px;
        height: 859px;
        left: 23px;
        top: 10px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
    `
    
    const Image = styled.div`
        position: absolute;
        width: 125px;
        height: 125px;
        left: 50px;
        top: 81px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);

    `

    const Name = styled.div`
        position: absolute;
        width: 184px;
        height: 24px;
        left: 100px;
        top: 253px;
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
        left: 100px;
        top: 299px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.035em;
        color: #000000;
    `

    const Bio = styled.div`
        position: absolute;
        width: 184px;
        height: 24px;
        left: 103px;
        top: 345px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.035em;
        color: #000000;
    `

    export default ProfileCard