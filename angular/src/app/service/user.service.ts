import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/user_roles';

  userRef: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.userRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection {
    return this.userRef;
  }

  getUser(userId: string): AngularFirestoreDocument<User> {
    return this.db.collection("user_roles").doc(userId);
  }
  updateUserRole(userId: string, newRole: string) {
    const userRoleRef = this.db.collection('user_roles').doc(userId);
  
    return userRoleRef.get().toPromise().then((doc) => {
      if (doc && doc.exists) { // ✅ Verifica que 'doc' no sea undefined antes de acceder a '.exists'
        return userRoleRef.update({ role: newRole });
      } else {
        return userRoleRef.set({ role: newRole }, { merge: true });
      }
    }).then(() => {
      console.log('Rol actualizado o creado correctamente.');
    }).catch((error) => {
      console.error('Error al actualizar/crear:', error);
    });
  }
  
  
}
