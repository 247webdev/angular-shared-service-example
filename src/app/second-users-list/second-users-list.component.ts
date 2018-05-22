import {Component, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-second-users-list',
  templateUrl: './second-users-list.component.html',
  styleUrls: ['./second-users-list.component.css']
})
export class SecondUsersListComponent implements OnInit {

  usersList: Array<any>;

  constructor(private usersService: UserServiceService) {
    this.usersList = usersService.usersList;
    usersService.usersChange.subscribe((newUsersList) => {
      this.usersList = newUsersList;
    });
  }

  addUser() {
    this.usersService.addUser(
      {
        name: 'someone else',
        age: 4
      }
    );
  }

  ngOnInit() {
  }

}
