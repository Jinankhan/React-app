import React, { useState, useContext } from "react";
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

export function SignupForm(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { switchToSignin } = useContext(AccountContext);
  const register = e => {
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
        <Input placeholder="Full Name" />
        <Input type='text'  placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)} />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton  type='submit' onClick={register} >Signup</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}