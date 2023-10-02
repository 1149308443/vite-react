import { Component, h, Event, Prop, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'cl-input',
  styleUrl: 'cl-input.less',
  shadow: true,
})
export class ClInput {
  @Prop({ mutable: true }) value: string;
  @Prop() placeholder: string;
  @Event() focusEvent: EventEmitter<void>;
  @Event() blurEvent: EventEmitter<void>;
  @Event() changeEvent: EventEmitter<string>;

  @State() inputValue: string;

  componentWillLoad() {
    this.inputValue = this.value;
  }

  handleFocus() {
    this.focusEvent.emit();
  }

  handleBlur() {
    this.blurEvent.emit();
  }

  handleChange(e: InputEvent) {
    this.inputValue = (e.target as HTMLInputElement).value;
    console.warn((e.target as HTMLInputElement).value)
    this.changeEvent.emit(this.inputValue);
  }
  render() {
    return (
      <input
        type="text"
        value={this.inputValue}
        placeholder={this.placeholder}
        onFocus={() => {
          this.handleFocus();
        }}
        onBlur={() => {
          this.handleBlur();
        }}
        onInput={e => {
          this.handleChange(e);
        }}
      />
    );
  }
}
