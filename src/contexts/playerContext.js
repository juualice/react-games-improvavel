import { createContext, useContext, useState } from "react";
import { Howl } from "howler";
import gameThemesData from "../assets/generate.json";

export const PlayerContext = createContext({});

export function PlayerContextProvider({ children }) {
  
  const [gameData, setGameData] = useState({ name: "", feature: "" });

  const gameSound = new Howl({
    src: ["./escolinha.mp3"],
    volume: 0.8,
  });

  const buzzerSound = new Howl({
    src: ["./buzzer.mp3"],
    loop: true,
    volume: 0.8,
  });

  const bellSound = new Howl({
    src: ["./bell.mp3"],
    volume: 0.8,
  });

  const handlePlay = () => {
    return gameSound.playing() ? gameSound.stop() : gameSound.play();
  };

  const buzzerPress = () => {
    return buzzerSound.play();
  };

  const buzzerRelease = () => {
    return buzzerSound.stop();
  };

  const bellClick = () => {
    return bellSound.play();
  };

  const handlePlayGame = (game) => {
    const index = Math.floor(Math.random() * gameThemesData[game].length);

    setGameData({
      name: gameThemesData[game][index],
    });
  };

  const handlePlayEscolinha = () => {
    const indexName = Math.floor(Math.random() * gameThemesData.name.length);
    const indexFeature = Math.floor(
      Math.random() * gameThemesData.feature.length
    );

    setGameData({
      name: `${gameThemesData.name[indexName]}\nque\n${gameThemesData.feature[indexFeature]}`,
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        gameData,
        handlePlay,
        buzzerPress,
        buzzerRelease,
        bellClick,
        handlePlayEscolinha,
        handlePlayGame,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
};
