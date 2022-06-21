import Sexo from '../samples/Sexo'
import UnidadeMedida from '../samples/UnidadeMedida'

describe('Enumeration', () => {
  test('String value', () => {
    expect(Sexo.Feminino).toBe('F')
    expect(Sexo.Masculino).toBe('M')

    expect(UnidadeMedida.Milimetro).toBe('MM')
    expect(UnidadeMedida.Centimetro).toBe('CM')
    expect(UnidadeMedida.Metro).toBe('M')
  })

  test('JSON', () => {
    const options = [
      {value: 'M', variable: 'Masculino', text: 'MASCULINO'},
      {value: 'F', variable: 'Feminino', text: 'FEMININO'}
    ]

    expect(JSON.stringify(Sexo.toJSON())).toBe(JSON.stringify(options))
  })
})
