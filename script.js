(() => {
    'use strict'
    
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity() || form.elements['validationEmail'].value.trim() === '') {
          event.preventDefault()
          event.stopPropagation()
          if (form.elements['validationEmail'].value.trim() === '') {
            form.elements['validationEmail'].classList.add('is-invalid')
            document.getElementById('emptyEmailFeedback').style.display = 'block'
          }
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()