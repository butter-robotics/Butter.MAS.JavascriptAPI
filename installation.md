# Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

You will need to install packet maneger (like npm or yarn) in order to use this software

## Installing

Open your Command Prompt (Windows) or Terminal (Mac / Linux) and execute the following command:

`npm install @butter-robotics/mas-javascript-api`

## Usage

```typescript
import { HttpClient } from '@butter-robotics/mas-javascript-api';

const butterHttpClient = new HttpClient('192.168.0.111')         // use you robot ip here
const result = await butterHttpClient.playAnimation('welcome');

console.log(result.data);
```
