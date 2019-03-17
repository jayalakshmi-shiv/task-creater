import React, { Component } from 'react';
import { Container, Row, Col, Form, Overlay, Table } from 'react-bootstrap';
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



const getFormatedDate = (data) => {
    const date = new Date(data);
    return (
        date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
    )
}

const Cell = (props) => (
    <ul className="list-group">

        <li className="list-group-item" >
            <div style={{ display: "inline" }}>
                <div style={{ float: "left" }}> {props.data.taskName}</div>
                <div style={{ float: "right" }}>
                    {getFormatedDate(props.data.date) + " - " + (new Date(props.data.time).getHours()).toString() + ":" + (new Date(props.data.time).getMinutes()).toString()}
                </div>
            </div>
            <br />
            <small>
                {props.data.taskDescription}
            </small>
        </li>
    </ul>

)

class Taskdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeUp: "outlined",
            activeAll: "contained",
            tasks: this.props.tasks
        }
    }

    componentWillReceiveProps(nextrops) {
        this.setState({
            activeUp: "outlined",
            activeAll: "contained",
            tasks: nextrops.tasks
        })

    }
    arraySort = () => (
        this.props.tasks.sort(function (a, b) {

            return (new Date(a.date + ":" + new Date(a.time).getHours() + ":" + new Date(a.time).getMinutes())) - (new Date(b.date + ":" + new Date(b.time).getHours() + ":" + new Date(b.time).getMinutes()));
        })

    )


    getUpcomingDates = (dates) => {
        const date = new Date();
        return dates.filter((ele, index) => {
            const upDate = new Date(ele.date)
            return upDate > date


        })

    }

    activeAll = () => {
        this.setState({
            activeUp: "outlined",
            activeAll: "contained",
            tasks: this.arraySort()
        })
    }
    activeUp = () => {
        let listData;
        const lists = this.arraySort()

        const upcomingList = this.getUpcomingDates(lists);
        if (upcomingList.length > 3) {
            listData = upcomingList.slice(0, 3)
        }
        else {
            listData = upcomingList;
        }

        console.log(lists)
        this.setState({
            activeUp: "contained",
            activeAll: "outlined",
            tasks: listData

        })
    }



    render() {

        const { tasks } = this.state;

        return (
            <div>

                <Card>
                    <CardContent>
                        <div style={{ display: "inline" }}>
                            <Button variant={this.state.activeUp} onClick={() => this.activeUp()} color="primary" style={{ float: "left" }}>
                                upcoming
                         </Button>
                            <Button variant={this.state.activeAll} onClick={() => this.activeAll()} color="primary" style={{ float: "right" }}>
                                all
                        </Button>

                        </div>
                        <br />

                    </CardContent>
                </Card>

                <Card style={{ height: "70vh", overflowY: "scroll" }}>
                    <CardContent>


                        {tasks.map((ele, index) => (
                            <Cell key={index} data={ele} style={{ marginBottom: 10 }} />


                        ))}

                    </CardContent>
                </Card>


            </div>
        )

    }




}

const mapStateToProps = state => ({
    tasks: state.reducerTask.tasks,
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Taskdetails);