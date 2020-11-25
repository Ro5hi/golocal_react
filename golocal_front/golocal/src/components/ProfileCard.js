import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import currentUser from '../actions/currentUser.js'

    const ProfileCard = ({ user }) => { 
            return (
            <Card>
                <Name>
                    <h4> {user.attributes.name }</h4> <br /><br />
                </Name>
                    <Business>
                        <br/><h5>
                            { user.attributes.business.name }  <br/><br/>
                            { user.attributes.business.address } <br/>
                            { user.attributes.business.city } <br/>
                            { user.attributes.business.state } <br/>
                            { user.attributes.business.zipcode } <br/>
                            { user.attributes.business.country} <br/>
                        </h5>
                    </Business>
                <Bio>
                    <h4> { user.attributes.bio } </h4>
                </Bio>
            </Card>
        )
    }

    const mapStateToProps = ({ user }) => {
        return {
            user
        }
    }

    const Card = styled.div`
        position: absolute;
        width: 186px;
        height: 287px;
        left: 112px;
        top: 43px;
        background: #FFFFFF;
    `

    const Name = styled.div`
        position: absolute;
        width: 184px;
        height: 24px;
        left: 0px;
        top: 0px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.035em;
        color: red;
    `

    const Business = styled.div`
        position: relative;
        width: 184px;
        height: 285px;
        left: 0px;
        top: 0px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.035em;
        color: #000000;
        border: 2px solid black;
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

    export default connect(mapStateToProps)(ProfileCard)