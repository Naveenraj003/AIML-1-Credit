"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const ROWS = 9;
const COLS = 9;
const DURATION_MS = 2300;

function buildTiles() {
  const tiles = [];

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const seed = (row * 31 + col * 17) % 97;
      const spread = 34 + (seed % 28);
      const far = 48 + (seed % 38);
      const mode = (row + col + seed) % 8;

      let fromX = "0vw";
      let fromY = "0vh";

      if (mode === 0) {
        fromY = `-${far}vh`;
      } else if (mode === 1) {
        fromX = `${far}vw`;
      } else if (mode === 2) {
        fromY = `${far}vh`;
      } else if (mode === 3) {
        fromX = `-${far}vw`;
      } else if (mode === 4) {
        fromX = `-${spread}vw`;
        fromY = `-${spread}vh`;
      } else if (mode === 5) {
        fromX = `${spread}vw`;
        fromY = `-${spread}vh`;
      } else if (mode === 6) {
        fromX = `-${spread}vw`;
        fromY = `${spread}vh`;
      } else {
        fromX = `${spread}vw`;
        fromY = `${spread}vh`;
      }

      tiles.push({
        id: `${row}-${col}`,
        row,
        col,
        delay: 60 + ((row + col) * 34 + seed * 5) % 1100,
        duration: 1080 + (seed % 420),
        fromX,
        fromY,
        rotate: `${((seed % 13) - 6) * 1.8}deg`,
      });
    }
  }

  return tiles;
}

export default function PixelJoinImage({ src, alt, objectClassName = "", storageKey = "profile-pixel-join" }) {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [showTiles, setShowTiles] = useState(false);
  const [revealBase, setRevealBase] = useState(false);
  const tiles = useMemo(() => buildTiles(), []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const alreadyPlayed = sessionStorage.getItem(storageKey) === "1";
    if (alreadyPlayed) {
      setPlayAnimation(false);
      setShowTiles(false);
      return;
    }

    setPlayAnimation(true);
    setShowTiles(true);
    setRevealBase(false);
    sessionStorage.setItem(storageKey, "1");

    const revealTimer = window.setTimeout(() => {
      setRevealBase(true);
    }, 560);

    const hideTimer = window.setTimeout(() => {
      setShowTiles(false);
      setPlayAnimation(false);
    }, DURATION_MS + 380);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(hideTimer);
    };
  }, [storageKey]);

  return (
    <div
      className={`pixel-join-image ${playAnimation ? "pixel-join-active" : ""} ${
        revealBase ? "pixel-base-reveal" : ""
      }`}
    >
      <Image src={src} alt={alt} fill className={`object-cover ${objectClassName}`.trim()} priority />

      {showTiles && (
        <div className="pixel-join-layer" aria-hidden="true">
          {tiles.map((tile) => (
            <span
              key={tile.id}
              className="pixel-join-tile"
              style={{
                left: `${(tile.col * 100) / COLS}%`,
                top: `${(tile.row * 100) / ROWS}%`,
                width: `${100 / COLS + 0.3}%`,
                height: `${100 / ROWS + 0.3}%`,
                animationDelay: `${tile.delay}ms`,
                backgroundImage: `url(${src})`,
                backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                backgroundPosition: `${(tile.col * 100) / (COLS - 1)}% ${(tile.row * 100) / (ROWS - 1)}%`,
                animationDuration: `${tile.duration}ms`,
                "--from-x": tile.fromX,
                "--from-y": tile.fromY,
                "--from-rotate": tile.rotate,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
