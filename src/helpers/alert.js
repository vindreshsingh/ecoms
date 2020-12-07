import swal from 'sweetalert';

// for showing alert for the missing field
export function missingFieldAlert(title, field) {
  swal({
    title: title,
    text: `Please Enter ${field}`,
    icon: 'warning',
    button: 'Ok',
  });
}

// for showing alert of the error message with detail
export function errorMessageAlert(title, error) {
  swal({
    title: title,
    text: error,
    icon: 'warning',
    button: 'Ok',
  });
}

// for showing alert of the success message with detail
export function successMessageAlert(title, message) {
  swal({
    title: title,
    text: message,
    icon: 'success',
    button: 'Ok',
  });
}
