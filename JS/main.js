let azkar = [];
let azkar_category = [];
let choseen_azkar = [];
let unique = [];
let uniqueLenght = []
let outer = document.querySelectorAll(".outer");


/*start new quran image sectionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */



/*End new quran image sectionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */
Object.defineProperties(Array.prototype, {
    count: {
        value: function (value) {
            return this.filter((x) => x == value).length;
        },
    },
});

async function getData() {
    await fetch("./azkar.json") // first step
        .then((response) => response.json()) // second step
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                azkar.push(data[i].category);
                azkar_category.push(data[i]);
            }
            for (let i = 0; i < azkar.length; i++) {
                if (azkar.count(azkar[i]) >= 5) {
                    choseen_azkar.push(azkar[i]);
                }
            }
            unique = [...new Set(choseen_azkar)];
            console.log(unique);
        })
        .catch((error) => console.error(error));
}

getData();
let cardsOfSaba7 = "";
let cardsOfMass2 = "";
function getCategory() {
    setTimeout(function () {
        for (let j = 0; j < azkar_category.length; j++) {
            if (azkar_category[j].category == "أذكار الصباح") {
                cardsOfSaba7 += `
                <div class="inner">
                        <div class="number">${azkar_category[j].number}</div>
                        <div class="sekr sekr-bg-one">
                            <div class="azkar-text">
                            <b>${azkar_category[j].begining}</b>
                            <br>
                            ${azkar_category[j].zekr}
                        </div>
                        <div class="buttons">
                            <button class="counter-button" data-number="${azkar_category[j].count}">${azkar_category[j].count}</button>
                            <button class="repeat-button">
                            <i class="fa-solid fa-repeat"></i>
                            </button>
                        </div>
                        <b class="description">${azkar_category[j].description}</b>
                    </div>
                    </div>
                `;
            } else if (azkar_category[j].category == "أذكار المساء") {
                cardsOfMass2 += `
                <div class="inner">
                        <div class="number">${azkar_category[j].number}</div>
                        <div class="sekr sekr-bg-one">
                            <div class="azkar-text">
                            <b>${azkar_category[j].begining}</b>
                            <br>
                            ${azkar_category[j].zekr}
                        </div>
                        <div class="buttons">
                            <button class="counter-button" data-number="${azkar_category[j].count}">${azkar_category[j].count}</button>
                            <button class="repeat-button">
                            <i class="fa-solid fa-repeat"></i>
                            </button>
                        </div>
                        <b class="description">${azkar_category[j].description}</b>
                    </div>
                    </div>
                `;
            }
        }

    }, 200);
}
getCategory();
let task = document.querySelectorAll(".task")
function setData() {
    setTimeout(() => {
        let nameOftask = document.querySelectorAll(".outer p")

        for (let i = 0; i < nameOftask.length; i++) {
            if (nameOftask[i].innerText == "أذكار الصباح") {
                task[i].innerHTML += cardsOfSaba7
                console.log()

            } else if (nameOftask[i].innerText == "أذكار المساء") {
                task[i].innerHTML += cardsOfMass2
            }
        }

    }, 200)
}

setData()


function setShow(id) {
    let inner = document.querySelectorAll(`.task-${id} .inner`);
    let icon = document.querySelector(`.task-${id} .outer i`);
    icon.classList.toggle("icon-rotate")
    for (let j = 0; j < inner.length; j++) {
        inner[j].classList.toggle("show");
    }


}
setTimeout(()=>{
    let menu_items = document.querySelectorAll(".menu-items")
    for(i = 0; i<menu_items.length;i++){
        menu_items[i].addEventListener("touchstart",(e)=>{
            console.log(e)
            if(e.currentTarget.innerText == "الرئيسية"){
                location.assign("#landing")
            }
            else if(e.currentTarget.innerText == "التقويم"){
                location.assign("#calendar")

            }
            else if(e.currentTarget.innerText == "الخطط"){
                location.assign("#plans")
            }
            else if(e.currentTarget.innerText == "اتصل بنا"){
                location.assign("#contact")
            }
        })
    }
},600)
setTimeout(() => {
    let counter_button = document.querySelectorAll(".counter-button")
    let repeat_button = document.querySelectorAll(".repeat-button")
    let count = 0
    for (let i = 0; i < counter_button.length; i++) {
        counter_button[i].addEventListener("click", function (e) {
            count = e.currentTarget.dataset.number
            console.log(count)
            if (e.currentTarget.innerText > 0) {
                e.currentTarget.innerText -= 1
            }

        })
        repeat_button[i].addEventListener("click", function () {
            counter_button[i].innerHTML = count
        })
    }
}, 400)
/*start new quran image sectionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */

let Quran_parts = {
    1: "الجزء الأول",
    2: "الجزء الثاني",
    3: "الجزء الثالث",
    4: "الجزء الرابع",
    5: "الجزء الخامس",
    6: "الجزء السادس",
    7: "لجزء السابع",
    8: "الجزء الثامن",
    9: "الجزء التاسع",
    10: "الجزء العاشر",
    11: "الجزء الحادي عشر",
    12: "الجزء الثاني عشر",
    13: "الجزء الثالث عشر",
    14: "الجزء الرابع عشر",
    15: "الجزء الخامس عشر",
    16: "الجزء السادس عشر",
    17: "الجزء السابع عشر",
    18: "الجزء الثامن عشر",
    19: "الجزء التاسع عشر",
    20: "الجزء العشرون",
    21: "الجزء الحادي والعشرون",
    22: "الجزء الثاني والعشرون",
    23: "الجزء الثالث والعشرون",
    24: "الجزء الرابع والعشرون",
    25: "الجزء الخامس والعشرون",
    26: "الجزء السادس والعشرون",
    27: "الجزء السابع والعشرون",
    28: "الجزء الثامن والعشرون",
    29: "الجزء التاسع والعشرون",
    30: "الجزء الثلاثون",

};




