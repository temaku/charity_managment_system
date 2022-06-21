// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// exports.pushnotification = async (req,res)=>{
//     try{
//         var payload = {
//        notification:{title:'Charity management system',
//        body:'Donate to the charities of your choice'
//        },
//        data:{click_action:"FLUTTER_NOTIFICATION_CLICK"}}
//         await admin.messaging().sendToTopic('Events',payload);
//        }catch (error){
//        console.log(error)
//        }
// }