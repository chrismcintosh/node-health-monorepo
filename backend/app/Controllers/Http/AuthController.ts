import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'


export default class AuthController {
    public async login(ctx: HttpContextContract) {
        const email = ctx.request.input('email')
        const password = ctx.request.input('password')

        try {
          const token = await ctx.auth.use('api').attempt(email, password)

          if (token) {
              const user = await User.findByOrFail('email', email)

              return {
                "id": user.id,
                email,
                token
              }
          }

        } catch {
          return ctx.response.unauthorized('Invalid credentials')
        }
    }

    public async sample() {
      return {"message": "ok"}
    }
}