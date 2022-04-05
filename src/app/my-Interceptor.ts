import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent }
  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
      const httpReq = req.clone({
        //url: `your-api-url/${req.url}`
        url: req.url.replace("localhost:4200", "https://lombardini.com.mx")
      });
      return next.handle(httpReq);
    }
}