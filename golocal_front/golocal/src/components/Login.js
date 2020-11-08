import React from 'react'
import styled from 'styled-components'

    const Login = () => {
        return (
            <Container>
                <Username>
                </Username>
                <Password>
                </Password>
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

    const Username = styled.div`
    `

    const Password = styled.div`
    `

    
    export default Login 