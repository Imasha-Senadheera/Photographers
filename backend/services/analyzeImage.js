require("dotenv").config();
const vision = require("@google-cloud/vision");
const { Storage } = require("@google-cloud/storage");
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { db, bucket } = require("./firebaseConfig");

const client = new vision.ImageAnnotatorClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

async function downloadImage(imageUrl, destinationPath) {
  const writer = fs.createWriteStream(destinationPath);
  const response = await axios({
    url: imageUrl,
    method: "GET",
    responseType: "stream",
  });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

async function analyzeImageFromFirestore(documentId) {
  try {
    // Fetch image URL from Firestore
    const docRef = db.collection("packages").doc(documentId);
    const doc = await docRef.get();

    if (!doc.exists) {
      console.log("No such document!");
      return;
    }

    const imageUrl = doc.data().url;

    // Download the image to a local file
    const tempFilePath = path.join(__dirname, "temp-image.jpg");
    await downloadImage(imageUrl, tempFilePath);

    // Analyze the image
    const [result] = await client.safeSearchDetection(tempFilePath);
    const detections = result.safeSearchAnnotation;

    console.log("Safe Search Detection:");
    console.log(`Adult: ${detections.adult}`);
    console.log(`Violence: ${detections.violence}`);
    console.log(`Racy: ${detections.racy}`);

    // Clean up temporary file
    fs.unlinkSync(tempFilePath);
  } catch (error) {
    console.error("Error analyzing image:", error);
  }
}

// Call this function with the document ID from Firestore
analyzeImageFromFirestore("photographer-project-8ccc5");
