const handlerlogin =(event) => {
    event.preventDefault();
      const { username, password } = getlogininputs();
      const user = new (null,username,value,password.value)

      loginservice.apiAuthuser(user).then(result => {
        console.log(result);
        user.setId(result.id);
            console.log(result.firstname);
            handleShowhite();

        }).catch(error => {
            reject('erro na requisição')
            
       
            )
      }
            password
    

 .then(response => response.json())



const  logincomponent = {
    rum ()  => {
        const formlogin = document.
        getElementById('formLogin');
        formlogin.addEventListener
        ("submit",handlerlogin);

    }

    }
    export { logincomponent}
