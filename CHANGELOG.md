# [2.1.1] - 2021-8-27 [PR: #15](https://github.com/dolittle/github-release-action/pull/15)
## Summary

Fixes a bug where the 'microservice' input was ignored

### Fixed

- Send the microservice input argument to the release creator


# [2.1.0] - 2021-8-25 [PR: #14](https://github.com/dolittle/github-release-action/pull/14)
## Summary

Adds the 'microservice' optional input. When given a non-empty string it will create a GitHub release for a particular "microservice" (it'll just affect the release title and the tag) 

### Added

- 'microservice' input for releasing for a microservice when given a non-empty string as input.


