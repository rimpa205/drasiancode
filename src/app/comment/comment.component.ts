import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  currentUserId!: string;
  @Input() replies:any
  @Input() comment: any;
  canReply: boolean = true;
  canEdit:boolean =true;
  canDelete:boolean=true




  constructor() { }

  ngOnInit(): void {
    const fiveMinutes=300000;
    const timePassed=new Date().getMilliseconds()-new Date(this.comment.createdAt).getMilliseconds()>fiveMinutes
    console.log(this.comment)
    //this.canReply=Boolean(this.currentUserId)
    this.canEdit=this.currentUserId===this.comment.userId && !timePassed && this.replies.length===0
    this.canDelete=this.currentUserId===this.comment.userId && !timePassed && this.replies.length===0
  }

}
