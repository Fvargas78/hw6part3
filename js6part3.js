$(document).ready(function() {
    $('#phone_number').mask('(000) 000 0000');

    $('#main_form').validate({
        rules:
            {
                phone_number: {required: true}
            }
    });
})

function process(){
    if ($('#phone_number').valid()) {
        let phone_number = ($("#phone_number").val());
        let phone_number_split = phone_number.split(" ");
        $("#area_code").val(phone_number_split[0].replace(/\D/g,''));
        $("#first_three_num").val(phone_number_split[1]);
        $("#last_four_num").val(phone_number_split[2]);



    }
}
