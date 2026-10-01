let menu = ["Burger","Pizza","Biryani"];
let price = [180,300,220];

let burgerQuantity = 0;
let pizzaQuantity = 0;
let biryaniQuantity = 0;

let total = 0;

let menuBox = document.getElementById("menu");

let buyFood = (i) => {
    if (i === 0) {
        burgerQuantity++;
        document.getElementById("burgerQuantity").innerText = burgerQuantity;
    }

    if (i === 1) {
        pizzaQuantity++;
        document.getElementById("pizzaQuantity").innerText = pizzaQuantity;
    }

    if (i === 2) {
        biryaniQuantity++;
        document.getElementById("biryaniQuantity").innerText = biryaniQuantity;
    }

    total = (burgerQuantity * 180) + (pizzaQuantity * 300) + (biryaniQuantity * 220);
    document.getElementById("total").innerText = total;
};

for (let i = 0; i < menu.length; i++) {
    menuBox.innerHTML += `
        <div class="bg-white p-5 rounded-xl shadow">
            <h3 class="text-xl font-bold">${menu[i]}</h3>
            <p class="text-orange-500 font-bold mt-2">৳${price[i]}</p>
            <button onclick="buyFood(${i})" class="bg-orange-500 text-white px-5 py-2 rounded-lg mt-3"> Buy </button>
        </div>`;
}

let welcomeBtn =
    document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", () => {
    let voice = new SpeechSynthesisUtterance(
        "Welcome to My Restaurant. Please choose your favorite food."
    );
    voice.lang = "en-US";
    speechSynthesis.speak(voice);
});