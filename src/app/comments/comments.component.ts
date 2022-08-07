import { Component, Input, OnInit } from '@angular/core';

export interface CommentInterface{
  id:string;
  body:string;
  username:string;
  userId:string;
  parentId:string | null;
}





@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  currentUserId!: string;
  comments!: ({ id: string; body: string; username: string; userId: string; parentId: null; createdAt: string; } | { id: string; body: string; username: string; userId: string; parentId: string; createdAt: string; })[];

  constructor() { }

  ngOnInit(): void {
  

  this.comments=[
    {
      "id":"1",
      "body":"First comment",
      "username":"Jack",
      "userId":"1",
      "parentId":null,
      "createdAt":"2021-08-16T2300:33:010+02"
    },
    {
      "id":"2",
      "body":"Second comment",
      "username":"John",
      "userId":"2",
      "parentId":"1",
      "createdAt":"2021-08-16T2300:33:010+02"
    },
    {
      "id":"3",
      "body":"Third comment",
      "username":"Daves",
      "userId":"2",
      "parentId":null,
      "createdAt":"2021-08-16T2300:33:010+02"
    }
  ]
}

addComment({text,parentId}:{text:string,parentId:null| string}):void{
console.log('addcomment',text,parentId)
let obj={
  id:"1",
  userId:"1",
  body:text,
  username:"John",
parentId:parentId,
createdAt:new Date().toISOString(),


}

this.comments.push(obj)
}

createComment(text:string,parentId:null | string){
  let obj={
    body:text,
  parentId:parentId,
  createdAt:new Date().toISOString(),
  userId:"1",
  usernme:"John"
  }
}

getReplies(commentId:string){
  return this.comments.filter(comment=>comment.parentId===commentId).sort((a,b)=>new Date(a.createdAt).getMilliseconds()-new Date(b.createdAt).getMilliseconds())
}

}
