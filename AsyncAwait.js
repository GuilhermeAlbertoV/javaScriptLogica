/* 
function primeiraFuncao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executado apos o 1 seg");
      resolve();
    }, 1000);
  });
}

async function segundaFuncao() {
  console.log("Começou");
  await primeiraFuncao();
  console.log("Terminou");
}

segundaFuncao();
*/

function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

async function showUsername(id) {
  const user = await getUser(id);

  console.log(`O nome do usuário é: ${user.data.first_name}`);
}

showUsername(3);
