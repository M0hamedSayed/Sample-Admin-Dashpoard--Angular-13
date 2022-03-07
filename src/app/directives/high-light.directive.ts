import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit, OnChanges {
  @Input('appHighLight') hColor!: string;
  constructor(private el: ElementRef) {
  }

  @HostListener('click')
  changeColor() {
    const style = this.el.nativeElement.style;
    let bg: any = { borderRadius: "10px", padding: "5px" }
    bg.backgroundColor = (style.backgroundColor == this.hColor) ? "white" : this.hColor;
    bg.color = (style.color == "white") ? "black" : "white";
    Object.assign(style, bg);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const style = this.el.nativeElement.style;
    let bg: any = { borderRadius: "10px", padding: "5px", backgroundColor: this.hColor }
    Object.assign(style, bg);
  }

  ngOnInit(): void {
    if (!this.hColor) this.hColor = "rgb(167, 139, 250)";
  }

}
