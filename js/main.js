(function () {
  var form = document.getElementById('form');
  var status = document.getElementById('form-status');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Ceci est un site de démonstration : aucun message n’est envoyé.';
    status.focus();
  });
})();
