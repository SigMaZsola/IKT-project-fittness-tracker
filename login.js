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