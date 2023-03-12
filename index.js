const active="rate active"
const inactive="rate inactive"
const stars=[...document.getElementsByClassName("rate")]
let score=[0,0,0,0,0]
// Listening to ratings
document.getElementById("s1").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[0]=1
    corrector()
})
document.getElementById("s2").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[1]=1
    corrector()
})
document.getElementById("s3").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[2]=1
    corrector()
})
document.getElementById("s4").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[3]=1
    corrector()
})
document.getElementById("s5").addEventListener("click",function(){
    for(let i=0;i<score.length;i++){
        score[i]=0
    }
    score[4]=1
    corrector()
})
// Clicked Rating Color Change
function corrector(){
    for(let i=0;i<score.length;i++){
        if(score[i]===0)stars[i].className=inactive
        else stars[i].className=active
    }
}
// Submit Button
const displayScreen=document.getElementById("selected-score")
const flipperty=document.getElementById("thankyou-page")
const flipperrt=document.getElementById("rating-page")
document.getElementById("submit-btn").addEventListener("click",function(){
    let rating=-1
    for(let i=0;i<score.length;i++){
        if(score[i]===1){
            rating=i+1
            break
        }
    }
    if(rating!=-1){
        flipperrt.style.display="none"
        flipperty.style.display="flex"
        displayScreen.textContent=`You selected ${rating} out of 5`
    }
    else{
        alert("Kindly rate any valid input [1-5]")
    }
})