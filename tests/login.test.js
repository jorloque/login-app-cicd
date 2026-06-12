/**
 * Tests de la función de validación del formulario de login
 */

// Mock del DOM
document.body.innerHTML = `
  <form id="loginForm">
    <input id="email" type="email">
    <input id="password" type="password">
    <span id="emailError"></span>
    <span id="pwdError"></span>
    <p id="formMsg"></p>
  </form>
`;

const { validate } = require('../js/app');

describe('Validación del formulario de login', () => {

  beforeEach(() => {
    document.getElementById('email').value    = '';
    document.getElementById('password').value = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('pwdError').textContent   = '';
  });

  test('Devuelve false si el email está vacío', () => {
    document.getElementById('password').value = 'Alumno123!';
    expect(validate()).toBe(false);
  });

  test('Devuelve false si el email no tiene formato válido', () => {
    document.getElementById('email').value    = 'no-es-email';
    document.getElementById('password').value = 'Alumno123!';
    expect(validate()).toBe(false);
  });

  test('Devuelve false si la contraseña tiene menos de 8 caracteres', () => {
    document.getElementById('email').value    = 'alumno@instituto.es';
    document.getElementById('password').value = '123';
    expect(validate()).toBe(false);
  });

  test('Devuelve true con email y contraseña válidos', () => {
    document.getElementById('email').value    = 'alumno@instituto.es';
    document.getElementById('password').value = 'Alumno123!';
    expect(validate()).toBe(true);
  });
});
