const app = require('../app')
const config = require("../config/envConfig");

const port = config.port_server; 

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))