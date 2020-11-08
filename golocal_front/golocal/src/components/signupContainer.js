import React from 'react'
import styled from 'styled-components'


    const signupData = ({ signUp, updateSignup })
    const Signup = () => {
        return (
            <Container>
                <Name>
                </Name>
                <Email>
                </Email>
                <Username>
                </Username>
                <Password>
                </Password>
                <Business>
                </Business>
                <Address>
                </Address>
                <City>
                </City>
                <State>
                </State>
                <Zipcode>
                </Zipcode>
                <Category>
                </Category>
            </Container>
        );
    }

    const Container = styled.div`
        position: absolute;
        width: 778px;
        height: 600px;
        left: 0px;
        top: 4px;
        
        background: #FBEABE;
        border: 1px solid rgba(9, 112, 38, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `

    const Name = styled.div`
        position: absolute;
        width: 361px;
        height: 25px;
        left: 0px;
        top: 22px;
        background: #FFFFFF;
    `
    const Username = styled.div`
        position: absolute;
        width: 360px;
        height: 56px;
        left: 29px;
        top: 207px;
    `

    const Password = styled.div`
        position: absolute;
        width: 361px;
        height: 57px;
        left: 28px;
        top: 302px;
    `
    const Email = styled.div`
        position: absolute;
        width: 361px;
        height: 25px;
        left: -1px;
        top: 31px;

        background: #FFFFFF;
    `


    const Business = styled.div`
        position: absolute;
        width: 361px;
        height: 25px;
        left: -1px;
        top: 32px;
        background: #FFFFFF;
    `

    const Address = styled.div`
        position: absolute;
        width: 361px;
        height: 25px;
        left: -1px;
        top: 32px;
        background: #FFFFFF;
    `

    const City = styled.div`
        position: absolute;
        width: 95px;
        height: 25px;
        left: -1px;
        top: 32px;
        background: #FFFFFF;
    `
    
    const State = styled.div`
        position: absolute;
        width: 55px;
        height: 25px;
        left: -1px;
        top: 32px;
        background: #FFFFFF;
    `

    const Zipcode = styled.div`
        position: absolute;
        width: 73px;
        height: 25px;
        left: -1px;
        top: 32px;
        background: #FFFFFF;
    `

    const Category = styled.div`
        position: absolute;
        width: 95px;
        height: 25px;
        left: -1px;
        top: 32px;
        background: #FFFFFF;
    `

    export default Signup 