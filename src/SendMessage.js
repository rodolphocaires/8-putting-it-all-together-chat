import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
    static propTypes = {
        didSendMessage: PropTypes.func.isRequired
    };

    state = {
        message: ''
    };

    isDisabled = () => {
        return this.state.message.length === 0;
    }

    updateMessage = (event) => {
        event.preventDefault();
        this.setState({ message: event.target.value });
    }

    submitMessage = (event) => {
        event.preventDefault();
        this.props.didSendMessage(this.state.message);

        this.setState({ message: '' });
    }

    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.submitMessage}>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.message}
                        onChange={this.updateMessage}
                        placeholder="Enter your message..." />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}>
                            SEND
                  </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SendMessage;