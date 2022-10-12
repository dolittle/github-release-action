# GitHub Action - GitHub Release
This GitHub action uses the GitHub API to create a GitHub Release.

![Github JavaScript Actions CI/CD](https://github.com/dolittle/github-release-action/workflows/Github%20JavaScript%20Actions%20CI/CD/badge.svg)

### Pre requisites
Create a workflow `.yml` file in your `.github/workflows` directory. An [example workflow](#example-workflow) is available below.

For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file)

### Inputs
- `token`: The token to use for the GitHub API. default: ${{ github.token }}
- `version` (required): The version to release
- `body` (required): The release summary. default: ''  
- `microservice` (optional): The name of the Microservice that should be released. The name should not contain spaces.

### Example Workflow
```yaml
on:
  push:
    branches:
    - '**'
  pull_request:
    types: [closed]

name: GitHub Release

jobs:
  context:
    name: Job name
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Release
        uses: dolittle/github-release-action@v1
        with:
          version: 2.0.0
        
```
## Contributing
We're always open for contributions and bug fixes!

### Pre requisites
- node <= 12
- yarn
- git
