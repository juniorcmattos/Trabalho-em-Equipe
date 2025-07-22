const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const funcionarios = [];
  
  function exibirMenu() {
    console.log('1. Criar tarefa');
    console.log('2. Listar tarefas');
    console.log('3. Concluir lembrete');
    console.log('4. Sair');
  }

  function mostrarMenu() {
    console.log('\n' + '='.repeat(30));
    exibirMenu();
    console.log('='.repeat(30));
  
    rl.question('Escolha uma opção: ', (opcao) => {
      switch (opcao) {
        case '1':
          criarTarefa();
          break;
        case '2':
          listarTarefas();
          break;
        case '3':
          concluirTarefa();
          break;
        case '4':
          rl.close();
          break;
        default:
          console.log('Opção inválida. Tente novamente.');
          mostrarMenu();
      }
    });
  }

  function concluirTarefa() {
        if (lista.length === 0) {
          console.log('Nenhuma tarefa foi criada.');
          console.log('\nPressione Enter para voltar ao menu.');
          return rl.question('', mostrarMenu);
        }
      
        console.log('\n=== LEMBRETES ===');
        lista.forEach((lembrete, index) => {
          console.log(
            `${index + 1}. Tarefa: ${lembrete.tarefa} | Prazo: ${lembrete.prazo} | Status: ${lembrete.status}`
          );
        });
      
        rl.question('\nDigite o número da tarefa que deseja marcar como concluida: ', (num) => {
          const index = parseInt(num, 10) - 1;
      
          if (index < 0 || index >= lista.length) {
            console.log('Essa tarefa não existe!');
            console.log('\nPressione Enter para voltar ao menu...');
            return rl.question('', mostrarMenu); 
          } else {
            lista[index].status = true

            console.log('Status editado com sucesso!');
            console.log('\nPressione Enter para voltar ao menu...');
            rl.question('', mostrarMenu);
          }
        })
  }
