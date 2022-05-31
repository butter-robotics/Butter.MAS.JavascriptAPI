Butter MAS Javascript API Documentation / [Exports](modules.md)

# Butter MAS Javascript API
HTTP client javascript API for Butter MAS platform.

[![licence](https://img.shields.io/github/license/butter-robotics/Butter.MAS.JavascriptAPI.svg)](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/master/LICENSE)
![npm](https://img.shields.io/npm/v/@butter-robotics/mas-javascript-api)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installation

```bash
npm install @butter-robotics/mas-javascript-api
```

### Usage

```typescript
import { HttpClient } from '@butter-robotics/mas-javascript-api';

const butterHttpClient = new HttpClient('192.168.0.111');  // use you robot ip here

butterHttpClient.playAnimation('jump').then(response => console.log(response.data));
```

## Documentation
- 👨🏼‍💻 [API](https://butter-robotics.github.io/Butter.MAS.JavascriptAPI/),
<!-- (https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/master/docs/API.md), -->
- 🖋  [Licence](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/master/LICENSE)
<!-- - 👩🏼‍🏫 [Examples](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/master/docs/examples),   -->

## Contributing

Please read [CONTRIBUTING.md](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Coding style & tests

#### Linting

Please lint your contribution before submitting a PR.
```
npm run lint
```

#### Tests

Please test your contribution before submitting a PR.
```
npm run test
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/tags). 

## Authors

**Benny Megidish**

_See also the list of [contributors](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/contributors) who participated in this project._

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/butter-robotics/Butter.MAS.JavascriptAPI/blob/master/LICENSE) file for details
