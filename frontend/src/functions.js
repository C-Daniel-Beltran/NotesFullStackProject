import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function show_alert(msj, icon, foco = "") {
  onfocus(foco);
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    icon: icon,
    title: msj,
  });
}

function onfocus(foco) {
  if (foco !== "") {
    document.getElementById(foco).focus();
  }
}
