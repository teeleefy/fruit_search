const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  results = fruits.filter((fruit) => {
    return fruit.toLowerCase().includes(str.toLowerCase());
  });
  return results;
}

function searchHandler(e) {
  let typed = e.target.value;
  if (typed.length) {
    search(typed);
    let currentInput = input.value;
    showSuggestions(search(typed), currentInput);
    suggestions.classList.add("results");
  } else {
    suggestions.innerHTML = "";
    suggestions.classList.remove("results");
  }
}

function showSuggestions(results, inputVal) {
  let ulContent = function () {
    if (inputVal.length) {
      return results
        .map((result) => {
          return `<li>${result}</li>`;
        })
        .join("");
    }
  };
  suggestions.innerHTML = ulContent();
}

function useSuggestion(e) {
  let clicked = e.target.innerText;
  input.value = clicked;
  suggestions.innerHTML = "";
  suggestions.classList.remove("results");
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
