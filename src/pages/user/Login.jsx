import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from "../../images/loginui.jpg"
import "../user/Login.css"
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router';
import { useState,useContext } from 'react';
function Login() {
  const { user,setLogUser } = useContext(ShopContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();
  function loginBtn() {
    const loggedUser=user.find(
        (userData) => userData.email === email && userData.password === password
      )
    if(loggedUser){
      setLogUser(loggedUser)
      alert("Login successful !!!");
      nav("/Shop");
    } else {
      alert("invalid email or password");
    }
  }
  return (
    <div className='loginparent'>
      <h7 className="logintitile">Login</h7>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={loginBtn}>
        Submit
      </Button>
      <img className="loginimage" src={img} alt='img'/>
    </Form>
    </div>
  );
}

export default Login;