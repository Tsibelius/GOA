window.onload = () => {
  let listEl = document.getElementById("todo-list");
  let inputEl = document.getElementById("todo-input");
  let errEl = document.getElementById("input-err");
  let addBtn = document.getElementById("add-btn");

  addBtn.addEventListener("click", () => {
    let taskText = inputEl.value;

    if (taskText === "") {
      errEl.style.display = "block"; 
    }
    
    else {
      errEl.style.display = "none"; 

      let row = document.createElement("div");
      row.className = "todo-item";

      let label = document.createElement("span");
      label.textContent = taskText;

      let deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", () => {
        row.remove();
      });

      row.appendChild(label);
      row.appendChild(deleteBtn);
      listEl.appendChild(row);

      inputEl.value = ""; 
    }
  });
};
