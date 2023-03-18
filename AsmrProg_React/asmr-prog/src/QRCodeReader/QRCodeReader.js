import React, { useState, useEffect, useRef } from "react";
import "./QRCodeReader.css";
import styled from "styled-components";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QRCodeReader() {
  useEffect(() => {
    console.log("qrCode Reader | SeongSilver");
  }, []);

  const QRContent = styled.div`
    i {
      color: #334155;
      font-size: 55px;
    }
    p {
      color: #334155;
      margin-top: 15px;
      font-size: 16px;
    }
  `;

  const QRButtons = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
    button {
      height: 55px;
      outline: none;
      border: none;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      color: #334155;
      border-radius: 5px;
      background: #fff;
      transition: transform 0.3s ease;
      width: calc(100% / 2 - 10px);
    }
  `;

  const QRDetails = styled.div`
    opacity: 0;
    margin-top: 25px;
    pointer-events: none;
    textarea {
      width: 100%;
      height: 128px;
      outline: none;
      resize: none;
      color: #fff;
      font-size: 18px;
      background: none;
      border-radius: 5px;
      padding: 10px 15px;
      border: 1px solid #fff;
      &::-webkit-scrollbar {
        width: 0px;
      }
      &:hover::-webkit-scrollbar {
        width: 5px;
      }
      &:hover::-webkit-scro-track {
        background: none;
      }
      &:hover::-webkit-scrollbar-thumb {
        background: #fff;
        border-radius: 8px;
      }
    }
  `;

  const QRWrapper = styled.div`
    width: 420px;
    height: 270px;
    background-color: #334155;
    border-radius: 7px;
    padding: 30px 30px 35px;
    transition: all 0.2s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    form {
      height: 210px;
      display: flex;
      cursor: pointer;
      user-select: none;
      text-align: center;
      border-radius: 7px;
      background: #fff;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      img {
        display: none;
        max-width: 148px;
      }
    }

    &.active {
      height: 520px;
      ${QRContent} {
        display: none;
      }
      form {
        height: 225px;
        pointer-events: none;
        img {
          display: block;
        }
      }
      ${QRDetails} {
        opacity: 1;
        pointer-events: auto;
        transition: opacity 0.5s 0.05s ease;
      }
      @media only screen and (max-width: 450px) {
        height: 520px;
      }
      ${QRButtons} {
        transform: scale(0.95);
      }
    }

    @media only screen and (max-width: 450px) {
      padding: 25px;
      height: 260px;
    }
  `;

  const [wrapperClassName, setWrapperClassName] = useState("wrapper");
  const [qrData, setQrData] = useState();
  const [pTagText, setPTagText] = useState("QR코드를 업로드 하세요");
  const [imageSrc, setImgSrc] = useState("#");

  const fileInput = useRef();

  //API에서 데이터 가져오기
  const fetchRequest = (file, formData) => {
    setPTagText("QR코드 스캔중...");
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result) {
          setPTagText("QR코드를 스캔하지 못했습니다.");
          console.log("왜안돼");
          return;
        } else {
          setQrData(result[0]?.symbol[0]?.data);
          console.log(result[0]?.symbol[0]?.data);
          setImgSrc(URL.createObjectURL(file));
          console.log("이거");
          setWrapperClassName("wrapper active");
          setPTagText("QR코드를 업로드 했습니다");
        }
      })
      .catch(() => {
        setPTagText("QR코드를 스캔할 수 없습니다.");
      });
  };

  //QR코드와 함께 API에 요청 보내기
  const fileInputChangeHandler = async (e) => {
    let file = e.target.files[0];
    if (!file) return;
    let formData = new FormData();
    formData.append("file", file);
    fetchRequest(file, formData);
  };

  //클립보드에 텍스트 복사
  const copyClickEventHandler = () => {
    try {
      navigator.clipboard.writeText(qrData);
      alert("클립보드에 복사되었습니다.");
    } catch {
      alert("클립보드 복사에 실패하였습니다");
    }
  };

  const closeBtnHandler = () => {
    setWrapperClassName("wrapper");
  };

  return (
    <div className={wrapperClassName}>
      <form action="#" onClick={() => fileInput.current.click()}>
        <input
          type="file"
          hidden
          ref={fileInput}
          onChange={fileInputChangeHandler}
        />
        <img src={imageSrc} alt="" />
        <div className="content">
          <FontAwesomeIcon icon={faCloudArrowUp} size="2x" color="#334155" />
          <p>{pTagText}</p>
        </div>
      </form>
      <div className="details">
        <textarea spellCheck="false" disabled value={qrData}></textarea>
        <div className="buttons">
          <button className="close" onClick={closeBtnHandler}>
            닫기
          </button>
          <button className="copy" onClick={copyClickEventHandler}>
            복사
          </button>
        </div>
      </div>
    </div>
  );
}

export default QRCodeReader;
