let victories = Number(25)
let defeats = Number(10)


function calc (victories = 0, defeats = 0){
    balance = victories - defeats
    return balance
}


console.log(`Seu saldo de vitórias é igual a ${calc(victories, defeats)}`)