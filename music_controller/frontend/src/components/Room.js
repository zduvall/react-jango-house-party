import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Room() {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  const { roomCode } = useParams();

  useEffect(() => {
    async function getRoomDetails() {
      const res = await fetch(`/api/get-room?code=${roomCode}`);

      const { votes_to_skip, guest_can_pause, is_host } = await res.json();

      setVotesToSkip(votes_to_skip);
      setGuestCanPause(guest_can_pause);
      setIsHost(is_host);
    }
    getRoomDetails();
  }, []);

  return (
    guestCanPause && (
      <div>
        <h3>Room Code: {roomCode}</h3>
        <p>Votes required to skip: {votesToSkip}</p>
        <p>Guest Can Pause: {guestCanPause ? 'Yes' : 'No'}</p>
        <p>Host: {isHost ? 'Yes' : 'No'}</p>
      </div>
    )
  );
}
