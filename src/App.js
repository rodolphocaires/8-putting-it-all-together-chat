import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
    state = {
        messages: [
            { username: 'Amy', text: 'Hi, Jon!' },
            { username: 'Amy', text: 'How are you?' },
            { username: 'John', text: 'Hi, Amy! Good, you?' },
        ]
    }

    handleMessage = (_username, _message) => {
        this.setState(prevState => ({
            messages: [...prevState.messages, {
                username: _username,
                text: _message
            }]
        }));
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    {users.map((user, index) => (
                        <ChatWindow key={index} username={user.username} messages={this.state.messages} didSendMessage={this.handleMessage} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
