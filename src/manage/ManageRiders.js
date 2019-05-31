import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

import getDefaultRiders from './utils/getDefaultRiders';
import { RIDERS_COUNT } from '../constants';


export default function ManageRiders({ editingIndex, onSetRider }) {
  const [riders] = useState(getDefaultRiders(RIDERS_COUNT));

  const renderRider = (rider, index) => {
    return (
      <Button key={index} fullWidth onClick={() => onSetRider(rider)}>
        {rider.name}
      </Button>
    );
  }

  if (!riders) {
    return null;
  }

  return (
    <div>
      <p>Selecting rider for number: {editingIndex + 1}</p>
      <List>
        {riders.map((rider, index) => renderRider(rider, index))}
      </List>
    </div>
  );
}