// let choose = prompt('Samsung, HP, Acer')

// ОСНОВНОЕ ЗАДАНИМЕ

let gadgets = [
    {
        compName: 'HP',
        name: 'laptop',
        display: 'hd',
        proc: 'ryzen',
        price: {
            salePrice: 700,
            price: 1200 
        }
    },
    
    {
        compName: 'Acer',
        name: 'laptop',
        display: 'retina',
        proc: 'm1',
        price: {
            salePrice: 1000,
            price: 1800 
        }
    },
    {
        compName: 'samsung',
        name: 'laptop',
        display: 'fhd',
        proc: 'i9',
        price: {
            salePrice: 1000,
            price: 1800 
        }
    },
    
]

let name = prompt('model name')
let display = prompt('display')
let proc = prompt('proc')

let search = []

for(let item of gadgets) {
if(item.compName === name && item.display === display && item.proc === proc) {
    search.push(item)
} else{
    console.log('error');
}
}

console.log(...search);


// // ДОПОЛНИТЕЛЬНОЕ ЗАДАНИМЕ

let money = prompt('money')

let taxes = (money * 12) / 100

let money_1 = money - taxes

console.log(money_1, 'После вычета налогов');

// console.log(money_1);

let total = []

let answer = [
    {
        needs: (money_1 * 50) / 100,
        wishes: (money_1 * 30) / 100,
        savings: (money_1 * 20) / 100,
    }
]


for (let item of answer) {
    total.push(answer)
    console.log(answer);
}
