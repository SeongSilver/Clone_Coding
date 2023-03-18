import React, { useState, useEffect, useRef } from "react";
import "boxicons";

import "./FilpGame.css";

function FilpGame() {
  const cards = useRef();
  const timeTag = useRef();
  const flipsTag = useRef();
  const refreshBtn = useRef();
  const iconTag = useRef();

  const [flips, setFlips] = useState(0);
  const [matchedCards, setMatchedCards] = useState(0);
  const [disableDeck, setDisableDeck] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [clickedCardClassName, setClickedCardClassName] = useState("card");
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();
  let maxTime = 20;
  let timeLeft = maxTime;
  let timer;

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
      setFlips(flips + 1);
      flipsTag.innerText = flips;
      setClickedCardClassName("card flip");
    }
    if (!cardOne) {
      setCardOne(clickedCard);
    }
    setCardTwo(clickedCard);
    setDisableDeck(true);
    console.log(
      cardOne.childNodes[1].childNodes[0].__reactProps$dgg2018ni2l.className
    );
    console.log(cardTwo);
    let cardOneIcon =
      cardOne.children[1].childNodes[0].__reactProps$7gxizrkr7se.className;
    let cardTwoIcon =
      cardTwo.children[1].childNodes[0].__reactProps$7gxizrkr7se.className;
    matchCards(cardOneIcon, cardTwoIcon);
  };

  const matchCards = (icon1, icon2) => {
    if (icon1 === icon2) {
      setMatchedCards(matchedCards + 1);
      if (matchedCards == 6 && timeLeft > 0) {
        return clearInterval(timer);
      }
      cardOne.removeEventListener("click".flipCard);
      cardTwo.removeEventListener("click".flipCard);
      cardOne = cardTwo = "";
      setDisableDeck(false);
    }
  };

  useEffect(() => {
    shuffleCards();
    setTimeout(() => {
      setClickedCardClassName("shake");
    }, 400);

    setTimeout(() => {
      setClickedCardClassName("card");
      setCardOne("");
      setCardTwo("");
      setDisableDeck(false);
    }, 1200);
  }, []);

  const shuffleCards = () => {
    timeLeft = maxTime;
    setFlips(0);
    setMatchedCards(0);
    setCardOne(0);
    setCardTwo(0);
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    setDisableDeck(false);
    setIsPlaying(false);

    let arr = [
      "bxl-github",
      "bxl-apple",
      "bxl-discord",
      "bxl-reddit",
      "bxl-android",
      "bxl-instargram",
    ];
    arr.sort(() => (Math.random > 0.5 ? 1 : -1));

    setClickedCardClassName("flip");
    setTimeout(() => {
      setClickedCardClassName("card");
    }, 500);
  };

  return (
    <div className="wrapper">
      <ul className="cards">
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              type="logo"
              name="github"
              className="bxl-github"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              type="logo"
              name="apple"
              className="bxl-apple"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              name="discord"
              type="logo"
              className="bxl-discord"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              name="reddit"
              type="logo"
              className="bxl-reddit"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              name="android"
              type="logo"
              className="bxl-android"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              name="instagram"
              type="logo"
              className="bxl-instagram"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              type="logo"
              name="github"
              className="bxl-github"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              type="logo"
              name="apple"
              className="bxl-apple"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              name="discord"
              type="logo"
              className="bxl-discord"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              name="reddit"
              type="logo"
              className="bxl-reddit"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              name="android"
              type="logo"
              className="bxl-android"
              ref={iconTag}></box-icon>
          </div>
        </li>
        <li className={clickedCardClassName} ref={cards} onClick={flipCard}>
          <div className="view front-view">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvlk+ENAUEQhb+rAB3QgQ7QgQ7oQFSADpSgA1SADqiADlABeclcwnK7e9wlJ/bPbi6773vzZi6h5JWUrM//APrACOhapFtgBmj3rpiIFsAgQ0WQqY8QAsj50gTGwMrOQ2Bi556vkhBAEXQAic8dp3IuyO4hupdiQoCbvWgAF+d1Ezjat0ydEMAXbx04A1dA57frG0Da/DWgXhUGkFs1XiMr99r3RQEkvgHaMeKC5o1Ik6Qf7mDO3cbnniL3gQRrQAs4hf7iTypIxza68uiL5rZ0QEwqT3cqV8HvR1R6D6oHuANyHiMZKBBnVAAAAABJRU5ErkJggg=="
              alt="???"
            />
          </div>
          <div className="view back-view">
            <box-icon
              name="instagram"
              type="logo"
              className="bxl-instagram"
              ref={iconTag}></box-icon>
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
          <button ref={refreshBtn} onClick={shuffleCards}>
            Refresh
          </button>
        </div>
      </ul>
    </div>
  );
}

export default FilpGame;
