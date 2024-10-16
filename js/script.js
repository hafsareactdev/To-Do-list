// dom part start --------------------------------------------
let mainInput = document.querySelector('.mainInput')
let error = document.querySelector('.error')
let todoHead = document.querySelector('.todoHead')
// function part start ---------------------------------------
let inputclick = ()=>{
    if(mainInput.value ==''){
        error.innerHTML = 'Please enter a value'
    }else{
        error.innerHTML = ''
        // create element part start -------------------------
        let singleTodo = document.createElement('div')
        let input = document.createElement('input')
        let EditButton = document.createElement('button')
        let RemoveButton = document.createElement('button')
        // making child --------------------------------------
        todoHead.appendChild(singleTodo)
        singleTodo.appendChild(input)
        singleTodo.appendChild(EditButton)
        singleTodo.appendChild(RemoveButton)
        // adding class name ---------------------------------
        singleTodo.classList.add('singleTodo')
        // adding content to the tags ------------------------
        EditButton.innerHTML ='Edit'
        RemoveButton.innerHTML = 'Remove'
        // adding data into input field ----------------------
        input.value = mainInput.value
        mainInput.value =''
        // setting input attributes --------------------------
        input.setAttribute('readonly','readonly')
        // deleting data -------------------------------------
        RemoveButton.addEventListener('click' , ()=>{
            singleTodo.remove()
        })
        // edit data -----------------------------------------
        EditButton.addEventListener('click' ,()=>{
          if(EditButton.innerHTML == 'Edit'){
            EditButton.innerHTML = 'Save'
            EditButton.style = 'background:#C9E9D2 ; color:#000 ; box-shadow: 0 0 10px #C9E9D2;'
            input.removeAttribute('readonly','readonly')
          }else{
            EditButton.innerHTML = 'Edit'
            EditButton.style = 'background:#394867 ; color:#F1F6F9 ;'
            input.setAttribute('readonly','readonly')
          }
        })
    }
    
}
// Enter key function ----------------------------------------
let inputkey = (item)=>{
  if(item.key =='Enter'){
    inputclick()
  }
}

