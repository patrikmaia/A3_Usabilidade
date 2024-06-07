document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const courses = document.querySelectorAll('.course');

    searchBar.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();

        courses.forEach(course => {
            const courseName = course.dataset.name.toLowerCase();
            if (courseName.includes(searchTerm)) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    });
});
