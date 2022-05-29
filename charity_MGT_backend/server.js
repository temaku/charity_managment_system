const mongoose = require('mongoose');
 require('dotenv/config');
// mongodb connection String
 const app = require('./app');
 mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  })
  .then(() => console.log('DB connection successful!'));
  
const port = process.env.PORT || 3000;
 app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
