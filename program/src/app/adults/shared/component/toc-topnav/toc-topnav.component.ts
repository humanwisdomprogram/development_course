import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toc-topnav',
  templateUrl: './toc-topnav.component.html',
  styleUrls: ['./toc-topnav.component.scss'],
})
export class TocTopnavComponent implements OnInit {
  isloggedIn = false;
  name = ''
  roleid = 0

  constructor(private router: Router) {
    this.roleid = JSON.parse(localStorage.getItem('RoleID'));
    let userid = localStorage.getItem('isloggedin');
    this.name = localStorage.getItem('name');
    if(userid === 'T') {
      this.isloggedIn = true
    }
   }

  ngOnInit() {
  }

  routeGuide(value: any) {

  }

  getevent() {
    this.name = localStorage.getItem('name');
  }

  routeAffiliate() {
      let userId = JSON.parse(localStorage.getItem("userId"))
      window.location.href = `https://humanwisdom.me/Admin/#/frameworks/affiliate-s01-a/${userId}`;
      return false;
  }
 
  logout() {
    // localStorage.clear();
    localStorage.setItem('isloggedin', 'F')
    localStorage.setItem('guest', 'T')
    this.router.navigate(['/onboarding/login'])
  }

  loginroute() {
    this.router.navigate(['/onboarding/login'])
  }

  giftwisdom() {
    localStorage.setItem('giftwisdom', 'T')
  }

}
