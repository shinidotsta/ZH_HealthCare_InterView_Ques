import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-childtable',
  templateUrl: './childtable.component.html',
  styleUrls: ['./childtable.component.css']
})
export class ChildtableComponent  {
  @Input() showMePartially: boolean;

}
