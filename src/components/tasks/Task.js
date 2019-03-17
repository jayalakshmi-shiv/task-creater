import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import TimeInput from 'material-ui-time-picker';
import TextField from '@material-ui/core/TextField';
import { addTasks } from '../../actions/actionTask';
import Button from '@material-ui/core/Button';
import Card from 'react-bootstrap/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TaskDetails from './TaskDetails'



class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "taskName": "",
            "taskDescription": "",
            "time": new Date(),
            "date": ""

        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleTimeChange = (e) => {
        this.setState({
            time: e
        })

    }
    addTask = (data) => {
        this.props.addTasks(data)
    }

    render() {
        const showButton = (this.state.taskName == "" || this.state.date == "") ? true : false;
        return (
            <Row>
                <Col style={{ padding: 20 }}>
                    <Card style={{ marginTop: 100 }}>
                        <CardContent>
                            <center>
                                <h3>Task Creater</h3>
                            </center>
                            <Form>
                                <TextField
                                    name="taskName"
                                    id="name"
                                    label="Task Name"
                                    value={this.state.taskName}
                                    onChange={(e) => this.handleChange(e)}
                                    fullWidth={true}
                                />
                                <br /><br />
                                <TextField
                                    name="taskDescription"
                                    id="description"
                                    label="Task Description (optional)"
                                    value={this.state.taskDescription}
                                    onChange={(e) => this.handleChange(e)}
                                    fullWidth={true}
                                />
                                <br /><br />

                                <TextField
                                    id="date"
                                    label="Date"
                                    name="date"
                                    type="date"
                                    format={'DD/MM/YYYY'}
                                    value={this.state.date}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ marginRight: '20px', }}
                                    onChange={(e) => this.handleChange(e)}
                                />

                                <TimeInput
                                    label="Time"
                                    autoOk={true}
                                    mode='12h'
                                    value={this.state.time}
                                    onChange={(time) => this.handleTimeChange(time)}
                                    name="time"
                                />
                            </Form>
                            <br /><br />

                            <center>
                                <Button variant="contained" color="primary" onClick={() => this.addTask(this.state)} disabled={showButton}>
                                    add task
                              </Button>
                            </center>
                        </CardContent>
                    </Card>
                </Col>
                <Col md={6} style={{ padding: 20 }}>

                    <TaskDetails />
                </Col>
            </Row>
        )
    };
}





const mapStateToProps = state => ({
    tasks: state.reducerTask.tasks,
});
const mapDispatchToProps = dispatch => ({
    addTasks: (data) => {
        dispatch(addTasks(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);