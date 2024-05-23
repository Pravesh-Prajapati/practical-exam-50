
let arr = JSON.parse(localStorage.getItem("detail")) || [];
function save() {
    let recipe = document.getElementById("recipe").value;
    let title = document.getElementById("title").value;
    let ingrediants = document.getElementById("ingrediants").value;
    if (recipe =="" ||title== "" || ingrediants=="") {
        let para = document.getElementById("para"); 
        para.innerHTML="All fields required";
        para.style.color="red";
        para.style.fontSize="25px"
            return false;
        }
     if (!isNaN(recipe)|| !isNaN(title)|| !isNaN(ingrediants)) {
        let para = document.getElementById("para"); 
        para.innerHTML="Numbers not valid";
        para.style.color="red";
        para.style.fontSize="25px"
            return false;
    }
    let data = {
        recipe,
        title,
        ingrediants
    }
    // let arr = JSON.parse(localStorage.getItem("detail")) || [];
    arr.push(data);
    localStorage.setItem("detail", JSON.stringify(arr));
    location.reload();
}
function showdata() {
    arr.map((value, index) => {
        console.log(value);
       
        let container2 = document.getElementById("container2");
        let div= document.createElement("div");
        div.style.width="30%";
        // div.classList="div1";
        div.style.marginTop="30px"
        div.innerHTML = `<div style="color: rgb(2, 2, 2); background-color:white; border-radius: 20px; padding: 15px 30px; box-shadow: 1px 1px 15px 15px rgb(82, 80, 80)" class="div1">
        <div>
            <h2 style="color: blue;">RECIPE</h2>
            <h3>${value.recipe}</h3>
        </div>
        <div>
            <h2 style="color: blue;">TITLE</h2>
            <h3>${value.title}</h3>
        </div>
        <div>
            <h2 style="color: blue;">INGREDIANTS</h2>   
            <h3>${value.ingrediants}</h3>
        </div>
        <div style="display:flex; gap:10px">
            <button style= "padding:10px 20px background-color:white;margin-top:10px;  border-radius: 20px; padding: 10px 30px; border: none;cursor:pointer ; color:green;box-shadow: inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3)" onclick="viewdata(${index})">View</button>

            <button style= "padding:10px 20px background-color:white;margin-top:10px;  border-radius: 20px; padding: 10px 30px; border: none;cursor:pointer ; color:green;box-shadow: inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3)" onclick="deletedata(${index})">delete</button>
        </div>
    </div>`
    container2.appendChild(div);
    })
}
showdata();

function deletedata(index) {
   arr.splice(index,1);
   localStorage.setItem("detail", JSON.stringify(arr));
   location.reload();
}
function viewdata(index) {
    let res = arr[index];
    console.log(res);
    document.getElementById("recipe").value = res.recipe;
     document.getElementById("title").value = res.title;
    document.getElementById("ingrediants").value = res.ingrediants;
    document.getElementById("index").value = index;

}
function update() {
    let recipe = document.getElementById("recipe").value;
    let title= document.getElementById("title").value;
    let ingrediants = document.getElementById("ingrediants").value;
    let index= document.getElementById("index").value;
   
    let data = {
        recipe,
        title,
        ingrediants,
    }
    // let arr = JSON.parse(localStorage.getItem("detail")) || [];
    arr.splice(index,1,data);
    // arr.push(data);
    localStorage.setItem("detail", JSON.stringify(arr));
    location.reload();
};


