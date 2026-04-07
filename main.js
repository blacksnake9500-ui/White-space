let yosh = 18;

if (yosh >= 18) {
  console.log("siz katta yoshdasiz");
} else {
  console.log("Siz kichkinasiz");
}

let btn = document.getElementById("btn");
let text = document.getElementById("text");

btns.addEventListener("click", () => {
  if (text.textContent === "Cobra") {
    text.textContent = "Anaconda";
  } else {
    text.textContent = "Cobra";
  }
});

let btnn = document.getElementById("btnn");
let backk = document.getElementById("backk");

btnn.addEventListener("click", () => {
  if (backk.style.display === "block") {
    backk.style.display = "none";
  } else {
    backk.style.display = "block";
  }
});


console.log("SALOHIDDIN");


// 1.
// Kvadrat tomoni 5. Yuzini chiqaring.

// 👉 (faqat console.log(5 * 5) kabi)

console.log("1-masala", 5 * 5);

// 2.
// Kvadrat tomoni 8. Perimetrini chiqaring.

console.log("2-masala", 16 * 2);

// 3.
// To‘g‘ri to‘rtburchak: 4 va 6.
// Yuzini chiqaring.

console.log("3-masala", 4 * 6);

// 4.
// To‘g‘ri to‘rtburchak: 3 va 7.
// Perimetrini chiqaring.

console.log("4-masala", 10 * 2);

// 5.
// Doira radiusi 3.
// Yuzini chiqaring (3.14 ishlating).

// 🟡 Biroz o‘ylash kerak

console.log("5-masala", 9 * 3.14);

// 6.
// 10 sonining kvadratini chiqaring.

console.log("6-masala", 10 * 2);

// 7.
// 4 sonining kubini chiqaring.

console.log("7-masala", 16 * 4);

// 8.
// 2 + 3 + 5 yig‘indisini chiqaring.

console.log("8-masala", 2 + 3 + 5);

// 9.
// 10 va 20 ning o‘rtacha qiymatini chiqaring.

console.log("9-masala", 30 / 2);

// 10.
// 120 sekundni minutga aylantirib chiqaring.

console.log("10-masala", 120 / 60);
