import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/User';
import { Subscription, Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { UserState } from '../../states/user.state';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy, AfterViewInit {
   @Select(UserState.getSelectedUser) selectedUser$: Observable<User>;
   userSubscription: Subscription;
   userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
   this.initializeForm();
  }

  checkRouter(): string {
    if (this.router.url === '/create') {
      return 'create';
    } else {
      return 'edit';
    }
  }

  ngAfterViewInit() {
    if (this.checkRouter() === 'edit') {
      this.getSelectedUser();
    }
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      id: [''],
      firstName: [''],
      middleName: [''],
      lastName: ['']
    });
  }

  ngOnDestroy() {
    if(this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  getSelectedUser() {
    this.userSubscription = this.selectedUser$.subscribe((data) => {
      this.userForm.patchValue(data);
    });
  }

  submit() {
   if (this.checkRouter() === 'create') {
    this.userService.createUser(this.userForm.getRawValue()).subscribe((data) => {
      this.back();
    });
   } else {
     this.userService.updateUser(this.userForm.getRawValue()).subscribe(() => {
       this.back();
     });
   }
  }

  back() {
    this.router.navigate(['/']);
  }

}
