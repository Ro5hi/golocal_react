import React from 'react';
 
export default class User extends React.Component {
 
  state = {
    user: []
  }
 
  componentDidMount () {
    const { id } = this.props.match.params
 
    fetch(`https://localhost:3001/user/${user.id}`)
      .then(response => response.json())
      .then((user) => {
        this.setState(() => ({
          user: user.id
        }));
        console.log(user.id);
      })
  }
 
  render(){
    return (
      <div className="user">
 
      </div>
    );
  }
}