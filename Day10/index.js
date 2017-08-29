var express=require("express");
var app=express();
var bodyparser=require("body-parser");

var db=require('./seed');
console.log(db);
app.use(bodyparser.urlencoded());
app.use("/",express.static(__dirname+"/public"));
app.get("/api/todos",function(req,res){

    res.json(db.Todos);

});
app.post("/api/todos/",function(req,res){

    var todo=req.body.todo_title;
    console.log("dhefj"+todo);
    if(!todo ||todo==""||todo.trim()=="")
    {

        res.status(400).json({err:"tere baap ne dala tha ye??"});


    }
    else
        {
        var new_todo_object={title:todo,status:db.statusenums.Active};
        db.Todos[db.Next_todo++] = new_todo_object;

        res.json(db.Todos);
    }


});
app.delete("/api/todos/:id",function(req,res){

    var del_id=req.params.id;
    var todo=db.Todos[del_id]
    if(!todo){res.status(400).json({err:"tere baap ne dala tha ye??"});}
    else{
        todo.status=db.statusenums.Deleted;
    res.json(db.Todos);
    }


});
app.put("/api/todos/:id",function(req,res){

    var mod_id=req.params.id;
    var todo=db.Todos[mod_id]
    if(!todo)
    {
        res.status(400).json({err:"cannot modify it since it does not exist"});
    }
    else{
        todo.status=db.statusenums.Complete;
        res.json(db.Todos);
    }


});
app.listen(3000);