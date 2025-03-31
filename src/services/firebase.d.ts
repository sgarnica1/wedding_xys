declare module './services/firebase.ts' {
  import { Firestore } from 'firebase/firestore';
  export const db: Firestore;
}