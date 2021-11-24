import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budgettracker';

  // constructor(private router: Router,
  //             private route: ActivatedRoute){}

  // onSelect(){
  //   this.router.navigate(['fuel'], {relativeTo: this.route});
  // }
}
