const elForm = document.querySelector("#form");
const elInput = document.querySelector("#js-input");
const elTodoList = document.querySelector(".todo-list");

const localData = localStorage.getItem("token");
const elLogOut = document.querySelector("#log-out-js")

if(!localData) {
   window.location.replace('register.html')
}

elLogOut.addEventListener("click", function(){
   localStorage.removeItem('token')
   window.location.reload()
})


elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();

   fetch('https://todo-for-n92.cyclic.app/todos/add', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "x-access-token" : localData, 
    },
    body: JSON.stringify({
      task : elInput.value
    }) 
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
})



