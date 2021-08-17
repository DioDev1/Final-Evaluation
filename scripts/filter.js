//# Filtering (4 points)

//- The currently "selected" button get the accent color (1 points)


//- Each button shows/hides correct elements (3 points)

//button : soon
const soonButton= document.querySelector("#soon");
soonButton.addEventListener("click",function(){
    inStockButton.classList.remove("selected");
    soonButton.classList.add("selected");
    allButton.classList.remove("selected");
    //- Each button shows/hides correct elements (3 points)
    hide();
    const artSoon=document.querySelectorAll(".soon");
    for (const el of artSoon) {
        el.style.display="block";

    }
});

//button: in stock
const inStockButton=document.querySelector("#inStock");
inStockButton.addEventListener("click",function(){
    inStockButton.classList.add("selected");
    soonButton.classList.remove("selected");
    allButton.classList.remove("selected");
    //- Each button shows/hides correct elements (3 points)
    hide();
    const artStock=document.querySelectorAll(".inStock");
    for (const el of artStock) {
        el.style.display="block";

    }
})

const allArticle=document.querySelectorAll("article");

//button: all
const allButton=document.querySelector("#all");
allButton.addEventListener("click",function(){
    //- The currently "selected" button get the accent color (1 points)
    inStockButton.classList.remove("selected");
    soonButton.classList.remove("selected");
    allButton.classList.add("selected");
    //- all shows elements (3 points)
    for (const el of allArticle) {
        el.style.display="block";
    }

});



//hide function 
function hide(button){
    for (const el of allArticle) {
        el.style.display="none";
       
        
    }
}