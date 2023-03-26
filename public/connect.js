const mongoose = require("mongoose");
const DB = 'mongodb+srv://Ashwin:ashwinchhetri@cluster0.qm8gykd.mongodb.net/firstdata?retryWrites=true&w=majority'

mongoose.connect(DB).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
});
