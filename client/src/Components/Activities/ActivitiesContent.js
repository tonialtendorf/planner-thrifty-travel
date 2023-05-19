import React, { useState } from 'react';
import './ActivitiesStyle.css';
import snorkelingImage from '../assets/snorkeling.jpg';
import hikingImage from '../assets/hiking.jpeg';
import kayakingImage from '../assets/kayaking.jpg';
import shoppingImage from '../assets/shopping.jpg';
import fishingImage from '../assets/fishing.PNG';
import tourImage from '../assets/citytour.PNG';

const ActivitiesContent = () => {
  const [activities, setActivities] = useState([
    { id: 1, added: false },
    { id: 2, added: false },
    { id: 3, added: false },
    { id: 4, added: false },
    { id: 5, added: false },
    { id: 6, added: false }
  ]);

  const handleAddToItinerary = (id) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) =>
        activity.id === id ? { ...activity, added: !activity.added } : activity
      )
    );
  };

  return (
    <div className="work-container">
      <h1 className="activity-heading">Activities</h1>
      <div className="activity-container">
        <div className="activity-card">
          <img src={snorkelingImage} alt="img1" />
          <h2 className="activity-title">Snorkeling</h2>
          <button
            className="btn"
            onClick={() => handleAddToItinerary(1)}
          >
            {activities[0].added ? (
              <span>&#10003; Added to Itinerary</span>
            ) : (
              <span>Add to Itinerary</span>
            )}
          </button>
        </div>
        <div className="activity-card">
          <img src={shoppingImage} alt="img1" />
          <h2 className="activity-title">Shopping</h2>
          <button
            className="btn"
            onClick={() => handleAddToItinerary(2)}
          >
            {activities[1].added ? (
              <span>&#10003; Added to Itinerary</span>
            ) : (
              <span>Add to Itinerary</span>
            )}
          </button>
        </div>
        <div className="activity-card">
          <img src={kayakingImage} alt="img3" />
          <h2 className="activity-title">Kayaking</h2>
          <button
            className="btn"
            onClick={() => handleAddToItinerary(3)}
          >
            {activities[2].added ? (
              <span>&#10003; Added to Itinerary</span>
            ) : (
              <span>Add to Itinerary</span>
            )}
          </button>
        </div>
        <div className="activity-card">
          <img src={hikingImage} alt="img4" />
          <h2 className="activity-title">Hiking</h2>
          <button
            className="btn"
            onClick={() => handleAddToItinerary(4)}
          >
            {activities[3].added ? (
              <span>&#10003; Added to Itinerary</span>
            ) : (
              <span>Add to Itinerary</span>
            )}
          </button>
        </div>

        <div className="activity-card">
          <img src={fishingImage} alt="img5" />
          <h2 className="activity-title">Fishing</h2>
          <button
            className="btn"
            onClick={() => handleAddToItinerary(5)}
          >
            {activities[4].added ? (
              <span>&#10003; Added to Itinerary</span>
            ) : (
              <span>Add to Itinerary</span>
            )}
          </button>
        </div>

        <div className="activity-card">
          <img src={tourImage} alt="img6" />
          <h2 className="activity-title">City Tours</h2>
          <button
            className="btn"
            onClick={() => handleAddToItinerary(6)}
          >
            {activities[5].added ? (
              <span>&#10003; Added to Itinerary</span>
            ) : (
              <span>Add to Itinerary</span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ActivitiesContent;