import React, {useState,useContext } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import {  useHistory } from "react-router-dom";
import { auth } from "../../firebase"


export function LoginForm(props) {
  const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const { switchToSignup } = useContext(AccountContext);
  const signIn = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/redirect')
            }
        })
        .catch(error => alert(error.message))
}


  return (
    <BoxContainer>
      <FormContainer>
        <Input type='text'  placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)} />
      </FormContainer>
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton   type='submit' onClick={signIn}>Login</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}