/*start new quran image sectionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */
let quran_image = document.querySelector(".quran-image img")

let h = 21
// الخاص بحمل رقم الصفحات 
let Qcounter = 1;
// الخاص بحمل رقم الاجزاء 
let Pcounter = 1;
// الخاص بزيادة رقم الصفحات كل 21 صفحة يساوي جزء
let pageCounter = 1
// متغير غرضة عمل تشيك للpagecounter
let pageCounterFake = 22

quran_image.src = `./imgs/1/1.jpg`
setTimeout(() => {
    let quran_btns = document.querySelectorAll(".quran-btns button")
    let quran_image = document.querySelector(".quran-image img")
    let partBtn = document.querySelectorAll(".quran-part button")
    let partText = document.querySelector(".quran-part span")
    /// new wwwwwwwwwwwwwwwwwwwwwwwwww
    let nav = document.querySelectorAll("header nav ul li a")
    
    for (let i = 0; i < partBtn.length; i++) {
        partBtn[i].addEventListener("click", (e) => {
            if (e.currentTarget.dataset.direction == "left") {
                if (Pcounter >= 1 && Pcounter < 30) {
                    Pcounter += 1
                    

                    partText.innerText = Quran_parts[Pcounter]
                    if(Pcounter == 1){
                            Qcounter = 1
                            h = 21
                            quran_image.src = `./imgs/${Pcounter}/1.jpg`
                        }else if (Pcounter == 30){
                            Qcounter = 1
                            h = 21
                            quran_image.src = `./imgs/${Pcounter}/1.jpg`
                        }
                        else{
                            Qcounter = 1
                            h = 20
                            quran_image.src = `./imgs/${Pcounter}/1.jpg`
                        }

                   


                }
            } else if (e.currentTarget.dataset.direction == "right") {
                if (Pcounter > 1) {
                    Pcounter -= 1

                    partText.innerText = Quran_parts[Pcounter]
                   if(Pcounter == 1){
                            Qcounter = 1
                            h = 21
                            quran_image.src = `./imgs/${Pcounter}/1.jpg`
                        }else if (Pcounter == 30){
                            Qcounter = 1
                            h = 21
                            quran_image.src = `./imgs/${Pcounter}/1.jpg`
                        }
                        else{
                            Qcounter = 1
                            h = 20
                            quran_image.src = `./imgs/${Pcounter}/1.jpg`
                        }

                }
            }
        })
    }
    ////// new wwwwwwwwwwwwwwwwwwwwwww
    for(let i= 0;i<nav.length;i++){
        nav[i].addEventListener("touchstart",(e)=>{
            
            if(e.currentTarget.innerText == "الرئيسية"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html")
                }
                
                
            }
            else if(e.currentTarget.innerText == "التقويم"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html#calendar")
                }
                
               
                
            }
            else if(e.currentTarget.innerText == "الخطط"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html#plans")
                }
                
                
            }
            else if(e.currentTarget.innerText == "أذكار"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html#azkar")
                }
               
                
            }
            else if(e.currentTarget.innerText == "اتصل بنا"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html#contact")
                    
                }
                
            }
        })
        
    }
    // newwwwwwwwwwwwwww 2222
    for(let i= 0;i<nav.length;i++){
        nav[i].addEventListener("click",(e)=>{
            
            if(e.currentTarget.innerText == "الرئيسية"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html")
                }
                else{
                    location.assign("#landing")
                }
                
            }
            else if(e.currentTarget.innerText == "التقويم"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html#calendar")
                }
                else{
                    location.assign("#calendar")
                }
                
            }
            else if(e.currentTarget.innerText == "الخطط"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html#plans")
                }
                else{
                    location.assign("#plans")
                }
                
            }
            else if(e.currentTarget.innerText == "أذكار"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html#azkar")
                }
                else{
                    location.assign("#azkar")
                }
                
            }
            else if(e.currentTarget.innerText == "اتصل بنا"){
                if(!window.location.href.includes("index.html")){
                    location.assign("index.html#contact")
                    
                }
                
                else if(window.location.href.includes("index.html")){
                    
                    location.assign("#contact")
                }
                
            }
        })
        
    }
}, 600)

setTimeout(() => {
    let quran_btns = document.querySelectorAll(".quran-btns button")
    let quran_image = document.querySelector(".quran-image img")
    let partBtn = document.querySelectorAll(".quran-part button")
    let partText = document.querySelector(".quran-part span")
    for (let i = 0; i < quran_btns.length; i++) {
        quran_btns[i].addEventListener("click", function (e) {
            if (e.currentTarget.dataset.direction == "left") {
                if (Qcounter >= 1 && Qcounter < h) {
                    Qcounter += 1
                    quran_image.src = `./imgs/${Pcounter}/${Qcounter}.jpg`
                }
            }
            else if (e.currentTarget.dataset.direction == "right") {
                if (Qcounter > 1) {
                    Qcounter -= 1
                    quran_image.src = `./imgs/${Pcounter}/${Qcounter}.jpg`
                }


            }
        })
    }
},600);


console.log("mohamed emad")
