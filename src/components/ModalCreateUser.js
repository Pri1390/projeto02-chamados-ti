import axios from "axios";
import { useState } from "react";
import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import "../pages/homepage.css";

function ModalCreateUser({ reload, setReload }) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    matricula: "",
    telefone: "",
    email: "",
    setor: "",
    solicitacao: "",
    niveldeprioridade: "",
    obsSolicitacao: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        "https://ironrest.cyclic.app/chamadosti-projeto02",
        form
      );
      handleClose(); //fechando o modal
      //limpando o formulário
      setForm({
        nome: "",
        matricula: "",
        telefone: "",
        email: "",
        setor: "",
        solicitacao: "",
        niveldeprioridade: "",
        obsSolicitacao: "",
      });
      toast.success("Chamado aberto com sucesso!");
      //*reload da página após abertura de chamado não está funcionando
      setReload(!reload);
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado, Tente novamente.");
    }
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Abrir chamado
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Abertura de Chamado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                <Form.Group className="mb-3">
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
                  <Form.Select name="solicitacao" onChange={handleChange}>
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
                <Col></Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <div className="prioridade">
                    <Form.Label className="ratioPrioridade">
                      Nivel de Prioridade
                    </Form.Label>
                    <Form onChange={handleChange}>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`}>
                          <Form.Check
                            value="Baixo"
                            inline
                            label="baixo"
                            name="niveldeprioridade"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            value="Médio"
                            inline
                            label="médio"
                            name="niveldeprioridade"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            value="Alto"
                            inline
                            label="alto"
                            name="niveldeprioridade"
                            type={type}
                            id={`inline-${type}-3`}
                          />
                        </div>
                      ))}
                    </Form>
                  </div>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Salvar Chamado
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCreateUser;
