import{useParams, useNavigate} from "react-router-dom"
import{useEffect, useState} from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap"



function DetailPage() {
  const { userID } = useParams();
  const navigate = useNavigate();

  const [showEdit, setShowEdit] = useState(false);
  const [reload, setReload] = useState(false);
  const [user, setUsers] = useState({});
  const [form, setForm] = useState({
    nome: "",
    matricula: "",
    telefone: "",
    email: "",
    setor: "",
    solicitacao: "",
    obsSolicitacao: "",
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/91chamadosti/${userID}`
        );
        setUsers(response.data);
        setForm(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Algo deu errado. Tente Novamente!");
      }
    }
    fetchUser();
  }, [reload]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleDelete(e) {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/91chamadosti/${userID}`
      );
      navigate("/");
      toast.success("Funcionário deletado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado. Tente Novamente!");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const clone = { ...form };
      delete clone._id;

      await axios.put(
        `https://ironrest.herokuapp.com/91chamadosti/${userID}`,
        clone
      );

      toast.success("Alterações salvas");
      setReload(!reload);
      setShowEdit(false)
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado, Tente novamente.");
    }
  }

  console.log(user);

  return (
    <Container className="my-4">
      {/* Card User */}
      {showEdit === false && (
        <Card className="text-center" bg="light">
          <Card.Header>
            <Card.Title>{user.nome}</Card.Title>
            <Card.Subtitle className="mb text-muted">
              Matrícula: {user.matricula}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>Telefone:</Card.Title>
                <Card.Text>{user.telefone}</Card.Text>

                <Card.Title>Email:</Card.Title>
                <Card.Text>{user.email}</Card.Text>

                <Card.Title>Setor</Card.Title>
                <Card.Text>{user.setor}</Card.Text>
              </Col>
              <Col>
                <Card.Title>Tipo de Solicitação:</Card.Title>
                <Card.Text>{user.solicitacao}</Card.Text>

                <Card.Title>Detalhes da Solicitação:</Card.Title>
                <Card.Text>{user.obsSolicitacao}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row>
              <Col>
                <Button variant="primary" onClick={() => setShowEdit(true)}>
                  Editar Chamado
                </Button>
              </Col>
              <Col>
                <Button variant="danger" onClick={handleDelete}>
                  Excluir Chamado
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      )}

      {/* Card User Edit*/}
      {showEdit === true && (
        <Card className="text-center" bg="light">
          <Card.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Nome do Solicitante</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira o nome completo do solicitante"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Matrícula</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira a matricula do solicitante"
                      name="matricula"
                      value={form.matricula}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Número de Telefone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira o telefone do solicitante"
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira o email do solicitante"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Setor</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Insira o setor do solicitante"
                      name="setor"
                      value={form.setor}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Tipo de Solicitação</Form.Label>
                    <Form.Select name="solicitacao" onChange={handleChange}
                     defaultValue={form.solicitacao}>
                      <option>Selecione uma opção</option>
                      <option value="Instalar Software">
                        Instalar Software{" "} 
                      </option>
                      <option value="Configurar Software ">
                        Configurar Software{" "}
                      </option>
                      <option value="Instalar PacoteOffice">
                        Instalar Pacote Office
                      </option>
                      <option value="Formatar Computador">
                        Formatar Computador
                      </option>
                      <option value="Instalar Impressora">
                        Instalar impressora
                      </option>
                      <option value="Configurar Rede">Configurar rede</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>
                      Por favor, informe detalhes da solicitação:
                    </Form.Label>
                    <br />
                    <Form.Control
                      type="text"
                      name="obsSolicitacao"
                      placeholder="Detalhes da solicitação:"
                      value={form.obsSolicitacao}
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row>
              <Col>
                <Button variant="danger" onClick={() => setShowEdit(false)}>
                  Voltar
                </Button>
              </Col>
              <Col>
                <Button variant="primary" onClick={handleSubmit}>
                  Salvar Alterações
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      )}
    </Container>
  );
}

export default DetailPage;