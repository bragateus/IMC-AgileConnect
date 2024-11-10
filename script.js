function calculateBMI() {
  // Pega os valores de peso e altura
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  
  // Verifica se os valores são validos
  if (height && weight && height > 0 && weight > 0) {
    // Converte a altura de cm para metros
    const heightInMeters = height / 100;
    
    // Calcula o IMC
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Exibe o resultado do IMC
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Your BMI is:</p><p class="bmi-result">${bmi.toFixed(2)}</p>`;
    
    // Variaveis para a sugestão de peso ideal
    let classification = '';
    let idealWeightRange = '';
    
    // Classifica o IMC e calcula o peso idel
    if (bmi < 18.5) {
      classification = 'Underweight';
      idealWeightRange = getIdealWeight(heightInMeters, 18.5, 24.9);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      classification = 'Healthy weight';
      idealWeightRange = getIdealWeight(heightInMeters, 18.5, 24.9);
    } else if (bmi >= 25 && bmi <= 29.9) {
      classification = 'Overweight';
      idealWeightRange = getIdealWeight(heightInMeters, 18.5, 24.9);
    } else {
      classification = 'Obese';
      idealWeightRange = getIdealWeight(heightInMeters, 18.5, 24.9);
    }
    
    // Exibe a sugestao do peso ideal
    resultDiv.innerHTML += `<p class="classification">Classification: ${classification}</p>`;
    resultDiv.innerHTML += `<p class="ideal-weight">Your BMI suggests you're a ${classification.toLowerCase()}. Your ideal weight is between ${idealWeightRange.min}kgs - ${idealWeightRange.max}kgs.</p>`;
        
  } else {
    // Se os valores não são validos
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Please enter valid values for both height and weight.</p>`;
  }
}

// Função para calcular a faixa de peso ideal com base na altura e nos valores de IMC.
function getIdealWeight(heightInMeters, minBMI, maxBMI) {
  const minWeight = minBMI * (heightInMeters * heightInMeters);
  const maxWeight = maxBMI * (heightInMeters * heightInMeters);
  return { min: minWeight.toFixed(1), max: maxWeight.toFixed(1) };
}
