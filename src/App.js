import "./theme/global.css";

// Components
import Navbar from "./components/navbar/navbar";
import Games from "./components/games/games";
import { usePlayer } from "./contexts/playerContext";

// Assets
import escolinhaImage from "./assets/escolinha.png";
import quadradoImage from "./assets/quadrado.png";
import cenasImage from "./assets/cenas.png";
import realidadeImage from "./assets/realidade.png";
import tituloImage from "./assets/titulo.png";
import perguntasImage from "./assets/so-perguntas.png";

function App() {
  const {
    buzzerPress,
    buzzerRelease,
    bellClick,
    handlePlay,
    handlePlayEscolinha,
    handlePlayGame,
    gameData,
  } = usePlayer();

  return (
    <div>
      <Navbar
        onMouseDown={buzzerPress}
        onMouseUp={buzzerRelease}
        onTouchStart={buzzerPress}
        onTouchEnd={buzzerRelease}
        onClick={bellClick}
        className="paper-shadow"
      />
      <div className="grid container">
        <div />

        <div className="grid paperGrid">
          <div />
          <div>
            <Games title={gameData.name} />
          </div>
          <div />
          <Games
            title="Escolinha Improvável"
            paperImage={escolinhaImage}
            buttonName="Gerar personagem"
            onClick={handlePlayEscolinha}
            playMusic={handlePlay}
            buttonIcon="bi bi-music-note-beamed"
          />
          <Games
            title="Cenas Improváveis"
            onClick={() => handlePlayGame("themesCenas")}
            paperImage={cenasImage}
            buttonName="Gerar tema"
          />
          <Games
            title="Jogo do Quadrado"
            onClick={() => handlePlayGame("themesOccupation")}
            paperImage={quadradoImage}
            buttonName="Gerar tema"
          />
          <Games
            title="Título no Meio"
            onClick={() => handlePlayGame("themesTitulo")}
            paperImage={tituloImage}
            buttonName="Gerar tema"
          />
          <Games
            title="Realidade Paralela"
            onClick={() => handlePlayGame("themesOccupation")}
            paperImage={realidadeImage}
            buttonName="Gerar tema"
          />
          <Games
            title="Só Perguntas"
            onClick={() => handlePlayGame("themesPlace")}
            paperImage={perguntasImage}
            buttonName="Gerar tema"
          />
        </div>
        <div />
      </div>
    </div>
  );
}

export default App;
