function check(url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        async: true,
        data: {
            "optionId": $('input:radio:checked').attr('id')
        },
        success: function(data){
            if(data['result'] == true){
                $("#correct").show();
            } else {
                $("#incorrect").show();
            }
            $("#resp").hide();
            $("#next").show();
        }
    });
    return false;
}