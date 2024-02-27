<template>
  <div class="auth-form">
    <h2 class="auth-form__title">{{ mode === 'login' ? 'Авторизация' : 'Регистрация' }}</h2>
    <form @submit.prevent="handleSubmit" class="auth-form__form">
      <div class="auth-form__field">
        <label for="username" class="auth-form__label">Логин:</label>
        <input type="text" id="username" v-model="username" class="auth-form__input">
        <span v-if="usernameError" class="auth-form__error">{{ usernameError }}</span>
      </div>
      <div class="auth-form__field">
        <label for="password" class="auth-form__label">Пароль:</label>
        <input type="password" id="password" v-model="password" class="auth-form__input">
        <span v-if="passwordError" class="auth-form__error">{{ passwordError }}</span>
      </div>
      <button type="submit" class="auth-form__submit">{{ mode === 'login' ? 'Войти' : 'Зарегистрироваться' }}</button>
      <button class="auth-form__toggle" @click="toggleMode">{{ mode === 'login' ? 'Зарегистрироваться' : 'Авторизоваться' }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  data () {
    return {
      mode: 'login',
      username: '',
      password: '',
      isValidUsername: true,
      isValidPassword: true,
      usernameError: '',
      passwordError: ''
    }
  },
  methods: {
    handleSubmit () {
      this.usernameError = ''
      this.passwordError = ''

      this.isValidUsername = this.username.length >= 4
      this.isValidPassword = this.password.length >= 4

      if (!this.isValidUsername) {
        this.usernameError = 'Логин должен содержать не менее 4 символов'
      }

      if (!this.isValidPassword) {
        this.passwordError = 'Пароль должен содержать не менее 4 символов'
      }

      if (this.username.trim() === '') {
        this.usernameError = 'Поле не должно быть пустым'
      }

      if (this.password.trim() === '') {
        this.passwordError = 'Поле не должно быть пустым'
      }

      if (this.isValidUsername && this.isValidPassword && this.username.trim() !== '' && this.password.trim() !== '') {
        try {
          if (this.mode === 'login') {
            // Код авторизации
            const users = JSON.parse(localStorage.getItem('users')) || []
            const user = users.find(u => u.username === this.username && u.password === this.password)
            if (user) {
              localStorage.setItem('currentUser', JSON.stringify(user))
              localStorage.setItem('isAuthenticated', true)
              this.$router.push('/')
            } else {
              alert('Неправильный логин или пароль')
            }
          } else {
            // Код регистрации
            const users = JSON.parse(localStorage.getItem('users')) || []
            if (users.some(u => u.username === this.username)) {
              alert('Пользователь с таким логином уже существует')
            } else {
              users.push({ username: this.username, password: this.password })
              localStorage.setItem('users', JSON.stringify(users))
              alert('Регистрация успешна. Теперь вы можете авторизоваться.')
              this.mode = 'login'
            }
          }
        } catch (error) {
          alert(error.message)
        }
      }
    },
    toggleMode () {
      this.mode = this.mode === 'login' ? 'register' : 'login'
    }
  }
}
</script>

<style scoped>
.auth-form {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.auth-form__form {
  display: flex;
  flex-direction: column;
}

.auth-form__title {
  margin-bottom: 20px;
  font-size: 20px;
}

.auth-form__field {
  margin-bottom: 10px;
}

.auth-form__label {
  margin-bottom: 5px;
}

.auth-form__input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.auth-form__error {
  color: red;
}

.auth-form__submit {
  padding: 8px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.auth-form__toggle {
  margin-top: 10px;
  align-self: flex-end;
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  color: #007bff;
  cursor: pointer;
}
</style>
