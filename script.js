arr = [
  ];
  function rngstuff(){
  //bubble sorting
  let sorted = false;
  do {
    for (i=0;i<arr.length-1;i++){
      if (arr[i][0] > arr[i+1][0]){
        let a = arr[i];
        let b = arr[i+1];
        arr[i] = b;
        arr[i+1] = a;
      };
    };
    let sorta = true
    for (i=0;i<arr.length-1;i++){
      if (arr[i][0]>arr[i+1][0]){
        sorta = false
      }
    }
  if (sorta===true){
    sorted = true
  }
  }
    while (sorted === false);
  // rng
  let total = 0;
  for (i in arr) {
    total = total + arr[i][0];
    }
  let result = null;
  let rng = Math.random()*total;
  thing = 0;
  for (i in arr) {
    thing = thing + arr[i][0];
  if(rng < thing){
    result = arr[i];
    break
  };
  };
  return result
}

const add = document.getElementById("add")
const inputname = document.getElementById("name")
const inputchance = document.getElementById("chance")
const rollbutton = document.getElementById("roll")
rollbutton.addEventListener("click",function(){
  rollbutton.innerText = `Roll! Result: ${rngstuff()[1]}`
})
function newe(){
  let chance = inputchance.value
  if (isNaN(Number(chance)) === false){
    let stuffs = arr.length + 1
    arr[arr.length] = [Chance = Number(chance), Name = inputname.value, ID = "val" + stuffs]
    document.getElementById("hinttext2").innerText = "Chance"
  let name = inputname.value
  console.log(name)
  let newval = document.getElementById("value").cloneNode(true)
  newval.setAttribute("id","val" + arr.length)
  newval.style.left = "0%"
    newval.querySelector("#valstuff").textContent = `Name = "${inputname.value}", Chance = ${Number(chance)}, ID = ${arr.length} `
  document.getElementById("container").appendChild(newval)
  console.log(newval)
  }else{
    console.log("wrong")
    document.getElementById("hinttext2").innerText = "ERROR: not a number"
  }
}
add.addEventListener("click",newe)
del = document.getElementById("delete")
del.addEventListener("click",function(){
  for(let v of Array.from(document.getElementById("container").children)){
    if (v.getAttribute("id") !== "value"){
    v.remove()
    }
  }
  arr = []
})
document.getElementById("confirmdel").addEventListener("click",function(){
  let delid = document.getElementById("delid").value
  if(isNaN(Number(delid)) === false){
    document.getElementById("confirmdel").innerText = "Delete by ID"
    for(let i in arr){
      console.log(arr[i])
      if (arr[i] !== null && arr[i] !== undefined){
      if(arr[i][2] === "val"+Number(delid)){
        arr[i] = null
        console.log("deleteah")
        console.log(document.getElementById("val"+Number(delid)))
        document.getElementById("val"+Number(delid)).remove()
        console.log(arr)
        // do stuff
    console.log(arr)
    for (let i in arr){
      console.log(arr[i])
      passway = false
      if (arr[i] !== null){
        if (arr[i] !== undefined){
        passway = true
        }
      }
      if(passway === true){
      console.log(document.getElementById(arr[i][2]))
      i = Number(i)
      ie = i + 1
      console.log(ie + " teh rel?" + Number(delid))
      if(ie > Number(delid)){
        console.log(arr)
        ea = arr[i]
        ae = document.getElementById("val"+ie)
        ae.setAttribute("id",`val${ie-1}`)
        ae.querySelector("#valstuff").textContent = `Name = "${arr[i][0]}", Chance = ${arr[i][1]}, ID = ${ie-1} `
        arr[i] = null
        arr[i-1] = [ea[0],ea[1],`val${ie-1}`]
      }
    }
  }
  console.log(arr)
  // fix empty stuff
    let fixarr = []
    for (let i in arr){
      if (arr[i] !== null){
        if (arr[i] !== undefined){
      fixarr[fixarr.length] = arr[i]
        }
      }
    }
    arr = fixarr
      }
    }
    }
  }else{
    document.getElementById("confirmdel").innerText = "Delete by ID: Not a Number!"
  }
})