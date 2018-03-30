# MQTT.js / Mosca Example
### MQTT.js in Browser with Mosca Broker

Didn't see many examples around so decided to put this out there.

Includes 2 examples:

1. **Embedded**
    * Mosca broker runs alongside an express application, as a single executable node app  
      * Run using `node app.js`
2. **Standalone**
    * Mosca broker and express application run in separate node applications
      * Run using `node app.js` for the express application inside the `UI` directory
      * Run using `node server.js` for the mosca broker inside the `Broker` directory

## References
* [MQTT.js](https://www.npmjs.com/package/mqtt)
* [Mosca](https://www.npmjs.com/package/mosca)
* [MQTT over WebSockets](https://github.com/mcollina/mosca/wiki/MQTT-over-Websockets)