const express = require('express');
const jwt = require('jsonwebtoken');


const app = express();



app.get('/api', (req, res) => {
    res.json({
        message: "LeavePortal"
        
    });
});


app.post('/api/getleave', verifyToken, (req, res) => {


    jwt.verify(req.token,'secretkey', (err, data) => {
            if(err) {
                res.sendStatus(403);
            } else {
                res.json({
                    message: "Applied for Leave wait for manager response",
                    data
                   
                   })
            }
    })


});


app.post('/api/login', (req, res) => {
    // employee user
    const user = {
        id:1,
        username: 'employee',
        email:'employee@email.com'
    }
    

    
    jwt.sign({user}, 'secretkey',(err, token) => {
        res.json({
            token
        })
    });
});


// Authorization: Bearer <token>
function verifyToken(req, res, next) {
    // get auth header

    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {


        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        // set the toeken
        req.token = bearerToken;
        next();

    } else {
        // forbidden
        res.sendStatus(403);
    }
}
/*---------------------Manager Login-------------*/
app.post('/api/loginmang', (req, res) => {
    // manager user
    const user = {
        id:2,
        username: 'Manager',
        email:'manager@email.com'
    }

    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        })
    });
});



app.post('/api/leaveresponse', verifyToken, (req, res) => {

    const decode = jwt.verify(req.token,'secretkey')
    jwt.verify(req.token,'secretkey', (err, data) => {
            if(err) {
                res.sendStatus(403);
            } else {
                    if(decode.user.username == 'Manager'){
                        res.json({
                          message: "Leave Approved"
                    })
                    }
                    else{
                        res.json({
                            message: "Leave rejected"
                    })
                    }
            }
    })


});




app.listen(4000, () => {
    console.log('server started');
})