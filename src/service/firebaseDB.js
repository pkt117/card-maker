import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class FirebaseDB {
  constructor(app) {
    this.db = getDatabase(app);
  }

  syncCard(uid, onUpdate) {
    const syncRef = ref(this.db, `users/${uid}`);
    onValue(syncRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    return () => off(syncRef);
  }

  upload(uid, card) {
    set(ref(this.db, `users/${uid}/${card.id}`), card);
  }

  removeData(uid, id) {
    const dbRef = ref(this.db, `users/${uid}/${id}`);
    remove(dbRef);
  }
}

export default FirebaseDB;
