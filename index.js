var express = require('express');
var bodyParser = require('body-parser');

const app = express();

require('./public/connect');
const Connect = require("./public/books");

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}))

// const uri = "mongodb+srv://Ashwin:<ashwinchhetri>@cluster0.81heabr.mongodb.net/Bookings?retryWrites=true&w=majority";

// mongoose.connect(DB).then(() => {
//     console.log(`Connection Successfull`);
// }).catch((err) => console.log(`no connection`));

// var db = mongoose.connection;

// db.on('error', () => console.log("Error in connecting to Database"));
// db.on('open', () => console.log("Connected to Database"));

app.post("/booking", async(req, res) => {
    try{
        const Conn = new Connect({
            firstName : req.body.firstName,
            firstSeat : req.body.firstSeat
        })
        const connected = await Conn.save();
        return res.redirect('book_success.html');
        // res.status(201).render(index);
        // alert("Congratulations. Your ticket has been booked successfully.");
        // console.log(req.body.firstName);
        // console.log(req.body.firstSeat);
        // res.send(req.body.firstName);
        // const connected = await Conn.save();
        // res.status(201).render(book_success);
    }catch (error) {
        res.status(400).send(error);
    }
})

// app.post('/booking', (req, res) => {
//     const { name, seats } = req.body;
  
//     const collection = client.db('movieTicket').collection('users');
  
//     collection.insertOne({ name, seats }, (err) => {
//       if (err) {
//         console.log('Error inserting booking:', err);
//         res.status(500).send('Error inserting booking');
//       } else {
//         console.log('Booking inserted successfully');
//         res.status(200).send('Booking inserted successfully');
//       }
//     });
//   });

app.get('/', (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": "*"
    })
    return res.redirect('index.html');
}).listen(3000);

console.log("Listening on port 3000");