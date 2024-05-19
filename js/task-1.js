const categorieList = document.querySelector("#categories");
const categorieItem = categorieList.querySelectorAll("li.item");
console.log("Numbers of categories:", categorieItem.length);

categorieItem.forEach((item) => {
  const categorieTitle = item.querySelector("h2").textContent;
  const sumbItem = item.querySelectorAll("li");
  console.log("Category:", categorieTitle);
  console.log("Elements:", sumbItem.length);
});
