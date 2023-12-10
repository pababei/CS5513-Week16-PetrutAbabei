import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonAvatar,
  IonText,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [contactData, setContactData] = useState<object[]>([]);
  const dataURL =
    "https://dev-cs5513-week11-petrutababei.pantheonsite.io/wp-json/twentytwentythree-child/v1/contacts";
  useEffect(() => {
    fetch(dataURL)
      .then((response) => response.json())
      .then((data) => setContactData(data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacts</IonTitle>
          </IonToolbar>
        </IonHeader>

        {contactData.map((item, index) => (
          <IonCard>
            <IonCardHeader>
              <IonAvatar>
                <img
                  alt={`profile photo of ${item.acf_fields.image_link}`}
                  src={`https://${item.acf_fields.image_link}`}
                />
              </IonAvatar>
              <IonCardTitle>{item.post_title}</IonCardTitle>
              <IonCardSubtitle>{item.acf_fields.email}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText>{item.acf_fields.headline}</IonText>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
