import React from "react";

class UserCardClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        name: "dummyData",
      },
    };

    // console.log(this.props.name, "child constructor");
  }

  async componentDidMount() {
    const apiData = await fetch("https://api.github.com/users/Gautam");
    const jsonData = await apiData.json();
    console.log(jsonData);
    this.setState({
      userData:jsonData
    });
    // console.log(this.props.name, "child componenct Did mount");
  }

  componentDidUpdate() {
    // console.log(this.props.name, "child componenct Did update");
  }

  render() {
    // console.log(this.props.name, "child render");
    const { login, location, avatar_url } = this.state.userData;
    return (
      <div>
        <p>
          <img src={avatar_url} alt="Cute Cat" width="300" />
        </p>
        <p>names : {login}</p>
        <p>location : {location}</p>

        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          click me
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default UserCardClassComponent;
