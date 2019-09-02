import { Component, OnInit } from '@angular/core';
import { ConnectingService } from '../Services/connecting.service';
import { User } from '../Classes/User';
import { Router } from '@angular/router';

@Component({
    selector: 'Login-component',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
    username: String;
    password: String;
    public user: User;
    constructor(private connectservice: ConnectingService, private router: Router) {
    }
    ngOnInit() {
        if (this.connectservice.isAuthenticated())
            this.router.navigateByUrl('Parent');
    }
    Connecting = () => {
        this.connectservice.login({ login: this.username, password: this.password }).subscribe(
            (data) => {
                this.user = new User(data[0]['user']);
                localStorage.setItem('token', data[0]['user'].mdp);
                this.router.navigateByUrl('Parent');
            },
            (error) => {
                console.error(error)
            }
        )
    };
}
