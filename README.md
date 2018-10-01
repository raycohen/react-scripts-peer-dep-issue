# react-scripts-peer-dep-issue

 * packages/shared was created with `npx create-react-library`
 * packages/hello_cra was created with `create-react-app`
 * packages/shared has a peerDependency on moment-timezone
 * packages/hello_cra has a dependency on moment-timezone and on packages/shared

when hello_cra uses `react-scripts` 1.x, the project builds and runs with no issue.


when hello_cra uses `react-scripts` 2.0.2, (see https://github.com/raycohen/react-scripts-peer-dep-issue/pull/1) there is an error



run `lerna bootstrap` in the root and then `yarn start` in `packages/hello_cra` 
