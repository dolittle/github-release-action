# [2.2.1] - 2022-12-7 [PR: #18](https://github.com/dolittle/github-release-action/pull/18)
## Summary

Update the deps and modernise


# [2.2.0] - 2021-10-18 [PR: #16](https://github.com/dolittle/github-release-action/pull/16)
## Summary

Adds an output called 'upload_url' inspired by https://github.com/actions/create-release to allow us to use https://github.com/actions/upload-release-asset to upload artefacts to the release.

### Added

- An output called 'upload_url' to use to upload assets to the release later in workflows.


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


