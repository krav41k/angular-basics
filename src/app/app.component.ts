import { Component } from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('box', [
      state('start', style({ background: 'blue'})),
      state('end', style({
        background: 'red',
        transform: 'scale(1.2)'
      })),
      state('special', style({
        background: 'yellow',
        transform: 'scale(0.8)',
        borderRadius: '50%',
        color: 'black'
      })),
      transition('start => end', animate(500)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        group([
          query('h4', animate(0.5, style({
            fontSize: '.5rem'
          }))),
          style({background: 'orange', color: 'gray'}),
          animate('0.3s', style({opacity: '0.8'})),
          animate('0.3s')
        ])
      ]),
      // * => void
      transition(':leave', [
        animate('0.7s ease-in', style({
          transform: 'matrix(0.01,0,0,1,0,0)'
        }))
      ]),
      // void => *
      transition(
        ':enter',
        [
          animate('4s', keyframes([
            style({background: 'red'}),
            style({background: 'orange'}),
            style({background: 'yellow'}),
            style({background: 'blue'}),
          ]))
          // style({transform: 'matrix(0.01,0,0,1,0,0)'}),
          // animate(500)
        ]
      )
    ])
  ]
})
export class AppComponent {
  boxState = 'start';
  visibility = true;

  animate() {
    this.boxState = this.boxState === 'start' ? this.boxState = 'end' : this.boxState = 'start';
  }
}
