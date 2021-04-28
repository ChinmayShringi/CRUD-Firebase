import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  constructor(public appointmentService:AppointmentService) { }
  coffeeOrders;
  getCoffeeOrders = () =>
     this.appointmentService
     .getDoctorAppointment()
     .subscribe(res =>(this.coffeeOrders = res));
  
     ngOnInit(): void {
    this.getCoffeeOrders();
  }
  
  markCompleted = data => 
  this.appointmentService.updateCoffeeOrder(data);
  
  deleteOrder = data => this.appointmentService.deleteCoffeeOrder(data);
}
