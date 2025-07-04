/**
 * Função para calcular o maior produto de três números distintos em um array
 * @param {number[]} nums - Array de números inteiros
 * @returns {number} Maior produto possível de três números distintos
 */
function maximumProduct(nums) {
  // Ordena o array em ordem crescente
  nums.sort((a, b) => a - b);

  const n = nums.length;

  // O maior produto pode ser:
  // 1. Os três maiores números (últimos três do array ordenado)
  // 2. Os dois menores números (pode ser negativo) multiplicado pelo maior número
  const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const option2 = nums[0] * nums[1] * nums[n - 1];

  // Retorna o maior entre as duas opções
  return Math.max(option1, option2);
}

/**
 * Função para formatar a explicação do cálculo
 * @param {number[]} nums - Array de números inteiros
 * @param {number} result - Resultado do cálculo
 * @returns {string} Explicação formatada
 */
function formatCalculation(nums, result) {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const option2 = nums[0] * nums[1] * nums[n - 1];

  let explanation = `Array ordenado: [${nums.join(', ')}]<br><br>`;
  explanation += `Possibilidade 1: ${nums[n - 3]} × ${nums[n - 2]} × ${nums[n - 1]} = ${option1}<br>`;
  explanation += `Possibilidade 2: ${nums[0]} × ${nums[1]} × ${nums[n - 1]} = ${option2}<br><br>`;
  explanation += `Maior valor entre as possibilidades: ${result}`;

  return explanation;
}

// Elementos do DOM
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');
const numbersInput = document.getElementById('numbers');
const resultDiv = document.getElementById('result');
const calculationDiv = document.getElementById('calculation');

// Evento para o botão de cálculo
calculateBtn.addEventListener('click', () => {
  try {
    // Converte a entrada do usuário em um array de números
    const nums = numbersInput.value
      .split(',')
      .map(num => parseInt(num.trim(), 10))
      .filter(num => !isNaN(num));

    if (nums.length < 3) {
      throw new Error('Por favor, insira pelo menos 3 números válidos.');
    }

    // Calcula o resultado
    const result = maximumProduct(nums);

    // Exibe o resultado e o cálculo
    resultDiv.textContent = `Maior produto possível: ${result}`;
    calculationDiv.innerHTML = formatCalculation(nums, result);
  } catch (error) {
    resultDiv.textContent = 'Erro: ' + error.message;
    calculationDiv.textContent = '';
  }
});

// Evento para o botão de reset
resetBtn.addEventListener('click', () => {
  numbersInput.value = '';
  resultDiv.textContent = '';
  calculationDiv.textContent = '';
});
