import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
import { ShareddataService } from '../services/shareddata.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';

  constructor(private sharedDataSerice: ShareddataService) {}

  ngOnInit(): void {}

  sendMessage(){
    this.sharedDataSerice.setMessage('Hello from Employee');
  }
}
