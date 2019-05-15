class LinkedList {
  constructor(...values) {
    this.head = null;
    this.length = 0;
    this.addToHead(...values);
  }
  _addSingleItemToHead(value) {
    const newNode = {value};
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  addToHead(...values) {
    values.forEach(value => this._addSingleItemToHead(value));
    return this;
  }

  _addSingleAtIndex(i, value) {
    if (this.length === 0  && i !== 0) {
      alert(`You have entered an index "${i}", but this list is empty, therefore, the value you entered will be added to the top of the list.`);
      return this._addSingleItemToHead(value);
    }

    if (i === 0) {
      return this._addSingleItemToHead(value);
    }

    let newNode = {value};
    let previous = this.head;
    let counter = 0;

    while(previous) {
      if(counter === i-1 ) {
        break;
      }
      previous = previous.next;
      counter++;
    }
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return this;
  }

  addValueAtIndex(i, ...values) {
    if (this.length === 0 && i !== 0) {
      alert(`You have entered an index "${i}", but this list is empty, therefore, the values you entered will be added to the top of the list.`);
      return values.forEach(value => this._addSingleItemToHead(value));
    }

    values.forEach((value) => this._addSingleAtIndex(i, value));

    return this;
  }

  find(val) {
    let result = this.head;

    while(result) {
      if(result.value === val) {
        return result;
      }
      result = result.next;
    }
  }
  getFromIndex(i) {
    let result = this.head;
    let counter = 0;

    while(result) {
      if(counter === i ) {
        return result;
      }
      result = result.next;
      counter++;
    }
    return result;
  }

  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }

  _remove(val) {
    if (this.length === 0) {
        return undefined;
    }

    if (!val) {
      return undefined;
    }

    if (this.head.value === val) {
        this.removeFromHead();
        return this;
    }

    let previous = this.head;

    while (previous) {
        if (previous.next.value === val) {
          break;
        }

        previous = previous.next;
    }

    if (previous.next === null) {
      return undefined;
    }

    previous.next = previous.next.next;
    this.length--;
    return this;
  }

  remove(...values) {
    if (this.length === 0) {
        return undefined;
    }

    return values.forEach((val) => this._remove(val));
  }

  _removeFromIndex(i) {
    if (this.length === 0) {
        return undefined;
    }

    if (i === 0) {
      this.removeFromHead();
      return this;
    }

    let previous = this.head;
    let counter = 0;

    while(previous) {
      if (counter === i-1) {
        break;
      }
      previous = previous.next;
      counter++;
    }

    previous.next = previous.next.next;
    this.length--;
    return this;
  }
  removeFromIndex(i, n) {
    if (this.length === 0) {
        return undefined;
    }

    if (n === undefined) {
      return this._removeFromIndex(i);
    }

    if (n > this.length - i) {
      return alert(`You want to delete "${n}" element(s), but there is (are) only ${this.length-i} element(s), after element №${i} element(s)!\n
      Please, enter a valid value. `);
    }

    let counter = i;

    while(n >= counter) {
      this._removeFromIndex(i);
      counter++;
    }

    return this;
  }
}

const singlyLinkedList = new LinkedList("1").addToHead('2', '3', '4', '5', '6');
console.log(singlyLinkedList);
