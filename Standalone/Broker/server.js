const mosca = require('mosca');

const mongoDatabaseUrl = 'mongodb://localhost:27017/mqtt';
const mqttPort = 1883;
const wsPort = 80;

// Setup Mosca
var moscaSettings = {
    port: mqttPort,
    backend: {
        type: 'mongo',
        url: mongoDatabaseUrl,
        pubsubCollection: 'ascoltatori',
        mongo: {}
    },
    http: {
        port: wsPort,
        bundle: true,
        static: './'
    }
};

var server = new mosca.Server(moscaSettings);

// Client connects
server.on('clientConnected', (client) => {
    console.log(`Client "${client.id}" connected.`);
});

// Client disconnects
server.on('clientDisconnected', (client) => {
    console.log(`Client "${client.id}" disconnected.`);
});

// Message recieved
server.on('published', (packet, client) => {
    if (!packet.topic.startsWith('$SYS/')) {
        console.log(`  Topic: ${packet.topic}`);
        console.log(`  Payload: ${packet.payload}`);
    }
});

// Server started
server.on('ready', () => {
    console.log(`Mosca server running with MQTT on port ${mqttPort} and WebSockets on port ${wsPort}.`);
});