Page({
  data: {
    textInputValue: '',
    textareaValue: '',
    radioGroup: [
      { name: 'Option 1', value: 'Option 1' },
      { name: 'Option 2', value: 'Option 2' }
    ],
    checkboxGroup: [
      { name: 'Checkbox A', value: 'A', checked: false },
      { name: 'Checkbox B', value: 'B', checked: false }
    ],
    sliderValue: 50,
    switchValue: false,
    pickerOptions: ['Option 1', 'Option 2', 'Option 3'],
    pickerSelectedIndex: 0
  },

  // Event Handlers
  onTextInputChange(e) {
    this.setData({ textInputValue: e.detail.value });
  },

  onTextareaChange(e) {
    this.setData({ textareaValue: e.detail.value });
  },

  onRadioChange(e) {
    console.log('Selected Radio:', e.detail.value);
  },

  onCheckboxChange(e) {
    console.log('Selected Checkbox:', e.detail.value);
  },

  onSliderChange(e) {
    this.setData({ sliderValue: e.detail.value });
  },

  onSwitchChange(e) {
    this.setData({ switchValue: e.detail.value });
  },

  onPickerChange(e) {
    this.setData({ pickerSelectedIndex: e.detail.value });
  }
});
