const express = require("express");
const app = express();
const cors = require('cors');
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");

app.use(cors());
app.use(express.json());

const database = require("./models");

//Users Routers
const postProduct = require("./routes/Post");
app.use("/posts", postProduct);

const commentProduct = require("./routes/Comments");
app.use("/comments", commentProduct);

const userRouter = require("./routes/Users");
app.use("/userflex", userRouter);

const useCategory = require("./routes/Category");
app.use("/category", useCategory);

const cart = require("./routes/Cart");
app.use("/cart", cart);


const AdminBroSequelize = require("@admin-bro/sequelize");
AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = new AdminBro({
    rootPath: "/admin",
    loginPath: "/admin/login",
    databases: [database],
    branding: {
        companyName: "Himal Flex Admin",
        softwareBrothers: false,
        theme:{
            colors:{
            primary100: '#28BC92',
            primary80: "#52C8A7",
            primary60: "#7CB5BC",
            primary40: "#A5E0CF",
            primary20:"#CFEDE4",
            accent:"#5DF02E",
            hoverBg: "#59bda0",
            filterBg:"#003024",
            },
        },
    },    
}
);

const router = AdminBroExpress.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

app.use("/public", express.static("./public"));



database.sequelize.sync().then(() => {
    app.listen(3005, ()=>{
        console.log("Server is running on port 3005")
    });
}).catch(err=>{
    console.log(err)
});

