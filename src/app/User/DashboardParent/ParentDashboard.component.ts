import { Component, OnInit } from '@angular/core';
import { ConnectingService } from '../../Services/connecting.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ParentDashboard-component',
    templateUrl: './ParentDashboard.component.html',
    styleUrls: ['./ParentDashboard.component.css']
})
export class ParentdashboardComponent implements OnInit {

    constructor(private connectservice: ConnectingService, private router: Router) {

    }

    ngOnInit() {
        
    }
}