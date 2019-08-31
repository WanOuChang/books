module.exports = {
    devServer: {
        open: true,
        before(app) {
            app.get("/getList", (req, res) => {
                let data = require("./src/mock/data.json");
                res.send({
                    code: 200,
                    data,
                    message: "成功",
                })
            })
        }
    }
}