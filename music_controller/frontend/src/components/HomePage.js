import React from 'react';
import JoinRoomPage from './JoinRoomPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';

import { Switch, Route, Link, Redirect, BrowserRouter } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <div>This is the home page</div>
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
