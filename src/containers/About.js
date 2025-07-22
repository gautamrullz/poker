import React from "react";
import UserCardClassComponent from "./userCardClassComponent.js";

class About extends React.Component {
  constructor() {
    super();

    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component Did mount");

  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        {/* <UserCard></UserCard> */}
        <UserCardClassComponent
          name="gautama"
          location="Bokara"
        ></UserCardClassComponent>
        
      </div>
    );
  }
}

export default About;
