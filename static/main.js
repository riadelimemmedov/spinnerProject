//!Js ve Ajax ile Django loading project

const spinnerBox = document.getElementById('spinner-box')
const dataBox = document.getElementById('data-box')

// console.log(spinnerBox);
// console.log(dataBox);

$.ajax({
    type: 'GET',
    url: '/posts/',
    success: function(response){
        setTimeout(function(){     
            spinnerBox.classList.add('d-none')
            response.forEach(function(item){
                dataBox.innerHTML += `
                    <strong>${item.title}</strong><p>${item.body}</p>
                `
            })
        },400)
    },
    error:function(err){
        
        dataBox.innerHTML = `
            <div class="alert alert-danger">
                <strong>Failed Load Data...</strong>
            </div>
        `
        spinnerBox.classList.add('d-none')
    }
})