// export class ToDoItem{
//     id:number;
//     desciption:string;
//     action:string;
//     constructor(description:string,action:string){
//         this.desciption=description;
//         this.action=action;
//     }
// }

export class ToDoItem {
  constructor(
    public id: number,
    public description: string,
    public action: boolean
  ) {
    this.id = id;
    this.description = description;
    this.action = action;
  }
}

//const td=new ToDoItem(1,"Sport","Yes");
