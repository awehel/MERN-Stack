npm install react-bootstrap@next bootstrap@5.1.1

import 'bootstrap/dist/css/bootstrap.min.css'

//Expres

npm init -y
npm install express

const express = require('express')
const app = express()


app.listen(8000, (=>console.log('You have successfully connected to port 8000')))