import { Client } from "disconnect";

new Client()
new Client({ userToken: '' })
new Client({ consumerKey: '', consumerSecret: '' })

const client = new Client()
client.about((err, data, rateLimit) => data && data.disconnect.userAgent)
client.about().then(data => data.disconnect.authLevel)