import { Table, Container, Button, Form, FloatingLabel } from "react-bootstrap"
import { useEffect,useState } from "react"
import axios from "axios";
import ModalCreateUser from "../components/ModalCreateUser";
import { Link } from "react-router-dom";


function HomePage() {

    const [users, setUsers] = useState ([])    
    const [reload, setReload] = useState(false);
    const [search, setSearch] = useState("");

    useEffect (() =>{

        async function fetchUsers(){
            const response = await axios.get("https://ironrest.herokuapp.com/91chamadosti")
            setUsers(response.data)
        }

        fetchUsers()
    },[reload])

  
    function handleSearch(e) {
      setSearch(e.target.value);
    }

    console.log(search)


    return (
      <div>
        <h1>HomePage</h1>

        <Container>
          <FloatingLabel
            controlId="floatingInput"
            label="Pesquise por nome ou matrícula"
            className="my-3"
          >
            <Form.Control
              type="text"
              placeholder="pesquise"
              value={search}
              onChange={handleSearch}
            />
          </FloatingLabel>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome do Solicitante</th>
                <th>Matrícula</th>
                <th>Setor</th>
                <th>Solicitação</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {users
              .filter((user) => {
                return (
                  user.nome.toLowerCase().includes(search.toLowerCase()) ||
                  user.matricula.toLowerCase().includes(search.toLowerCase())
                ) 
                
              })
              .map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.nome}</td>
                    <td>{user.matricula}</td>
                    <td>{user.setor}</td>
                    <td>{user.solicitacao}</td>
                    <td>
                      <Link to={`/user/${user._id}`}>
                        <Button variant="outline-primary">Detalhes</Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <ModalCreateUser reload={reload} setReload={setReload} />
        </Container>
      </div>
    );
}

export default HomePage;