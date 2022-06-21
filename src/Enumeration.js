import { EnumerationItem }  from './EnumerationItem'

class Enumeration {
  constructor () {
    this.items = []
  }

  add (value, variable, text) {
    this.items.push(new EnumerationItem(value, variable, text))
    this[value] = value
    this[variable] = value
  }

  get (value) {
    const reg = this.items.find(item => item.value === value || item.variable === value)
    return reg || null
  }

  toJSON () {
    return JSON.parse(JSON.stringify(this.items))
  }
}

export {
  Enumeration
}