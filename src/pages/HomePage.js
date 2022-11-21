import { Table, Container, Button } from "react-bootstrap"
import { useEffect,useState } from "react"
import axios from "axios";
import ModalCreateUser from "../components/ModalCreateUser";
import { Link } from "react-router-dom";


function HomePage() {

    const [users, setUsers] = useState ([])

    
    const [reload, setReload] = useState(false);

    useEffect (() =>{

        async function fetchUsers(){
            const response = await axios.get("https://ironrest.herokuapp.com/91chamadosti")
            setUsers(response.data)
        }

        fetchUsers()

    },[reload])

    console.log(users)


    return ( 
        <div>
            <h1>HomePage</h1>
        
            <Container>
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
        {users.map((user) =>{
            return(
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
            )
        })}             
      </tbody>
     </Table>
        
     <ModalCreateUser reload={reload} setReload={setReload} />
        
    </Container> 
   </div>
  );
}

export default HomePage;