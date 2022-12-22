import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import app from './firebase.js';

export const subscribeToHellfireClube = async (subscribe) => {
  const db = getFirestore(app);
  const hellfireClubCollection = collection(db, 'hellfire-clube');
  const docRef = await addDoc(hellfireClubCollection, subscribe);
  return docRef.id;
};

export const getHellfireSubscriptions = async () => {
  const db = getFirestore(app);
  const hellfireClubCollection = collection(db, 'hellfire-clube');
  const hellfireClubCollectionSnapshots = await getDocs(hellfireClubCollection);
  const subscriptions = hellfireClubCollectionSnapshots.docs.map((doc) =>
    doc.data()
  );
  return subscriptions;
};
