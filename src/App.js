import React, { Component } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closedModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={500}
          mountOnEnter
          unmountOnExit
          onEntering
          onEnter
          onEntered
          onExit
          onExiting
          onExited
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "#f6f",
                opacity: state === "exited" ? 0 : 1,
                transition: "opacity 1s ease-out",
                width: 100,
                height: 100,
                margin: "auto",
              }}
            />
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closedModal} />
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
