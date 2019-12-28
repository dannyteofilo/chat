import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
        this.onChange = this.onChange.bind(this)
        this.getValue = this.getValue.bind(this)
    }
    onChange(e) {
        this.setState({ inputValue: e.target.value })
        console.log('value: ',this.state);
    }
    getValue() {
        return this.state.inputValue
    }
    setValue() {
        this.setState({ inputValue: '' })
    }
    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <input className="textarea" type="text" placeholder="Type here!" value={inputValue} onChange={this.onChange} />
            </div>
        )
    }
}


export default Input;