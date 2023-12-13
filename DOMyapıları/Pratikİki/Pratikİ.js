// Aşağıdaki formun Ad ve Soyadı değerlerini elde edecek bir JavaScript fonksiyonu yazın.
function getFormvalue() {
    const firstName = document.getElementById('form1').elements.namedItem('fname').value;
    const lastName = document.getElementById('form1').elements.namedItem('lname').value;

    console.log('Ad:', firstName);
    console.log('Soyad:', lastName);
  }