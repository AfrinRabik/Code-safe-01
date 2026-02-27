import React from 'react';

const AlertCard = ({ alert, onResolve }) => {
  const isResolved = alert.status === 'resolved';

  return (
    <div className={`alert-card ${isResolved ? 'resolved' : ''}`}>
      
      <div className="card-header">
        <span className={`status-badge ${isResolved ? 'status-resolved' : 'status-active'}`}>
          {alert.status}
        </span>
      </div>

      <div className="card-content mt-1">
        {alert.image ? (
          <img src={alert.image} alt={alert.childName} className="child-photo" />
        ) : (
          <div className="child-photo">
            No Photo
          </div>
        )}

        <div className="card-details">
          <h3 className="emergency-header">MISSING: {alert.childName}</h3>
          <p><strong>Age:</strong> {alert.age}</p>
          <p><strong>Last Seen:</strong> {alert.lastSeenLocation} at {alert.lastSeenTime}</p>
          <p><strong>Description:</strong> {alert.description}</p>
          <p><strong>Contact:</strong> {alert.contactNumber}</p>
        </div>
      </div>

      <div className="card-footer">
        <a href={`tel:${alert.contactNumber}`} className="call-link">
          📞 CONTACT
        </a>

        {!isResolved && (
          <button
            onClick={() => onResolve(alert.id)}
            className="btn btn-outline"
          >
            Mark Resolved
          </button>
        )}
      </div>

    </div>
  );
};

export default AlertCard;
