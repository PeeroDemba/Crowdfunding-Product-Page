"use strict";

const pledgem1 = document.getElementById("pledgemodal1");
const cb1 = document.getElementById("checkbox1");
const pledgem2 = document.getElementById("pledgemodal2");
const cb2 = document.getElementById("checkbox2");
const pledgem3 = document.getElementById("pledgemodal3");
const cb3 = document.getElementById("checkbox3");

const gc1 = document.getElementById("greencircle1");
const gc2 = document.getElementById("greencircle2");
const gc3 = document.getElementById("greencircle3");

let pselect2 = document.createElement("div");
let pselect3 = document.createElement("div");

let p2 = document.createElement("p");
let amount2 = document.createElement("div");
let text2 = document.createElement("input");
let btn2 = document.createElement("input");

let p3 = document.createElement("p");
let amount3 = document.createElement("div");
let text3 = document.createElement("input");
let btn3 = document.createElement("input");

function openp1() {
  gc2.style.display = "none";
  gc1.style.display = "block";
  gc3.style.display = "none";
  pledgem1.style.borderColor = "hsl(176, 50%, 47%)";
  pledgem2.style.borderColor = "#999";
  pledgem3.style.borderColor = "#999";
  pledgem2.removeChild(pselect2);
}

function openp1_2() {
  pledgem3.removeChild(pselect3);
}

function openp2() {
  btn2.setAttribute("type", "button");
  text2.setAttribute("type", "text");
  amount2.setAttribute("class", "amount");
  p2.innerHTML = "Enter your pledge";
  p2.style.color = "black";
  p2.style.opacity = "0.7";
  btn2.value = "Continue";
  text2.placeholder = "$";
  text2.style.fontSize = "1.5rem";
  text2.id = "bamboostand";
  amount2.appendChild(text2);
  amount2.appendChild(btn2);
  pselect2.appendChild(p2);
  pselect2.appendChild(amount2);
  pselect2.id = "pledgeselected1";
  pselect2.className = "show";
  pselect2.style.height = "8rem";
  pselect2.style.marginTop = "1rem";
  pselect2.style.marginBottom = "1rem";
  gc2.style.display = "block";
  gc1.style.display = "none";
  gc3.style.display = "none";
  pledgem2.appendChild(pselect2);
  pledgem2.style.borderColor = "hsl(176, 50%, 47%)";
  pledgem1.style.borderColor = "#999";
  pledgem3.style.borderColor = "#999";
  pledgem3.removeChild(pselect3);
}

function openp3() {
  btn3.setAttribute("type", "button");
  text3.setAttribute("type", "text");
  amount3.setAttribute("class", "amount");
  p3.innerHTML = "Enter your pledge";
  p3.style.color = "black";
  p3.style.opacity = "0.7";
  btn3.value = "Continue";
  text3.placeholder = "$";
  text3.style.fontSize = "1.5rem";
  text3.id = "blackeditionstand";
  amount3.appendChild(text3);
  amount3.appendChild(btn3);
  pselect3.appendChild(p3);
  pselect3.appendChild(amount3);
  pselect3.id = "pledgeselected2";
  pselect3.className = "show";
  pselect3.style.height = "8rem";
  pselect3.style.marginTop = "1rem";
  pselect3.style.marginBottom = "1rem";
  gc2.style.display = "none";
  gc1.style.display = "none";
  gc3.style.display = "block";
  pledgem3.appendChild(pselect3);
  pledgem3.style.borderColor = "hsl(176, 50%, 47%)";
  pledgem2.style.borderColor = "#999";
  pledgem1.style.borderColor = "#999";
  pledgem2.removeChild(pselect2);
}

cb1.addEventListener("click", openp1);
cb1.addEventListener("click", openp1_2);
cb2.addEventListener("click", openp2);
cb3.addEventListener("click", openp3);

const dt1 = document.getElementById("detailstitle1");
const dt2 = document.getElementById("detailstitle2");
const dt3 = document.getElementById("detailstitle3");

dt1.addEventListener("mouseover", function () {
  cb1.style.borderColor = "hsl(176, 50%, 47%)";
});
dt1.addEventListener("mouseout", function () {
  cb1.style.borderColor = "#eee";
});
dt2.addEventListener("mouseover", function () {
  cb2.style.borderColor = "hsl(176, 50%, 47%)";
});
dt2.addEventListener("mouseout", function () {
  cb2.style.borderColor = "#eee";
});
dt3.addEventListener("mouseover", function () {
  cb3.style.borderColor = "hsl(176, 50%, 47%)";
});
dt3.addEventListener("mouseout", function () {
  cb3.style.borderColor = "#eee";
});

