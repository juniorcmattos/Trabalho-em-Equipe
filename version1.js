const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
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
              listar();
              break;
          case '3':
              editar();
              break;
          case '4':
              concluir();
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

function concluirTarefa() {
    if (lista.length === 0) {
      console.log('Nenhuma tarefa foi criada.')
      console.log('\nPressione Enter para voltar ao menu.')
      return rl.question('', mostrarMenu)
    }


    console.log('\n=== LEMBRETES ===')
    lista.forEach((lembrete, index) => {
      console.log(
        `${index + 1}. Tarefa: ${lembrete.tarefa} | Prazo: ${lembrete.prazo} | Status: ${lembrete.status}`
      )
    })
 
    rl.question('\nDigite o número da tarefa que deseja marcar como concluida: ', (num) => {
      const index = parseInt(num, 10) - 1
 
      if (index < 0 || index >= lista.length) {
        console.log('Essa tarefa não existe!')
        console.log('\nPressione Enter para voltar ao menu...')
        return rl.question('', mostrarMenu)
      } else {
        lista[index].status = true


        console.log('Status editado com sucesso!')
        console.log('\nPressione Enter para voltar ao menu...')
        rl.question('', mostrarMenu)
      }
    })
}
menu();