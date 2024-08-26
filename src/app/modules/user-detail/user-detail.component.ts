import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUsers().subscribe!(
      users => {
        this.user = users.find(u => u.id === userId) || null;
        this.errorMessage = this.user ? null : 'Usuario no encontrado';
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
