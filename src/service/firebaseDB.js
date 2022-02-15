import { getDatabase, ref, set, onValue } from "firebase/database";

class FirebaseDB {
  constructor(uid) {
    this.db = getDatabase();
    this.uid = uid;
  }

  upload(name, company, color, title, email, message, profileImg) {
    let randomNum = Math.floor(Math.random() * 10000000);
    if (
      name == "" &&
      company == "" &&
      title == "" &&
      email == "" &&
      message == ""
    )
      return;
    set(ref(this.db, "users/" + this.uid + `/${randomNum}`), {
      name,
      company,
      color,
      title,
      email,
      message,
      profileImg,
      dateTime: Date.now(),
    });
  }

  dataList() {
    const dbRef = ref(this.db, "users/" + this.uid);
    let list = [];
    onValue(
      dbRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          list.push(childSnapshot.val());
        });
      },
      {
        onlyOnce: true,
      }
    );

    return list;
  }
}

export default FirebaseDB;
