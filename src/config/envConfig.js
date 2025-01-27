require("dotenv").config();

const envConfig = {
  "port_server" : process.env.SERVER_PORT,

  "token_bd" : process.env.TOKEN_BD,
  "token_cn" : process.env.TOKEN_CN,
  "token_364" : process.env.TOKEN_364,

  "endpoint_cliente_bd" : process.env.ENDPOINT_CLIENTE_BD,
  "endpoint_cliente_cn" : process.env.ENDPOINT_CLIENTE_CN,
  "endpoint_cliente_364" : process.env.ENDPOINT_CLIENTE_364,

}

module.exports = envConfig