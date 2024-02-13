import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import "../user/Signup.css"
import { ShopContext } from "../../context/shop-context"
import Login from './Login';
function Signup() {
  const nav = useNavigate();
  const { user, setUser } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isUserAlreadyRegistered = () => {
    return user.find((userData) => userData.email === email);
  };

  const handleButtonClick = () => {
    if (isUserAlreadyRegistered()) {
      alert("User already registered. Please use a different email.");
      return;
    }

    const userData = { name, email, password };
    setUser([...user, userData]);

    nav("/Login");
    console.log("hlooo", user);
  };

  return (
    <div className='Signparent'>
      <h7 className="Signtitile">Sign Up</h7>
    <Form>
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter Name" value={name}
          onChange={(e) => setName(e.target.value)}/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => handleButtonClick()} >
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Signup;