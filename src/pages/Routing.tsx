import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonButton, IonIcon, IonInput } from '@ionic/react';
import { star } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {

  const [ input, setInput ] = useState<string>('')
  useEffect(() => {
    console.log(input)
  }, [input])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello world!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton routerLink="/example">Click me</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
