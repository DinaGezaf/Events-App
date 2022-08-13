import { Directive, ElementRef, Inject, Input, OnInit } from "@angular/core";
import { JQ_TOKEN }  from "./jquery.service";

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    
    private el :HTMLElement ;
    @Input('modal-trigger') modalId :string | undefined;
    constructor(ref:ElementRef, @Inject(JQ_TOKEN) private $:any){
        this.el=ref.nativeElement;
        console.log(window)
        // console.log(this.$)
    }
    ngOnInit(): void {
        this.el.addEventListener('click',e =>{
        //    this.$(`#${this.modalId}`).modal();
        })
    }
}

