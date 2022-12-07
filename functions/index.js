const functions = require("firebase-functions")
const admin = require('firebase-admin')
admin.initializeApp()

exports.www = functions.region('europe-west1').https.onRequest((request, response) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  response.send("<!doctype html><html><head><meta charset='utf-8'><title>hello</title></head><body>world</body></html>");
});

exports.dm = functions.https.onRequest(async (req, res) => {
  const text = req.query.text;
  const writeResult = await admin.firestore().collection('dms').add({text: text});
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});
