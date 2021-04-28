import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(public appointmentService:AppointmentService) { }
  ngOnInit(){}
  
  doctors = [
    "Dr. John Doe",
    "Dr. John Doe",
    "Dr. John Doe",
  ];

  addedDocs = [];

  addAppointment = doctor => {
    this.addedDocs.push(doctor);
  }

  removeAppoint = doctors => {
    let index = this.addedDocs.indexOf(doctors);
    if (index > -1) this.addedDocs.splice(index, 1);
  };
  

  onSubmit() {
    this.appointmentService.form.value.addedDocs = this.addedDocs;
    let data = this.appointmentService.form.value;
    console.log(data);
    this.appointmentService.createAppointment(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }

}
