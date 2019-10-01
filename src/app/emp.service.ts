import { Injectable } from '@angular/core';
@Injectable()

export class employeeservice
{
    empdetail=[{id:1,name:'bidi',dept:'cse'},
    {id:2,name:'lili',dept:'eee'},
    {id:3,name:'cher',dept:'it'}]

    getemployee()
    {
        return this.empdetail
    }
    setemployee(emp)
    {
     //this is responsible for adding a data from input section to list  
        this.empdetail.push(emp)
        ///emp object is coming from app.component.ts
    }
}