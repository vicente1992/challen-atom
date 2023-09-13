import * as admin from 'firebase-admin';
import { environment } from './environment';

admin.initializeApp({
  credential: admin.credential.cert(environment.firebase.credentials as admin.ServiceAccount),
  databaseURL: environment.firebase.databaseURL
});

const db = admin.firestore();
export { admin, db };
