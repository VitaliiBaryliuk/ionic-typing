import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonButton, IonIcon, IonInput, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import { toast } from '../toast';
import './Home.css';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';
import { useDispatch } from 'react-redux';
import { setUserState } from '../redux/actions';

const Login: React.FC = () => {

  const [ busy, setBusy ] = useState<boolean>(false);
  const [ username, setUsername ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();

  async function login() {
    setBusy(true);
    const res: any =  await loginUser(username, password);
    if (!res) {
      toast('Error logging with your credentials');
    } else {
      dispatch(setUserState(res.user.email))
      history.replace('/dashboard');
      toast('You are logged in!');
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait.." duration={0}  isOpen={busy} />
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput placeholder="Username" onIonChange={ (e: any) => setUsername(e.target.value)} />
        </IonItem>
        <IonItem>
          <IonInput type="password" placeholder="Password" onIonChange={ (e: any) => setPassword(e.target.value) }/>
        </IonItem>
        
        <IonButton onClick={login}>Login</IonButton>
      
        <p>New here? <Link to="/register">Register</Link></p>
      </IonContent>

    </IonPage>
  );
};

export default Login;
