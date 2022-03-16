import React from 'react';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';

class HornedBeast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: 0,
      }
    }
    handleLikes = () => {
      this.setState({
        likes: this.state.likes + 1
      });
    };
    render() {
      console.log(this.state);
      return (
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.state.likes} 💚  Favorites</p>
          <img src={this.props.image_url} alt={this.props.description} title={this.props.title} onClick={this.handleLikes}/>
          <p>{this.props.description}</p>
          <p>Number of Horns: {this.props.horns}</p>
          <Button 
          variant="success" 
          className="article-button"
          onClick={this.handleLikes}
          >
            Pick Me!
            </Button>
        </article>
      );
    }
  }


export default HornedBeast;


  // <>
  // <article>
  //   <h2>{this.props.title}</h2>
  //   <img src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
  //   <p>{this.props.description}</p>
  // </article>
  // </>
