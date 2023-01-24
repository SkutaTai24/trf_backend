var express = require('express')
var crypto = require('crypto')
var mysql = require('mysql2')
var cors = require('cors')
var formidable = require('express-formidable')

var app=express()

app.use(cors())
app.use(formidable())