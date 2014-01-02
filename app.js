var express = require('express');
var redis = require('redis');
var db = redis.createClient();
var app = express();