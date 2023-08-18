import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3> Location: Nahan</h3>
        <h3> Contact: pathbhatnagar</h3>
      </div>
    );
  }
}

export default UserClass;
