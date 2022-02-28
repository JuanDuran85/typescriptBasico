

/* 
    Funcion generica: puede recibir cualquier tipo de argumento y retornar el mismo tipo de argumento
    Por lo tanto, la funcion retornara el mismo tipo del valor enviado en el argumento, esto si se agrega en el retorno el generico
*/

const genericOne = <T>(argument: T): T => {
    return argument;
}

function genericTwo<T>(argument: T): T {
    return argument;
}

console.log(genericOne(35.687435).toFixed(2));
console.log(genericTwo(35.687435).toFixed(2));
console.log(genericOne("Nuevo valor").toUpperCase());
console.log(genericTwo(new Date()).getTime());

/* --------------------------------------------------------------------------------- */

interface Hero {
    name: string;
    realName: string;
}

interface Villain {
    name: string;
    dangerlavel: number;
}

const deadPoll = {
    name: "DeadPoll",
    realName: "Dead Poll - WWW",
    dangerlavel: 100
}

console.log(genericOne<Hero>(deadPoll).name);