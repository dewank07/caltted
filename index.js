const btn = document.getElementById("btn");
const tc = document.getElementById("total-class");
const ta = document.getElementById("total-attend");
const reset = document.getElementById("reset");
const ttc = document.getElementById("total-lec");
const tta = document.getElementById("lec-attend");
const percent = document.getElementById("percentage-bx");




        // ------Reset button------

reset.addEventListener("click", () => {
  tc.innerText = 00;
  ta.innerText = 00;
  percent.innerText = 0.0;
  ttc.value = 0;
  tta.value = 0;

  localStorage.clear();

  location.reload();
});


        // ------add button------


btn.addEventListener("click", (e) => {

if(Number(ttc.value)<Number(tta.value)){
    alert("Invalid Input")
}
else{
  data1[0] = Number(data1[0]) + Number(ttc.value);
  data1[1] = Number(data1[1]) + Number(tta.value);

  tc.innerText = Number(data1[0]);
  ta.innerText = Number(data1[1]);
  percent.innerText = ((data1[1] / data1[0]) * 100).toFixed(2);
  localStorage.setItem("lectures", JSON.stringify(data1));
}
  
  ttc.value = 0;
  tta.value = 0;

});




window.onload = () => {
  data1 = JSON.parse(localStorage.getItem("lectures")) || [0, 0];
  tc.innerText = Number(data1[0]);
  ta.innerText = Number(data1[1]);
  if (Number(data1[0]) == 0) {
    percent.innerText = 0.0;
  } else {
    percent.innerText = ((data1[1] / data1[0]) * 100).toFixed(2);
  }

  // update(data1)
};
