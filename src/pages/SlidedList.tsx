import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption } from '@ionic/react';
import React from 'react';
import './Home.css';

const arr = [
  {
    name: 'Finn',
    desc: 'THis guy rocks!'
  },
  {
    name: 'Han',
    desc: 'Trust me, i am a programmer'
  },
  {
    name: 'Rey',
    desc: 'I am done with it!'
  }
];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello world!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {arr.map(elem => 
              <IonItemSliding key={elem.name}>
                <IonItem>
                  <IonAvatar>
                    <img src={`https://ionicframework.com/docs/demos/api/list/avatar-${elem.name.toLowerCase()}.png`} />
                  </IonAvatar>
                  <IonLabel className="ion-padding">
                    <h2>{elem.name}</h2>
                    <h3>{elem.desc}</h3>
                  </IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption>Hello</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
