const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
          const lembrete = {
            texto: texto,
            prazo: prazo,
          };
  
  function editarLembrete() {
    if (lembrete.length === 0) {
      console.log('Nenhum lembrete cadastrado para editar.');
      console.log('\nPressione Enter para voltar ao menu...');
      return rl.question('', mostrarMenu);
    }
  
    console.log('\n=== LEMBRETES CADASTRADOS ===');
    lembretes.forEach((lembrete, index) => {
      console.log(
        `${index + 1}. Texto: ${lembrete.texto} | Prazo: ${lembrete.prazo} `
      );
    });
  
    rl.question('\nDigite o número do lembrete que deseja editar: ', (num) => {
      const index = parseInt(num, 10) - 1;
  
      if (index < 0 || index >= lembretes.length) {
        console.log('Número inválido!');
        console.log('\nPressione Enter para voltar ao menu...');
        return rl.question('', mostrarMenu);
      }
  
      rl.question('Digite o novo lembrete: ', (texto) => {
        rl.question('Digite o novo prazo do lembrete: ', (prazo) => {
              console.log('Lembrete inválido.');
              return editarLembrete();
        });
        
            lembretes[index] = {
              texto,
              prazo,
            };
  
            console.log('Lembrete editado com sucesso!');
            console.log('\nPressione Enter para voltar ao menu...');
            rl.question('', mostrarMenu);
          });
        });
      };
  
  console.log('=== SISTEMA DE GERENCIAMENTO DE LEMBRETES ===');
  mostrarMenu();
