import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private firestore: AngularFirestore ) { }
  form = new FormGroup({        
    customerName: new FormControl(''),
    time: new FormControl(''),
    addedDocs: new FormControl(''), 
    completed: new FormControl(false)
})
createAppointment(data) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("appointments")
          .add(data)
          .then(res => {}, err => reject(err));
  });
}
getDoctorAppointment() { 
  return this.firestore.collection("appointments").snapshotChanges();
}
updateCoffeeOrder(data) {
  return this.firestore
      .collection("appointments")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
}
deleteCoffeeOrder(data) {
  return this.firestore
      .collection("appointments")
      .doc(data.payload.doc.id)
      .delete();
}
}
