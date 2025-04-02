/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import cors from "cors";

// Inicializa Firebase Admin
admin.initializeApp();

// Configura CORS
const corsHandler = cors({origin: true});

// Función para obtener las URLs de las imágenes desde Firebase Storage
export const getImages = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const bucket = admin.storage().bucket();
      const [files] = await bucket.getFiles({
        prefix: "QkChnEzJ7SauNI7JdeK4ZsshWmd2/",
      });

      const urls = files.map((file) => file.publicUrl());
      res.status(200).json({urls});
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ?
          error.message :
          "An unknown error occurred",
      });
    }
  });
});

