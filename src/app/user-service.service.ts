import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  usersList: Array<any>;
  usersChange: Subject<Array<any>> = new Subject<Array<any>>();

  constructor() {
    this.usersList = [
      {
        name: 'someone',
        age: 'idunno'
      }
    ];
    this.usersChange.subscribe((newUsersList) => {
      this.usersList = newUsersList;
    });
  }

  addUser(newUser) {
    const newUsersList = [...this.usersList];
    newUsersList.push(newUser);
    this.usersChange.next(newUsersList);
  }
}
