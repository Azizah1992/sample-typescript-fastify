"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.get('/canyouhereme', async (request, reply) => {
    return 'hello we can here you  \n';
});
server.get('/username', async (request, reply) => {
    return ' AZIZAH \n';
});
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
// interface IQuerystring {
//     username: string;
//     password: string;
//   }
//   interface IHeaders {
//     'h-Custom': string;
//   }
//   server.get<{
//     Querystring: IQuerystring,
//     Headers: IHeaders
//   }>('/auth', {
//     preValidation: (request, reply, done) => {
//       const { username, password } = request.query
//       done(username !== 'admin' ? new Error('Must be admin') : undefined) // only validate `admin` account
//     }
//   }, async (request, reply) => {
//     const customerHeader = request.headers['h-Custom']
//     // do something with request data
//     return `great job you are logged in !`
//   })
