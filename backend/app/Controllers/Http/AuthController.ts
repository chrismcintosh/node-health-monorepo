import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async login(ctx: HttpContextContract) {
        const email = ctx.request.input('email')
        const password = ctx.request.input('password')
      
        try {
          const token = await ctx.auth.use('api').attempt(email, password)
          return token
        } catch {
          return ctx.response.unauthorized('Invalid credentials')
        }
    }
}