const modal = document.getElementById("modal");
const success = document.getElementById("success");

modal.style.display = "none";
success.style.display = "none";

const bsreward = document.getElementById("bsreward");
const besreward = document.getElementById("besreward");
const overlay = document.getElementById("overlay");

function openmodal() {
  modal.style.display = "grid";
  overlay.style.display = "block";
}

bsreward.addEventListener("click", openmodal);
besreward.addEventListener("click", openmodal);

const closemodal = document.getElementById("closemodal");
closemodal.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});

function opensuccess() {
  success.style.display = "grid";
  overlay.style.display = "block";
}

btn2.addEventListener("click", opensuccess);
btn3.addEventListener("click", opensuccess);

const finish = document.getElementById("finish");
finish.addEventListener("click", function () {
  overlay.style.display = "none";
  success.style.display = "none";
});

const mr = document.getElementById("moneyraised");
const tb = document.getElementById("totalbackers");
const p = document.getElementById("progress");
const left2 = document.getElementById("left2");
const left3 = document.getElementById("left3");
const left1 = document.getElementById("left1");
const left4 = document.getElementById("left4");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");

function newpledge2() {
  let nmr2 = 89914 + Number(text2.value);
  mr.innerHTML = "$" + nmr2;
  let ntb2 = 5007;
  tb.innerHTML = ntb2 + 1;
  let np_2 = nmr2;
  let np2_2 = np_2 / 1000;
  let np3_2 = np2_2 + "%";
  p.style.width = np3_2;
  modal.style.display = "none";
  left2.innerHTML = "100";
  left1.innerHTML = "100";
  l1.innerHTML = "100";
  l2.innerHTML = "64";
  left3.innerHTML = "64";
  left4.innerHTML = "64";
}
function newpledge3() {
  let nmr3 = 89914 + Number(text3.value);
  mr.innerHTML = "$" + nmr3;
  let ntb3 = 5007;
  tb.innerHTML = ntb3 + 1;
  let np_3 = nmr3;
  let np2_3 = np_3 / 1000;
  let np3_3 = np2_3 + "%";
  p.style.width = np3_3;
  modal.style.display = "none";
  left3.innerHTML = "63";
  left4.innerHTML = "63";
  l1.innerHTML = "101";
  l2.innerHTML = "63";
  left2.innerHTML = "101";
  left1.innerHTML = "101";
}

btn2.addEventListener("click", newpledge2);
btn3.addEventListener("click", newpledge3);

const bookmark = document.getElementById("bookmark");
const bmlogo = document.getElementById("bmlogo");
const icon1 = document.getElementById("icon1");
const bm = document.getElementsByClassName("bookmark")[0];

bm.addEventListener("click", function () {
  if (bookmark.className == "tg") {
    bookmark.removeAttribute("class");
    bookmark.style.color = "hsl(176, 72%, 28%)";
    bookmark.style.backgroundColor = "#E0FFFF";
    bookmark.innerHTML = "Bookmarked";
    bookmark.style.width = "14rem";
    icon1.style.color = "white";
    bmlogo.style.backgroundColor = "hsl(176, 72%, 28%)";
  } else if (!bookmark.hasAttribute("class")) {
    bookmark.setAttribute("class", "tg");
    bookmark.style.color = "hsl(0, 0%, 48%)";
    bookmark.style.backgroundColor = "#eee";
    bookmark.innerHTML = "Bookmark";
    bookmark.style.width = "12rem";
    icon1.style.color = "#9da1aa";
    bmlogo.style.backgroundColor = "#333";
  }
});

const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");
const closemenu = document.getElementById("closemenu");

hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  dropdown.style.display = "block";
  closemenu.style.display = "block";
  overlay.style.display = "block";
});

closemenu.addEventListener("click", function () {
  hamburger.style.display = "block";
  dropdown.style.display = "none";
  closemenu.style.display = "none";
  overlay.style.display = "none";
});

let mq = window.matchMedia("(max-width: 767px)");
window.addEventListener("resize", function () {
  if (modal.style.display == "grid" || success.style.display == "grid") {
    overlay.style.display = "block";
  } else if (mq.matches && dropdown.style.display == "block") {
    hamburger.style.display = "none";
    closemenu.style.display = "block";
    overlay.style.display = "block";
  } else if (mq.matches == false) {
    overlay.style.display = "none";
    hamburger.style.display = "none";
    closemenu.style.display = "none";
    dropdown.style.display = "none";
  } else if (mq.matches) {
    hamburger.style.display = "block";
    closemenu.style.display = "none";
    overlay.style.display = "none";
  }
});
