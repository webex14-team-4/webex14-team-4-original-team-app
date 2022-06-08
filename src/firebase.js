// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtrT43JDj-zuKUQduUaIPGnwobXr1MsbQ",
  authDomain: "febro-original-team-app.firebaseapp.com",
  projectId: "febro-original-team-app",
  storageBucket: "febro-original-team-app.appspot.com",
  messagingSenderId: "287197980810",
  appId: "1:287197980810:web:f38cfc31d72d5e326f6573",
  measurementId: "G-98T9KESG9M",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
export const auth = getAuth()
