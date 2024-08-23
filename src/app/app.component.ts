import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UserName } from './interface/users-name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: UserName[] = [];
  errorMessage: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe!(
      data => {
        this.users = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
