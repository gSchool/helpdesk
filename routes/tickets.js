var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Tickets() {
  return knex('tickets');
}

router.get('/', function(req, res, next) {
  Tickets().select().then(function (tickets) {
    res.render('tickets/index', {tickets: tickets});
  })
});

router.get('/tickets/closed', function(req, res, next) {
  tickets().where({"tickets":"closed"}).then(function (tickets) {
    res.render('tickets/closed', {tickets: tickets});
  })
});

router.post('/tickets', function(req, res, next) {
  tickets().insert(req.body).then(function (tickets) {
    res.redirect('tickets/');
  })
});

router.post('/tickets/:id/update', function(req, res, next) {
  console.log("body is "+JSON.stringify(req.body));
  tickets().where({id: req.params.id}).update(req.body).then(function(tickets) {
    res.redirect('/');
  })
});

router.get('/tickets/new', function(req, res, next) {
  res.render('tickets/new',{button_text: "Create ticket"});
});

router.get('/tickets/show', function(req, res, next) {
  res.render('tickets/show', {ticket: ticket});
});

router.get('/tickets/:id/edit', function(req, res, next) {
  tickets().where({id: req.params.id}).then(function (ticket) {
    res.render('tickets/edit', {ticket: ticket[0], button_text: "Update ticket"});
  })
});

router.get('/tickets/:id/delete', function(req, res, next) {
  tickets().where({id: req.params.id}).delete().then(function () {
    res.redirect('/');
  })
});


module.exports = router;
