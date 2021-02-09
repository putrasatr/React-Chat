import React, { Component } from 'react';
import ChatForm from '../containers/ChatForm';
import ChatList from '../containers/ChatList';
import { loadChat } from '../actions/message'
import { connect } from 'react-redux'
import "../App.css"
import { io } from 'socket.io-client';

const socket = io("http://localhost:3000");

class ChatBox extends Component {

    componentDidMount() {
        this.props.loadChat();
        socket.on('loadChat', () => {
            this.props.loadChat();
        });
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container d-flex flex-column">
                <div className="mt-5"  >
                    <div className="alert mt-4" id="header-chat" role="alert">
                        <h1 className="display-7 text-center"><i className="fa fa-whatsapp"></i> React Chat</h1>
                    </div>
                </div>
                <div className="mb-3">
                    <ChatList
                        message={[...this.props.message]}
                    />
                </div>
                <ChatForm />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    message: state.messages
})

const mapDispatchToProps = (dispatch) => ({
    loadChat: () => dispatch(loadChat())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatBox)