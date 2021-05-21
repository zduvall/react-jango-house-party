import React, { useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CreateRoomPage() {
  const [guestCanPause, setGuestCanPause] = useState('true');
  const [votesToSkip, setVotesToSkip] = useState(2);

  async function handleCreate() {
    const data = { guest_can_pause: guestCanPause, votes_to_skip: votesToSkip };

    const res = await fetch('/api/create-room', {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    console.log(json);
  }

  return (
    <div>
      <Grid container spacing={1}>
        {/* 12 fills the intire grid, 12 is the max */}
        <Grid item xs={12} align='center'>
          <Typography component='h4' variang='h4'>
            Create A Room
          </Typography>
        </Grid>
        <Grid item xs={12} align='center'>
          <FormControl component='fieldset'>
            <FormHelperText>
              <div align='center'>Guest Control Playback State</div>
              <RadioGroup
                row
                value={guestCanPause.toString()}
                onChange={
                  // (e) => setGuestCanPause(e.target.value)
                  (e) =>
                    setGuestCanPause(e.target.value === 'true' ? true : false)
                }
              >
                <FormControlLabel
                  // value={true}
                  value='true'
                  control={<Radio color='primary' />}
                  label='Play/Pause'
                  labelPlacement='bottom'
                />
                <FormControlLabel
                  // value={false}
                  value='false'
                  control={<Radio color='secondary' />}
                  label='No Control'
                  labelPlacement='bottom'
                />
              </RadioGroup>
              <Grid item xs={12} align='center'>
                <FormControl>
                  <TextField
                    required={true}
                    type='number'
                    defaultValue={votesToSkip}
                    inputProps={{ min: 1, style: { textAlign: 'center' } }}
                    onChange={(e) => setVotesToSkip(e.target.value)}
                  />
                  <FormHelperText>
                    <div align='center'>Votes required to skip song</div>
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} align='center'>
                <Button
                  color='primary'
                  variant='contained'
                  onClick={handleCreate}
                  style={{ marginTop: '.5rem' }}
                >
                  Create a Room
                </Button>
              </Grid>
              <Grid item xs={12} align='center'>
                <Button
                  color='secondary'
                  variant='contained'
                  to='/'
                  component={Link}
                  style={{ marginTop: '.5rem' }}
                >
                  Back
                </Button>
              </Grid>
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
