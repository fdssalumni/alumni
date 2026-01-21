const students = {
  "muhammad@gmail.come": "123456",
  "teaboy": "0852"
};
function login(){
  const id = document.getElementById("studentId").value.trim();
  const pass = document.getElementById("password").value.trim();

  if(id === "" || pass === ""){
    Swal.fire("Error","Please fill all fields","warning");
    return;
  }

  if(!students[id]){
    Swal.fire({
      icon:"error",
      title:"Access Denied",
      text:"You are not our alumni member or cantact admin to add you"
    });
    return;
  }

  if(students[id] !== pass){
    Swal.fire({
      icon:"error",
      title:"Wrong Password",
      text:"Invalid password"
    });
    return;
  }

  // Save login state
  localStorage.setItem("loggedInStudent", id);

  Swal.fire({
    icon:"success",
    title:"Login Successful",
    text:"Welcome "+id,
    timer:1200,
    showConfirmButton:false
  }).then(()=>{
    window.location.href = "moha.html";
  });
}

if(localStorage.getItem("loggedInStudent")){
  window.location.href = "moha.html";
}