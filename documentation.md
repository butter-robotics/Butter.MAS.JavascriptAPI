# Documentation

## Importing Client Factory

Client Factory is a factory class responsible for creating new clients.
In order to use the factory, we will need to import it first:

```typescript
import { ClientFactory } from '@butter-robotics/mas-javascript-api';

const butterClientFactory = new ClientFactory();
```

## Creating New Client

In order to use communicate with the robot, we will need to create a client.
Currently, only the HttpClient is implemented.
All clients extends the Client class.

Creating new HTTP client:

```typescript
const butterHttpClient = butterClientFactory.getClient('192.168.0.100', 3000, 'http');  // use you robot ip here
```

<!-- Creating new TCP client:

```typescript
const butterTcpClient = butterClientFactory.getClient('192.168.0.100', 3003, 'tcp');    // use you robot ip here
```

Creating new UDP client:

```typescript
const butterUdpClient = butterClientFactory.getClient('192.168.0.100', 3030, 'udp');    // use you robot ip here
``` -->

The IP address should be the same as the current IP address of the robot on your local network.

## Interacting with the Robot

We can send a command through one of the available functions of the client.

I.e., we can play animation with the following command:

```typescript
const result = butterHttpClient.playAnimation('welcome');
```

## Receiving Responses from the Robot

Each command we send will return (no matter what protocol we use) an Response object.
We can parse the response using the built in json method like that:

```typescript
console.log(result.data)
```
