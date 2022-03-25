let frase = 'sou programador js'

console.log(frase.length);
//imprime 18, retornando a quantidade de caracteres na string contando os espaços
//

console.log(frase.indexOf('php'));

//imprime -1 pois busca a palavra 'php' em toodo array de let frase.

console.log(frase.slice(4, 16));
//imprime 'programador' pois buscou no array a palavra entre os caracteries 4 e 16.

console.log(frase.trim());
//imprime a frase tirando o espaço do começo e do final dela

console.log(frase.split('js'));
// exclui ao imprimir o js dentro do parametro e imprime 'sou programador '  '' no lugar de js vazio

console.log(frase.replace('js' , 'php'));
// substitui uma palavra por outra dentro do array ao imprimi "sou programador php"

function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}
