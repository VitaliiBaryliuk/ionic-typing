import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonButton, IonIcon, IonInput, IonLoading } from '@ionic/react';
import { star, bus } from 'ionicons/icons';
import React, { useState } from 'react';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig';
import './Home.css';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

  const [ busy, setBusy ] = useState<boolean>(false);
  const [ username, setUsername ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ confirmPassword, setConfirmPassword ] = useState<string>('');

  async function register() {
    setBusy(true);
    if (password !== confirmPassword) {
      return  toast('Passwords do not match');
    }
    if (username.trim() === '' || password.trim() === '') {
      return toast('Username and passowrd are required');
    }

    const res = await registerUser(username, password);

    if (res) {
      toast('You have registed saccessfully!');
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Registration in progress.." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput placeholder="Username" onIonChange={ (e: any) => setUsername(e.target.value)} />
        </IonItem>
        <IonItem>
          <IonInput type="password" placeholder="Password" onIonChange={ (e: any) => setPassword(e.target.value) }/>
        </IonItem>
        <IonItem>
          <IonInput type="password" placeholder="Confirm Password" onIonChange={ (e: any) => setConfirmPassword(e.target.value) }/>
        </IonItem>
        <IonButton onClick={register}>Register</IonButton>

        <p>Already have an acconunt? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
