function geeting(name, surname) {
  let info = `Merhaba ${name} ${surname}`;
  return info;
}

let geetingInfo = geeting("Duygu", "Akkuş");
console.log(geetingInfo);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

domIdWriteInfo("write", geeting("name", "surname"));
