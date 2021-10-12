import { Container, Row, Col, Modal, Spinner } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/LOGOTIPO.svg';
import cover from './assets/COVER YR NTWRK.png';
import coverMob from './assets/COVER YR NTWRK MOBILE GDE.png';
import './index.css';
import TextLoop from "react-text-loop";
import cover2 from './assets/ONE ON ONE.png';
import HIW1 from './assets/HIW 1.png';
import HIW2 from './assets/HIW 2.png';
import circle from './assets/circulo.jpg';
import HIW3 from './assets/HIW 3.png';
import illusFot from './assets/ILLUS FOOTER.png';
import logoFot from './assets/ISO LOGO.svg';
import smiley from './assets/SMILEY.png';
import estrela from './assets/estrela.png';
import {useState} from "react"
import axios from "axios";



function App() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // console.log(window.addEventListener("load"))
  window.addEventListener('load', (event) => {
    setTimeout(function(){document.body.classList.remove('preload')}, 1000)
  });
  console.log(window)
  const handleClose = () => {
    setName("")
    setEmail("")
    setSent(false)
    setShow(false)
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleShow = () => setShow(true);
  const handleSent = async () => {
    setLoading(true)
    try{
    await axios.post("/users", {name:name , email:email})
    setSent(true)
    setLoading(false)
    } catch {
      setLoading(false)
    }
  }

  const updateName = (e)=>{
    setName(e.target.value)
  }
  const updateEmail = (e)=>{
    setEmail(e.target.value)
  }
  return (
    <Container fluid style={{padding: 0}}>
      <Modal show={show} onHide={handleClose}>
          {!sent ?       
          (
          <>
            <Modal.Header style={{backgroundColor: "#FEC031", borderWidth: 0, textAlign: "center"}} closeButton>
              <h4 style={{fontWeight: "700", fontSize: "28px", marginLeft:"auto"}}>Solicitação de cadastro</h4>
            </Modal.Header>
            <Modal.Body style= {{paddingBottom: "0px"}}>
              <p class="pModal">A Genti ainda está na versão beta e temos coisinhas para ajustar. Se você quiser fazer parte dessa jornada/experimento e ter um primeiro encontro, deixe seus dados e entraremos em contato.</p>
              <div style={{marginTop:"6%"}}>
                <h4 style={{float:"left", fontSize: "16px", fontWeight: "700", marginRight: "15%", marginBottom: "8px"}}>Nome</h4><p class="pModal">O nome pelo qual iremos te chamar</p>
                <input onChange={updateName} style={{width: "100%", borderRadius:"5px", borderWidth: "1px", marginTop:"1%", marginBottom: "8px"}}></input>
              </div>
              <div style={{marginTop:"3%"}}>
                <h4 style={{float:"left", fontSize: "16px", fontWeight: "700", marginRight: "15%", marginBottom: "8px"}}>Email</h4><p class="pModal">É assim que a Genti entra em contato com você</p>
                <input onChange={updateEmail} style={{width: "100%", borderRadius:"5px", borderWidth: "1px", marginTop:"1%"}}></input>
              </div>
              <div style={{margin: "6% auto", display:"block", textAlign:"center"}}>
              <button disabled={!name || !email || !validateEmail(email)} class="customButton" type="button" onClick={handleSent}>
                {loading ? 
                (<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>) 
                : "Enviar solicitação"}
                </button>
              </div>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "#F9F8EC", borderWidth: 0, textAlign: "center"}}>
                <p class="pModal" style={{textAlign: "center"}}>Tem dúvidas ou sugestões? Email pra Genti no <a class="pChica2" href="mailto:hello@genti.co">hello@genti.io</a></p>
            </Modal.Footer>
          </>)
          : (<>
            <Modal.Header style={{backgroundColor: "#FEC031", borderWidth: 0, textAlign: "center"}} closeButton>
              <h4 style={{fontWeight: "700", fontSize: "28px", marginLeft:"auto"}}>Solicitação enviada</h4>
            </Modal.Header>
            <Modal.Body style= {{paddingBottom: "0px"}}>
            <img src={smiley} style={{width: "40%", margin: "6% auto", display:"block"}}></img>
            <h4 style={{fontWeight: "700", fontSize: "20px", marginLeft:"auto", textAlign:"center"}}>Agradecemos por fazer parte da Genti!</h4>
            <p class="pModal">Entraremos em contato em breve para te informar em detalhes como realizar sua primeira conexão.</p>
            <h4 id="voltar" onClick={handleClose}>Voltar</h4>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "#F9F8EC", borderWidth: 0, textAlign: "center"}}>
                <p class="pModal" style={{textAlign: "center"}}>Tem dúvidas ou sugestões? Email pra Genti no <a class="pChica2" href="mailto:hello@genti.co">hello@genti.io</a></p>
            </Modal.Footer>
          </>)
          }
      </Modal>
      <Row id="mainRow">
        <Col md={12} lg={5}>
          <img src={logo} style={{width: "40%", marginBottom: "7%"}}></img>
          <h1 id="mainH1">CONEXÕES HUMANAS RELEVANTES</h1>
          <img className="d-lg-none d-block" src={coverMob} style={{width: "85%", display: "block", marginRight: "auto", marginLeft: "auto", marginBottom: "7%"}}></img>
          <h3 id="h31">Conecte-se com</h3>
          <TextLoop>
          <h3 class="textLoop">o projeto</h3>
          <h3 class="textLoop">a causa</h3>
          <h3 class="textLoop">o mentor</h3>
          <h3 class="textLoop">a ideia</h3>
          <h3 class="textLoop">o feedback</h3>
          <h3 class="textLoop">a equipe</h3>
          <h3 class="textLoop">o investimento</h3>
          <h3 class="textLoop">a inspiração</h3>
          <h3 class="textLoop">o sócio</h3>
          </TextLoop>
          <h3 id="h32">que você busca</h3>
          <button class="customButton" type="button" onClick={handleShow} style={{marginTop: "10%"}}>Testar a Genti</button>
        </Col>
        <Col md={0} lg={7} className="d-none d-lg-block">
        <img src={cover} style={{width: "95%", display: "block", marginLeft: "auto", marginRight: "auto"}}></img>
        </Col>
      </Row>
      <div style={{backgroundColor:"#F9F8EC", padding:"7% 0 10% 0"}}>
        <div id="newDiv">
          <img src={estrela} style={{width: "184px", marginBottom: "6%"}}></img>
          <h3 className="h3new" style={{marginBottom:"32px"}}>Nossa IA te contecta com pessoas que te ajudam a alcançar seus objetivos.</h3>
          <h3 className="h3new">Genti é sua nova aliada na hora de gerar essas conexões de impacto para sua carreira.</h3>
        </div>
      </div>
      <div style={{backgroundColor: "#FEC031", padding: "4% 0%"}}>
        <h2 id="h2mid" >Como funciona?</h2>
      <Row id="mainRow" style={{padding:0, marginBottom: "5%", backgroundColor: "transparent"}}>
        <Col md={12} lg={7}>
        <img src={cover2} style={{width: "100%", display: "block"}}></img>
        </Col>
        <Col md={12} lg={5}>
          <Row>
            <Col md={12} lg={1}>
            <img src={HIW1} style={{width: "35px", marginTop: "13px"}}></img>
            </Col>
            <Col className="description" >
            <h4 id="h4title">Crie seu perfil e defina seus objetivos</h4>
            <p className="pGrande">É só para começar, você poderá modificar, remover ou adicioná-los a qualquer momento.</p>
            </Col>
          </Row>
          <Row style={{marginTop:"10px"}}>
            <Col md={12} lg={1}>
            <img src={HIW2} style={{width: "35px", marginTop: "13px"}}></img>
            </Col>
            <Col className="description" >
            <h4 id="h4title">Decida como e quando se conectar</h4>
            <p className="pGrande">Escolha o horário e a frequência em que você acha que vai gostar mais.</p>
            </Col>
          </Row>
          <Row style={{marginTop:"10px"}}>
            <Col md={12} lg={1}>
            <img  src={HIW3} style={{width: "35px", marginTop: "13px"}}></img>
            </Col>
            <Col className="description" >
            <h4 id="h4title">A Genti te conecta com pessoas que te fazem evoluir</h4>
            <p class="pGrande">As pessoas que você procura estão procurando por você, nossa IA conecta vocês para um bate-papo.</p>
            </Col>
          </Row>
        </Col>
      </Row>
      </div>
      <div style={{marginTop: "18%"}}>
        <div style={{margin:"0 auto 1% auto"}}>
        <img id="circle" src={circle}></img>
        <h2 id="h2final" >Sua comunidade está te esperando </h2>
        <div style={{margin: "2.5% auto", display:"block", textAlign:"center", backgroundColor: "transparent"}}>
        <button class="customButton" type="button" style={{marginTop: "0px"}} onClick={handleShow}>Testar a Genti</button>
        </div>
        <h4 id="h4final" >O mundo que queremos construir está ao alcance de nossa vontade</h4>
        <img id="illusFot" src={illusFot} ></img>
        </div>
      </div>
      <div style={{backgroundColor: "#282828", textAlign: "center"}}>
      <img src={logoFot} class="logoF"></img>
      <p><a class="pChica" href="mailto:hello@genti.co">hello@genti.co</a></p>
      <p class="pChica">C.2021</p>
      </div>
    </Container>
  );
}

export default App;
