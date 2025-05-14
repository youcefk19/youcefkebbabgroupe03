function validation_login(){
  const mail = document.getElementById("mail");
  const mailValue = mail.value;
  const mailError =document.getElementById("MailError")
  const passError =document.getElementById("passw")
  mailError.innerHTML="";
  passError.innerHTML="" ;
  if(mailValue.length==0){
      if(mailValue=="")
    alert("enter your e-mail");
      mailError.innerHTML="Invalid E-mail"
      return false ;
  }else if (mailValue.length<=5){
      alert("should be longer than 5 ") ;
     mailError.innerHTML="should be longer than 5"
      return false
  }

const pass=document.getElementById("password");
const passValue=pass.value ;
if(passValue.length==0){
alert ("enter your password") ;
passError.innerHTML="Invalid Password";
return false ;
}
}

function validation_info() {
  const lastName = document.getElementById('last_name').value.trim();
  const firstName = document.getElementById('first_name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const phone = document.getElementById('phone_number').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('adress').value.trim();
  const password = document.getElementById('password').value;
  const confirmPass = document.getElementById('confirm_password').value;
  const genderSelected = document.querySelector('input[name="gender"]:checked');

  if (!lastName) {
    alert("Please enter your last name");
    return false;
  }
  if (!firstName) {
    alert("Please enter your first name");
    return false;
  }
  if (!email) {
    alert("Please enter your email");
    return false;
  }
  if (!address) {
    alert("Please enter your address");
    return false;
  }

  if (isNaN(age) || age < 17 || age > 100) {
    alert("Age must be between 17 and 100");
    return false;
  }

  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length !== 9 && phoneDigits.length !== 10) {
    alert("Phone number must be 9 or 10 digits");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return false;
  }
  if (password !== confirmPass) {
    alert("Passwords don't match");
    return false;
  }

  if (!genderSelected) {
    alert("Please select your gender");
    return false;
  }

  return true;
}

function validation_order() {
  const sellerName = document.getElementById('sellerName').value.trim();
  let selectedColor = "";
  if (document.getElementById('goldCheckbox').checked) {
    selectedColor = "Gold";
  }
  if (document.getElementById('silverCheckbox').checked) {
    if (selectedColor !== "") {
      selectedColor += " and Silver";
    } else {
      selectedColor = "Silver";
    }
  }
  if (selectedColor === "") {
    selectedColor = "none";
  }

  const quantitySelect = document.getElementById('quantitySelect');
  const selectedQuantity = quantitySelect.value;

  alert("YOUR ORDER DETAILS:\n\n" +
        "Seller: " + (sellerName || "Not specified") + "\n" +
        "Quantity: " + selectedQuantity + "\n" +
        "Color: " + selectedColor + "\n\n" +
        "Thank you for your order!");

  return false;
}

    function validation_info() {
      // Get form values
      const lastName = document.getElementById('last_name').value.trim();
      const firstName = document.getElementById('first_name').value.trim();
      const age = parseInt(document.getElementById('age').value);
      const phone = document.getElementById('phone_number').value.trim();
      const email = document.getElementById('email').value.trim();
      const address = document.getElementById('adress').value.trim();
      const password = document.getElementById('password').value;
      const confirmPass = document.getElementById('confirm_password').value;
      const genderSelected = document.querySelector('input[name="gender"]:checked');

      // Check required fields
      if (!lastName) {
        alert("Please enter your last name");
        return false;
      }
      if (!firstName) {
        alert("Please enter your first name");
        return false;
      }
      if (!email) {
        alert("Please enter your email");
        return false;
      }
      if (!address) {
        alert("Please enter your address");
        return false;
      }

      // Check age
      if (isNaN(age) || age < 17 || age > 100) {
        alert("Age must be between 17 and 100");
        return false;
      }

      // Check phone number
      const phoneDigits = phone.replace(/\D/g, '');
      if (phoneDigits.length !== 9 && phoneDigits.length !== 10) {
        alert("Phone number must be 9 or 10 digits");
        return false;
      }

      // Check password
      if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
      }
      if (password !== confirmPass) {
        alert("Passwords don't match");
        return false;
      }

      // Check gender
      if (!genderSelected) {
        alert("Please select your gender");
        return false;
      }

      // If all validations pass
      return true;
    }
