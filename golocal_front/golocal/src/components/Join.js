import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom'


    const join = () => {
        return (
            <div id="join-block">
                "Made for locally owned businesses who would like to make an online presence."
                <Link to="/signup"><button id="join-button">Join Today</button></Link>
            </div>
        )
    }

    export default join;