const mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://ksp:akhi@cluster0.i4amd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: true,
    })
    .catch((error) => {
        console.log(error);
    });

const cont = mongoose.connection
cont.once('open',()=>console.log("DB connected"))
