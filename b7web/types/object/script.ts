function resume(user: {name: string, age?: number}) {
    if(user.age !== undefined)
        return `Olá ${user.name}, tudo bem? Você tem ${user.age} anos`;
    else 
        return `Olá ${user.name}, tudo bem?`
}

let user1 = {
    name: 'Gustavo', 
    age: 42
}

let user2 = {
    name: 'Fulano'
}

resume(user1);
resume(user2);