'use strict';
/*console.log("Komar")
name="komar"
console.log(name)
Komali=prompt('Tell his name')
console.log(Komali)
let amount = Number(prompt("enter food amount"))

functions
type1
function sum(a,b){
    return a+b
}
arrow function
const sum = (a,b) => {
   return a+b
}

arrow function with implicit return
: for implicit return remove curly braces(squigglies) 
const sum = (a,b) => a+b

function caltip(amount,tippercent){
    const tip = tippercent/ 100
    const tipamount = tip * amount
    const total = sum(tipamount,amount)
    return total
    //console.log(tipamount)
    //console.log(total)
}
console.log(caltip(500,5)) */

/* function sayName(name){
    reply= `hi ${name}`
    console.log(reply);
}
sayName('ajay')

num1=sum(2,3)
num1=sum(5,9)
console.log(num1)
const add = (a,b) => a+b
const sub = (a,b) => a-b
const mul = (a,b) => a*b
const div = (a,b) => a/b
console.log(add(10,20),sub(30,20),mul(5,10),div(30,3)) */

// Arrays
/* const bikes=['R1','Zx10r','S1000RR','CBR1000RR','GSXR1000','RC8','Paningale','Daytona']
console.log(bikes)
console.log(bikes[0])
bikes.push('F4 RR')
console.log(bikes.slice(3,10))
console.log(bikes.length)
console.log(bikes.indexOf('S1000RR')) 
const per={
    name: 'AJ',
    bike: 'R15'
}
console.log(per.name)
console.log(per['bike'])
per.number='936-141-0824'
console.log(per['number'])
console.log(per)

const stranger=(name,bike)=>{
    const person={
        name:name,
        bike:bike,
        total:250000,
        bal:75000,
        worth:function(){
            return this.total-this.bal
        }
    }
    const per=`Hi girl, I am ${person.name}. Do you want to ride with me in my ${person.bike} and it's worth is ${person.worth()}`
    return per
}
console.log(stranger('Ajay','R15'))
console.log(stranger('john','duke'))

const bikes = ['R15','Duke','R15M','NS200']

for (const bike of bikes){
    console.log(bike)
}
let res=[]
const num=[1,2,3,4,5,6,7,8,9,10]
for (const n of num){
    res.push(n*3)
}
console.log(res)
let title = document.getElementById('title')
console.log("Before :",title.innerText)
title.innerText = `${bikes[0]} is the best bike in the world`
title.style.color = "purple"
console.log("After :",title.innerText)
title. innerHTML = "<h3>hello</h3>"
console.log(title.innerHTML) */


/* let red = document.getElementById('red')
let green = document.getElementById('green')
let yellow = document.getElementById('yellow')

red.onclick = function(){ 
    red.innerHTML = "<h3>Red</h3>"
    red.style.textAlign = "center"
    console.log("Red")
}
green.onclick = function() {
     console.log('Green')
green.innerHTML = "<h3>Green</h3>"
green.style.textAlign = "center"
}

yellow.onclick = function(){ 
    yellow.innerHTML = "<h3>Yellow</h3>"
    yellow.style.textAlign = "center"
    console.log("Yellow")
}

let squares = document.querySelectorAll('.colorsquare')
console.log(squares)
console.log(squares[0].value) //returns the value="red" in html value in the value attribute
console.log(squares[1].value)
console.log(squares[2].value)

squares.forEach(square => console.log(square.value))
const clickTimes = {'red':0,'yellow':0,'green':0}
squares.forEach(square => { 
    square.onclick = () => {
        clickTimes[square.value] += 1
        square.innerText = clickTimes[square.value]
        console.log("User touches : ",square.value)
        // console.log(clickTimes)
    }
}) */
/* const clear = document.getElementById('clear')
clear.onclick = () => clearScores()
clearScores = () => { 
    clickTimes.red = 0
    clickTimes.yellow = 0
    clickTimes.green = 0
    squares.forEach(square => square.innerText='')
}

let price = document.getElementById('amnt')
let percent = 0
percent = document.getElementsByName('percent')
let amount = document.getElementById('total')
function Total(){
    amount.innerText = price+percent
}
console.log(price)

const dogimage = document.getElementById('img') 
const dogbtn = document.getElementById('dogbtn')
function fetchRandomDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        dogimage.src = `${json.message}`
        console.log(json)
    })
}

dogbtn.onclick = () =>{
    fetchRandomDog()
}

fetchRandomDog() */


