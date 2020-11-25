import React from "react";
import styled from 'styled-components'
import { connect } from "react-redux";
import { logout } from "../actions/currentUser.js";

const loggingOut = ({ logout, history }) => {
  return (
    <>
    <Message>
      Are you done for today?
    </Message>
      <LogOutButton>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            logout();
            history.push("/");}}>
          <input type="submit" value="Log Out" />
        </form>
      </LogOutButton>
    </>
  );
};

  const Message = styled.div`
    position: relative;
    width: 160px;
    height: 25px;
    left: 20px;
    background: white;
  `

  const LogOutButton = styled.div`
    position: relative;
    left: -100px;
    top: 50px;
  `

export default connect(null, { logout })(loggingOut);
