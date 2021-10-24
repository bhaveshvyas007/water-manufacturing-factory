This is a express app to simulate water manufaturing factory.

The limits and constants are set in services/constants.js file

Steps to test:

Turn on the express app by running, node index.js

Use postman or browser to call below get API

To turn on the factory
http://localhost:3000/changeStatus/on

To turn off the factory
http://localhost:3000/changeStatus/off

The output of water count is visible on the nodejs console


output example:

Example app listening at http://localhost:3000

// hit this get API http://localhost:3000/changeStatus/on

Turning on the factory...
0
0
0
0
0
10
20
30

// hit this get API http://localhost:3000/changeStatus/off
Turning off the factory...

Note: after turning off it will stop the new requests but complete the ongoing generation of water molecule since no wastage is allowed

Similarly at when you turn on the factory it will take the initial time to generate water before it reached to the consumer