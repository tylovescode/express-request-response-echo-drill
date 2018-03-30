const express = require('express');
const app = express();

app.get('/echo/:what', (req, res) => {
	res.json({
		hostname: req.hostname,
		query: req.query,
		params: req.params
	});
});


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
