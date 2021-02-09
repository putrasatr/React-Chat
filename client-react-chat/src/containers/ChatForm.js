import React, { Component } from 'react';
import { postChat } from '../actions/message'
import {connect} from 'react-redux'     
import '../App.css'

class ChatForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sender: "",
            message: "",
            display: false
        }

        this.handleSenderChange = this.handleSenderChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    handleSenderChange(event) {
        this.setState({ sender: event.target.value });
    }

    handleMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.sender && this.state.message) {
            this.props.postChat(this.state.sender, this.state.message)
            this.setState({ sender: "", message: "" });
        }
        event.preventDefault();
    }
    handleDisplay(event) {
        this.setState({
            display: !this.state.display 
        })
    }
    render() {
        return (
            <div className="row mt-3">
                <div className="col-md-1 position-relative d-flex justify-content-center">
                    <div className="position-absolute garis-form">
                    </div>
                    <div className="position-absolute" id="box-button">
                        <div onClick={this.handleDisplay} 
                        className="btn bg-white" 
                        id="but-Display"><span className={this.state.display ? "fa fa-plus" : "fa fa-minus"}></span></div>
                    </div>
                </div>
                <div className="col-md-11">
                    <div className={`"" ${this.state.display && "d-none"}`} id="box-chat">
                        <form onSubmit={this.handleSubmit}>
                            <input className="form-control" id="input-name" type="text" name="sender" placeholder="Your Name" value={this.state.sender} onChange={this.handleSenderChange} />
                            <br />
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Write your chat here..." id="floatingTextarea2" onChange={this.handleMessageChange} value={this.state.message}></textarea>

                            </div><br />
                            <button className="btn" id="btn-post" type="submit">Post</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postChat: (sender, message) => dispatch(postChat(sender, message)),
})

export default connect(
    null,
    mapDispatchToProps
)(ChatForm)