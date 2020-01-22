const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp();


exports.usersCreatedDate = functions.firestore
  .document('users/{id}')
  .onCreate((snap, context) => {

    return snap.ref.set(
      {
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      },
      { merge: true }
    )
    .catch(error => {
       console.log(error);
       return false;
    });
  });