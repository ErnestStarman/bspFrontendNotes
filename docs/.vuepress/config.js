module.exports = {
    title: '前端学习记录',
    description: '记录前端学习知识点，成果等',
    configureWebpack: {
        resolve: {
          alias: {
            '@src': 'src',
            '@public': 'public'
          }
        }
    },
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
      sidebar: [
        '/',
        '/date/0726'
      ]
    }
}