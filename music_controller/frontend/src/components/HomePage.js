import React, { useEffect, useState } from 'react';
import JoinRoomPage from './JoinRoomPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';
import { Switch, Route, Link, BrowserRouter, useHistory } from 'react-router-dom';
// import { Switch, Route, Link, Redirect, BrowserRouter, useHistory } from 'react-router-dom';

import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';

function RenderHomePage() {
  const history = useHistory();
  // const [roomCode, setRoomCode] = useState(null);

  useEffect(() => {
    async function checkIfInRoom() {
      const res = await fetch('/api/user-in-room');
      const roomData = await res.json();
      if (roomData?.code) {
        history.push(`/room/${roomData.code}`);
      }
      // setRoomCode(roomData.code);
    }
    checkIfInRoom();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} align='center'>
        <Typography variant='h3' component='h3'>
          House Party
        </Typography>
      </Grid>
      <Grid item xs={12} align='center'>
        <ButtonGroup disableElevation variant='contained' color='primary'>
          <Button color='primary' to='/join' component={Link}>
            Join a Room
          </Button>
          <Button color='secondary' to='/create' component={Link}>
            Create a Room
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default function HomePage() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <RenderHomePage />
            {/* {!roomCode && <RenderHomePage />}
            {!!roomCode && <Redirect to={`/room/${roomCode}`} />} */}
          </Route>
          <Route path='/join'>
            <JoinRoomPage />
          </Route>
          <Route path='/create'>
            <CreateRoomPage />
          </Route>
          <Route path='/room/:roomCode'>
            <Room />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
