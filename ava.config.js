export default {
  files: ['test/**/*.js'],
  sources: ['lib/**/*.js'],
  cache: true,
  concurrency: 4,
  failFast: false,
  failWithoutAssertions: true,
  tap: true,
  compileEnhancements: false,
  require: ['ava-playback'],
  playbacks: 'test/fixtures'
}
