// Example: Fetch and display courses
const courseList = document.getElementById('course-list');
const courses = [
    { title: 'Introduction to HTML', link: '#' },
    { title: 'CSS Basics', link: '#' },
];

courses.forEach(course => {
    const courseElement = document.createElement('div');
    courseElement.innerHTML = `<h3><a href="${course.link}">${course.title}</a></h3>`;
    courseList.appendChild(courseElement);
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => alert('Logged in successfully!'))
        .catch(error => alert(error.message));
}

function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => alert('Signed up successfully!'))
        .catch(error => alert(error.message));
}

db.collection('courses').get().then(snapshot => {
    snapshot.forEach(doc => {
        const course = doc.data();
        const courseElement = document.createElement('div');
        courseElement.innerHTML = `<h3><a href="${course.link}">${course.title}</a></h3>`;
        courseList.appendChild(courseElement);
    });
});