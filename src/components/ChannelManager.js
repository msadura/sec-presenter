import { PureComponent } from 'react';

export default class ChannelManager extends PureComponent {
  componentDidMount() {
    const { channelName } = this.props;
    this.channel = new BroadcastChannel(channelName);
    this.channel.onmessage = this._onMessage;
  }

  componentWillUnmount() {
    this.channel && this.channel.close();
  }

  _onMessage = (e) => {
    const { onMessage } = this.props;
    onMessage && onMessage(e.data);
  }

  postMessage(type, payload) {
    if (!this.channel) {
      return;
    }

    this.channel.postMessage({ type, payload });
  }

  channel;

  render() {
    return null;
  }
}