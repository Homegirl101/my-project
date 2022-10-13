import express from "express";
import cors from "cors";
import knex from 'knex';
import dotenv from 'dotenv';
import bcrypt, { hash } from "bcrypt";
import pg from 'pg';


dotenv.config();
const database = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false
        }
    }
});

//  database.select('*').from('users').then(data => console.log(data));

const app =express();
//app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


app.get("/", (req, res)=>{
    res.send(database.users);
    
});

app.post("/signin", (req, res)=>{
    console.log(req.body);
    const {email, password} = req.body;
    database.select('email', 'hash').from('login').where('email', '=', email)
    .then(
        data => {
            const validPassword = bcrypt.compareSync(password, data[0].hash);
            if(validPassword){
                 return database.select('*').from('users').where('email', '=', data[0].email)
                .then(user => {
                    console.log(user)
                    res.json("success")
                })
                .catch(err => res.status(400).json('unable to get user'))
            } else {
                res.status(400).json('wrong credentials')
            }
        }
    )
    .catch(err => res.status(400).json('unable to logins'))
});

app.post("/register", (req, res)=>{
    const {firstname, email, password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    console.log(req.body);
    database.transaction(trx => {
        trx.insert({
            hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(email => {
            console.log(email)
            return trx('users')
            .returning('*')
            .insert({
                name: firstname, 
                email: email[0].email,
                joined: new Date(),    
            })
            .then(user => res.json(user[0]))
        })
        .then(trx.commit)
         .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register '))

    /*console.log(req.body)
    database('users')
        .returning('*')
        .insert({
            name: firstname, 
            email: email,
            joined: new Date(),
        }).then(user => {
            res.json(user[0]);

        }).catch(err => res.status(400).json(err))
*/
});

app.get("/profile/:id", (req, res) => {
    const{ id } = req.params;
    let found = false;
    database.users.forEach(user =>{
        if(user.id === id ){
            found = true;
            return res.json(user)
        }
    })
    if(!found){
        res.status(404).json('not found ')
    }
    /*for(const i of database.users){
        if(i.id === id){
            console.log(i)
            res.send(i)
        }
    
    }
    const user = dadabase.users.find(user => user.id === id);
    console.log(id);
    res.send(user) */
})

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`)
});

