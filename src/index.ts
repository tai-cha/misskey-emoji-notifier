import Config from "@/utils/config";
import * as Misskey from "misskey-js"
import WebSocket from 'ws';
import YAMAG from "@/utils/misskey"

// load env
Config

const stream = new Misskey.Stream(Config.server.origin, { token: Config.server.credential }, { WebSocket })
stream.on('emojiAdded', async event => {
  console.log('emoji Added')

  let text = `なですきーに新しい絵文字が追加されたかも(\`:${event.emoji.name}:\`)\n\n:${event.emoji.name}:`
  YAMAG.Misskey.postNote(text, { visibility: 'home' })
})

console.log('stand by...')