import Fastify from 'fastify'
//import type { url } from 'inspector';
const server = Fastify({
    logger: true
  })
  
  const names = ['Jehan','Faten' , 'Ali'];
  server.route({
    method: 'GET',
    url:'/users', 
    handler: async (request, reply)=> {
    return (names);
    },
  });

  server.route({
    method: 'GET',
    url:'/profile/ali',
    handler: async (request, reply)=> {
    return({ name: 'Ail', age:23, specialization: 'CS' })
    },
  });

  const instagram=[
    {username: 'Jehan', photo:"", caption:'hi evrey body' , likes:50},
    {username: 'Faten', photo:"", caption:'hallo', likes:300}
  ]
  server.route({
    method: 'GET',
    url:'/posts',
    handler: async (request,reply)=>{
    return(instagram)
    },
  });

  
server.listen({ port: 3000 },  (err, address)=> {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }
  
  })