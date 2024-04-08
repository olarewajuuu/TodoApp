let inputBox = document.getElementById("input-box") 
let listContainer = document.getElementById("list-container") 
let addBtn = document.getElementById("btn") 

addBtn.addEventListener('click', function(){
    if(inputBox.value === ''){
        alert("You need to write someting to do")
        // displayError = "You need to write someting to do"
        // document.getElementById("error").innerHTML = displayError;
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
})

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false) 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

