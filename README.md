# Butter MAS Javascript API
HTTP client javascript API for Butter MAS platform.

[![licence](https://img.shields.io/github/license/bennymeg/Butter.MAS.PythonAPI.svg)](https://github.com/bennymeg/Butter.MAS.PythonAPI/blob/master/LICENSE)
[![](https://img.shields.io/pypi/v/butter.mas-api.svg)](https://pypi.org/project/butter.mas-api/)

___
🚧**NOTE:** this repository is still a work in progress.
___

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

```
npm install @butter/mas-api
```

### Usage

```typescript
import { HttpClient } from '@butter/mas-api';

const butterHttpClient = new HttpClient('192.168.0.111')  # use you robot ip here

const result = await butterHttpClient.playAnimation('welcome');

console.log(result.json());
```

### Coding style tests

#### Linting

Please use TsLint (Default linter on VS Code) to lint your code before submitting a PR.

#### Tests

Please test your code before submitting a PR.
```
npm run test
```

## Documentation
- 👨🏼‍💻 [API](https://bennymeg.github.io/Butter.MAS.JavascriptAPI/),
<!-- (https://github.com/bennymeg/Butter.MAS.JavascriptAPI/blob/master/docs/API.md), -->
- 🖋  [Licence](https://github.com/bennymeg/Butter.MAS.JavascriptAPI/blob/master/LICENSE)
<!-- - 👩🏼‍🏫 [Examples](https://github.com/bennymeg/Butter.MAS.JavascriptAPI/blob/master/docs/examples),   -->

## Contributing

Please read [CONTRIBUTING.md](https://github.com/bennymeg/Butter.MAS.JavascriptAPI/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/bennymeg/Butter.MAS.JavascriptAPI/tags). 

## Authors

**Benny Megidish**

_See also the list of [contributors](https://github.com/bennymeg/Butter.MAS.JavascriptAPI/contributors) who participated in this project._

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](https://github.com/bennymeg/Butter.MAS.JavascriptAPI/blob/master/LICENSE) file for details