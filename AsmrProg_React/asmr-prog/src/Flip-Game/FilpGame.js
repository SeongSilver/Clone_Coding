import React, { useState, useRef } from "react";
import "boxicons";

import "./FilpGame.css";

function FilpGame() {
  const cards = useRef();
  const timeTag = useRef();
  const flipsTag = useRef();
  const refreshBtn = useRef();

  const [maxTime, setMaxTime] = useState(20);
  const [flips, setFilps] = useState(0);
  const [matchedCards, setMatchedCards] = useState(0);
  const [disableDeck, setDisableDeck] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeLeft = maxTime;
  let cardOne, cardTwo, timer;

  const initTimer = () => {
    if (timeLeft <= 0) {
      return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
  };

  const flipCard = ({ target: clickedCard }) => {
    if (!isPlaying) {
      setIsPlaying(true);
      timer = setInterval(initTimer, 1000);
    }
    if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
      flips++;
      flipsTag.innerText = flips;
      clickedCard.classList.add("flip");
      if (!cardOne) {
        return (cardOne = clickedCard);
      }
      cardTwo = clickedCard;
      setDisableDeck(true);
      let cardOneIcon = cardOne.query;
    }
  };

  return (
    <div className="wrapper">
      <ul className="cards">
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon type="logo" name="github"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon type="logo" name="apple"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon name="discord" type="logo"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon name="reddit" type="logo"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon name="android" type="logo"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon name="instagram" type="logo"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon type="logo" name="github"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon type="logo" name="apple"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon name="discord" type="logo"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon name="reddit" type="logo"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon name="android" type="logo"></box-icon>
          </div>
        </li>
        <li className="card" ref={cards}>
          <div className="view front-view">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg==" />
          </div>
          <div className="view back-=view">
            <box-icon name="instagram" type="logo"></box-icon>
          </div>
        </li>
        <div className="details">
          <p className="time">
            {" "}
            Time :{" "}
            <span>
              <b ref={timeTag}>0</b>s
            </span>
          </p>
          <p className="flips">
            {" "}
            Flips :{" "}
            <span>
              <b ref={flipsTag}>0</b>
            </span>
          </p>
          <button ref={refreshBtn}>Refresh</button>
        </div>
      </ul>
    </div>
  );
}

export default FilpGame;
