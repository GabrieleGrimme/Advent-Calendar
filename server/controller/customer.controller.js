//customer.controller.js

function customerForm(request, response) {
    response.send(` 
              <h1>Add a new customer!</h1>
              <form action="/customer" method="POST">
              <input type="text" name="surname" placeholder="surname">
              <input type="text" name="lastname" placeholder="lastname">
              <input type="text" name="email" placeholder="Enter E-Mail">
              <button>Add customer</button>
              </form>
            <a href="/">Back to products!</a>
            
          `);
  }
  
  function postCustomer(request, response) {
    const { surname, lastname, email } = request.body;
    response.send(
      `<h1>Add a new customer!</h1>
      <p>Surname: ${surname}</p>
      <p> Lastname: ${lastname}</p>
      <p> E-Mail: ${email}</p>`
    );
  }
  
  export { customerForm, postCustomer };