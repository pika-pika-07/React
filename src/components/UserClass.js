import React from "react";
import { useFetchers } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        contact: "Dummy",
        avatar_url: "",
      },
    };
  }

  componentWillUnmount() {}
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/pika-pika-07");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, contact, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3> Location: {location}</h3>
        <h3> Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
