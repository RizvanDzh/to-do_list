import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth: AuthService = inject(AuthService);
  console.log(auth);
  if (auth.user) {
    return true;
  } else {
    router.navigate(['auth']);
    return false;
  }
};
