import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Navbar from './components/Navbar';
import Contato from './pages/contato';
import Promocoes from './pages/promocoes';
import Home from './pages/home';
import Destinos from './pages/destinos';
import { Route, Routes } from "react-router-dom";

function App() {

  const baseUrl = "https://localhost:7208/api/Destinos";

  const [data, setData] = useState([]);

  const [modalIncluir, setModalIncluir]=useState(false);

  const abrirFecharModalIncluir=()=>{
    setModalIncluir(!modalIncluir);
  }


  const pedidoGet = async()=>{
    await axios.get(baseUrl)
    .then(response => {
      setData(response.data);
    }).catch(error =>{
      console.log(error);
    });

  }

  const pedidoPost = async()=>{
    delete destinoSelecionado.id;
    await axios.post(baseUrl, destinoSelecionado)
    .then(response => {
      setData(data.concat(response.data));
      abrirFecharModalIncluir();
    }).catch(error =>{
      console.log(error);
    });

  }

  useEffect(()=>{
    pedidoGet();
  })

  const [destinoSelecionado, setDestinoSelecionado]=useState({
     id: '',
     local: '',
     data: '',
     duracao: ''    
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setDestinoSelecionado({
      ...destinoSelecionado,
      [name]: value
    });
    console.log(destinoSelecionado);
  }

  return (
    <div className="App text-black">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/destinos" element={<Destinos />} />
      </Routes>
      <br/>
      <br/>
      <header className='app-header'>
        <h3>Suas Viagens</h3>
        <button className="btn btn-success" onClick={()=>abrirFecharModalIncluir()}>Cadastrar Viagem</button>
      </header>
      <br/>
      
      <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Local</th>
      <th scope="col">Data</th>
      <th scope="col">Duração</th>
    </tr>
  </thead>
  <tbody>
   
   {data.map(destino=>(
    <tr key={destino.id}>
      <td>{destino.id}</td>
      <td>{destino.local}</td>
      <td>{destino.data}</td>
      <td>{destino.duracao}</td>
    </tr>
   ))}

  </tbody>
</table>

<Modal isOpen={modalIncluir}>
  <ModalHeader>Cadastrar Viagem</ModalHeader>
  <ModalBody>

    <div className="form-group">
      <label>Local</label>
      <br/>
      <input type="text" className="form-control" name="local" onChange={handleChange}/>
      <br/>
      <label>Data</label>
      <br/>
      <input type="date" className="form-control" name="data" onChange={handleChange}/>
      <br/>
      <label>Duração</label>
      <br/>
      <input type="text" className="form-control" name="duracao" onChange={handleChange}/>
      <br/>
    </div>

  </ModalBody>
  <ModalFooter>
    <button className="btn btn-primary" onClick={()=>pedidoPost()}>Cadastrar</button>{" "}
    <button className="btn btn-danger" onClick={()=>abrirFecharModalIncluir()}>Cancelar</button> 
  </ModalFooter>
</Modal>
    </div>
  );
}

export default App;
