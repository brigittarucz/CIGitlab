const express = require('express');

exports.getAuth = (req, res, next) => {
    res.render('auth')
}

exports.postAuth = (req, res, next) => {
    const username = req.body.username;
    if(username === "root") {
        return res.redirect('/dashboard/' + username);
    } else {
        console.log(new Error("Invalid username"))
        return res.redirect('/');
    }
}