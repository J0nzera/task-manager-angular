import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[TarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }

}
