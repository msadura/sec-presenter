
export default class ChannelManager {
  constructor(channelName) {
    this.channel = new BroadcastChannel(channelName);
  }
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

  

  channel;

  render() {
    return null;
  }
}