import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors'
import connect from './db'
import mongo from 'mongodb';
import auth from './auth'

const app = express()  // instanciranje aplikacije
const port = process.env.PORT || 3000  // port na kojem će web server slušati

app.use(cors())
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public/'));
}

app.get('/secret', [auth.verify], (req, res)=>{
    res.json({message: 'this is secret' + req.jwt.username})
})

app.post('/auth', async (req, res)=>{
    let user = req.body;

    try{
        let result = await auth.authenticateUser(user.username, user.password, user.authorized);
        res.json(result);
    }catch (e){
        res.status(403).json({error : e.message})
    }
});

app.put('/users/:id', async (req, res) => {
    let doc = req.body;
    delete doc._id;
    let id = req.params.id;
    let db = await connect();

    let result = await db.collection('users').updateOne({ _id: mongo.ObjectId(id) }, 
    {
        $set: doc,
    });
    if (result.modifiedCount == 1) {
        res.json({
            status: 'success',
            id: result.insertedId,
        });
    } else {
        res.status(500).json({
            status: 'fail',
        });
    }
});
app.patch("/user", [auth.verify], async (req, res)=>{
    let changes = req.body;

    let username = req.jwt.username;

    if(changes.new_password && changes.old_password){
        let result = await auth.changeUserPassword(username, changes.old_password, changes.new_password)
        if(result){
            res.status(201).send()
        }else{
            res.status(500).json({error: "Cannot change password"})
        }
    }else {
        res.status(400).json({error: "Error"})
    }
})

app.post('/users', async (req, res)=>{
    let userData = req.body;

    let id;
    try{
        id = await auth.registerUser(userData)
    } catch (e){
        res.status(500).json({ error : e.message })
    }
    

    res.json({ id: id });
});

app.post('/ad', async (req, res) => {
    let db = await connect();
    let doc = req.body;

    let result = await db.collection('adds').insertOne(doc);
    if (result.insertedCount == 1) {
        res.json({
            status: 'success',
            id: result.insertedId,
        });
    } else {
        res.json({
            status: 'fail',
        });
    }
});

app.get('/adds', async (req, res) => {
    
    let db = await connect()

    let query = req.query;

    let selekcija = {}

    if(query._any){
        let pretraga = query._any
        let terms = pretraga.split(' ')
        let atributi = ['job_position', 'job_requirements', 'job_description', 'job_requirements', 'your_skills', 'your_study']

        selekcija = {
            $and: [],
        };

        terms.forEach((term) => {
            let or = {
                $or: []
            };
            atributi.forEach((atribut) => {
                or.$or.push({[atribut]: new RegExp(term)});
            });
            selekcija.$and.push(or);
        });
    }

    let cursor = await db.collection('adds').find(selekcija);
    let results = await cursor.toArray();
    res.json(results);
})

app.get('/adds', async (res)=>{
    let db = await connect();
    let cursor = await db.collection('adds').find({});
    let results = await cursor.toArray();
    res.json(results);
});
app.get('/adds/:id', async (req, res)=>{
    let id = req.params.id;
    let db = await connect();
    let cursor = await db.collection('adds').findOne({ _id: mongo.ObjectId(id)});
    res.json(cursor);
});

app.post('/notifications', async (req, res) => {
    let db = await connect();
    let doc = req.body;
    let studentId = doc.student_id;
    let companyId = doc.company_id;
    let checkNumber = await db.collection('notifications').find({student_id : studentId, company_id : companyId}).count();
    if(checkNumber >= 1){
        res.json({
            status: 'fail',
        });
    }else{
        let result = await db.collection('notifications').insertOne(doc);
        res.json({
            status: 'success',
            id: result.insertedId,
        });
    }
})

app.get('/notifications/:id', async (req, res)=>{
    let id = req.params.id;
    let db = await connect();
    let cursor = await db.collection('notifications').find({ company_id: id });
    let results = await cursor.toArray();
    res.json(results);
});

app.post('/candidates', async (req, res) => {
    let db = await connect();
    let doc = req.body;
    let studentId = doc.student_id;
    let companyId = doc.company_id;
    let checkNumber = await db.collection('candidates').find({student_id : studentId, company_id : companyId}).count();
    if(checkNumber >= 1){
        res.json({
            status: 'fail',
        });
    }else{
        let result = await db.collection('candidates').insertOne(doc);
        res.json({
            status: 'success',
            id: result.insertedId,
        });
    }
})

app.get('/candidates/:id', async (req, res)=>{
    let id = req.params.id;
    let db = await connect();
    let cursor = await db.collection('candidates').find({ company_id: id });
    let results = await cursor.toArray();
    res.json(results);
});

app.patch("/candidates/:id", async (req, res)=>{
    let id = req.params.id;
    let data = req.body;
    let changes = data.accepted;
    console.log(data)
    let db = await connect();
    let cursor = await db.collection('candidates').find({ student_id: data.student_id, company_id: data.company_id});
    let results = await cursor.toArray();
    if(results){
        let result = await db.collection('applications').updateOne({ company_id: data.company_id},
            {
                $set: {accepted: changes}
            }
        )
    }
})

app.post('/applications', async (req, res) => {
    let db = await connect();
    let doc = req.body;
    let studentId = doc.student_id;
    let companyId = doc.company_id;
    let checkNumber = await db.collection('applications').find({student_id : studentId, company_id : companyId}).count();
    if(checkNumber >= 1){
        res.json({
            status: 'fail',
        });
    }else{
        let result = await db.collection('applications').insertOne(doc);
        res.json({
            status: 'success',
            id: result.insertedId,
        });
    }
})

app.get('/applications/:id', async (req, res)=>{
    let id = req.params.id;
    let db = await connect();
    let cursor = await db.collection('applications').find({ student_id: id });
    let results = await cursor.toArray();
    res.json(results);
});

app.get('/users/:id', async (req, res)=>{
    let id = req.params.id;
    let db = await connect();
    let cursor = await db.collection('users').find({ _id: mongo.ObjectId(id)});
    let results = await cursor.toArray();
    res.json(results);
});

app.get('/users', async (req, res)=>{
    let id = req.params;
    let db = await connect();
    let cursor = await db.collection('users').find({});
    let results = await cursor.toArray();
    res.json(results);
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`))