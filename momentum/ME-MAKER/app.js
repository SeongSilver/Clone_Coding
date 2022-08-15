const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// ctx.lineWidth = 2;

//fillStyle , strokeStyle 은 fillRect() / strokeRect() 코드 전에 와야 사용할 수 있다.
//fillRect context 의 요소로서 fillRect(시작하는 x좌표, 시작하는 y좌표, 가로길이, 세로길이)
//로 표현하며 해당 사각형을 가득 칠함
//strokeRect()는 fillRect와 같은 기능을 하지만 색을 채우지 않고 선만 그리는
// ctx.fillStyle = "olive";
// ctx.strokeStyle="red";
// ctx.fillRect(50, 150,150, 100);
// ctx.strokeRect(200, 300, 150, 200);
//beginPath()는 이 전 context와 다음 context를 분리하는 장치로 색이나 스타일등을 구분할 때 사용

//캔버스 그림그리기
//moveTo(x좌표, y좌표) 해당 좌표에서 그리기 시작
//lineTo(moveTo좌표에서 움직일 x좌표의 위치, 전과같은 y좌표의 위치)
//lineTo를 그려나가면 다음 lineTo는 마지막 포인트에서부터 그려진다
//lineTo()가 끝난 후에는 stroke()나 fill()로 그림을 그려야 한다
// ctx.beginPath
// ctx.moveTo(300, 300);
// ctx.lineTo(400, 300);
// ctx.lineTo(400, 600);
// ctx.lineTo(200, 600);
// ctx.lineTo(200, 100);
// ctx.fill();

// //1.4 집그리기 실습
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

//1.5 사람 그리기(원 그리기)
//arc(x, y, radius, startAngle, endAngle)
//x, y는 중심점, 반지름, 호의 시작점과 끝점을 나타낸다(0부터 오른쪽 0.5PI, 1PI, 1,5PI, 2PI는 0으로 돌아온다)
//startAngle을 0, endAngle을 2*Math.PI로 두면 원을 그릴 수 있다.
// ctx.fillRect(200, 200, 100, 200);
// ctx.fillRect(170, 200, 20, 130);
// ctx.fillRect(310, 200, 20, 130);
// ctx.arc(250, 150, 50, 0, 2*Math.PI);
// ctx.fill();
// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(230, 140, 10, 0, 2*Math.PI);
// ctx.arc(270, 140, 10, 0, 2*Math.PI);
// ctx.fill();
// ctx.beginPath();
// ctx.arc(250, 170, 20, 0, Math.PI);
// ctx.fill();

//★★★★★★★★★★★★★2.0 Painting Lines
// const colors = ["##55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#ffeaa7", "#fab1a0", "#ff7675"];

// function onClick(event){
//     ctx.beginPath();
//     ctx.moveTo(0,0);
//     const color = colors[Math.floor(Math.random()*colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }
// canvas.addEventListener("mousemove", onClick);

//★★★★★★★★★★★★★2.2 Line Width
//line-width의 id를 가진 input을 가져와서 그 값을 ctx 컨텍스트의 선두께값으로 가져온다
const lineWidth = document.querySelector("#line-width");
ctx.lineWidth = lineWidth.value;
//선 두께 변환이라는 함수를 만들고 이 함수에서 일어나는 이벤트의 타겟의 값을 선두께로 잡아줘서
//선두께가 변할 때마다 그 선두께 값을 컨텍스트의 선두께 값으로 업데이트 해준다
//onMove함수에 beginPath()를 넣어주고 스트로크가 끝날 때마다 해당 패스를 끊어줌
function onLineWidthChanging(event){
    ctx.lineWidth = event.target.value;
}

lineWidth.addEventListener("change", onLineWidthChanging);

//★★★★★★★★★★★★★2.3 PaintColor-1
const color = document.querySelector("#color");

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

color.addEventListener("change", onColorChange);

//★★★★★★★★★★★★★2.4 PaintColor -2
//document.getElement로 가져온 HTML객체는 자바스크립트에서 사용할 수 없기 때문에 
//해당 클래스의 요소가 많아도 forEach문으로 돌릴 수 없어서 Array.from으로 해당 요소들을 colorOptions 배열에 담아준다

const colorOptions = Array.from(document.getElementsByClassName("color-option"));

