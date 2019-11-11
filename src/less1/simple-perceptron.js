

export class SimplePerceptron {
  constructor(countInput) {
    // инициилизируем веса (все 0)
    this.weights = new Array(countInput).fill(0)
    // Порог функции активации
    this.bias = 7
  }

  // Распознование
  predict(inputs) {
    // Рассчитываем взвешенную сумму
    const net = this.weights.reduce((sum, w, wi) => sum + inputs[wi] * w, 0)

    // Превышен ли порог? (Да - сеть думает, что это верно. Нет - сеть думает, что это неверно)
    return net >= this.bias
  }

  // Увеличение значений весов, если сеть ошиблась и выдала 0
  increase(inputs) {
    for(let i=0; i<this.weights.length; i++) {
      if (inputs[i] === 1) {
        this.weights[i] += 1
      }
    }
  }

  // Уменьшение значений весов, если сеть ошиблась и выдала 1
  decrease(inputs) {
    for(let i=0; i<this.weights.length; i++) {
      if (inputs[i] === 1) {
        this.weights[i] -= 1
      }
    }
  }

  train(indexRightInputs, all) {
    for (let i = 0; i < 10000; i++) {
      // перебираем выборку по очереди (можно случайно)
      // const indexOption = i % (all.length)
      const indexOption = Math.floor(Math.random() * 10)

      
      const optionInputs = all[indexOption]
      
      // Если получилось НЕ число искомое значение
      if (indexOption !== indexRightInputs) {
        // Если сеть выдала True/Да/1, то наказываем ее
        if (this.predict(optionInputs) === true) {
          this.decrease(optionInputs)
        }
      }
      else {
        const rightInputs = all[indexRightInputs]
        // Если сеть выдала False/Нет/0, то показываем, что эти входные значения - то, что нам нужно
        if (this.predict(rightInputs) === false) {
          this.increase(rightInputs)
        }
      }
    }
  }
}
