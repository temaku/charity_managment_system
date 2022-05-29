const mongoose = require('mongoose');
 require('dotenv/config');

 const app = require('./app');
 mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  })
  .then(() => console.log('DB connection successful!'));

  const port = process.env.PORT || 3000;
 app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
