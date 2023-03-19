import React, { useState, useEffect } from "react";
import "./Speech.css";

function SpeechApp() {
  const [voiceList, setVoiceList] = useState([]);
  const [textarea, setTextarea] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [btnText, setBtnText] = useState("말하기로 변환");
  const [isSpeaking, setIsSpeaking] = useState(true);

  let synth = speechSynthesis;
  useEffect(() => {
    setVoiceList(synth.getVoices());
  }, [synth]);

  const selectChangeHandler = (e) => {
    setSelectValue(e.target.value);
  };

  const btnClickHandler = (e) => {
    e.preventDefault();
    if (textarea !== "") {
      console.log("입력됫는디");
      if (!synth.speaking) {
        textToSpeeach(textarea);
      }
      if (textarea.length > 150) {
        setInterval(() => {
          if (!synth.speaking && !isSpeaking) {
            setIsSpeaking(false);
            setBtnText("말하기로 변환");
          } else {
          }
        }, 500);
        if (isSpeaking) {
          synth.resume();
          setIsSpeaking(false);
          setBtnText("말하기 멈춤");
        } else {
          synth.pause();
          setIsSpeaking(true);
          setBtnText("말하기 계속");
        }
      } else {
        setBtnText("말하기로 변환");
      }
    }
  };

  const textToSpeeach = (text) => {
    let utterance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
      if (voice.name === selectValue) {
        utterance.voice = voice;
      }
    }
    synth.speak(utterance);
  };

  const textareaHandler = (e) => {
    setTextarea(e.target.value);
  };

  return (
    <div className="wrapper">
      <header>텍스트를 말해주는 앱</header>
      <form action="">
        <div className="row">
          <label>텍스트를 입력하세요</label>
          <textarea onChange={textareaHandler}>{textarea}</textarea>
        </div>
        <div className="row">
          <label>목소리를 선택하세요</label>
          <div className="outer">
            <select onChange={selectChangeHandler}>
              {voiceList.map((voice, i) => (
                <option value={voice.name} key={i}>
                  {voice.name}({voice.lang})
                </option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={btnClickHandler}>{btnText}</button>
      </form>
    </div>
  );
}

export default SpeechApp;
