import React from 'react';
import PropTypes from 'prop-types';

const MessageList = (props) => {
    return (
        <ul className="message-list">
            {props.messages.map((message, index) => (
                <li
                    key={index}
                    className={
                        message.username === props.username ? 'message sender' : 'message recipient'
                    }
                >
                    <p>{`${message.username}: ${message.text}`}</p>
                </li>
            ))}
        </ul>
    )
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
}

export default MessageList;