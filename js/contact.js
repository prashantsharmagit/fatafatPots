// Prashant Sharma | C0878710
$(document).ready(function () {
    // Validating the contact form
    $('#contactForm').validate({
        rules: {
            name: {
                required: true
            },
            age: {
                required: true,
                digits: true,
                min: 16
            },
            email: {
                email: true
            },
            queryOptions: {
                required: true
            },
            query: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'You must enter your name'
            },
            age: {
                required: 'You must enter your age',
                digits: 'Please enter a valid value'
            },
            email: {
                email: 'You must enter your email'
            },
            queryOptions: {
                required: "You must choose one option"
            },
            query: {
                required: "You must enter your query"
            }
        }
    });
});
