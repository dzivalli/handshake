import React, { useEffect, useState } from 'react';

import { getChirps } from 'app/api/chirps';

import ChirpForm from './ChirpForm';
import Chirp from './Chirp';

export default function Chirps() {
  const [chirps, setChirps] = useState([]);

  function onChirpCreated(newChirp) {
    setChirps([newChirp, ...chirps]);
  }

  useEffect(() => {
    getChirps().then(chirps => setChirps(chirps))
  }, [])

  return (
    <div>
      <h1>Chirps</h1>
      <ChirpForm onChirpCreated={onChirpCreated}/>
      <ul>
        {
          chirps.map((chirp, index) => <Chirp chirp={chirp} key={index}/>)
        }
      </ul>
    </div>
  )
}
