const express = require('express');
const app = express();

app.use(express.static('./dist/my-ng8-app'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'src'}
);
});
app.listen(process.env.PORT || 8080);
