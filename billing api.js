const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({status: 'healthy'}));
app.get('/api/billing/:id', (req, res) => {
  res.json({id: req.params.id, balance: 150.75, status: 'active'});
});

app.listen(3000, () => console.log('Billing API on 3000'));
