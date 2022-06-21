<div align="center">
  <h1>Enumeration JS</h1>

  <p>
    An useful concept of Enumeration in JavaScript!
  </p>
</div>

<br/>

<!-- About the Project -->
## :star2: About the Project
This project was created in order to provide an useful and helpful JavaSciprt Enumeration for developers.

You can use it in code for comparisons, for example. You also are able to generate an array of data and bind it on a select component.

<!-- Getting Started -->
##  :toolbox: Getting Started

<!-- Installation -->
### :gear: Installation

Install enumeration-js with npm

```bash
  npm install install enumeration-js
```

<!-- Running Tests -->
### :test_tube: Running Tests

To run tests, run the following command

```bash
  npm run test
```

<!-- Usage -->
# :eyes: Usage


First of all, you have to create your enumerations. There are two suggested ways for doing it:

1 - Extending Enumeration class.

2 - Using a new instance of Enumeration.


## Extending Enumeration class ...


```javascript
import { Enumeration } from 'enumeration-js'

Class Gender extends Enumeration {
  constructor() {
    super()

    this.add('M', 'Male', 'MALE')
    this.add('F', 'Female', 'FEMALE')
  }
}

export default new Sexo()
```

## Using a new Instance of Enumeration ...


```javascript
import { Enumeration } from 'enumeration-js'

const enumeration = new Enumeration()

enumeration.add('M', 'Male', 'MALE')
enumeration.add('F', 'Female', 'FEMALE')

export default enumeration
```

After this, you are ready to use your own enumeration in your code

## Using my own Enumeration ...

```javascript
import Gender from './Gender'

if (person.gender === Gender.Female) {
  ...
}

```

If you need a JSON to populate a select with this options, you can call .toJSON() method.

```html
<v-select
  label="Gender"
  v-model="person.gender"
  :items="Gender.toJSON()"
>
</v-select>
```

<img src="./assets/select-closed.png"/>

<br/>

<img src="./assets/select-open.png"/>