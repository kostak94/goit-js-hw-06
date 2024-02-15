class StringBuilder {
  #value;

  constructor(value) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value = this.#value.replace(/$/, str);
  }

  padStart(str) {
    this.#value = this.#value.replace(/^/, str);
  }

  padBoth(str) {
    this.#value = this.#value.replace(/^/, str).replace(/$/, str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
