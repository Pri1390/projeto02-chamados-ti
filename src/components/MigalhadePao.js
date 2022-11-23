import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

function BreadcrumbEx() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        {" "}
        <Link to="/">Tela de Login</Link>{" "}
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {" "}
        <Link to="/homepage"> Controle de Chamados</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbEx;
