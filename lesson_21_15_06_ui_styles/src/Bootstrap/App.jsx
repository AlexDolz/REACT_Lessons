import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

const App = () => {
  return (
    <div className='container'>
      <div className='d-grid gap-2 d-grid'>
        <Button variant='outline-primary' size='lg'>
          New Button
        </Button>
        <Button variant='success' size='lg'>
          New Button
        </Button>
        <Button variant='outline-danger' size='sm'>
          New Button
        </Button>
        <Button variant='dark'>New Button</Button>
        <Button variant='light'>New Button</Button>
      </div>
      <div>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Item 1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eaque voluptate eum quasi error minima facilis exercitationem
              accusamus consectetur cum sed, ipsum ab non. Explicabo ullam
              sapiente facere modi quaerat!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Item 2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eaque voluptate eum quasi error minima facilis exercitationem
              accusamus consectetur cum sed, ipsum ab non. Explicabo ullam
              sapiente facere modi quaerat!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Item 3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eaque voluptate eum quasi error minima facilis exercitationem
              accusamus consectetur cum sed, ipsum ab non. Explicabo ullam
              sapiente facere modi quaerat!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default App;
