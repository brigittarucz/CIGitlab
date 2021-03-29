const express = require('express');

exports.getDashboard = (req, res, next) => {
    res.render('dashboard', {
        username: req.params.username
    })
}