import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectingService } from '../Services/connecting.service';

@Component({
    selector: 'user-component',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    constructor(private auth: ConnectingService, private router: Router) { }
    logout() {
        this.auth.logout();
        this.router.navigate(['Login']);
    }
    ngOnInit() {

    }
}