import React,  { useState, useEffect } from 'react';
import Fullscreen from "react-full-screen";
import Grid from '@material-ui/core/Grid';
import NewWindow from 'react-new-window';
import Button from '@material-ui/core/Button';

import './App.css';
import PresenterScreen from './presenter/PresenterScreen';
import ManageRiders from './manage/ManageRiders';
import getSelectedFieldsArray from './manage/utils/getSelectedFieldsArray';
import { RIDERS_COUNT } from './constants';

function App() {
  const [editRiderNumber, setEditRiderNumber] = useState(0);
  const [isPresenterOpen, setIsPresenterOpen] = useState(false);
  const [fields, setFields] = useState(getSelectedFieldsArray(RIDERS_COUNT));

  const setFieldRider = (rider) => {
    const _fields = [...fields];
    _fields[editRiderNumber] = rider;
    setFields(_fields);
    setEditRiderNumber(editRiderNumber + 1);
  }

  const renderPresenter = () => {
    if (!isPresenterOpen) {
      return null;
    }

    return (
      <NewWindow onUnload={() => setIsPresenterOpen(false)} >
        <PresenterScreen fields={fields} isPresenterMode />
      </NewWindow>
    );
  }

  return (
    <div className="App">
        <Button onClick={() => setIsPresenterOpen(!isPresenterOpen) }>
        {isPresenterOpen ? 'Close Presenter' :  'Open Presenter'}
        </Button>
        {renderPresenter()}

      <Grid container>
        <Grid item xs={12} md={6}>
          <PresenterScreen fields={fields} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ManageRiders editingIndex={editRiderNumber} onSetRider={setFieldRider} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
