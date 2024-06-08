import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import GetOrderButton from './buttons/ordersId';
import DeliverOrder from './input/deliver-order';

function HomePage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h3" gutterBottom>
                Cross Docking UI
            </Typography>
            <DeliverOrder endpoint="order/deliver" />
            <GetOrderButton endpoint="order" />
        </div>
    );
}

function SubOrdersPage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h3" gutterBottom>
                Sub Orders
            </Typography>
            <DeliverOrder endpoint="sub-order/deliver" />
            <GetOrderButton endpoint="sub-order" />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sub-orders" element={<SubOrdersPage />} />
            </Routes>
        </Router>
    );
}

export default App;
