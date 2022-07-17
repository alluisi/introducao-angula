import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Input() name: string = 'works';

  constructor() { }

  ngOnInit(): void {
  }

  clicked (): void {
    window.alert('Você clicou!');
  }

}
