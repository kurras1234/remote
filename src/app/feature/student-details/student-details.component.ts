import { Component } from '@angular/core';
import { Employee } from '../../data-model';
import notify from 'devextreme/ui/notify';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent {
  
  currentEmployee:any;

  employees: Employee[];

  popupVisible = false;

  stratVisible = false;

  moreInfoButtonOptions: Record<string, unknown>;

  emailButtonOptions: Record<string, unknown>;

  closeButtonOptions: Record<string, unknown>;

  positionOf: string='';

  constructor(service: DataService) {
    this.employees = service.getEmployees();
    this.moreInfoButtonOptions = {
      text: 'More info',
      onClick: () => {
        const message = `More info about ${this.currentEmployee.FirstName} ${this.currentEmployee.LastName}`;
        notify({
          message,
          position: {
            my: 'center top',
            at: 'center top',
          },
        }, 'success', 3000);
      },
    };
    this.emailButtonOptions = {
      icon: 'email',
      stylingMode: 'contained',
      text: 'Send',
      onClick: () => {
        const message = `Email is sent to ${this.currentEmployee.FirstName} ${this.currentEmployee.LastName}`;
        notify({
          message,
          position: {
            my: 'center top',
            at: 'center top',
          },
        }, 'success', 3000);
      },
    };
    this.closeButtonOptions = {
      text: 'Close',
      stylingMode: 'outlined',
      type: 'normal',
      onClick: () => {
        this.popupVisible = false;
      },
    };
  }
  detailsButtonMouseEnter(id: number) {
    this.positionOf = `#image${id}`;
  }

  showInfo(employee: Employee) {
    this.currentEmployee = employee;
    this.popupVisible = true;
  }
  stratPopupVisible(){
    this.stratVisible = true;
  }

  closePopUp(){
    this.popupVisible = false;
  }

  saveData(e:any){
    alert('saved');
  }
}


