import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from 'src/app/shared/models/base-response.model';
import { environment } from 'src/environments/environment';
import { News } from '../_models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = `${environment.urlApi}news`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<BaseResponse<News[]>> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTBlMWJhN2JiYWQ0NjU1ODE5ZGVlOSIsImZ1bGxuYW1lIjoiRGllZ28gU2FudG9zIFJvZHJpZ3VlcyIsInByb2ZpbGUiOnsiX2lkIjoiNjE1MGUxNjk3YmJhZDQ2NTU4MTlkZWRkIn0sImlhdCI6MTYzMzA0NTM3MSwiZXhwIjoxNjMzMDQ1OTcxfQ.y15QLgxPufjPGtiTHivndu-rA2SVShhfY6n-fmyYXw0';
    return this.http.get<BaseResponse<News[]>>(this.baseUrl, { headers: { 'x-access-token': token }});
  }
}
