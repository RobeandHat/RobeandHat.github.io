$('.resume').click(function () {
    let confirmation = confirm('Confirm to download my resume')
    if(confirmation === true) {
      return true;
    }
    else {
      return false;
    }
  });