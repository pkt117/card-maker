import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const provider = this.getProvider(providerName);

    return (
      signInWithPopup(this.firebaseAuth, provider)
        // .then((result) => console.log(result))
        .catch((error) => console.log(error))
    );
  }

  logout() {
    signOut(this.firebaseAuth) //
      .catch((error) => console.log(error));
  }

  onAuthChange(onAuthChanged) {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      onAuthChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
    }
  }
}
