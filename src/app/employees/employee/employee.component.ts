import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm){
    if (form!= null)
     form.resetForm();
    this.service.formData ={
     id: null,
     fullname: null,
     empcode: null,
     postion: null,
     mobile: null
    }
  }
}
