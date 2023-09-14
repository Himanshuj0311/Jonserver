
const resForm=document.getElementById("resgistration-form");

resForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const gender=document.getElementById("gender").value;
    const place=document.getElementById("place").value;

    fetch("https://dog-json.onrender.com/dogs",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name,age,gender,place})
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        alert("resgitration done")
    })
    .catch((err)=>{
        console.error("Error",error)
    })

})