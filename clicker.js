
var countClickS = 1;
const money = 0;
const multiP = 1;
var localStorage = window.localStorage;


document.getElementById("buy1").textContent = localStorage.getItem("2xCost");

const src = localStorage.getItem("corgiStatus");
document.getElementById("clickDog").setAttribute("src", src);
const body = document.getElementById("bg");
body.style.backgroundColor = localStorage.getItem("bgColor");

//get values from local storage
document.getElementById("C_Count").textContent = localStorage.getItem("clicks");
document.getElementById("M_Count").textContent = localStorage.getItem("money");
document.getElementById("Multi").textContent = localStorage.getItem("multi");



//click dog
document.getElementById( "clickDog" ).onclick = function() {

    //adding value after click
   addValue(JSON.parse(localStorage.getItem("clicks")), 1);
   //let myNumber = Number(localStorage.getItem("clicks"));

   addMoney(JSON.parse(localStorage.getItem("money")), 1 * localStorage.getItem("multi"));

    //showMoney(money);
    return;
};
//linerial


function addValue(value, amount){
    value = amount + value;
    printValue(value);
    localStorage.setItem("clicks", JSON.stringify(value));
    return value;
}

function printValue(value){
    document.getElementById("C_Count").textContent = value;
    return value;
}




//money handling

function addMoney(mon, adds){
    mon = mon + adds;
    printMoney(mon);
    localStorage.setItem("money", JSON.stringify(mon));
    return mon;
}



function showMoney(value){
    value = value;
    localStorage.setItem("money", JSON.stringify(money));
}

function printMoney(value){
    document.getElementById("M_Count").textContent = value;
    return value;
}

//multiplay handling


function addMulti(newMulti){
    newMulti = localStorage.getItem("multi") * 2;
    //printMoney(mon);
    localStorage.setItem("multi", JSON.stringify(newMulti));
    return;
}

//shop
//BUY 1
const buy1element = document.getElementById("buy1");

buy1element.addEventListener("click", function(){
    const M = Number(localStorage.getItem("money"));
    let cost = 100;
    cost = Number(localStorage.getItem("2xCost"));
    if(M >= cost){
        localStorage.setItem("money", M - cost);
        alert("You bought 2x multiplayer");
        addMulti(2);

        //update cost price x5
        cost = cost * 5;
        localStorage.setItem("2xCost", cost);
        document.getElementById("buy1").textContent = localStorage.getItem("2xCost");
        console.log(cost);
        location.reload();
    }else{
        alert("You don't have enought money");
    }
    //after buying hide button
    //    buy1element.hidden = true;
    //    return buy1element.hidden = true;
})

//BUY 2
const buy2element = document.getElementById("buy2");

localStorage.getItem("steroidCost");

buy2element.addEventListener("click", function(){
    const M = Number(localStorage.getItem("money"));
    let cost = 1000;
    cost = Number(localStorage.getItem("steroidCost"));
    if(M >= cost){
        localStorage.setItem("money", M - cost);
        alert("You give steroids for your corgi");
        const corgi = document.getElementById("clickDog");
        //corgi.hidden = true;
        //corgi.remove();

        corgi.setAttribute("src", "./assets/dogSteroids.png");
        localStorage.setItem("corgiStatus", "./assets/dogSteroids.png");

        localStorage.setItem("steroidCost", 1000);
        
        location.reload();
    }else{
        alert("You don't have enought money");
    }

})

//BUY 3
const buy3element = document.getElementById("buy3");

localStorage.getItem("steroidCost");

buy3element.addEventListener("click", function(){
    const M = Number(localStorage.getItem("money"));
    let cost = 10000;
    
    if(M >= cost){
        localStorage.setItem("money", M - cost);
        
        const bg = document.getElementById("bg");
        bg.style.backgroundColor = "black";
        //corgi.hidden = true;
        //corgi.remove();

        localStorage.setItem("bgColor", "black");
        
        location.reload();
    }else{
        alert("You don't have enought money");
    }

})


//Buy 4

const buy4element = document.getElementById("buy4");
const catSong = document.getElementById("song");
buy4element.addEventListener("click", function(){
    const M = Number(localStorage.getItem("money"));
    let cost = 50000;
    
    if(M >= cost){
        localStorage.setItem("money", M - cost);
        
       
        
        catSong.play();
        setTimeout(() => {
            catSong.pause();
        }, 40000)
        
        //location.reload();
        alert("You won the game congrats!!")
    }else{
        alert("You don't have enought money");
    }

})
//reset game
const resetDiv = document.getElementById("reset");

resetDiv.addEventListener("click", function(){
    alert("resset")
    localStorage.setItem("clicks", 0);
    localStorage.setItem("money", 0);
    localStorage.setItem("multi", 1);
    localStorage.setItem("2xCost", 100);
    localStorage.setItem("corgiStatus", "./assets/dog.png");
    localStorage.setItem("bgColor", "##5F9DF7");
    location.reload();
})


