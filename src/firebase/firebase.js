import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB_tOyqULRVxtd_Cf1lIgA0VspNlmlqLN0",
    authDomain: "expensify-ad7ec.firebaseapp.com",
    databaseURL: "https://expensify-ad7ec.firebaseio.com",
    projectId: "expensify-ad7ec",
    storageBucket: "expensify-ad7ec.appspot.com",
    messagingSenderId: "818443564292",
    appId: "1:818443564292:web:9dc11a36fffc16a42f0c51",
    measurementId: "G-6704NMSB0M"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,googleAuthProvider, database as default };





// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((snapshotchild)=>{
//         expenses.push({
//             id: snapshotchild.key,
//             ...snapshotchild.val()
//         })
//     })
//     console.log(expenses)
// })



// database.ref('expenses').once('value')
//               .then((snapshot)=>{
//                   const expenses = [];
//                   snapshot.forEach((childsnapshot)=>{
//                       expenses.push({
//                           id: childsnapshot.key,
//                           ...childsnapshot.val()
//                       });
//                   });
//                   console.log(expenses);
//               })





//  database.ref('expenses').push({
//      description: 'first expense',
//      amount: 100,
//      note: 'new note',
//      createAt: 10012302132
//  })

//  database.ref('expenses').push({
//     description: 'second expense',
//     amount: 110,
//     note: 'new note',
//     createAt: 100123021312
// })

// database.ref('expenses').push({
//     description: 'thirdexpense',
//     amount: 230,
//     note: 'new note',
//     createAt: 100122302132
// })










// database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// })

// database.ref().set({
//     name: 'Duy Truong',
//     isstudent: true,
//     infor: {
//         address: '3018 gladiola ct',
//         phone: '214-235-5014',
//         age: 25
//     }
// }).then(()=>{
//     console.log('data was saved')
// }).catch((e)=>{
//     console.log('this failed', e)
// });

// database.ref('isstudent').remove().then(()=>{
//     console.log('removed!')
// }).catch((e)=>{
//     console.log('falied:',e)
// })
