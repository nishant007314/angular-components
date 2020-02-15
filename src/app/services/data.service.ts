import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private url: string, private http: Http) {
    }

    getAll() {
        return this.http.get(this.url)
            .pipe(
                map(response => response.json()),
                catchError(this.handleError)
            );
    }

    create(resource) {
        return this.http.post(this.url, resource)
            .pipe(
                map(response => response.json()),
                catchError(this.handleError));
    }

    update(resourceId, updateDetails) {
        return this.http.patch(this.url + "/" + resourceId, updateDetails)
            .pipe(
                map(response => response.json()),
                catchError(this.handleError));
    }

    delete(resourceId) {
        return this.http.delete(this.url + "/" + resourceId)
            .pipe(
                map(response => response.json()),
                catchError(this.handleError)
            );
    }

    private handleError(error: Response) {
        if (error.status === 400) {
            return throwError(new BadRequestError(error.json()));
        }
        if (error.status === 404) {
            return throwError(new NotFoundError());
        }
        return throwError(new AppError(error));
    }
}