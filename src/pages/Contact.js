import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';

class Contact extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: '',
            emailSent: null
        }
    }

    handleChange = (e) =>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        this.setState({
            disabled: true,
            emailSent:true
        });
    }
    render(){
        return(
            <Row>
                <Col>
                <Hero title={this.props.title}/>

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor='full-name'>Full Name</Form.Label>
                            <Form.Control id='full-name' name = 'name' type='text' value={this.state.name} onChange = {this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='full-name'>Email</Form.Label>
                            <Form.Control id='email' name = 'email' type='email' value={this.state.email} onChange = {this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor='full-name'>Message</Form.Label>
                            <Form.Control id='message' name = 'message' as='textarea' rows = '3' value={this.state.name} onChange = {this.handleChange}/>
                        </Form.Group>

                        <Button className='d-inline-block' variant='primary' type='submit'disabled={this.state.disabled} >
                        Send
                        </Button>

                        {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p>}
                        {this.state.emailSent === false && <p className='d-inline erro-msg'>Email Not Sent</p>}
                    </Form>
                </Content>
                 </Col>
            </Row>
        )
    }
   
}

export default Contact;