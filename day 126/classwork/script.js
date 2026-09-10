window.onload = () => {
  let input = document.getElementById("taskInput");
  let addBtn = document.getElementById("addBtn");
  let list = document.getElementById("taskList");

  addBtn.addEventListener("click", () => {
    let text = input.value;

    if (text !== "") {
      let li = document.createElement("li");
      li.textContent = text;

      li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
      });

      list.appendChild(li);

      input.value = "";
    }
  });
};

