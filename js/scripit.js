let cargo = 'supervisor';
let salario = 2000;

switch (cargo){
    case 'gerente':
        salario *= 1.15;
        document.write(salario+'<br>');

    break;

    case 'supervisor':
        salario *= 1.10;
        document.write(salario+'<br>');
    break;

    default:
        salario *= 1.05
        document.write(salario='<br>');
}

document.write('Função sem parametro<br>'+'<br>')

function imprimendonoConsole(){
    document.write('Olá mundo!'+'<br>');
}

imprimendonoConsole();

document.write('Função com Parametro'+'<br>')

function calc(n1, n2) {
    return n1 * n2;

}

let resultado = calc(15, 5);
document.write(resultado+'<br>');

document.write('Função por variável' + '<br>');

const textporParametro = function(texto){
    document.write(texto)
}

textporParametro('testendo função por variavel' + '<br>');

document.write('escopob' + '<br>');

let y = 10;

function imprimir(){
    let y = 150;
    document.write(y);
}

imprimir(y);

document.write('<br>');

document.write(y);
document.write('<br>');

document.write('Função arrow fuction' + '<br>');

let teste = () => {
    document.write('Testando arrow fuction') ;
}

teste();

document.write('Array' + '<br>');

let num = [1,2,5,7];
let nome = ['Ana', 'Paula', 'Pedro'];
let bool = [true, false];
let misturado = [1, 'Matheus', true];

document.write(num[2]);
document.write('<br>');

document.write('Propriedade' + '<br>')

let nomes = 'josé sei lá'; 
document.write(nomes. length);

document.write('<br>');

let marca = 'nike';

document.write(marca.toLocaleUpperCase());
document.write('<br>');
document.write(marca.toLocaleLowerCase());
 