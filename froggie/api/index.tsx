import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel' 
 
// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }
 
export const app = new Frog({ 
  basePath: '/api',
  browserLocation: '/:path',
  // Supply a Hub API URL to enable frame verification.
  hubApiUrl: 'https://api.hub.wevm.dev',
})
 
app.frame('/', (c) => {
  const { buttonValue, status } = c
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        {status === 'initial' ? (
          'Select your fruit!'
        ) : (
          `Selected: ${buttonValue}`
        )}
      </div>
    ),
    intents: [
      <Button value="apple">Apple</Button>,
      <Button value="banana">Banana</Button>,
      <Button value="mango">Mango</Button>
    ]
  })
})
 
export const GET = handle(app) 
export const POST = handle(app) 