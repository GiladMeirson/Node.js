
localUrl = 'http://localhost:3000';

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const studentData = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value
    };

    // Send a POST request to add the student
    fetch(localUrl+'/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        fetchStudents(); // Fetch all students to update the list
    })
    .catch(error => console.error('Error:', error));
});

function fetchStudents() {
    fetch(localUrl+'/api/students',{method: 'GET', headers: { 'Content-Type': 'application/json', }})
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('studentsList');
        list.innerHTML = ''; // Clear the list
        console.log(data.message);
        data.data.forEach(student => {
            const item = document.createElement('li');
            item.textContent = `ID: ${student.id}, Name: ${student.name}`;
            list.appendChild(item);
        });
    })
    .catch(error => console.error('Error:', error));
}

// Initial fetch of students
fetchStudents();