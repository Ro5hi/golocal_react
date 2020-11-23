import React from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'
import currentUser from '../actions/currentUser.js'

    const ProfileCard = ({ user, business }) => {
        render() 
            return (
            <Card>
                <Name>
                    <h4> {user.attributes.name }</h4>
                </Name>
                    <Business>
                        <h5>
                            { business.attributes.name }  
                            { business.attributes.address }
                            { business.attributes.city }
                            { business.attributes.state }
                            { business.attributes.zipcode }
                            { business.attributes.country}
                        </h5>
                    </Business>
                <Bio>
                    <h4> { user.attributes.bio } </h4>
                </Bio>
            </Card>
        )
    }

    const Card = styled.div`
        position: absolute;
        width: 475px;
        height: 287px;
        left: 112px;
        top: 430px;
        background: #FFFFFF;
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