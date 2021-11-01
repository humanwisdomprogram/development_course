import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AdultsService } from './adults/adults.service'

@Injectable({
  providedIn: 'root'
})
export class authLoginGuard implements CanActivate, OnInit {
  t: any

  constructor(public router: Router, private url: ActivatedRoute, private service: AdultsService) {

  }
  ngOnInit() {

  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let m: any = window.location.href;
      m = m.split('=')
      if(m[1] !== undefined && m[1] !== '') {
        localStorage.setItem("userIdCode", m[1])
        localStorage.setItem("emailCode", 'T')
      }else {
        localStorage.setItem("emailCode", 'F')
      }
    let res = localStorage.getItem("isloggedin")
    let rem = localStorage.getItem("remember")
    if (res === null || res === 'F' || rem === 'F') {
      return true;
    } else {
      this.router.navigate(['/adults/adult-dashboard'])
      return false;
    }

  }


}
