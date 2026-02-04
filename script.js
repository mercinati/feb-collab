const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const yes1 = document.getElementById("yes1");
const no1 = document.getElementById("no1");
const msg1 = document.getElementById("msg1");

const yes2 = document.getElementById("yes2");
const no2 = document.getElementById("no2");
const msg2 = document.getElementById("msg2");

// Page navigation
yes1.onclick = () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
};

yes2.onclick = () => {
  page2.classList.add("hidden");
  page3.classList.remove("hidden");
};

// Escape logic (mobile-safe)
function escape(btn) {
  const isMobile = window.innerWidth < 640;

  const x = isMobile
    ? (Math.random() > 0.5 ? 140 : -140)
    : (Math.random() > 0.5 ? 320 : -320);

  const y = Math.random() * 120 - 60;

  btn.style.transform = `translate(${x}px, ${y}px)`;
}

// Page 1
function handleNo1() {
  escape(no1);
  msg1.classList.remove("hidden");
}
no1.onmouseenter = handleNo1;
no1.onclick = handleNo1;

// Page 2 messages
const messages = [
  "arey yrr kr lo na 🥺",
  "essa karogi 😭",
  "Free hi to rhti ho 😒",
  "please 🙏",
  "soch loo 🤔",
  "ek baar firse soch lo 😌",
  "last chance 😤"
];

let i = 0;

function handleNo2() {
  escape(no2);
  msg2.classList.remove("hidden");
  msg2.innerText = messages[i % messages.length];
  i++;
}
no2.onmouseenter = handleNo2;
no2.onclick = handleNo2;

// Hearts animation
const hearts = document.getElementById("hearts");

function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "🤍";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = Math.random() * 16 + 12 + "px";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 7000);
}

setInterval(createHeart, 500);
