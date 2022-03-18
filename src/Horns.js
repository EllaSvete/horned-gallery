import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Horns extends React.Component {

constructor(props){
  super(props)
  this.state = {
    horns: 0
  }
}


handleSelect = () => {
//   e.preventDefault();
// let mySelectedBeast = e.target.value;
// let arr = [];
// this.props.data.map(element => {
//   return arr.push(element.horns)
// })
// arr.filter((selected) => {
//   selected = mySelectedBeast;
//   if(arr.includes(selected)) {
//     console.log(selected);
//   }
// })  
console.log('handleSelect');
}


render () {
  return (
    <>
      <header>
      </header>
      <main>
        <section>
          <header>
            {/* <h2>{this.state.image_url}</h2> */}
            {/* <p>{this.state.horns}</p> */}
          </header>

          <Form onSelect={this.handleSelect}>
            <Form.Group>
              <Form.Label htmlFor="numberOfHorns">How many horns
              </Form.Label>
              <Form.Select>

                <option value="all">All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">One-Hundred</option>

              </Form.Select>
            </Form.Group>
          </Form>
            <Button onClick={this.handleSelected}>Submit</Button>
        </section>
        <aside>
          <ul></ul>
        </aside>
      </main>
    </>
   );
  }
}


export default Horns;