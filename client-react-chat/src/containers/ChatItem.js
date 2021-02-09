import React, { Component } from 'react';
import { deleteChat, resendChat } from '../actions/message';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import Swal from 'sweetalert2';

class ChatItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sender: this.props.sender || '',
            message: this.props.message || '',
            display: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleResend = this.handleResend.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleResend() {
        this.props.resendChat(this.props.id, this.state.sender, this.state.message)
    }
    handleDisplay(event) {
        this.setState({
            display: this.state.display === "" ? "d-none" : ""
        })
    }
    handleDelete() {
        Swal.fire({
            title: 'Are you sure?',
            text: "Message can't restore again!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I\'m sure!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteChat(this.props.id)
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Message has been deleted.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 800
                }

                )
            }
        })

    }

    render() {
        const created_chat = this.props.date
        const Date = new Intl.DateTimeFormat('en-US',
            {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            })
            .format(created_chat);
        const Time = new Intl.DateTimeFormat('en-US',
            {
                hour: '2-digit',
                minute: '2-digit'
            })
            .format(created_chat);
        return (
            <div>
                <div className="row mt-3">
                    <div className="col-md-1 position-relative d-flex justify-content-center">
                        <div className="position-absolute garis">
                        </div>
                        <div className="position-absolute" id="box-button">
                            <div onClick={this.props.sent ? this.handleDisplay : this.handleResend}
                                className={`btn ${this.props.sent ? this.props.no % 2 === 0 ? "bg-genap" : "bg-ganjil" : "bg-danger"}`}
                                id={this.state.display === "" ? "but-display" : "but-Display"}>
                                <span className={this.props.sent ? this.state.display === "" ? "fa fa-minus text-white" : "fa fa-plus text-white" : "fa fa-refresh"}></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-11 mb-2">
                        <div className={this.state.display} id="box-chat">
                            <div className="panel-heder"><small>{Date} {Time}</small></div>
                            <div className="row">
                                <div className="col-md-11">
                                    <small className="text-danger">{!this.props.sent && "Failed To Send!!"}</small>
                                    <div className="p-2">
                                        <h2>{this.props.sender}</h2><br />
                                    </div>
                                    <div className="lead">
                                        <ReactMarkdown source={this.props.message} />
                                    </div>
                                </div>

                                <div className="col-md-1">
                                    <div onClick={this.props.sent ? this.handleDelete : this.handleResend} className="btn -btn-white"><span className={this.props.sent ? "fa fa-trash" : ""}></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br />

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteChat: (id) => dispatch(deleteChat(id)),
    resendChat: (id, sender, message) => dispatch(resendChat(id, sender, message)),
})

export default connect(
    null,
    mapDispatchToProps
)(ChatItem)