import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Classes/User';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
    providedIn: 'root'
})

export class ConnectingService {
    constructor(private httpClient: HttpClient, public jwtHelper: JwtHelperService) { }

    login(userdata): Observable<User> {
        let httpHeaders = new HttpHeaders();
        httpHeaders.append('Content-Type', 'application/json');
        httpHeaders.append('Access-Control-Allow-Origin', '*');
        let options = {
            headers: httpHeaders
        };
        let url = 'http://127.0.0.1:8081/gestion-inscription/api/Read.php';
        return this.httpClient.post<User>(url, JSON.stringify(userdata), options);
    }

    logout() {
        localStorage.removeItem('token');
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        this.CheckJWT(token);
        return !this.jwtHelper.isTokenExpired(token);
    }

    public CheckJWT(JWT: string): boolean {
        let httpHeaders = new HttpHeaders();
        httpHeaders.append('Content-Type', 'application/json');
        httpHeaders.append('Access-Control-Allow-Origin', '*');
        let options = {
            headers: httpHeaders
        };
        let url = 'http://127.0.0.1:8081/gestion-inscription/api/validate_token.php';
        this.httpClient.post<any>(url, JSON.stringify({ "token": JWT }), options).subscribe(
            (res) => {
                console.log(res);
                return true;
            },
            (error) => {
                console.log(error);
            }
        );
        return false;
    }

}
