let first_name = document.getElementById("firstname").innerHTML
let last_name = document.getElementById("lastname").innerHTML
let password = document.getElementById("password")
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('input');
    var allFilled = true;
    var not_long  = true
    inputs.forEach(function(input) {
      if (input.value === ''){
        allFilled = false;
      }
      if (password.value.length <= 8){
        not_long = false
      }
    });
    if (allFilled) {
        window.location.href = 'index.html';
      } else {
        alert('Valami hiányzik! 😓');
      }
    
    if (!not_long){
      alert('Minimum 8 karakter hosszúnak kell lennie a jelszónak! 😓');
    }
  });
