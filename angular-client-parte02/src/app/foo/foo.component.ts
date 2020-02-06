import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foo } from './foo.model';


@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})


export class FooComponent implements OnInit {
  
  fooData: Foo[];
  oFoo: Observable<Foo[]>;


  constructor(public http: HttpClient) { }
  ngOnInit() { }

  makeTypedRequest(): void {
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
    this.oFoo.subscribe(data => { this.fooData = data; });
  }


}






