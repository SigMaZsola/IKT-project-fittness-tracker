let first_name = document.getElementById("firstname").value
let last_name = document.getElementById("lastname").value
let password = document.getElementById("password").value
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('input');
    var allFilled = true;
    inputs.forEach(function(input) {
      if (input.value === '') {
        allFilled = false;
      }
    });
    if (allFilled) {
        window.location.href = ''; // redirect
      } else {
        alert('Valami hiányzik! 😓');
      }
  });

document.getElementById("name").value = "magizsolt"