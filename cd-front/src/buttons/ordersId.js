import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ContentCopy from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function GetOrderButton({ endpoint }) {
    const [orders, setOrders] = useState([]);
    const [copied, setCopied] = useState(false);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/${endpoint}`);
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleCopy = (orderId) => {
        setCopied(orderId);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={fetchOrders}>
                Get IDs
            </Button>
            <List>
                {orders.map((order) => (
                    <ListItem key={order.id} secondaryAction={
                        <CopyToClipboard text={order.id} onCopy={() => handleCopy(order.id)}>
                            <Tooltip title={copied === order.id ? "Copied!" : "Copy to clipboard"} arrow>
                                <IconButton edge="end" aria-label="copy">
                                    <ContentCopy />
                                </IconButton>
                            </Tooltip>
                        </CopyToClipboard>
                    }>
                        <ListItemText primary={`Order ID: ${order.id}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default GetOrderButton;
