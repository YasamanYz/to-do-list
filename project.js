const newItem = document.getElementById("newItem")
const newTitle = document.getElementById("title")


newTitle.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        addTitle(event.target.value)
    }
});


function addTitle(title) {
    const listTitleElement = document.getElementById("listTitle")
    listTitleElement.textContent = title;
    newTitle.value = ''
}

// const myList = ['fsdf', 'fdsf ', 'yasi '];

// for (let x = 0; x < myList.length; x++) {
//     addItem(myList[x])
// }

function addItem(value) {
    const lists = document.getElementById("lists")
    const newDiv = document.createElement("div")
    newDiv.setAttribute("id", "div" + value);
    newDiv.className = "zm";
    const newInput = document.createElement("input")
    newInput.setAttribute("type", "checkBox");
    newInput.setAttribute("id", "chk" + value);
    newInput.addEventListener('change', (event) => {
        if (newInput.checked) {
            addDoneItem(value)
            lists.removeChild(newDiv)

        }
    });

    const newLable = document.createElement("label")
    newLable.setAttribute("for", "item");
    newLable.innerHTML = value;
    const newButton = document.createElement("button")
    newButton.innerHTML = '&#215';
    newButton.className = "remove1";
    newButton.onclick = () => removeItem(newButton)
    newDiv.appendChild(newInput);
    newDiv.appendChild(newLable);
    newDiv.appendChild(newButton);
    lists.appendChild(newDiv);
}


newItem.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        addItem(event.target.value)
        newItem.value = ""
    }
});

function removeItem(element) {
    const listItemElement = element.parentNode
    const listElement = listItemElement.parentNode

    listElement.removeChild(listItemElement)
}



function addDoneItem(value) {
    const done = document.getElementById("done")
    const newDivDone = document.createElement("div")
    newDivDone.class = "yz";
    const newLable = document.createElement("label");
    newLable.setAttribute("for", "item");
    newLable.innerHTML = value;
    const newButton = document.createElement("button")
    newButton.innerHTML = '&#215';
    newButton.className = "remove1";
    newButton.onclick = () => removeItem(newButton)
    const newInput = document.createElement("input")
    newInput.setAttribute("type", "checkBox");
    newInput.setAttribute("id", "chk" + value);
    newInput.checked = true;
    newInput.addEventListener('change', (event) => {
        if (!newInput.checked) {
            addItem(value)
            done.removeChild(newDivDone);
        }

    });
    newDivDone.appendChild(newInput);
    newDivDone.appendChild(newLable);
    newDivDone.appendChild(newButton);
    done.appendChild(newDivDone);
}

