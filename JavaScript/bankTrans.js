bankTrans = {
    users: [
        {
            user_id: 1,
            name: 'Bhavya',
            balance: 1000
        },{
            user_id: 2,
            name: 'Raj',
            balance: 2000
        },{
            user_id: 3,
            name: 'Ram',
            balance: 1200
        }
    ],

    trans: [
        {
            trans_id: 1,
            user_id: 1,
            amount: 1000,
            type: 'credit',
            date_of_tans: "10-03-2023"
        },{
            trans_id: 2,
            user_id: 2,
            amount: 100,
            type: 'debit',
            date_of_tans: "11-07-2023"
        }
    ]
   
    
}

for(let i=0; i<bankTrans.trans.length; i++){
    console.log(bankTrans.trans[i])
    
}


function print(bankTrans){
    for(let i=0; i<bankTrans.users.length;i++){
        console.log(bankTrans.users[i])
    }

}