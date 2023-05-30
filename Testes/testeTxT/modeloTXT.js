function cadastrar() {
  var dados1 = document.getElementById("firstName");
  var dados2 = document.getElementById("lastName");
  var data = new Date();
  var horario = data.getHours();

  var bom;
  if (horario >= 0 && horario < 12) {
    bom = "Bom dia";
  } else if (horario < 18) {
    bom = "Boa tarde";
  } else if (horario < 23) {
    bom = "Boa noite";
  }

  if (dados1.value == "" || dados2.value == "") {
    alert("Insira seu Nome e seu sobre Nome");
  } else {
    alert(`${bom} ${dados1.value} ${dados2.value}`);
  }
}
