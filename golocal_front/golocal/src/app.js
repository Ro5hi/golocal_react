import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from './actions/currentUser.js'
import LoggingOut from './components/Logout'
import Navbar from './components/Navbar.js'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

    class App extends React.Component {
        componentDidMount() {
            this.props.currentuser()
        }
    

        render() {
            const { loggedIn } = this.props 
            return (
                <div className= "Home">
                        { loggedIn ? <LoggingOut/> : null }
                        <Navbar />
                </div>
            );
        }
            mapStateToProps = state => {
                return ({
                    loggedIn: !!state.currentuser
                })  
            }
        }
        
    export default withRouter(connect(mapStateToProps, { currentUser })(App))