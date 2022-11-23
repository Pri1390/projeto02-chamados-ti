import { Button, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// -------- COMPONENTE INICIAL --------
// ao entrar na aplicação será mostrado este componente para o usuário iniciar sua navegação na página
function LoginPage() {
  return (
    <Container
      style={{ height: "90vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Form className="d-flex align-items-center justify-content-center flex-column w-25 h-30">
        <Row>
          <img
            className="chamados-imagem"
            src="https://esales.com.br/wp-content/uploads/2019/11/quais-os-indicadores-para-otimizacao-de-atendimento-online.jpg"
            alt="imagem chamado ti"
            height="300"
            widht="300"
          />
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className ="fw-bold">Acesso ao sistema</Form.Label>
            <Form.Control type="email" placeholder="Usuário" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Lembrar senha" />
          </Form.Group>
          <Button className="p-2" variant="dark" size="lg">
            <Link className="nav-link" to="/HomePage">
              Acessar
            </Link>
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default LoginPage;
