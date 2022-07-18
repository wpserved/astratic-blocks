const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  lang: 'en-US',
  title: 'Astratic Blocks',
  description: 'Astratic Blocks Documentation',
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Introduction',
        link: '/',
      },
      {
        text: 'Placeholder images',
        link: '/images',
      },
    ],
  }),
}
