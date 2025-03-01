import Swal from "sweetalert2";

function errAlert(e : unknown){
  if(e instanceof Error){
    Swal.fire({
      icon: "error",
      title: "Ha ocurrido un error",
      text: e.message,
      footer: "Intentalo denuevo mas tarde. \nSi el problema persiste contacte a g.mardones@outlook.com"
    });
  } else {
    
  }
}

export {
  errAlert
};