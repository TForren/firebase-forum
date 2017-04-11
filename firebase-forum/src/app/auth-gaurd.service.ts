import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()

export class AuthGuardService implements CanActivate {
  canActivate(){
    console.log('AuthGuardService#canActivate called');
    return true;
  }
}
