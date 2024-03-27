import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    const cloneReq = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })
  return next(cloneReq)
}

  return next(req);
};
