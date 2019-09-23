var data = {
    "access_token": "8mkx5fprk2xtk825kehdxugn"
};

function onSuccess() {
    // remove this to avoid redirect
    alert("Email Sent Successfully");
}

function onError(error) {
    // remove this to avoid redirect
    alert("Error Sending Mail");
    console.log(error);
}

function send() {
    var name = $("#Name").val();
    var email = $("#Email").val();
    var subject = "Email from webpage";
    var gender = $("#Gender").val();
    var message = $("#Message").val() + ". Sex: " + gender;
    data['name'] = name;
    data['email'] = email;
    data['subject'] = subject;
    data['text'] = message;

    console.table(data);

    $.post('https://postmail.invotes.com/send',
        data,
        onSuccess
    ).fail(onError);
}
