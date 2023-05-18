
var container = document.createElement("div");
container.className = "container-fluid";
var row = document.createElement("div");
row.className = "row-fluid";
var col = document.createElement("col-xl-12");
var box = document.createElement("div");
box.className = "box";
async function foo() {
  let result = await fetch("https://dog.ceo/api/breeds/image/random");
  let res1 = await result.json();
  console.log(res1);
  box.innerHTML = ` <img src="${res1.message}" class="card-img-top" alt="...">`;
}
foo();
col.append(box);
row.append(col);
container.append(row);
document.body.append(container);