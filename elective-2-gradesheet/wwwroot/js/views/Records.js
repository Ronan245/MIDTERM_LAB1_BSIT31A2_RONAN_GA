document.addEventListener('DOMContentLoaded', function () {
    // --- Tooltips on student names ---
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // --- Collapse icons rotation ---
    var collapseToggles = document.querySelectorAll('.card-header button[data-bs-toggle="collapse"]');
    collapseToggles.forEach(function (toggle) {
        var collapseElement = document.querySelector(toggle.getAttribute('data-bs-target'));
        var icon = toggle.querySelector('.collapse-icon');

        // Initial state check (in case some sections are open by default)
        if (collapseElement.classList.contains('show')) {
            icon.classList.add('fa-rotate-180');
        }

        collapseElement.addEventListener('show.bs.collapse', function () {
            icon.classList.add('fa-rotate-180');
        });

        collapseElement.addEventListener('hide.bs.collapse', function () {
            icon.classList.remove('fa-rotate-180');
        });
    });

    // --- Optional: Reset Filter Button Behavior ---
    // If using normal form submission, this is optional.
    // If using JS to clear inputs without page reload:
    var resetButtons = document.querySelectorAll('button[name="reset"]');
    resetButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var form = btn.closest('form');
            if (form) {
                form.querySelectorAll('input, select').forEach(function (input) {
                    input.value = '';
                });
            }
        });
    });
});