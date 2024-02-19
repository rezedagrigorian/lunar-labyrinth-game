import React, { useState, useEffect } from 'react';
import { SPRITE_SHEET_SRC } from './helpers/consts';
import RenderLevel from './components/level-layout/RenderLevel';

import './App.css';

function App() {
  const [spriteImage, setSpriteImage] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteImage(image);
    };
  }, []);

  if (!spriteImage) {
    return null;
  }

  return (
    <RenderLevel spriteImage={spriteImage} />
  );
}

export default App;
