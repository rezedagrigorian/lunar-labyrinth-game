import React from 'react';
import MapCell from './MapCell';
import { THEME_TILES_MAP } from '../../helpers/consts';

export default function LevelBackgroundTilesLayer({ level, image }) {
  const widthWithWalls = level.tilesWidth + 1;
  const heightWithWalls = level.tilesHeight + 1;
  const tiles = THEME_TILES_MAP[level.theme];

  function getBackgroundTile(x, y) {
    const xTile = {
      0: tiles.LEFT,
      [widthWithWalls]: tiles.RIGHT,
    }[x];

    const yTile = {
      0: tiles.TOP,
      [heightWithWalls]: tiles.BOTTOM,
    }[y];

    if (xTile) {
      return xTile;
    }
    if (yTile) {
      return yTile;
    }
    return tiles.FLOOR;
  }

  const canvases = [];
  for (let y = 0; y <= heightWithWalls; y += 1) {
    for (let x = 0; x <= widthWithWalls; x += 1) {
      // Skip Bottom Left and Bottom Right for intentional blank tiles in those corners
      if (y === heightWithWalls && (x === 0 || x === widthWithWalls)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      // add a cell to the map
      canvases.push(
        <MapCell
          key={`${x}_${y}`}
          x={x}
          y={y}
          frameCoord={getBackgroundTile(x, y)}
          image={image}
        />,
      );
    }
  }

  return <div>{canvases}</div>;
}
