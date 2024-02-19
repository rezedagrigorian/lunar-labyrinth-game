import React from 'react';

import Sprite from '../object-graphics/Sprite';
import LevelBackgroundTilesLayer from './LevelBackgroundTilesLayer';
import { THEME_BACKGROUNDS, CELL_SIZE, LEVEL_THEMES } from '../../helpers/consts';

import levelData from '../levels/level.json';

import styles from './RenderLevel.module.css';

export default function RenderLevel({ spriteImage }) {
  const level = {
    theme: LEVEL_THEMES.YELLOW,
    tilesWidth: 8,
    tilesHeight: 8,
    placements: levelData,
  };

  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme],
      }}
    >
      <div className={styles.gameScreen}>
        <LevelBackgroundTilesLayer
          level={level}
          image={spriteImage}
        />
        {level.placements.map((placement) => {
          // Wrap each Sprite in a positioned div
          const x = `${placement.x * CELL_SIZE}px`;
          const y = `${placement.y * CELL_SIZE}px`;

          const style = {
            position: 'absolute',
            transform: `translate3d(${x}, ${y}, 0)`,
          };

          return (
            <div key={placement.id} style={style}>
              <Sprite
                image={spriteImage}
                frameCoord={placement.frameCoord}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
