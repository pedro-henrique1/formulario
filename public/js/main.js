const input = document.getElementById("inputLogin");
const inuptSenha = document.getElementById("inputSenha");
const buttom = document.getElementById("button");
const mostraSenha = document.getElementById("mostraSenha");

buttom.addEventListener("click", event => {
  event.preventDefault();
  verificaInput();
  console.log(input.value);
  limpaInput();
});
function verificaInput() {
  if (input.value.trim() == "" || inuptSenha.value.trim() == "") {
    swal({
      title: "algo errado",
      text: "preencha os campos corretamente",
      icon: "error"
    });
  } else {
    return true;
  }
}
function limpaInput() {
  input.value = "";
  inuptSenha.value = "";
}

mostraSenha.addEventListener("click", () => {
  if (inuptSenha.getAttribute("type") == "password") {
    inuptSenha.setAttribute("type", "text");
  } else {
    inuptSenha.setAttribute("type", "password");
  }
});
