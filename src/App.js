import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'description',
      showModal: false,
    };
    }
    hideModal = () => {
      this.setState({
        showModal: false,
      })
    }
    openModal = () => {
      this.setState({
        showModal: true,
        name: 'new value'
      })
    }
  render() {
    return (
      <>
      <Header/>
      <Main
      data={data}
      openModal={this.openModal}
      />
      <Footer/>
      <Modal
        show={this.state.showModal}
        onHide={this.hideModal}
      >
       <Modal.Header closeButton>
        <Modal.Title>{this.state.description}</Modal.Title>
       </Modal.Header>
      </Modal>
      </>
    )
  }
};

export default App;