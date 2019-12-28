import React, { Component } from 'react';

import Input from '../Input/Input';
import './Form.css';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            refresh: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        let add = {
            message: this.refs.user.getValue(),
        }
        this.props.updateForm(add);
        this.setState({ refresh: '' })
        this.refs.user.setValue()
    }
    render() {
        return (
            <div className="form">
                <form onSubmit={this.onSubmit} className="content">
                    <div className="emojis">
                    </div>
                    <div className="input">
                        <Input ref='user'></Input>
                    </div>
                    <button className="send"><i className="fas fa-angle-right fa-3x"></i></button>
                </form>
            </div>
        )
    }
}

export default Form;