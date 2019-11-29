
import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state
} from '@angular/animations';


export const Animations = {
    slideinout: trigger('slideinout', [
        state('in', style({ height: '*', opacity: 0 })),
        transition(':leave', [
            style({ height: '*', opacity: 1 }),

            group([
                animate(300, style({ height: 0 })),
                animate('300ms ease-in-out', style({ 'opacity': '0' , transform: 'translateY(-100%)'}))
            ])

        ]),
        transition(':enter', [
            style({ height: '0', opacity: 0 , transform: 'translateY(-100%)'}),
            group([
                animate(300, style({ height: '220px' })),
                animate('300ms ease-in-out', style({ 'opacity': '1' , transform: 'translateY(0%)'}))
            ])

        ])
    ]),
    slideTwo: trigger('slideTwo', [
        transition(':enter', [
          style({transform: 'translateY(-100%)'}),
          animate('300ms ease-in', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
          animate('300ms ease-in', style({transform: 'translateY(-100%)'}))
        ])
      ])
    

}