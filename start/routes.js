'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Helpers = use('Helpers')

Route.post('upload', async ({ request }) => {
  const profilePic = request.file('profile_pics', {
    types: ['image'],
    size: '2mb',
    extnames: ['png', 'gif','jpg','jpeg']
  })

  await profilePic.move(Helpers.publicPath('uploads'), {
    name: 'custom-name.jpg',
    overwrite: true
  })


  if (!profilePic.move()) {
    return profilePics.errors()
  }
})

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/teste', "ObraController.index");



