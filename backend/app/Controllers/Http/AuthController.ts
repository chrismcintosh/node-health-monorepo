import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'


export default class AuthController {
    public async login(ctx: HttpContextContract) {
        const email = ctx.request.input('email')
        const password = ctx.request.input('password')

        try {
          const token_payload = await ctx.auth.use('api').attempt(email, password)

          const user_id = token_payload.user.id
          const user_email = token_payload.user.email
          const token = token_payload.token

          return {
            token,
            user_id,
            user_email
          }

        } catch {
          return ctx.response.unauthorized('Invalid credentials')
        }
    }

    public async show({auth}){
      // const token = ctx.request.input('token')
      return await auth.use('api').authenticate()
      // const user = await User.findByOrFail('email', email)
    }
}