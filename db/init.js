const { log } = require('console');

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
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS admins (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT NOT NULL,
    //         password TEXT NOT NULL
    //     )
    // `);

    // // Create Courses table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS courses (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         title TEXT NOT NULL,
    //         description TEXT NOT NULL,
    //         duration TEXT NOT NULL,
    //         cost TEXT NOT NULL,
    //         schedule TEXT NOT NULL
    //     )
    // `);

    // // Create Registrations table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS registrations (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         firstName TEXT NOT NULL,
    //         lastName TEXT NOT NULL,
    //         email TEXT NOT NULL,
    //         phone TEXT NOT NULL,
    //         courseId INTEGER NOT NULL,
    //         startDate TEXT NOT NULL,
    //         gradeCertificate BLOB,
    //         kebeleId BLOB,
    //         photo BLOB,
    //         medicalStatus BLOB,
    //         FOREIGN KEY (courseId) REFERENCES courses(id)
    //     )
    // `);

    

    // // Create Testimonials table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS testimonials (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT NOT NULL,
    //         testimonial TEXT NOT NULL,
    //         date TEXT NOT NULL
    //     )
    // `);

    // // Create Contacts table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS contacts (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         address TEXT NOT NULL,
    //         phone TEXT NOT NULL,
    //         email TEXT NOT NULL
    //     )
    // `);

    // // Create FAQs table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS faqs (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         question TEXT NOT NULL,
    //         answer TEXT NOT NULL
    //     )
    // `);
       // // Create News table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS news (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         title TEXT NOT NULL,
    //         content TEXT NOT NULL,
    //         date TEXT NOT NULL
    //     )
    // `);
    // // Insert initial data for admins
    // db.run(`
    //     INSERT INTO admins (name, password)
    //     VALUES ('admin', 'password')
    // `);
    //  db.run(`
    //     INSERT INTO testimonials (name,testimonial,date)
    //     VALUES ('Daniel TG','They teach me everthing I need as proffessional car driver ', '17/12/16')
    // `);
    // 
//     db.run(`
//         ALTER TABLE news
// ADD COLUMN image_url TEXT;
//    ${console.log("The image column is add")}`
//     );
      
  db.run(`
    DELETE FROM news where id = 2;
    `)
    
    // const initialCourses= [
    //     { title: 'Doqdoqqee(Dq)', description: 'Leenjii Doqdoqqee', duration: '4 weeks', cost: '10,000 ETB', schedule: 'Mon-Fri' ,image_url:'public/M.jpg'},
    //     { title: 'Baajaajii(T1)', description: 'Leenjii Baajaajii ', duration: '6 weeks', cost: '15,000 ETB', schedule: 'Mon-Sat',image_url:'public/M.jpg' },
    //     { title: 'Ummata tokko(u1)', description: 'Leenjii Ummata tokko ', duration: '8 weeks', cost: '20000 ETB', schedule: 'Mon-Sun',image_url:'public/M.jpg' },
    //     { title: 'Ummata lama(u2)', description: 'Leenjii Ummata lama ', duration: '9 weeks', cost: '25,000 ETB', schedule: 'Mon-Sun',image_url:'public/M.jpg' },
    //     { title: "Fe'umsa gogaa tokko(fg1)", description: "Leenjii Fe'umsa gogaa tokko", duration: '12 weeks', cost: '30,000 ETB', schedule: 'Mon-Sun',image_url:'public/M.jpg' },
    //     { title: "Fe'umsa gogaa lama(fg2)", description: "Leenjii Fe'umsa gogaa tokko ", duration: '15 weeks', cost: '33,000 ETB', schedule: 'Mon-Sun',image_url:'public/M.jpg' }
    // ];

    // initialCourses.forEach((course) => {
    //     db.run(`
    //         INSERT INTO courses (title, description, duration, cost, schedule,image_url)
    //         VALUES (?, ?, ?, ?, ?,?)
    //     `, [course.title, course.description, course.duration, course.cost, course.schedule,course.image_url]);
    // });

    // console.log('Admins, Courses, and other tables created or already exist.');
    console.log('testimonial data inserted in to the database');
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error('Error closing database:', err.message);
    } else {
        console.log('Closed the database connection.');
    }
});
