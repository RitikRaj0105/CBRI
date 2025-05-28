import React, { useState } from "react";
import "./Events.css";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Building Inspection Seminar",
      date: "2025-04-25",
      description: "Join us for an insightful seminar on modern building inspection techniques.",
      image: "/src/assets/seminar.jpg",
    },
    {
      id: 2,
      title: "Architecture Conference 2025",
      date: "2025-06-10",
      description: "A global event gathering architects and engineers to discuss innovative designs.",
      image: "/src/assets/conference.jpg",
    },
    {
      id: 3,
      title: "Defect Detection Workshop",
      date: "2025-07-15",
      description: "A hands-on workshop on advanced defect detection methods in construction.",
      image: "/src/assets/workshop.jpg",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="events-container">
      <h2 className="events-title">🎉 Upcoming Events</h2>
      <p className="events-subtitle">Explore our upcoming events and join us for knowledge sharing!</p>

      <div className="event-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => openEventDetails(event)}
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <h3>{selectedEvent.title}</h3>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p>{selectedEvent.description}</p>
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
