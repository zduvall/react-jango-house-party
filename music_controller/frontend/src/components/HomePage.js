import React from 'react';
import JoinRoomPage from './JoinRoomPage';
import CreateRoomPage from './CreateRoomPage';

import {
  browserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <p>This is the home page</p>
          </Route>
          <Route path='/join'>
            <JoinRoomPage />
          </Route>
          <Route path='/create'>
            <CreateRoomPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
