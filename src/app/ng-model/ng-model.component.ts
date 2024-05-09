import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent {
  size: any
  id: any;
  getSpecialDeals:any = []

  specialDeals = [
    { "id": 1, "amount": 1000 },
    { "id": 2, "amount": 2000 },
    { "id": 3, "amount": 3000 },
    { "id": 4, "amount": 4000 },
    { "id": 5, "amount": 5000 },
    { "id": 6, "amount": 6000 },
    { "id": 7, "amount": 7000 },
    { "id": 8, "amount": 8000 },
  ]

  public testForm = {
    "name": "",
  }

  checked(val: any) {
    console.log(val.value);
    this.id = val.value;
    if (isNaN(this.id)) {
        console.error('Invalid value for id:', val.value);
        return;
    }
    if (!Array.isArray(this.getSpecialDeals)) {
        console.error('getSpecialDeals is not an array.');
        return;
    }
    const index = this.getSpecialDeals.findIndex(x => x === this.id);
    if (index !== -1) {
        this.getSpecialDeals.splice(index, 1);
    } else {
         this.getSpecialDeals.push(this.id);
    }
    console.log(63, this.getSpecialDeals)
}


}
