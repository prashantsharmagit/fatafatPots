$(document).ready(function () {
    // Load JSON data from file using AJAX
    $.getJSON('employees.json', function (data) {
        // Extract employee data from JSON object
        var employees = data.employees;
        // Get reference to the table body element
        var tbody = $('#employee-table tbody');
        // Loop through the employee data and create HTML rows for each employee
        $.each(employees, function (i, employee) {
            var tr = $('<tr>');
            tr.append('<td>' + employee.name + '</td>');
            tr.append('<td>' + employee.title + '</td>');
            tr.append('<td>' + employee.department + '</td>');
            tr.append('<td>' + employee.bio + '</td>');
            // Add the row to the table body
            tbody.append(tr);
        });
    });
});
