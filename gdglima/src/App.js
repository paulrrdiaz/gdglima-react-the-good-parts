import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class ErrorWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch = () => {
    this.setState({
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return <div className="notification is-danger">Something went wrong</div>
    } else {
      return this.props.children;
    }
  }
}

const Aux = props => props.children;

const FirstRule = props => (
  <li>
    {props.firstRule.description}
  </li>
);

const MoreRules = () => [
  <li key="2">You DO NOT talk about FIGHT CLUB</li>,
  <li key="3">If someone says "stop" or goes limp, taps out the fight is over.</li>,
];

const DamnMoreRules = () =>
  <Aux>
    <li key="4">Only two guys to a fight.</li>
    <li key="5">One fight at a time.</li>
  </Aux>;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalContainer = document.createElement('div');
    document.body.appendChild(this.modalContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            {this.props.children}
          </div>
        </div>
        <button class="modal-close is-large" onClick={this.props.onClose} aria-label="close"></button>
      </div>,
      this.modalContainer
    )
  }
}

const todos = 'https://jsonplaceholder.typicode.com/users/1/todos';
const photos = 'https://jsonplaceholder.typicode.com/users/1/photos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRule: {description: 'You do not talk about FIGHT CLUB'},
      errorFetching: false,
      modalIsActive: false,
      isFetching: false,
      data: [],
      latitude: null,
      longitude: null,
    }
  }

  fetchData = (type) => {
    fetch(type)
    .then((response) => {
      response.json().then((data) => {
        this.setState(state => {
          console.log(state.data);
          if (state.data == data) {
            console.log('DRY');
            return null;
          } else {
            console.log('DRY');
            return {
              data,
            }
          }
        });
      })
    })
    .catch((error) => {
      this.setState({
        errorFetching: true,
      })
      console.log('Fetch Error :-S', error);
    });
  }

  componentWillMount = () => {
    this.fetchData(photos);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => this.handlePosition)
    }
  }

  handlePosition({coords}) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
  }

  // componentDidCatch = () => {
  //   this.setState({
  //     hasError: true,
  //   })
  // }

  toggleModal = () => {
    this.setState({
      modalIsActive: !this.state.modalIsActive,
    })
  }

  updateRule = () => {
    this.setState({
      firstRule: null,
    })
  }

  updateData = (type) => {
    this.fetchData(type);
  }

  render() {
    if (this.state.hasError) {
      return <div className="notification is-danger">Something went wrong</div>
    } else {
      return (
        <div className="container">
          <h1 data-test="test" class="title">Welcome to Fight Club</h1>
          <ul>
            <ErrorWrapper>
              <FirstRule firstRule={this.state.firstRule} />
            </ErrorWrapper>
            <MoreRules />
            <DamnMoreRules />
            <li key="6">No shirts, no shoes.</li>
          </ul>
          <button className="button" onClick={this.updateRule}>Update</button>
          {!this.state.errorFetching &&
            <div className="box">
              Do we have data ?
              {this.state.isFetching && 'Cargando... '}
              {this.state.data.length ? `Yas! like ${this.state.data.length} registers` : 'nop :('}
              <button className="button" onClick={() => this.updateData(photos)}>Update photos</button>
              <button className="button" onClick={() => this.updateData(todos)}>Update todos</button>
            </div>
          }
          {
            this.state.modalIsActive ?
            <Modal onClose={this.toggleModal}>
            ºI'm in a Modal x_x
            </Modal> : <button className="button" onClick={this.toggleModal}>Open Modal</button>
          }
        </div>
      );
    }
  }
}

export default App;
