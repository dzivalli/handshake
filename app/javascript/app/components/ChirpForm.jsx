import React, { useState } from 'react';

import { createChirp } from 'app/api/chirps';

export default function ChirpForm({ onChirpCreated }) {
  const [chirpText, setChirpText] = useState('')

  function saveChirp(e) {
    e.preventDefault();
    e.stopPropagation();

    createChirp({text: chirpText}).then(onChirpCreated);
    setChirpText('');
  }

  return (
    <form action="" onSubmit={saveChirp}>
      <input
        type="text"
        value={chirpText}
        onChange={({ target: { value }}) => setChirpText(value)}
      />
      <button disabled={chirpText.length === 0}>Save</button>
    </form>
  )
}