/* 
const hero = document.getElementById('heroimg')
const getHeroBtn = document.getElementById('herobtn')
const heroname = document.getElementById('heroname') 
const fetchRandomHero=()=>{
    const random = Math.floor(Math.random()*727)
    console.log(random)
    fetch(`https://superheroapi.com/api.php/1234097617243956/${random}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        hero.src = `${json.image['url']}`
        heroname.value = `${json.name}`
    })
}
getHeroBtn.onclick =() => fetchRandomHero()
const benTennyson = () => {
    fetch(`https://superheroapi.com/api.php/1234097617243956/78`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        hero.src = `${json.image['url']}`
    })
}
const searchHeroBtn = document.getElementById('searchhero')
const searchHero=()=>{
    const URL = 'https://superheroapi.com/api.php/1234097617243956'
    const name = document.getElementById('heroname').value
    console.log(name)
    const error = document.getElementById('.error')
    console.log(name)
    
    fetch(`${URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        hero.src = `${json.results?.[0].image['url']}`
    })
}
searchHeroBtn.onclick = () => searchHero()
benTennyson() */

/* const greet = new Promise((resolve,reject) => {
    setTimeout(() =>{
        index = Math.floor(Math.random()*2)
        word = [true,false][`${index}`]
        word ? resolve('Hi Boy') : reject('No Boy')
    } ,2000)
})

const func = async () => {
    const data = {rating:0,tip:0,pay:0,review:0}
    try{
        const response = await greet
        console.log(response)
        data.rating = 5
        data.tip = 2
        data.pay = 10
        data.review = 5
        return data
    }
    catch(error){
        console.log(error)
        data.rating = 1
        data.tip = 0
        data.pay = 0
        data.review = 1
        return data
    }
} 

func().then(value => console.log(value))
console.log(func())
// console.log(await func())

console.log(greet)
/* console.log(
    greet
    .then(success => console.log({success}))
    .catch(error => console.log({error}))
) */

/* console.log('fetch',fetch('https://dog.ceo/api/breeds/image/random')
.then(response => console.log(response.json()))
) */

/*const getDog = async() => {
    const URL = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(URL)
    const json = await response.json()
    return json
}

getDog().then(value => console.log(value)) 

const sum = async (a,b) => {
    const result = a+b
    return result
}
console.log(sum(2,3)
.then(value => console.log(value)))

 */
/* const city = () =>{
    const myName = document.getElementById('city').value
    console.log(myName)
}
class Bike{
    constructor(name,color,topspeed){
        this.name=name
        this.color=color
        this.topspeed=topspeed 
        this.currentSpeed=0
    }
    zeroTosixty(){
        setTimeout(()=>{
            this.currentSpeed==0?this.currentSpeed+=60:console.log('Bike is running now!')
            console.log(this.currentSpeed)
        })
    }
    ride(){
        this.currentSpeed<=this.topspeed-10? this.currentSpeed+= 10:console.log('Bike reached its high speed')
        console.log(`Now the bike speed is ${this.currentSpeed}`)
    }
    brake(){
        if(this.currentSpeed>10){
            this.currentSpeed-=10
            console.log(`Maintain the speed at ${this.currentSpeed}`)
        }
        else{
            console.log('Now the bike is stopped or idle')
        }
    }
    stop(){
        this.currentSpeed = 0
        console.log('Stop the Bike')
        console.log(this.currentSpeed)
    }
}

const bike = new Bike('R15','blue',150) */
/* bike.zeroTosixty()
bike.ride()
bike.brake()
bike.ride()
bike.ride()
bike.brake()
bike.brake()
bike.brake()
bike.brake()
bike.brake()
bike.brake()
bike.brake()
bike.brake()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.ride()
bike.stop() */

