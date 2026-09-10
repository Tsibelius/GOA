window.onload = () => {
  let nameInput = document.getElementById("nameInput");
  let emailInput = document.getElementById("emailInput");
  let passInput = document.getElementById("passInput");

  let title1 = document.getElementById("title1");
  let title2 = document.getElementById("title2");
  let title3 = document.getElementById("title3");

  nameInput.oninput = () => {
    title1.textContent = nameInput.value;
  };

  emailInput.onchange = () => {
    title2.textContent = emailInput.value;
  };

  //
  passInput.onchange = () => {
    title3.textContent = passInput.value;
  };
};
