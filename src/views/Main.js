import React, { Component } from 'react'
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Chat from '../components/Chat/Chat';
import socketIOClient from "socket.io-client";
import moment from 'moment';


import './Main.css'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            socket: '',
            endpoint: "http://localhost:3800/"
        }
        this.updateForm = this.updateForm.bind(this);
    }

    componentDidMount() {
        let { endpoint, socket } = this.state;
        socket = socketIOClient(endpoint);
        socket.on('connect', () => {
            console.log('Connected to the server');
        });
        socket.on('replyMessage', (value) => {

            if (value.message) {
                const { messages } = this.state;
                const add = {
                    message: value.message,
                    id: 'other',
                    time: moment().format('LT')
                }
                messages.push(add);
                this.setState({
                    messages
                })
            }



        });
        this.setState({
            socket
        })
    }

 
    updateForm(value) {
        const { socket } = this.state;

        socket.emit('sendMessage', {
            message: value.message,
            id: value.id
        }, (resp) => {
            if (resp) {
                const { messages } = this.state;
                const add = {
                    message: value.message,
                    id: 'self',
                    time: moment().format('LT')
                }
                messages.push(add);
                this.setState({
                    messages
                })
            } else {
                console.error('Error to send message')
            }
        });


    }
    render() {
        const { messages } = this.state;
        return (
            <div className="main">
                <Header></Header>
                <Chat messages={messages}></Chat>
                <Form updateForm={this.updateForm}></Form>
            </div>
        )
    }
}

export default Main;