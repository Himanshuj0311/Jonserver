document.addEventListener("DOMContentLoaded", function(){
    const loginForm=document.getElementById("login-form");



    loginForm.addEventListener("submit",function(e){
        e.preventDefault();
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;


        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        })
        .then((response) => response.json())
        .then((data) =>{
            if(data.token){
                    alert("Login Succesfull")

                localStorage.setItem("Token",data.token)
              
                window.location.href="dashboard.html"
            }
            else{
                alert("Login Failed. Please try again")
            }
        })
        .catch((error)=>{
            console.error("Error",error);
        })


    })
})