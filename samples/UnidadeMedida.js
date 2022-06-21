import { Enumeration } from '../src/Enumeration'

class UnidadeMedida extends Enumeration {
  constructor () {
    super()

    this.add('MM', 'Milimetro', 'Milímetro')
    this.add('CM', 'Centimetro', 'Centímetro')
    this.add('M', 'Metro', 'Metro')
  }
}

export default new UnidadeMedida()
