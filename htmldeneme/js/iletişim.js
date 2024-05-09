document.addEventListener('DOMContentLoaded', function() {
    // Formun gönderilme olayını dinle
    document.getElementById('gonder').addEventListener('click', function(event) {
      // Formu gönderilmeden önce tüm alanların kontrolünü yap
      if (!isFormValid()) {
        event.preventDefault(); // Formun gönderilmesini engelle
      }
    });
  });

  function isFormValid() {
    // Tüm alanları al
    const inputs = document.querySelectorAll('.form-control, .form-check-input');

    // Her bir alan için kontrol yap
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      

      // Alan boşsa veya seçim yapılmadıysa
      if (!input.value.trim() || (input.type === 'checkbox' && !input.checked)) {
        alert('Lütfen tüm alanları doldurun!');
        return false; // Form geçerli değil
      }else{
        alert('Üyelik işleminiz başarıyla gerçekleşti!');
      }
    }

    // Form geçerli ise true döndür
    return true;
  }