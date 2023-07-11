const getId = document.getElementById("id");
console.log(getId);
console.log(getId.textContent);

const h2Elements = document.querySelectorAll(".name");
console.log(h2Elements);


document.getElementById("addButton").addEventListener("click", function () {
  let data = document.getElementById("id");
  data.innerText = data.innerText + " This is Utkarsh!";
});

document.getElementById("colorButton").addEventListener("click", function () {
  let data = document.getElementById("id");
  data.style.color = "navy";
});

document
  .getElementById("backgroundcolorButton")
  .addEventListener("click", function () {
    let data = document.getElementById("id");
    data.style.backgroundColor = "green";
  });

document.getElementById("bioButton").addEventListener("click", function () {
  let data = document.getElementById("bio");
  data.style.display = "block";
});

document.getElementById("submitButton").addEventListener("click",function(){

    let data = document.getElementById("input").value;
    let text = document.getElementById("id") ;
    text.innerText=`Hello There !!  This is ${data} !`

})
document.getElementById("classButton").addEventListener("click",function(){
    let text = document.getElementById("id");
    text.classList.add("new")
})


