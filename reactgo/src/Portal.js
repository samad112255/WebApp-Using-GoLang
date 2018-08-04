import React, { Component } from 'react';
// ES2015 module syntax
// ES2015 module syntax
import axios from "axios"
import { TabStrip,TabStripTab } from '@progress/kendo-react-layout';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Row, Col, Input, Label, Button, Container, Card, CardBody, CardHeader, CardFooter } from 'reactstrap'

export default class Portal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
             studentsData: [],
                //  {
            //     name: "Samad",
            //     section: "1",
            //     age: 24
            // }, {
            //     name: "Samad",
            //     section: "2",
            //     age: 24
            // }, {
            //     name: "Samad",
            //     section: "3",
            //     age: 24
            // }, {
            //     name: "Samad",
            //     section: "4",
            //     age: 24
            // }, {
            //     name: "Samad",
            //     section: "5",
            //     age: 24
            // }],
            teachersData: [{
                name: "Saddam",
                section: "1",
                age: 24
            }, {
                name: "Zeeshan",
                section: "2",
                age: 24
            }, {
                name: "Shahzaib",
                section: "3",
                age: 24
            }, {
                name: "Kamran",
                section: "4",
                age: 24
            }, {
                name: "Samad",
                section: "5",
                age: 24
            }]
        };
    }
    componentWillMount(){
        axios.get('http://localhost:3001/Persons')
        .then(response => this.setState({ studentsData: response.data })).then(console.log(this.state));
    }
    getData() {
        axios.get('http://localhost:3001/Persons')
        .then(response => this.setState({ studentsData: response.data })).then(console.log(this.state));
        }
    handleSelect = (e) => {
        this.setState({ selected: e.selected })
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
    render() {
        return (
            <div>
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
            <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
            <TabStripTab title="Students Data">
            <Grid data={this.state.studentsData} >
                <Column field="id" title="Id" width="50px" />
                <Column field="name" title="name" width="250px" />
                <Column field="fatherName" title="Age" width="250px"/>
                <Column field="gender" title="Gender" width="250px" />
                <Column field="age" title="Age" width="50px" />
                <Column field="address" title="Address" width="300px"/>
                <Column field="contact" title="Contact" width="200px" />
            </Grid>
            </TabStripTab>
            <TabStripTab title="Teachers Data">
            <Grid data={this.state.teachersData} >
            <Column field="name" title="Name" width="250px" />
                <Column field="section" title="Section" width="250px" />
                <Column field="age" title="Age" />
            </Grid>
            </TabStripTab>
            </TabStrip>
            </div>
        );
    }
}

