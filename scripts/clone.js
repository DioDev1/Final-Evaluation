//# Cloning (4 points)

//- Card HTML template with background image and availability overlay (1 point)

const original=document.querySelector("#cards article");
//- Cloning for all the victims in data.js (victimsArray) (1 point)
for (const el of victimsArray) {
    const fake=original.cloneNode(true);
    document.querySelector("#cards").append(fake);
    fake.querySelector("img").src=el.pictureUrl;
    
    //- Customization with the 2 possible availability states (2 points)
    if (el.quantity>0) {
        fake.querySelector("span").innerText="IN STOCK";
        fake.querySelector("span").classList.add("stock");
        fake.classList.add("inStock");
        
    } else {
        fake.querySelector("span").innerText="SOON";
        fake.classList.add("soon");
    }
}
original.remove();