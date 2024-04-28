document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const kwh = parseFloat(document.getElementById('kwh').value);
    if (!isNaN(kwh)) {
        const cost = kwh * 0.15; // Costo hipotético por kilovatio
        document.getElementById('result').innerHTML = `<p>Has utilizado ${kwh} kilovatios este mes.</p><p>El costo estimado es $${cost.toFixed(2)}.</p>`;
    } else {
        document.getElementById('result').innerHTML = "<p>Por favor, introduce un número válido de kilovatios.</p>";
    }
});
