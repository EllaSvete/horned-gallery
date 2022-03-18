import React from 'react';
import {Form} from 'react-bootstrap';

class Horns extends React.Component {

// constructor(props){
//   super(props)
//   this.state = {
//     horns: 0
//   }
// }

handleHornSelection = e => {
  console.log(typeof e.target.value);
  const userHornSelection = parseInt(e.target.value);
  this.props.handleHornFilter(userHornSelection)};


render () {
  console.log(this.props);
  return (
    <>
      <header>
      </header>
      <main>
        <section>
          <header>
          </header>

          <Form onChange={this.handleHornSelection}>
            <Form.Group>
              <Form.Label htmlFor="numberOfHorns">How many horns
              </Form.Label>
              <Form.Select>

                <option value="0">All</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">One-Hundred</option>

              </Form.Select>
            </Form.Group>
          </Form>
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