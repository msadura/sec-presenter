import React, { useState } from 'react';
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

export default function PresenterScreen({ fields, showFullScreenButton }) {
  const [isFullScreen, setFullScreen] = useState(false);

  const renderField = (rider, index) => {
    return (
      <PresentItem key={index}>
        <PresentBadge>{index + 1}.</PresentBadge>
        {rider && rider.name}
      </PresentItem>
    );
  }

  console.log('aa', isFullScreen);
  return (
    <div>
      {showFullScreenButton && <Button onClick={() => setFullScreen(true)}>Full Screen</Button>}
      <Grid container>
      <Fullscreen
        enabled={isFullScreen}
        onChange={isFull => console.log('onChange', isFull)}
      >
        <div>
          <p>Selected riders:</p>
          <List>
            {fields.map((field, index) => renderField(field, index))}
          </List>
        </div>
      </Fullscreen>
      </Grid>
    </div>
  );
}