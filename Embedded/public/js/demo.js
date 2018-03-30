// Connect to the MQTT Broker over WebSockets
// The port here is the "http" port we specified on the MQTT Broker
var client = mqtt.connect('ws://localhost:80');

// Subscribe to the "mqtt/demo" topic
// (The same one we are publishing to for this example)
client.subscribe('mqtt/demo');

// Message recieved
client.on('message', (topic, payload) => {
    // Log message
    console.log(`  Topic: ${topic}`);
    console.log(`  Payload: ${payload}`);
    // Close the connection
    client.end();
});

client.on('connect', () => {
    console.log('Connected to MQTT Broker.');
});

client.on('close', () => {
    console.log('Disconnected from MQTT Broker.');
});

client.publish('mqtt/demo', 'Hello world!');