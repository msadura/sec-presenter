import React,  { Component } from 'react';
import Fullscreen from "react-full-screen";
import Grid from '@material-ui/core/Grid';
import NewWindow from 'react-new-window';

import logo from './logo.svg';
import './App.css';
import ChannelManager from './components/ChannelManager';
import PresenterScreen from './PresenterScreen';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      isFull: false,
      isPresenterOpen: false
    };
  }

  goFull = () => {
    this.setState({ isFull: true });
  }

  openPresenter = () => {
    this.setState({ isPresenterOpen: true });
  }

  closePresenter = () => {
    this.setState({ isPresenterOpen: false });
  }

  postMessage = () => {
    this.channelManager && this.channelManager.postMessage('test', { riders: [] })
  }

  renderPresenter() {
    if (!this.state.isPresenterOpen) {
      return null;
    }

    return (
      <NewWindow onUnload={this.closePresenter} >
        <PresenterScreen channelName="sec-presenter" onClose={this.closePresenter} />
      </NewWindow>
    );
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
          <button onClick={() => { this.state.isPresenterOpen  ? this.closePresenter() : this.openPresenter()} }>
          {this.state.isPresenterOpen ? 'Close Presenter' :  'Open Presenter'}
          </button>
          <ChannelManager ref={instance => this.channelManager = instance} channelName="sec-presenter" onMessage={(data) => console.log('MESSAGE', data)} />
          {this.renderPresenter()}

        <Grid container>
          <Grid item xs={12} md={6}>
          <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
        </Fullscreen>
          </Grid>
          <Grid item xs={12} md={6}>
            <PresenterScreen channelName="sec-presenter" onClose={this.closePresenter} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
