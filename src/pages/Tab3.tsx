import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonLabel,
  IonAccordionGroup,
  IonAccordion,
} from "@ionic/react";
import React, { useEffect, useState, useRef } from "react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  const [servicesData, setServicesData] = useState([]);
  const dataURL =
    "https://dev-cs5513-week11-petrutababei.pantheonsite.io/wp-json/twentytwentythree-child/v1/services";
  useEffect(() => {
    fetch(dataURL)
      .then((response) => response.json())
      .then((data) => setServicesData(data));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Services</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonAccordionGroup>
          {servicesData.map((item, index) => (
            <IonAccordion value={index} key={index}>
              <IonItem slot="header" color="light">
                <IonAvatar slot="start">
                  <img src={`https://${item.acf_fields.image_link}`} />
                </IonAvatar>
                <IonLabel>
                  <h2>{item.post_title}</h2>
                  <p>{item.post_content}</p>
                </IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <h2>Timeframe</h2>
                <p>{item.acf_fields.timeframe.replaceAll("~", ",")}</p>
                <h2>Pricing</h2>
                <p>{item.acf_fields.pricing.replaceAll("~", ",")}</p>
                <h2>Prerequisites</h2>
                <p>{item.acf_fields.prerequisites.replaceAll("~", ",")}</p>
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
