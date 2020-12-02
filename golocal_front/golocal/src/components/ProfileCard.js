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
        width: 1200px;
        height: 800px;
        left: 0px;
        top: 0px;
        background-image: linear-gradient(to right, rgb(217, 180, 105), rgb(255, 255, 255));
    `

    const Name = styled.div`
        position: absolute;
        width: 184px;
        height: 24px;
        left: 20px;
        top: 0px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 100px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.035em;
        color: white;
    `

    const Business = styled.div`
        position: relative;
        width: 284px;
        height: 285px;
        left: 20px;
        top: 150px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 40px;
        text-align: left;
        color: #000000;
    `

    export default connect(mapStateToProps)(ProfileCard)