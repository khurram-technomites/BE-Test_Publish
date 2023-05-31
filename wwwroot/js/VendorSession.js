$(document).ready(function () {
    debugger
    window.setInterval(validateSession, 5000);
});

validateSession = () => {
        $.ajax({
            url: "/Account/ValidateSession",
            success: function (result) {
                if (!result.isValid)
                    location.href = '/Vendor/Account/Logout'
            }
        });
}