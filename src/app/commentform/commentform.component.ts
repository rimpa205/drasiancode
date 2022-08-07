import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


//type NewType = string;

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.css']
})
export class CommentformComponent implements OnInit {

  @Input() submitLabel: any;
  @Input() hasCancelButton=false;
  @Input() initialText:string=''
  form: any;

  @Output() handleSubmit=new EventEmitter()

  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {

    this.form =this.fb.group({
      title:[this.initialText,Validators.required],

    })
  }

  onSubmit(){
    //console.log(this.form.value)
    this.handleSubmit.emit(this.form.value.title)
  }

}
