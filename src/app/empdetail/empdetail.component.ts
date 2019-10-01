import { Component, OnInit } from '@angular/core';
import { employeeservice } from '../emp.service';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  constructor(private employee:employeeservice) { }

  ngOnInit() {
    this.empdetail=this.employee.getemployee()
  }
  empdetail=[]
}
