var StatusEnums={Active:"Active",Complete:"Complete",Deleted:"Deleted"};
var todos={
  1:{title:"learn ajax",status:StatusEnums.Active},
  2:  {title:"learn python",status:StatusEnums.Active},
    3:{title:"learn php",status:StatusEnums.Active}

};
var next_todo=4;
module.exports={statusenums:StatusEnums,Todos:todos,Next_todo:next_todo};