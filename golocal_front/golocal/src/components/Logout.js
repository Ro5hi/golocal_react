import React from "react";
import styled from 'styled-components'
import { connect } from "react-redux";
import { logout } from "../actions/currentUser.js";

const loggingOut = ({ logout, history }) => {
  return (
    <LogOutButton>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          logout();
          history.push("/");
        }}
      >
        <input type="submit" value="Log Out" />
      </form>
      </LogOutButton>
  );
};

  const LogOutButton = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 500px;
    background: #FBEABE;position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #FBEABE;
  `

export default connect(null, { logout })(loggingOut);
