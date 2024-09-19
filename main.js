const lists = document.querySelectorAll("main ul");

lists.forEach((list, index) => {
  const items = list.querySelectorAll("li");

  console.log(`Список ${index + 1}:`);
  console.log(`Кількість елементів: ${items.length}`);

  items.forEach((item) => {
    console.log(`${item.textContent}`);
  });
});

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("ul#ingredients");

const items = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientsList.append(...items);

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("ul#gallery");

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300"></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.style.display = "flex";
gallery.style.gap = "10px";



let counterValue = 0;

const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const updateValue = () => {
  valueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  updateValue();
};

const decrement = () => {
  counterValue -= 1;
  updateValue();
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
