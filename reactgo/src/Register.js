import React, { Component } from 'react';
import axios from "axios"
import { registerState } from './States/states'
import { Row, Col, Input, Label, Button, Container, Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
export default class Signup extends Component {


    constructor(props) {
        super(props);
        this.state = registerState
    }
    // }
    // onInput = this.onInput.bind(this)
    // saveData = this.saveData.bind(this)

    render() {
        return (
            <Card>
                <CardHeader>
                    <h2>Signup</h2>
                </CardHeader>
                <Row style={{ margin: "10px" }}>
                    <Col className="offset-md-3" md="2">
                        <Label>Name</Label>
                    </Col>
                    <Col md="4">
                        <Input name={Object.keys(this.state)[0]} value={this.state.name} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="2" className="offset-md-3" >
                        <Label>Father Name</Label>
                    </Col>
                    <Col md="4">
                        <Input name={Object.keys(this.state)[1]} value={this.state.fatherName} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="2" className="offset-md-3" >
                        <Label>Gender</Label>
                    </Col>
                    <Col md="4">
                        <Input name={Object.keys(this.state)[2]} value={this.state.gender} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="2" className="offset-md-3" >
                        <Label>Age</Label>
                    </Col>
                    <Col md="4">
                        <Input name={Object.keys(this.state)[3]} value={this.state.age} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="2" className="offset-md-3" >
                        <Label>Address</Label>
                    </Col>
                    <Col md="4">
                        <Input name={Object.keys(this.state)[4]} defaultValue={this.state.address} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="2" className="offset-md-3" >
                        <Label>Contact</Label>
                    </Col>
                    <Col md="4">
                        <Input name={Object.keys(this.state)[5]} defaultValue={this.state.contact} onChange={this.onInput.bind(this)} />
                    </Col>
                </Row>
                <Row style={{ margin: "10px" }}>
                    <Col md="4" className="offset-md-5">
                        <Button style={{ margin: "20px", float: "left", width: "100px" }}>Login</Button>
                        <Button style={{ margin: "20px", float: "right", width: "100px" }} onClick={this.saveData.bind(this)}>Register</Button>
                    </Col>
                </Row>
            </Card>
        );
    }
    onInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    saveData() {

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        };
        axios.post('http://localhost:3001/student', this.state, axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }
}
