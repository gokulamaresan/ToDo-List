const todolist=[
{
name:'gokul',
date:'14/03/2003'
},
{
    name:'krishna',
    date:'15/06/2008'
}];
function add(){ 
    let getinnerElement=document.querySelector('#js-todonameinput');
    const namein = getinnerElement.value;
    let getinnerElementdate = document.querySelector('#js-dateinput');
    const datein=getinnerElementdate.value;
    if(!namein == '' && !datein == ''){
    todolist.push({
        name:namein,
        date:datein
    });

    // console.log(todolist);

      render();
}
}
render();
function render(){
    let total='';
    for(let i=0;i<todolist.length;i++)
    {   
        const valueobject = todolist[i];
        // console.log(valueobject)
        // console.log(todolist);
        //shortcut for const name = innervalueobject.name =  const {name} = innervalueobject;
        const { name, date } = valueobject;
        const html = `
        <div> ${name}</div>
        <div>${date} </div>
            <button onclick="
                todolist.splice(${i},1);
                render();"class='delete-button'>Delete
            </button>
        `;
         total += html;
    }
            document.querySelector('#js-todonameoutput').innerHTML = total;

}