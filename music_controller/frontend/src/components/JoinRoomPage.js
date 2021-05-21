import React, { useState } from 'react';
import { Button, Grid, Typography, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function JoinRoomPage() {
  const [roomCode, setRoomCode] = useState('');
  const [error, setError] = useState('');

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
          ></TextField>
        </Grid>
      </Grid>
    </Grid>
  );
}
