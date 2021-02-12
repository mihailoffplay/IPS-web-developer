$('#sign-up form').validate({
    rules: {
        name: "required",
        activity: "required",
        email: {
            required: true,
            email: true
        }
    },
        messages: {
            name: "Пожалуйста введите своё имя",
            activity: "Пожалуйста выберите профессию",
            email: {
              required: "Нам нужен ваш адрес электронной почты, чтобы связаться с вами",
              email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
            }
          }
    });