import React,  { Component } from 'react';
import Fullscreen from "react-full-screen";
import Grid from '@material-ui/core/Grid';

import logo from './logo.svg';
import './App.css';
import ChannelManager from './components/ChannelManager';

class PresenterScreen_old extends Component {
  constructor(props) {
    super();

    this.state = {
      isFull: false,
    };
  }

  componentWillUnmount() {
    const { onClose } = this.props;
    onClose && onClose();
  }

  goFull = () => {
    this.setState({ isFull: true });
  }

  postMessage = () => {
    this.channelManager && this.channelManager.postMessage('test', { riders: [] })
  }

  connect = () => {
    this.channelManager && this.channelManager.postMessage('connect');
  }

  channelManager;

  render() {
 
    return (
      <div className="App">
        <button onClick={this.goFull}>
          Go Fullscreen
          </button>
        <button onClick={this.postMessage}>
          Post message
          </button>
        <ChannelManager ref={instance => this.channelManager = instance} channelName={this.props.channelName} onMessage={(data) => console.log('MESSAGE', data)} />

        <Grid container>
          <Grid item xs={12} md={6}>
            <Fullscreen
              enabled={this.state.isFull}
              onChange={isFull => this.setState({ isFull })}
            >
              <header className="App-header">
                <img src={`${window.location.origin}/${logo}`} className="App-logo" alt="logo" />
                <p>
                  Count: ${this.props.count || '-'}
                </p>
              </header>
            </Fullscreen>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PresenterScreen_old;
