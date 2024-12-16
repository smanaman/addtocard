async function cars() {
    try {
        let res = await fetch('db.json');
        let final = await res.json();

        console.log(final);

        let body = document.getElementById('root');
        final.forEach((element) => {
            body.innerHTML += `
            
            <div class="Add-Card">
                <div class="Add-img">
                    <img src="${element.image}" alt="" srcset="" width="100%" height="100%">
                </div>
                <div class="Modeal-name">
                    <h2>Modeal:${element.make}${element.model}</h2>
                    <button class="btn ror"><i class="fa-solid fa-angle-down"></i></button>
                </div>
                <div class="Details hidden">
                    <div class="details-text">
                        <p>The ${element.year} ${element.make}${element.model} is a sleek and reliable sedan designed for performance and efficiency. It runs
                            on a ${element.engine} engine producing ${element.horsepower} horsepower, paired with either a hybrid or ${element.fuelType}
                            fuel system.
                        </p>
                    </div>
                    <div class="price">
                        <p class="buynow">$${element.price}</p>
                        <p class="doller">Buy now</p>
                    </div>
                </div>
                <div class="hover-part">
                    <div class="addtocardicon" onclick="getvalue('${element.image}', '${element.make}${element.model}', ${element.year}, '${element.fuelType}', ${element.horsepower}, ${element.price})">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="addtocardicon"><i class="fa-solid fa-cart-shopping"></i></div>
                    <div class="addtocardicon"><i class="fa-solid fa-share-nodes"></i></div>
                </div>
            </div>
            `;
        });

        addToggleListeners();
    } catch (error) {
        console.log(error);
    }
}
cars();

function addToggleListeners() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const card = button.closest('.Add-Card');
            const details = card.querySelector('.Details');

            details.classList.toggle("mystyle");
            button.classList.toggle("ror2");

            
        });
    });
}

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let count=0;
letp=document.getElementById('p')
function getvalue(image, makemodel, year, fuelType, horsepower, price) {
    cart.push({ image, makemodel, year, fuelType, horsepower, price });
    console.log(cart);
    count++
    p.textContent=count

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('your card add to wiselist')
    // window.location.reload()

}
