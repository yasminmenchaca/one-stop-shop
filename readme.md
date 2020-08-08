# One Stop Shop

A marketplace application built with Node.js. Users can add, edit, and delete their products from the database. They can also browse products, add items to their cart along with editing item quantities, and process their transactions with a checkout feature. Order invoices are accessible and can be downloaded in PDF form. Project includes EJS, CSS, JavaScript, NPM, Express.js, MongoDB, Mongoose, Nodemailer, PDFKit, and Stripe.

http://onestopshop-env.eba-jhdcbemp.us-east-1.elasticbeanstalk.com/

## Packages used in this project
### Express
- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for node
- [body-parser](https://www.npmjs.com/package/body-parser): A body parsing middleware
- [connect-flash](https://www.npmjs.com/package/connect-flash): Store temporary messages in an express session, useful for validation messages in MVC apps
- [csurf](https://www.npmjs.com/package/csurf): A CSRF (cross-site request forgery) protection middleware
- [express-validator](https://www.npmjs.com/package/express-validator): Provides easy, flexible [validation middlewares](https://express-validator.github.io/docs/) uses [validator.js](https://github.com/validatorjs/validator.js) under the hood
- [multer](https://www.npmjs.com/package/multer): A middleware for `multipart/form-data` to make it easy to handle uploads
- [helmet](https://www.npmjs.com/package/helmet): Middleware to automatically add secure response headers to help secure your app
- [compression](https://www.npmjs.com/package/compression): Middleware to compress responses
- [morgan](https://www.npmjs.com/package/morgan): A request logging middleware
### General
- [bcryptjs](https://www.npmjs.com/package/bcryptjs): A javascript implementation of `bcrypt` to provide simple hashing for passwords and other data
- [pdfkit](http://pdfkit.org/): Create PDF documents in javascript
- [socket.io](https://www.npmjs.com/package/socket.io): Simple web sockets library. Also has a [client library](https://github.com/socketio/socket.io-client).
### Mongo
- [connect-mongodb-session](https://www.npmjs.com/package/connect-mongodb-session): Store express sessions in MongoDB
- [mongodb](https://www.npmjs.com/package/mongodb): The official MongoDB driver for node
- [mongoose](https://www.npmjs.com/package/mongoose): A MongoDB object modeling tool
### Email
- [nodemailer](https://www.npmjs.com/package/nodemailer): Enables easy sending of emails from node
- [nodemailer-sendgrid-transport](https://www.npmjs.com/package/nodemailer-sendgrid-transport): A nodemailer plugin to send mails via [sendgrid](https://sendgrid.com/)
