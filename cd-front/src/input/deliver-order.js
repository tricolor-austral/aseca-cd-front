import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function DeliverOrder({ endpoint }) {
    const [orderId, setOrderId] = useState('');
    const [responseMessage, setResponseMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleInputChange = (event) => {
        setOrderId(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://localhost:3001/${endpoint}/${orderId}`);
            setResponseMessage(response.data.message || 'Order delivered successfully!');
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Error delivering order');
            setResponseMessage(null);
        }
    };

    return (
        <div style={{marginBottom: '8px'}}>
            <TextField
                label="Order ID"
                variant="outlined"
                value={orderId}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Deliver
            </Button>
            {responseMessage && (
                <Alert severity="success" style={{ marginTop: '20px' }}>
                    {responseMessage}
                </Alert>
            )}
            {errorMessage && (
                <Alert severity="error" style={{ marginTop: '20px' }}>
                    {errorMessage}
                </Alert>
            )}
        </div>
    );
}

export default DeliverOrder;
