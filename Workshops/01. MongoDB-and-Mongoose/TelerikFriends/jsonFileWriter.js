let employees = {
    data: [{
        firstName: 'Stamat',
        midleName: 'Petrov',
        lastName: 'Stamatov',
        insNum: 'INS12345-67',
        age: 34,
        contactDeatils: {
            phoneNumber: '888 111 222',
            email: 'stamat@gmail.com',
            workRoomNumber: 333
        },
        items: [{
            name: 'Fancy car',
            price: 50000,
            giveAwayStatus: 'For Sale'
        }, {
            name: 'ShotGun',
            price: 3000,
            giveAwayStatus: 'Give away'
        }],
        itemsRecieved: ['beer', 'saussage', 'ninja t-shirt']
    },
    {
        firstName: 'Branimir',
        midleName: 'Strahilov',
        lastName: 'Barzakov',
        insNum: 'INS12345-67',
        age: 35,
        contactDeatils: {
            phoneNumber: '888 333 444',
            email: 'branko@gmail.com',
            workRoomNumber: 444
        },
        items: [{
            name: 'Crapy car',
            price: 500,
            giveAwayStatus: 'For Sale'
        }, {
            name: 'WaterPistol',
            price: 3,
            giveAwayStatus: 'Give away'
        }],
        itemsRecieved: ['stress', 'fear', 'chineese t-shirt']
    } ]
};

let jsonObject=JSON.stringify(employees);