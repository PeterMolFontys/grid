let writtenItem;
let key = "0";
let firstId = localStorage.getItem('0');
let gettingItem = localStorage.getItem(key);
let input = document.getElementById("itemText");
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        addItem();
        input.value = '';
    }
});


function checkStorage(){
    if(firstId == null){
        console.log("Storage checked but empty");
        return;
    }
    else{
        while(gettingItem != null){
            var ul = document.getElementById("lijstje");
            var li = document.createElement("li");
            gettingItem = localStorage.getItem(key)
            li.appendChild(document.createTextNode(gettingItem));
            ul.appendChild(li);
            console.log("Storage checked and added to list");
            key++;
            gettingItem = localStorage.getItem(key)
        }
    }
}

function addItem(){
    var ul = document.getElementById("lijstje");
    var li = document.createElement("li");
    writtenItem = document.getElementById("itemText").value;
    li.appendChild(document.createTextNode(writtenItem));
    ul.appendChild(li);
    localStorage.setItem(key, writtenItem);
    key++;
    input.value = '';
}

function clearList(){
    var filledlist = document.getElementById("lijstje");
    filledlist.innerHTML = '';
    localStorage.clear();
    key="0";
}