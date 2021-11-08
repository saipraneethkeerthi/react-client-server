const mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://siva:siva@cluster0.cabsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: true,
    })
    .catch((error) => {
        console.log(error);
    });
