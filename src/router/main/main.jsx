import React, { useEffect, useState } from "react";
import { Footer, Header, Preview, Editor } from "../../components";
import styles from "./main.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Main = ({ FileInput, authService, firebaseDB }) => {
  const [cards, setCards] = useState({});

  const navigate = useNavigate();
  const location = useLocation().state;
  const [userId, setUserId] = useState(location && location.id);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) return;

    const stopSync = firebaseDB.syncCard(userId, (cards) => {
      setCards(cards);
    });

    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    const unsubscribe = authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
    return unsubscribe;
  });

  const addAndUpdate = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    firebaseDB.upload(userId, card);
  };

  const deleteCard = (card) => {
    firebaseDB.removeData(userId, card.id);
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <section className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addAndUpdate={addAndUpdate}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Main;