function onColorClick(event){
    //html태그 안에 'data-'로 담아놓은 객체는 매개변수.target안에 dataset.(-뒤에 담아놓은 이름)으로 사용가능
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    //type = color인 input박스의 컬러를 선택된 컬러의 새상으로 바꿔주는 기능
    color.value = colorValue;
}
//color-option클래스의 요소가 여러개이기 때문에 각각 요소마다 같은 함수를 실행 시키기 위해
//같은 배열에 묶고 그 배열에 forEach배열로 해당 요소 => 해당요소.이벤트추가(클릭, 함수)와 같이 기능을 삽입
colorOptions.forEach(color => color.addEventListener("click", onColorClick));


//★★★★★★★★★★★★★2.5 Filling Mode
const modeBtn = document.querySelector("#mode-btn");
let isFilling = false;

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "채우기";
    }else{
        isFilling = true;
        modeBtn.innerText = "그리기";
    }
}

modeBtn.addEventListener("click", onModeClick);

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

//★★★★★★★★★★★★★2.6 Eraser
//destroy버튼에 클릭 이벤트를 만들어주고 전체 지우기이기 떄문에 
//fillStyle을 white로, fillRect(0, 0, 캔버스 길이, 캔버스 높이)로 그려준다
const destroyBtn = document.querySelector("#destroy-btn");

function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

destroyBtn.addEventListener("click", onDestroyClick);

//eraseBtn에 strokeStyle을 흰색으로 주고 erase버튼을 클릭하면 그리기 버튼을 채우기 버튼으로 바꿔준다
const eraseBtn = document.querySelector("#erase-btn");

function onEraseClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "채우기";
}

eraseBtn.addEventListener("click", onEraseClick);

//★★★★★★★★★★★★★2.1 Mouse Painting
//mouse이벤트를 통해 isPainting을 변수로 두어 평상시는 false이지만 마우스가 눌려있을 때만 true로 두어
//onMove함수에서 isPainting이 true일 때는 lineTo메서드를 이용해 현재 마우스의 좌표를 따라 선을 그리게 한다
let isPainting = false;

function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting(){
    isPainting = true;
}
function cancelPainting(){
    isPainting = false;
}

//mousemove : 마우스를 움직일 때 / mousedown : 마우스가 눌렸을 때
//mouseup : 마우스가 눌린상태에서 안눌리게 될 때 / mouseleave : 마우스가 해당 영역을 떠났을 때
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);


//★★★★★★★★★★★★★3.0 Adding Image
const fileInput = document.querySelector("#file");

function onFileChange(event){
    //input 태그에서 업로드된 파일의 정보를 가져와서 변수 file에 넣고
    const file = event.target.files[0];
    //createObjURL()을 통해 브라우저의 메모리에 저장된 해당 파일을 가리키는 URL을 요청해서 접근
    const url = URL.createObjectURL(file);
    //이미지를 만들기 위해 이미지 객체를 만들고 객체 소스에 url을 입력
    //const image = document.createElement("img")와 같은기능
    const image = new Image();
    image.src = url;
    //image.addEventListener("load", 실행할 함수)와 같은 기능
    image.onload = function(){
        //ctx 콘택스트에 이미지를 넣는다(이미지 객체, 시작 x좌표, 시작 y좌표, 사진 너비, 사진 높이)
        ctx.drawImage(image, 0, 100, 800, 600);
        //이미지를 그릴 때 file input을 비우기
        fileInput.value = null;
    }
}

fileInput.addEventListener("change", onFileChange);


//★★★★★★★★★★★★★ 3.1 Adding Text
const textInput = document.querySelector("#text");
//선의 끝을 각지지 않고 둥글게
ctx.lineCap = "round";

let font1 = new FontFace('font1', 'url(https://cdn.jsdelivr.net/gh/ projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2)');

font1.load();

function onDoubleClick(event){
    //ctx.save()는 ctx의 현재 상태, 색상, 스타일 등 모든 것을 저장
    const text = textInput.value;
    if(text !== ""){
        ctx.save();
        //이후에 것들은 기존 style에 영향을 주지 않음
        ctx.lineWidth = 1;
        ctx.font = "bold 48px font1" ;
        ctx.fillText(text, event.offsetX, event.offsetY);
        //save()와 restore()사이에서는 어떤 수정을해도 저장되지 않음. 이전에 저장된 상태의 style로 돌아감
        ctx.restore();
    }
}

canvas.addEventListener("dblclick", onDoubleClick)


//★★★★★★★★★★★★★ 3.2 Saving Image
const saveBtn = document.querySelector("#saveBtn");

function onSaveClick(){
    //canvas.toDataURL() : 캔버스전체의 이미지 데이터를 url로 인코딩해주는 메서드
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}

saveBtn.addEventListener("click", onSaveClick);