/* let num = [1,2,3,4,5]
num.push(6)
console.log(typeof(num))
const str = 'ajay'
console.log(str.split(''))
console.log(str)
console.log(typeof(str))
num = num.join('☀️')
console.log(num) */

/* Array.prototype.myPush = function(item) {
    this[this.length]=item
    return this
}
const vehicles = ['🚗','🏍️','🚐','🚌','🛺','🚝']

vehicles.myPush('sport')
vehicles.myPush('naked')
vehicles.push('adv')
console.log(vehicles.myPush('tourer'))
console.log(Array)
console.log(Object(bike)) */

/* class Bank{
    constructor(balance){
        this.balance=balance
    }
    deposit(amount){
        this.balance+=amount
        console.log(`The current bank balance is $${this.balance}`)
    }
    withdraw(amount){
        if(this.balance>=amount){
            this.balance-=amount
            console.log(`The bank balance is $${this.balance} and the amount debited is $${amount}`)
        }
        else{
            console.log(`The requested amount is greater than the bank balance`)
        }
    }
}

const account = new Bank(10000)
account.deposit(5000)
account.withdraw(10000)
account.withdraw(7000) */

/* let num=1
while(num<6){
    console.log(num)
    num++
} */

// let play= document.getElementById('play')
// play.onclick = () => console.log('let\'s play')
/* let str = ''
let count=0
document.addEventListener('keydown',function(e){
    if(e.key=='p' && count==0){
        document.getElementById('resume').play()
        count+=1
        str=''
        console.log(count,e.key)
    }
    else if(count>=1){
        str+=e.key
        if(str[0]!=='r'){
            str=''
        }
        count+=1
        console.log(count,e.key,str)
    }
    if(e.key==='s' && str===''){
        document.getElementById('resume').pause()
        count=0
    }
    if(str==="restart"){
        document.getElementById('resume').currentTime = 0
        count=0
        str=''
        console.log(count,e.key)
    }
}) */

/* async function visAI(){
    try{
        const response = await fetch('https://www.google-analytics.com/g/collect?v=2&tid=G-BZF1WLQL8S&gtm=45je36l0&_p=311075672&cid=522671264.1686309664&ul=en-us&sr=1280x720&ir=1&_eu=EA&ngs=1&_s=1&sid=1687794496&sct=3&seg=1&dl=https://visailabs.com/careers/&dr=https://visailabs.com/&dt=Enriching every vision sensor with actionable insights&en=page_view')
        const result = await response.json()
        console.log(result)
    }
    catch(error){
        console.log('Caught an error')
    }
} */

// const private = 20

/* const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3
const avgScore1 = calcAverage(44,23,71)
const avgScore2 = calcAverage(65,54,49)
function checkWinner(dolphins,koalas){
      if(dolphins>2*koalas){
        return `Dolphins win (${dolphins} vs. ${koalas})`
      }
      else{
        return `Koalas win (${koalas} vs. ${dolphins})`
      } 
}

console.log(checkWinner(avgScore1,avgScore2)) */

/* function digitalRoot(n) {
    let sum = 0
    while(n!=0){
      sum += n%10
      n/=10
    }
    if(sum>9){
      digitalRoot(sum)
    }
    return Math.trunc(sum)
}

console.log(digitalRoot(16)) */

/* setInterval(()=>{
    console.log('hi')
},2000)
 */
// var firstname = 'AJAY'
const ajay = {
    firstname: 'Ajay',
    brothername: 'Krish',
    greet : function() {
        /* const self = this
        console.log(this)
        console.log(`Hi ${this.firstname}`)
        const hi = function(){
            console.log(`${self.firstname} is brother of ${self.brothername}`)
        }
        hi() */
        // console.log(`Hi ${this.firstname}`)
        const hi = () => {
            console.log(`${this.firstname} is brother of ${this.brothername}`)
        }
        hi()
    },
    thank : () => {
        console.log(this.brothername)
    }
}
ajay.greet()
ajay.thank()
