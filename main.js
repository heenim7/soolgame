// 랜덤번호 지정
//  유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 Up!!
// Reset버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측불가, 버튼 disable)
// 유저가1~100 범위 밖에 숫자르 입력하면 알려준다. 기회를 깎지 않는다
//  유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다

let computerNum =0
let playButton = document.getElementById("play-button")
let userInput= document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history=[]


playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus", function(){
    userInput.value =""
})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}
function play(){
    let userValue = userInput.value;
    

    if(userValue<1 || userValue>100) {
        resultArea.innerHTML="1부터 100사이 숫자를 입력하시오"
        return;
    }

    if (history.includes(userValue)){
        resultArea.innerHTML = "이미 입력한 숫자이니 다른 숫자를 입력하시오"
        return;
    }

    chances--;
    chanceArea.textContent=`남은기회:${chances}번`;
    console.log("chance", chances);
    
    if(userValue < computerNum){
        resultArea.innerHTML = `<img src="https://media4.giphy.com/media/xT9IgAakXAITtXIWje/giphy.webp?cid=790b7611zedmyamougw8xiej6qg8qmsc9s0j7r6gb38yk95h&ep=v1_gifs_search&rid=giphy.webp&ct=g"/ width=300 height=168><br>UP!!!`
       
    }else if(userValue > computerNum){
        resultArea.innerHTML = `<img src="https://media0.giphy.com/media/Rdod7XvXQjzCVpiDnR/100.webp?cid=790b7611cuzpmow9lm1jf0rr3cm6qlm8w7bi83d5qb7kca5v&ep=v1_gifs_search&rid=100.webp&ct=g" / width=300 height=168><br> DOWN!!!`
     
    }else {
        resultArea.innerHTML = `<img src="https://media1.giphy.com/media/fxsqOYnIMEefC/100.webp?cid=790b76119cf4dfwhi4swpuah9ps20cakg4td3ckbsnibi924&ep=v1_gifs_search&rid=100.webp&ct=g" ><br> 정답^-^ `
        gameOver=true
    }

    history.push(userValue)
    console.log(history)
  
    if (chances <1){
        gameOver = true
    }

    if (gameOver){
        playButton.disabled = true
    }
}

function reset(){
    computerNum = Math.floor(Math.random()*100)+1;
    // user input창이 깔금정리,
    userInput.value = "";
    // 새번호 생성됨
   
    resultArea.innerHTML = `<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9kbGp6aHVyeTd6YXlmYWduam9vdzhteXJ1YWt4a29yMGZkaXVjayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yR2Q4iGGSyoEm6FqkQ/giphy.gif"><br> 좀비 꽐라되기 싫으면 맞춰라 `

    chances = 5;
    chanceArea.textContent = `남은 기회:${chances}`;
    userValueList = [];

}


pickRandomNum();