const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 4;
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

//2.0 Painting Lines
const colors = ["##55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#ffeaa7", "#fab1a0", "#ff7675"];

function onClick(event){
    ctx.beginPath();
    ctx.moveTo(0,0);
    const color = colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}
canvas.addEventListener("mousemove", onClick);