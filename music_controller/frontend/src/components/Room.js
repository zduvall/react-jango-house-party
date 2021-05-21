import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Room() {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  let { roomCode } = useParams();
  console.log(roomCode);

  return (
    <div>
      <p>Votes: {votesToSkip}</p>
      <p>Guest Can Pause: {guestCanPause}</p>
      <p>Host: {isHost}</p>
    </div>
  );
}
