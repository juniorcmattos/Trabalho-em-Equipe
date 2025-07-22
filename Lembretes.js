const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
    output: process.stdout
});

let lembretes = [];


function menuprincipal () {
    console.log ('1. Adicionar lembrete');
    console.log ('2. Listar lembretes');
    console.log ('3. Editar lembrete');
    console.log ('4. Marcar lembrete como concluído');
    console.log ('5. Sair');
}

function mostrarMenu () {
    console.log('\n' + '='.repeat(30));
    menuprincipal();
    console.log('='.repeat(30));
}

rl.question('Escolha uma opção: ',(opcao) =>  {
    switch (opcao) {
        case '1':
            AdicionarLembrete();
            break;
        case '2':
            ListarLembretes();
            break;
        case '3':
            EditarLembrete();
            break;
        case '4':
            MarcarLembreteComoConcluido();
            break;
        case '5';
        rl.close();
        break;
    default:
        console.log('Opção inválida. Tente novamente.');
        mostrarMenu();
    }
});
}

function ListarLembretes() {
    if (lembretes.length === 0) {
        console.log('Nenhum lembrete adicionado.');
    } else {
        console.log('\n=== LISTA DE LEMBRETES ===');
        lembretes.forEach((lembrete, index) => {
            console.log(
                `${index + 1}. Nome: ${lembrete.nome} | Prazo: ${lembrete.prazo} | Concluído: ${LembreteConcluído.resposta}`
            );
        });
    }

console.log('\n Pressione Enter para voltar ao menu principal.');
    rl.question('', mostrarMenu);
    }
}

