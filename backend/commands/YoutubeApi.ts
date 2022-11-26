require('dotenv').config()
import { BaseCommand } from '@adonisjs/core/build/standalone'
import {google} from "googleapis"

export default class YoutubeApi extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'youtube:api'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: false,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    const yt = await this.getYoutube()
  }

  public async getYoutube() {


    const youtube = await google.youtube({version: "v3", auth: process.env.YOUTUBE_API_KEY})
  
    const deadlift = await youtube.search.list({
      part: "id,snippet",
      q: 'deadlift',
    });
    console.log(deadlift.data.items);

    
    // const channels = await youtube.channels.list({
    //   part: 'snippet,contentDetails,statistics',
    //   id: "UCNq2uHtVNrZ28UkxROEZxEg"
    // })

    // console.log(channels.data.items)

 
  }




  
}
