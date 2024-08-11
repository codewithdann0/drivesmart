const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create tables and insert initial data
db.serialize(() => {
    // Create Admins table
    db.run(`
        CREATE TABLE IF NOT EXISTS admins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            password TEXT NOT NULL
        )
    `);

    // Create Courses table
    db.run(`
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            duration TEXT NOT NULL,
            cost TEXT NOT NULL,
            schedule TEXT NOT NULL
        )
    `);

    // Create Registrations table
    db.run(`
        CREATE TABLE IF NOT EXISTS registrations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            courseId INTEGER NOT NULL,
            startDate TEXT NOT NULL,
            gradeCertificate BLOB,
            kebeleId BLOB,
            photo BLOB,
            medicalStatus BLOB,
            FOREIGN KEY (courseId) REFERENCES courses(id)
        )
    `);

    // Create News table
    db.run(`
        CREATE TABLE IF NOT EXISTS news (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            date TEXT NOT NULL
        )
    `);

    // Create Testimonials table
    db.run(`
        CREATE TABLE IF NOT EXISTS testimonials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            testimonial TEXT NOT NULL,
            date TEXT NOT NULL
        )
    `);

    // Create Contacts table
    db.run(`
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            address TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL
        )
    `);

    // Create FAQs table
    db.run(`
        CREATE TABLE IF NOT EXISTS faqs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answer TEXT NOT NULL
        )
    `);

    // Insert initial data for admins
    db.run(`
        INSERT INTO admins (name, password)
        VALUES ('admin', 'password')
    `);

    // Insert initial data for courses
    const initialCourses = [
        { title: 'Motorcycle', description: 'Motorcycle driving course', duration: '4 weeks', cost: '5000 ETB', schedule: 'Mon-Fri' },
        { title: 'Bajaj', description: 'Bajaj driving course', duration: '6 weeks', cost: '7000 ETB', schedule: 'Mon-Sat' },
        { title: 'Bus', description: 'Bus driving course', duration: '8 weeks', cost: '10000 ETB', schedule: 'Mon-Sun' }
    ];

    initialCourses.forEach((course) => {
        db.run(`
            INSERT INTO courses (title, description, duration, cost, schedule)
            VALUES (?, ?, ?, ?, ?)
        `, [course.title, course.description, course.duration, course.cost, course.schedule]);
    });

    console.log('Admins, Courses, and other tables created or already exist.');
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error('Error closing database:', err.message);
    } else {
        console.log('Closed the database connection.');
    }
});
