i = 0;
const next = document.getElementById("next-btn");
const prev = document.getElementById("prev-btn");
const country = document.getElementById("country");
const capital = document.getElementById("capital");
const folk = document.getElementById("folk");
const addBtn = document.getElementById("btn-add");
const picture = document.getElementById("bilder");
const input1 = document.getElementById("user1");
const input2 = document.getElementById("user2");
const input3 = document.getElementById("user3");

const countries = [
  {
    land: "Sverige",
    stad: "Stockholm",
    folk: " 10 miljoner",
    picture: "images/Sweden.png",
  },
  {
    land: "Danmark",
    stad: "kobenhamn",
    folk: " 13 miljoner",
    picture: "images/Denmark.png",
  },
  {
    land: "Finland",
    stad: "Helsinki",
    folk: " 15 miljoner",
    picture: "images/Finland.png",
  },
];

country.innerHTML = countries[0].land;
capital.innerHTML = countries[0].stad;
folk.innerHTML = countries[0].folk;

next.addEventListener("click", function () {
  if (i < countries.length - 1) i++;
  country.innerHTML = countries[i].land;
  capital.innerHTML = countries[i].stad;
  folk.innerHTML = countries[i].folk;
  picture.src = countries[i].picture;
});

prev.addEventListener("click", function () {
  if (i > 0) i--;
  country.innerHTML = countries[i].land;
  capital.innerHTML = countries[i].stad;
  folk.innerHTML = countries[i].folk;
  picture.src = countries[i].picture;
});

addBtn.addEventListener("click", function () {
  //input.setAttribute("country", "value");
  // hämta texten i textrutan
  // spara den texten i arrayen = lägga till ett land i countries-arrayen dvs push
  countries.push({
    land: input1.value,
    stad: input2.value,
    folk: input3.value,
    
  });
  input1.value = "";
  input2.value = "";
  input3.value = "";
});
