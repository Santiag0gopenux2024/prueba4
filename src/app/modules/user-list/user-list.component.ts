import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserName } from '../../interface/users-name';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UserName[] = [];
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  viewDetails(id: number): void {
    this.router.navigate(['/user', id]);
  }
}
