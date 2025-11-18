
    document.getElementById('loan-form').addEventListener('submit', function(e) {
      e.preventDefault();

      const principal = parseFloat(document.getElementById('amount').value);
      const annualInterest = parseFloat(document.getElementById('interest').value);
      const years = parseFloat(document.getElementById('years').value);

      if (isNaN(principal) || isNaN(annualInterest) || isNaN(years) || principal <= 0 || years <= 0) {
        alert("Veuillez entrer des valeurs valides.");
        return;
      }

      const monthlyInterest = annualInterest / 100 / 12;
      const numberOfPayments = years * 12;

      let monthlyPayment;

      if (monthlyInterest === 0) {
        monthlyPayment = principal / numberOfPayments;
      } else {
        const x = Math.pow(1 + monthlyInterest, numberOfPayments);
        monthlyPayment = (principal * x * monthlyInterest) / (x - 1);
      }

      document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2) + ' €';
    });

    function verifierAge() {
      let age = prompt("Entrez votre âge :");
      let resultat = document.getElementById("result1");

      age = parseInt(age);

      if (isNaN(age) || age < 0) {
        resultat.innerHTML = "❌ Veuillez entrer un âge valide.";
        resultat.style.color = "red";
      } else if (age < 18) {
        resultat.innerHTML = "👶 Vous êtes mineur.";
        resultat.style.color = "#e74c3c";
      } else {
        resultat.innerHTML = "👨 Vous êtes majeur.";
        resultat.style.color = "#27ae60";
      }
    }
    window.addEventListener('DOMContentLoaded', () => {
    // Ton code ici
  });


   