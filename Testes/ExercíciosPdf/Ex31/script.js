function mov() {
  let quad1 = document.getElementById("quad1");
  let quad2 = document.getElementById("quad2");
  let quad3 = document.getElementById("quad3");
  let quad4 = document.getElementById("quad4");

  quad1.style.backgroundColor = "transparent";
  quad2.style.backgroundColor = "red";

  setTimeout(() => {
    quad2.style.backgroundColor = "transparent";
    quad3.style.backgroundColor = "red";
  }, 1000);

  setTimeout(() => {
    quad3.style.backgroundColor = "transparent";
    quad4.style.backgroundColor = "red";
  }, 2000);

  setTimeout(() => {
    quad4.style.backgroundColor = "transparent";
    quad3.style.backgroundColor = "red";
  }, 3000);

  setTimeout(() => {
    quad2.style.backgroundColor = "red";
    quad3.style.backgroundColor = "transparent";
  }, 4000);
  setTimeout(() => {
    quad1.style.backgroundColor = "red";
    quad2.style.backgroundColor = "transparent";
  }, 5000);
}
