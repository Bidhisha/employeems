import { Component, OnInit } from '@angular/core';
import { employeeservice } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  constructor(private employee:employeeservice) { }

  ngOnInit() {
    this.empdetail=this.employee.getemployee()
  }
  empdetail=[]
  }
