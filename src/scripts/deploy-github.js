const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/aprilyw/site2.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
