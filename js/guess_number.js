/* (function (){
    console.log("Welcome to Javascript");
}
)()
 */
let secret_value
let score = 20
let highscore = 0
function generate_number(){
    secret_value = Math.floor(Math.random()*20)
}
const message = document.querySelector(".message")
generate_number()
document.querySelector(".check").addEventListener('click',function(){
    const user_value = document.querySelector(".guess").value
    if(score>0){
        if(!user_value){
            message.textContent = "No number entered!"
        }
        else if(user_value<secret_value){
            message.textContent = "low, continue guessing..."
            score -= 1
            document.querySelector(".score").textContent = score
        }
        else if(user_value>secret_value){
            message.textContent = "high, continue guessing..."
            score -= 1
            document.querySelector(".score").textContent = score
        }
        else{
            message.textContent = "🎉 You are correct!"
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = secret_value
            document.body.style.backgroundColor = "limegreen"
            highscore+=1
            document.querySelector(".highscore").textContent = highscore
        }
    }
    else{
        document.querySelector(".message").textContent = "You are out of life💔"
    }
})
document.querySelector(".again").addEventListener('click',function(){
    generate_number()
    message.textContent = "Start guessing..."
    document.querySelector(".number").textContent = "?"
    document.body.style.backgroundColor = "#222"  
    document.querySelector(".guess").value = ""
    score = 20
    document.querySelector(".score").textContent = score
    document.querySelector(".number").style.width = "15rem";
})
