import React, { Component } from 'react';
import axios from "axios"
import { Row, Col, Input, Label, Button, Container, Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
export default class Signup extends Component {

    // state = {
    //     firstName: "",
    //     lastName: "",
    //     userName: "",
    //     address: "",
    //     contact: "",
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    // }
    // onInput = this.onInput.bind(this)
    // saveData = this.saveData.bind(this)

    render() {
        return (
            <Container>
                <Card>
                    {/* <CardHeader>
                        <h2>Signup</h2>
                    </CardHeader>
                <Row style={{ margin: "10px" }}>
                    <Col className="offset-md-3" md="2">
                        <Label>First Name</Label>
                    </Col>
                    <Col md="4">
                        <Input name="firstName" value={this.state.firstName} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="2" className="offset-md-3" >
                        <Label>Last Name</Label>
                    </Col>
                    <Col md="4">
                        <Input name="lastName" value={this.state.lastName} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="2" className="offset-md-3" >
                        <Label>User Name</Label>
                    </Col>
                    <Col md="4">
                        <Input name="userName" value={this.state.userName} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="2" className="offset-md-3" >
                        <Label>Address</Label>
                    </Col>
                    <Col md="4">
                        <Input name="address" value={this.state.address} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="2" className="offset-md-3" >
                        <Label>Contact</Label>
                    </Col>
                    <Col md="4">
                        <Input name="contact" defaultValue={this.state.contact} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="4" className="offset-md-5">
                        <Button style={{ margin: "20px", float: "left", width: "100px" }}>Login</Button>
                        <Button style={{ margin: "20px", float: "right", width: "100px" }} onClick={this.saveData.bind(this)}>Register</Button>
                    </Col>
                </Row> */}
                    <Button onClick={this.getData.bind(this)}>Get Data</Button>
                    <ul>
                        {
                            this.state.data.map(person => <li>{person.firstName}</li>)
                        }
                    </ul>
                </Card>
            </Container>
        );
    }
    onInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    getData() {
        //     fetch("https://localhost:3001/Persons")
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       this.setState({
        //         data: result
        //       });
        //     },
        //     // Note: it's important to handle errors here
        //     // instead of a catch() block so that we don't swallow
        //     // exceptions from actual bugs in components.
        //     (error) => {
        //       console.log("Empty")
        //       console.log(this.state.data)
        //       });
        axios.get('http://localhost:3001/Persons')
            .then(response => this.setState({ data: response.data })).then(console.log(this.state));
    }
    saveData() {

        console.log("Saved Data")
        console.log(this.state)
    }
}
