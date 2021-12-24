module.exports = [
    function(req,res,next){

        let name = req.query.admin;

        switch (name) {
            case "Ada":
                res.send("Hola admin " + name);
                break;
            case "Greta":
                res.send("Hola admin " + name);
                break;
            case "Vim":
                res.send("Hola admin " + name);
                break;
            case "Tim":
                res.send("Hola admin " + name);
                break;
            default:
                res.send("No tenes los privilegios para ingresar");
        }

        next()

    }
]