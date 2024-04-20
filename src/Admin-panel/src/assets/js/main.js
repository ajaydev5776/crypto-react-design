const switchcasebtn = document.querySelector('#switch')
const asidebar = document.querySelector('#asidebar')
const switchcancle = document.querySelector('#switchcancle')

switchcasebtn.addEventListener('click', () =>{
    asidebar.classList.toggle('active')
})
switchcancle.addEventListener('click', () =>{
    asidebar.classList.remove('active')
})

 
    


// In your Javascript (external .js resource or <script> tag)
    $(document).ready(function() {
        $('.js-example-basic-single').select2();
    });
    // $(document).ready(function() {
    //     $('.nondropdownselect').select2();
    // }); 


function togglePasswordVisibility() {
    var passwordInput = document.getElementById("yourPassword");
    var icon = document.getElementById("toggleIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
  // Select All checkbox functionality
  const checkboxAll = document.getElementById('datatableCheckAll');
  const checkboxes = document.querySelectorAll('.form-check-input');

  checkboxAll.addEventListener('change', function() {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checkboxAll.checked;
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      checkboxAll.checked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    });
  });

  // Initialize DataTable
  $(document).ready(function () {
    $('#datatable').DataTable({
      "dom": '<"top"if>rt<"bottom"lp><"clear">',
      "searching": false, // Hide search bar
      // responsive: true,
      // scrollX: true,
    });
  });


let  enableinput = document.getElementById('enableinput');
let  disableinput = document.getElementById('disableinput');
disableinput.onclick = function(){
    var form = document.getElementById('userdetails');
    var inputs = form.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== 'button') {
            inputs[i].disabled = true;
        }
    }
    enableinput.classList.remove('active')
}
enableinput.onclick = function(){
    var form = document.getElementById('userdetails');
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== 'button') {
            inputs[i].disabled = false;
        }
    }
    enableinput.classList.add('active')
}