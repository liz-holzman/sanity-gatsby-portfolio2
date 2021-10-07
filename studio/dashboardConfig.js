export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615f6bc342a48d00ccc5dd61',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-sstkm8bd',
                  apiId: '93dc1006-bbb6-4bc7-a110-3e483ee316e2'
                },
                {
                  buildHookId: '615f6bc3184a8700beff346f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-j1exsbuf',
                  apiId: '1f2d8a53-ff30-47ed-9be4-b6ee31463240'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liz-holzman/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-j1exsbuf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
