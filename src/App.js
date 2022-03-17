import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
// import {Modal} from 'react-bootstrap/Modal';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: 'horned Beasts',
      description: 'description',
      showModal: false,
    };
    }
    hideModal = () => {
      this.setState({
        showModal: false,
      })
    }
    openModal = (image_url, description) => {
      this.setState({
        showModal: true,
        image_url: image_url,
        description: description,
      })
      console.log(this.state.image_url);
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
      <SelectedBeast 
      hideModal={this.hideModal}
      showModal={this.state.showModal}
      image_url={this.state.image_url}
      description={this.state.description}
      />
      {/* <Modal
        show={this.state.showModal}
        onHide={this.hideModal}
      >
       <Modal.Header closeButton>
        <Modal.Body>
          <img class="modalImage" src = {this.state.image_url} alt = "horned beast"/>
          <p>{this.state.description}</p>
        </Modal.Body>
        <Modal.Title></Modal.Title>
       </Modal.Header>
      </Modal> */}
      </>
    )
  }
};

export default App;