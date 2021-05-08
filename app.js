let add_select_btn = document.querySelector("#add_select_btn");
let add_input_btn = document.querySelector("#add_input_btn");
let delete_btn;
/**
 * @param {string} rootElementSelector 
 * @param {string} selectElementSelector
*/

function addSelectClone(rootElementSelector, selectElementSelector) {
    let form_box = document.querySelector(rootElementSelector);
    let select = document.querySelector(selectElementSelector);
    let column = document.createElement("div");
    column.setAttribute("class","col-md-4");
    let newSelect = select.cloneNode();
    column.appendChild(newSelect);

    let values = document.querySelectorAll(".value-input");
    let names = document.querySelectorAll(".name-input");

    for(let i = 0; i < values.length; i++ ){
        if(values[i] != "" && names[i] != "") {
            let option = document.createElement("option");
            option.innerText = names[i].value;
            option.setAttribute("value", values[i].value)
            newSelect.appendChild(option);
        }
    }

    form_box.appendChild(column);
}

/**
 * @param {string} rootElementSelector 
 * @param {string} valueLabelElementSelector
 * @param {string} valueElementSelector 
 * @param {string} nameLabelElementSelector
 * @param {string} nameElementSelector
 * 
*/

function addInputClone(rootElementSelector, valueLabelElementSelector, valueElementSelector, nameLabelElementSelector, nameElementSelector) {
    let form_box = document.querySelector(rootElementSelector);
    let labelValue = document.querySelector(valueLabelElementSelector);
    let value = document.querySelector(valueElementSelector);
    let labelName = document.querySelector(nameLabelElementSelector);
    let name = document.querySelector(nameElementSelector);
    let first_column = document.createElement("div");
    let second_column = document.createElement("div");
    let third_column = document.createElement("div");
    first_column.setAttribute("class","col-md-4 offset-2");
    second_column.setAttribute("class","col-md-4");
    third_column.setAttribute("class","col-md-2 mt-4");
    let cloneValue = value.cloneNode();
    let cloneName = name.cloneNode();
    let btn = document.createElement("button");
    btn.innerText = "Delete"
    btn.setAttribute("class","btn btn-sm btn-outline-danger delete-input")
    third_column.append(btn)
    cloneValue.value = "";
    cloneName.value = "";
    first_column.appendChild(labelValue.cloneNode());
    first_column.appendChild(cloneValue);
    second_column.appendChild(labelName.cloneNode());
    second_column.appendChild(cloneName);
    form_box.appendChild(first_column);
    form_box.appendChild(second_column);
    form_box.appendChild(third_column);
    delete_btn = document.querySelectorAll(".delete-input");
    rem();
  
    
}

add_select_btn.addEventListener("click", () => {
    addSelectClone("#select_box", ".form-select", {1 : "one", 2 : "two"});
    document.querySelector("#value_1").value = "";
    document.querySelector("#name_1").value = "";
    document.querySelectorAll("#input_box div").forEach((item, index) => {
        if(index > 2) {
            item.remove();
        }
    })    
})

add_input_btn.addEventListener("click", () => {
    addInputClone("#input_box", ".value", "#value_1", ".name", "#name_1");
});


function rem(){
    delete_btn.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            item.parentNode.previousElementSibling.previousElementSibling.remove();
            item.parentNode.previousElementSibling.remove();
            item.parentNode.remove();
        })
    });
}