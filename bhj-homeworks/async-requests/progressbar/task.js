const progress = document.getElementById( 'progress' );
const myForm = document.getElementById( 'form' )

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(myForm);
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (e) => {
        progress.value = e.loaded / e.total;
    };

    xhr.onload = () => {
        alert('Загрузга завершена!');
        location.reload();
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')

    xhr.send(formData);
});
