
document.addEventListener("DOMContentLoaded", () => {
    const copyBtnForContactDetails = document.getElementById("copyBtnForContactDetails");

    copyBtnForContactDetails.addEventListener('click', function () {
        var copyText = document.getElementById("contactDetailsCopy");

        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);
    });

    var contactDetail = document.getElementsByClassName("contact-detail");

    for (let index = 0; index < contactDetail.length; index++) {
        contactDetail[index].addEventListener('mouseover', function () {
            var copyTextInput = document.getElementById("contactDetailsCopy");
            let value = contactDetail[index].getAttribute("aria-valuetext");
            copyTextInput.value = value;
        });
    }
});