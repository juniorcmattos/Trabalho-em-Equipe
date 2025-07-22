const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lembretes = [];

function menu() {
  console.log('<<<<<<LEMBRETES>>>>>>');
  console.log('1. Criar um lembrete.')
  console.log('2. listar lembretes cadastrados.')
  console.log('3. Editar lembrete cadastrado.')
  console.log('4. Marcar lembrete como concluído.')
  console.log('5. Fechar menu.')

  rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
        case '1':
          criarLembrete;
          break;
        case '2':
          listar;
          break;
        case '3':
          editar;
          break;
        case '4':
          marcarConcluido;
          break;
        case '6':
          rl.close();
          console.log('Saindo do programa. Até mais!')
          break;
        default:
          console.log('Opção invalída. Tente novamente.');
          menu();
    }
  })
}

function criarLembrete() {
  rl.question('Digite o lembrete que você gostaria de adicionar: ', (adicionar) => {
    rl.question('Diite o prazo para este lembrete: ', (prazo) => {
      const lembrete = {
        adicionar,
        prazo,
        concluido,
      };
      lembretes.push(lembrete);
      console.log('Seu lembrete foi adicionado com sucesso!');
      console.log('Deseja adicionar outro lembrete?: (s/n)');

      rl.question('', (reposta) => {
        resposta.toLowerCase() === 's'
        ? criarLembrete()
        : menu()
      })
    })
  })
}