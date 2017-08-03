import { Component }  from '@angular/core';

@Component({
    selector: 'pm-app',
    template:
     `<div>
     <h1>salut {{pageTitle}}</h1>
     <pm-products></pm-products>
    </div>`
})
export class AppComponent{
    pageTitle: string = 'ay 7aja'
}