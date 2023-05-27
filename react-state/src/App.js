import React, { Component } from 'react';
import './App.css'; 


class App extends Component {
  state = {
    person: {
      fullName: 'Kheshainia Nahed',
      bio: '"Passionate software developer creating innovative solutions for complex challenges."',
      imgSrc: '/images/profile.jpg',
      profession: 'Web Developer'
    },
    show: false,
    intervalId: null,
    mountedTime: null
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div>
        <button
          style={{ backgroundColor: 'orange', color: 'white' }}
          onClick={this.toggleShow}
        >
          {show ? 'Hide' : 'Show'}
        </button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since last mount: {mountedTime ? (new Date() - mountedTime) / 1000 : 0} seconds</p>
      </div>
    );
  }
}

export default App;
