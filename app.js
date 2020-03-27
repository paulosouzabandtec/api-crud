import express from 'express'
import homeRoutes from './src/routes/homeRoutes'
import alunoRoutes from './src/routes/alunoRoutes'
import './src/database'

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/alunos', alunoRoutes)
  }
}

export default new App().app