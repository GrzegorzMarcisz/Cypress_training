const click = document.getElementById('click');
const dont_click = document.getElementById('dont_click');
const modal_success = document.getElementById('success');
const modal_error = document.getElementById('error');
const close_success = document.getElementById('close_success');
const close_error = document.getElementById('close_error');
const value = document.getElementById('value')




click.addEventListener('click', () => {
    document.getElementById('result').innerHTML = "&nbsp"+document.getElementById('value').value+"&nbsp";
    modal_success.classList.add('show')
})

dont_click.addEventListener('click', () => {
    modal_error.classList.add('show')
})

close_success.addEventListener('click', () => {
    modal_success.classList.remove('show')
})

close_error.addEventListener('click', () => {
    modal_error.classList.remove('show')
})

