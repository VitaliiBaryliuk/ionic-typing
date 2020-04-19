import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOptions, IonItemSliding, IonItemOption, IonButton, IonIcon, IonInput, IonLoading } from '@ionic/react';
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'; 
import { useHistory } from 'react-router';
import words from '../wordlist';

import './Dashboard.css';

type WordType = {
  word: string;
  done: boolean;
  correct: boolean;
}

const Dashboard: React.FC = () => {
  const [ busy, setBusy ] = useState<boolean>(false);
  const [ input, _setInput ] = useState<string>('');
  const [ activeWordList, setActiveWordList ] = useState<((null | WordType)[])>(words.slice(0,5).map(word => ({ word, done: false, correct: false })));
  const [ activeWordIndex, setActiveWordIndex ] = useState<number>(0);
  const [ removeIndex, setRemoveIndex ] = useState<number>(0);

  const username = useSelector((state: any) => state.user.username); 
  const history = useHistory();
  const inputRef = useRef<HTMLIonInputElement>(null);

  async function logout() {
      setBusy(true);
      await logoutUser();
      setBusy(false);
      history.replace('/')
  }

  function setInput(value: string) {
    if(inputRef.current) {
      inputRef.current.value = value
    }
  }

  function setInputValue(value: string) {
    if(value.trim() === '') {
      setInput('');
    } else if (value[value.length - 1] === ' ') {
      
      setActiveWordList(list => {
        let wordBlocks: any = [...list];
        wordBlocks[activeWordIndex] = {
          ...wordBlocks[activeWordIndex],
          done: true,
          correct: wordBlocks[activeWordIndex].word === value.trim()
        }
        if (wordBlocks.length > 15) {
          // wordBlocks = wordBlocks.slice(1);
          wordBlocks[removeIndex] = null;
          setRemoveIndex(count => ++count);
        } 
        setActiveWordIndex(count => ++count);
          
        wordBlocks.push( { word: words[wordBlocks.length], correct: false, done: false });

        return wordBlocks;
      })
      setInput('');
    } else {
      setInput(value);
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLoading message="Logging out.." duration={0} isOpen={busy} />
        { activeWordList.filter(Boolean).map(block => {
          const wordBlock = block as WordType;
          const isDone = wordBlock.done;
          const isCorrect = wordBlock.correct;
          let classes = 'word';
          if (isDone && isCorrect) {
            classes+= ' done correct';
          } else if (isDone && !isCorrect) {
            classes+= ' done incorrect';
          }

          return <span className={classes}>{wordBlock.word}</span>
        }) }  

        <IonInput ref={inputRef} onIonChange={(e: any) => setInputValue(e.target.value)} placeholder="Write the word" />

        <p>Hello {username}</p>
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
