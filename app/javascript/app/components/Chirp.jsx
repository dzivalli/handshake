import React, { useState } from 'react';

import { upvoteChirp, downvoteChirp } from 'app/api/chirps';

export default function Chirp({ chirp: { id, text, votes_counter } }) {
  const [votesCounter, setVotesCounter] = useState(votes_counter);

  function onUpvote() {
    upvoteChirp(id);
    setVotesCounter(votesCounter + 1);
  }

  function onDownvote() {
    downvoteChirp(id);
    setVotesCounter(votesCounter - 1);
  }

  return (
    <li>
      {text.toUpperCase()} -- votes:{votesCounter}

      <button onClick={onUpvote}>Upvote</button>
      <button
        onClick={onDownvote}
        disabled={votesCounter === 0}
      >
        Downvote
      </button>
    </li>
  )
}
