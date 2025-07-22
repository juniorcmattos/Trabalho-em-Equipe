const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lembretes = [];

// --- Funções de Lembrete ---

function menu() {
  console.log('<<<<<<LEMBRETE>>>>>>');
  console.log('1. Criar lembrete');
  console.log('2. Listar lembretes');
  console.log('3. Editar lembretes');
  console.log('4. Colocar lembrete como concluído');
  console.log('5. Sair');
  console.log('\n' + '='.repeat(30));

  rl.question('Escolha uma opção: ', (opcao) => {
      switch (opcao) {
          case '1':
              criarLembrete();
              break;
          case '2':
              listarLembretes();
              break;
          case '3':
              editarLembrete();
              break;
          case '4':
              concluirLembrete();
              break;
          case '5':
              rl.close();
              console.log('Saindo do programa. Até mais!');
              break;
          default:
              console.log('Opção inválida. Tente novamente');
              menu();
      }
  });
}

function criarLembrete() {
  rl.question('Digite o lembrete que você queira adicionar: ', (adicionar) => {
      rl.question('Escolha o prazo do seu lembrete: ', (prazo) => {
          const lembrete = {
              adicionar,
              prazo,
              concluido: false,
          };
          lembretes.push(lembrete);
          console.log('Seu lembrete foi criado com sucesso!!');
          console.log('Deseja criar outro lembrete?: (s/n)');

          rl.question('', (resposta) => {
              resposta.toLowerCase() === 's'
                  ? criarLembrete()
                  : menu();
          });
      });
  });
}

function listarLembretes() {
  if (lembretes.length === 0) {
      console.log('Nenhum lembrete adicionado.');
  } else {
      console.log('\n=== LISTA DE LEMBRETES ===');
      lembretes.forEach((lembrete, index) => {
          const status = lembrete.concluido ? 'Concluído' : 'Pendente';
          console.log(
              `${index + 1}. Lembrete: ${lembrete.adicionar} | Prazo: ${lembrete.prazo} | Status: ${status}`
          );
      });
  }

  console.log('\nPressione Enter para voltar ao menu principal.');
  rl.question('', () => menu()); // Use a callback function for rl.question
}

function editarLembrete() {
  if (lembretes.length === 0) {
    console.log('Nenhum lembrete cadastrado para editar.');
    console.log('\nPressione Enter para voltar ao menu...');
    return rl.question('', () => menu());
  }

  console.log('\n=== LEMBRETES CADASTRADOS ===');
  lembretes.forEach((lembrete, index) => {
    console.log(
      `${index + 1}. Lembrete: ${lembrete.adicionar} | Prazo: ${lembrete.prazo} `
    );
  });

  rl.question('\nDigite o número do lembrete que deseja editar: ', (num) => {
    const index = parseInt(num, 10) - 1;

    if (index < 0 || index >= lembretes.length) {
      console.log('Número inválido!');
      console.log('\nPressione Enter para voltar ao menu...');
      return rl.question('', () => menu());
    }

    rl.question('Digite o novo lembrete: ', (novoAdicionar) => {
      rl.question('Digite o novo prazo do lembrete: ', (novoPrazo) => {
          lembretes[index].adicionar = novoAdicionar;
          lembretes[index].prazo = novoPrazo;

          console.log('Lembrete editado com sucesso!');
          console.log('\nPressione Enter para voltar ao menu...');
          rl.question('', () => menu());
        });
      });
    });
}

function concluirLembrete() {
    if (lembretes.length === 0) {
      console.log('Nenhum lembrete foi criado.');
      console.log('\nPressione Enter para voltar ao menu.');
      return rl.question('', () => menu());
    }

    console.log('\n=== LEMBRETES ===');
    lembretes.forEach((lembrete, index) => {
      const status = lembrete.concluido ? 'Concluído' : 'Pendente';
      console.log(
        `${index + 1}. Lembrete: ${lembrete.adicionar} | Prazo: ${lembrete.prazo} | Status: ${status}`
      );
    });

    rl.question('\nDigite o número do lembrete que deseja marcar como concluído: ', (num) => {
      const index = parseInt(num, 10) - 1;

      if (index < 0 || index >= lembretes.length) {
        console.log('Esse lembrete não existe!');
        console.log('\nPressione Enter para voltar ao menu...');
        return rl.question('', () => menu());
      } else {
        lembretes[index].concluido = true;

        console.log('Status editado com sucesso!');
        console.log('\nPressione Enter para voltar ao menu...');
        rl.question('', () => menu());
      }
    });
}

console.log('=== SISTEMA DE GERENCIAMENTO DE LEMBRETES ===');
menu();