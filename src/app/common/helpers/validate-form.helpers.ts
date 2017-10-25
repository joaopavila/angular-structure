
export function validateAllInputFields(formRegister, inputName: string): Boolean {
  const form = formRegister.get(inputName);
  return (form.value === null || form.value === '') && !form.valid && form.dirty;
}

export function validateMessageSpecificInput(formRegister, inputName): Boolean {
  const input = formRegister.get(inputName);
  return input.errors && (input.value !== null && input.value !== '') ? !input.valid : null;
}
