const config = require('@/cms/site-settings.json')

module.exports = {
  siteUrl: config.base_url || 'https://ya-magazine.netlify.app/',
  generateRobotsTxt: true,
}
