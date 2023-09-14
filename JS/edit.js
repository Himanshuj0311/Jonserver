
const resForm=document.getElementById("resgistration-form");
const ID=localStorage.getItem("ID")

resForm.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    const age=document.getElementById("age").value;
   

    fetch(`http://localhost:3001/dogs/${ID}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({age})
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        window.location.href="./dashboard.html"
    })
    .catch((err)=>{
        console.error("Error",err)
    })

})