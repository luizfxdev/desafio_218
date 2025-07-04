Enigma do Cofre Intergaláctico 🔐🚀


Um projeto web interativo que resolve o desafio de encontrar o maior produto possível multiplicando três números distintos de uma lista.

📌 Visão Geral

No planeta Zygor, os habitantes criaram um cofre ultra-seguro que só pode ser aberto resolvendo um enigma matemático envolvendo números mágicos.

Este projeto oferece uma solução interativa onde o usuário insere uma lista de números e recebe:
✅ O maior produto possível de três números distintos.
✅ O passo a passo do cálculo, mostrando todas as combinações possíveis.
✅ Um design moderno com efeitos visuais futuristas.

🛠️ Tecnologias Utilizadas

HTML5 → Estrutura da página.

CSS3 → Estilização com animações e responsividade.

JavaScript → Lógica para resolver o enigma.

🎨 Design & Interface

Tema futurista com fundo espacial e efeitos neon.

Botões animados com efeito de brilho ao passar o mouse.

Responsivo (funciona em dispositivos móveis e desktop).


🚀 Como Usar

Insira os números no campo de entrada (separados por vírgula).

Exemplo: -10, -10, 1, 3, 2

Clique em "ABRIR" para calcular o maior produto.

Veja o resultado e a explicação detalhada.

Clique em "VOLTAR" para limpar e tentar novamente.

📋 Exemplos de Teste

Entrada	Saída Esperada	Explicação
-10, -10, 1, 3, 2	300	-10 × -10 × 3 = 300 (maior produto)
5, 10, 2, 8, 1	400	5 × 8 × 10 = 400
-100, -2, 50, 3, 1	10000	-100 × -2 × 50 = 10000

📂 Estrutura do Projeto
text

📁 projeto-cofre-intergalactico/  
├── 📄 index.html          → Página principal  
├── 📄 styles.css          → Estilos e animações  
└── 📄 script.js           → Lógica do cálculo  

🔍 Lógica do Cálculo
O algoritmo considera duas possibilidades para garantir o maior produto:

Os três maiores números (últimos do array ordenado).

Os dois menores números (negativos) × o maior número (útil quando há negativos grandes).

javascript
function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    return Math.max(
        nums[n - 1] * nums[n - 2] * nums[n - 3],  // 3 maiores
        nums[0] * nums[1] * nums[n - 1]           // 2 menores × maior
    );
}
📱 Responsividade
O projeto se adapta a:
✔ Desktop (container alinhado à esquerda).
✔ Mobile (centralizado, botões em coluna).

🎉 Conclusão
Um desafio matemático divertido com interface visual atraente e explicação detalhada do cálculo.

✨ Experimente agora e abra o cofre intergaláctico!

