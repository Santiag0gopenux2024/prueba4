import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserName } from '../../interface/users-name';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: UserName | null = null;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      const id = +userId;
      this.userService.getUsers().subscribe!(
        users => {
          this.user = users.find(u => u.id === id) || null;
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = error;
        }
      );
    }
  }
}
