import React from 'react';
import AlertCard from './AlertCard';

const Dashboard = ({ alerts, onResolve }) => {
    if (alerts.length === 0) {
        return (
            <div className="empty-state">
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>📢</div>
                <h3>No Active Amber Alerts</h3>
                <p>All reported children are currently accounted for or no reports have been filed.</p>
            </div>
        );
    }

    // Sort: Active first, then by date
    const sortedAlerts = [...alerts].sort((a, b) => {
        if (a.status === 'active' && b.status === 'resolved') return -1;
        if (a.status === 'resolved' && b.status === 'active') return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return (
        <div className="dashboard">
            <h2 className="emergency-header">Live Alert Feed</h2>
            {sortedAlerts.map(alert => (
                <AlertCard key={alert.id} alert={alert} onResolve={onResolve} />
            ))}
        </div>
    );
};

export default Dashboard;
