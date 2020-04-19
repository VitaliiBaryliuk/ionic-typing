import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonButton, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello world!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" color="secondary">
          <IonIcon icon={star} slot='start' />
          Hello World
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
