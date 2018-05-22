import {Component, Input, OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: Array<any>;

  constructor(private usersService: UserServiceService) {
    this.usersList = usersService.usersList;
    usersService.usersChange.subscribe((newUsersList) => {
      this.usersList = newUsersList;
    });
  }

  ngOnInit() {
  }

}
