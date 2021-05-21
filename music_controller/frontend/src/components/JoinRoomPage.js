import React, { useState } from 'react';
import { Button, Grid, Typography, TextField } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

export default function JoinRoomPage() {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('');
  const [error, setError] = useState('');

  async function handleEnter() {
    try {
      const data = { code: roomCode };
      const res = await fetch('/api/join-room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        history.push(`/room/${roomCode}`);
      } else {
        setError('Room not found.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Grid container spacing={1} aling='center'>
      <Grid item xs={12} align='center'>
        <Typography variant='h4' component='h4'>
          Join a Room
        </Typography>
        <Grid item xs={12} align='center'>
          <TextField
            error={error}
            label='Code'
            placeHolder='Enter a room code'
            value={roomCode}
            helperText={error}
            variant='outlined'
            onChange={(e) => setRoomCode(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} align='center'>
          <Button
            variant='contained'
            color='primary'
            style={{ marginTop: '.5rem' }}
            onClick={handleEnter}
          >
            Enter Room
          </Button>
        </Grid>
        <Grid item xs={12} align='center'>
          <Button
            variant='contained'
            color='secondary'
            to='/'
            component={Link}
            style={{ marginTop: '.5rem' }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
