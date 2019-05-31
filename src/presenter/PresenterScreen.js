import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Fullscreen from "react-full-screen";
import Grid from '@material-ui/core/Grid';

const PresentItem = styled(ListItem)`
  padding-top: 4px !important;
  padding-bottom: 4px !important;
`;

const PresentBadge = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const FullScreenContainer = styled.div`
  background-color: white;
  min-height: ${props => props.isFull ? '100vh' : 0};
`;


export default class PresenterScreen extends Component {
  state = {
    isFull: false
  };

  renderField = (rider, index) => {
    return (
      <PresentItem key={index}>
        <PresentBadge>{index + 1}.</PresentBadge>
        {rider && rider.name}
      </PresentItem>
    );
  }
  
  render() {
    const { fields, isPresenterMode } = this.props;
    return (
      <div>
        {isPresenterMode && <Button onClick={() => this.setState({ isFull: true })}>Full Screen</Button>}

        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <FullScreenContainer isFull={isPresenterMode}>
            <p>Selected riders:</p>
            <List>
              {fields.map((field, index) => this.renderField(field, index))}
            </List>
          </FullScreenContainer>

        </Fullscreen>
      </div>
    );
  }

}