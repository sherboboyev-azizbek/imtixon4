const elForm = document.querySelector(".js-form")
const elEmailInput = document.querySelector(".js-email")
const elPasswordInput = document.querySelector(".js-password")

elForm.addEventListener("submit", function (evt) {
   evt.preventDefault();

   fetch("https://todo-for-n92.cyclic.app/user/register", {
      method: 'POST',
      headers: {
         'Content-type' : 'application/json',
      },
      body: JSON.stringify({
         username: elEmailInput.value,
         password: elPasswordInput.value,
      }), 
   })
   .then((res) => res.json())
   .then((data) => {
      console.log(data);
      if (data.token) {
         localStorage.setItem('token', data.token);
         location.replace('index.html')
      }
   } )
   .catch((err) => console.log(err))


  

   
  
} )