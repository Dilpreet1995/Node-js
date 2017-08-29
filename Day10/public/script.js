const RESPONSE_DONE=4;
const STATUS_OK=200;
const send_todo="todo_div";

function add_todo_elements(id,todo_data_json){
    var data_put=document.getElementById(id);
    data_put.innerHTML=todo_data_json

}



    function GetToDoAjax()
{
//    console.log("milo milo")
var xhr=new XMLHttpRequest();
xhr.open("GET","/api/todos",true);
xhr.onreadystatechange=function(){

    if(xhr.readyState==RESPONSE_DONE){

        if(xhr.status==STATUS_OK){add_todo_elements(send_todo,xhr.responseText)}

    }

};
        xhr.send(data=null)
}