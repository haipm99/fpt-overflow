import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddUser, DeleteUser } from 'src/app/models/user/user.action';
import { User } from '../../../models/user/user';
@Component({
  selector: 'app-test-ngxs',
  templateUrl: './test-ngxs.component.html',
  styleUrls: ['./test-ngxs.component.css']
})
export class TestNgxsComponent implements OnInit {

  listUser?: User[];

  constructor(private fb: FormBuilder, private store: Store, private changeDetectionRef: ChangeDetectorRef) {
    // this.listUser = this.store.select(s => s.users.users);
    this.store.select(s => s.listUser).subscribe(
      val => this.listUser = val.users,
      err => console.log(err),
      () => console.log("done")
    )
  }


  angForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required]
  });



  ngOnInit(): void {
    console.log("init test page");
  }


  addUser(name: string, value: string) {
    this.store.dispatch(new AddUser({ name: name, email: value }))
    this.store.select(s => s.listUser).subscribe(
      val => this.listUser = val.users,
      err => console.log(err),
      () => console.log("done")
    )
  }

  deleteUser(name:string){
    console.log(name)
    this.store.dispatch(new DeleteUser(name));
    this.store.select(s => s.listUser).subscribe(
      (val) => {
        this.listUser = [];
        this.listUser = val.users;
      },
      err => console.log(err),
      () => console.log("done")
    )
  }
}
