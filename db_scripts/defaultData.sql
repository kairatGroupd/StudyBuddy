insert into course
    (course_id, course_name, course_points)
values 
	(1, 'Web Programming', 15),
    (2, 'Information Security', 10),
    (3, 'Software Design and Architecture', 15),
    (4, 'Network Security', 15),
    (5, 'Databases', 20),
    (6, 'Angular: Fundamentals', 20),
    (7, 'RxJS in Angular: Reactive Development', 10),
    (8, 'Javascript: Getting Started', 12),
    (9, 'Introduction to CSS', 18),
    (10, 'RxJS: Getting Started', 13),
    (11, 'Advanced Programming', 14),
    (12, 'Introduction to Computer Science', 7),
    (13, 'Linux Based Systems', 11),
    (14, 'Advanced Databases', 15),
    (15, 'PostgreSQL: Getting Started', 10),
    (16, 'Clean Architecture: Patterns', 20),
    (17, 'Xamarin.Forms: Localization', 10),
    (18, 'Xamarin.Forms: Getting Started', 8),
    (19, 'Moving Beyond the Basics of Xamarin.Forms', 15),
    (20, 'Styling Angular Applications', 15),
    (21, 'ReactJS: Getting Started', 10),
    (22, 'Advanced Typescript', 20),
    (23, 'Scrum Master Fundamentals', 12),
    (24, 'Advanced Javascript', 20),
    (25, 'AWS', 10),
    (26, 'Domain Driven Design', 17),
    (27, 'C# Application Practices', 11),
    (28, 'Javascript Core Language', 20),
    (29, 'ASP.NET Core', 15),
    (30, 'Source Control with Git', 15);

insert into administrator
    (admin_id, admin_name, admin_pass)
values 
	(1, 'admin', 'admin'),
	(2, 'root', 'toor'),
	(3, 'Vladislav Bidikov', '123456'),
    (4, 'superuser', 'superuser'),
    (5, 'webadmin', 'webadmin');

insert into course_path
    (path_id, path_name)
values 
    (1, 'Full-Stack Web developer'),
    (2, 'Database Administrator'),
    (3, 'Cyber Engineer'),
    (4, 'Software Engineer'),
    (5, 'Tech Support'),
    (6, 'Front-End Web Developer'),
    (7, 'Back-End Web Developer'),
    (8, 'System Administrator'),
    (9, 'IT Professional'),
    (10, 'Microcontroller Engineer'),
    (11, 'Software Testing Engineering');

insert into student
	(student_id, path_id, first_name, last_name, home_address, email_address, student_pass, student_points)
values 
	(1, 3, 'Mario', 'Stojcevski', 'Skopje, Macedonia', 'mane.sto@outlook.com', 'password', 25),
    (2, 1, 'Kristina', 'Avramovic', 'Nis, Serbia', 'kristina.a@outlook.com', 'password', 18),
    (3, 5, 'Kristijan', 'Golubovic', 'Belgrade, Serbia', 'kristijan@golubovic', 'password', 18),
    (4, 2, 'Eli', 'Stojcevska', 'Skopje, Macedonia', 'eli.sto@outlook.com', 'password', 24),
    (5, 4, 'Marko', 'Markovikj', 'Skopje, Macedonia', 'marko@markovikj.com', 'password', 15);

insert into teacher
	(teacher_id, first_name, last_name, email_address, teacher_pass)
values 
	(1, 'Zoran', 'Jovanovic', 'zoran@jovanovic.com', 'teacher', 30000),
    (2, 'Dragan', 'Denic', 'dragan@denic.com', 'teacher', 25000),
    (3, 'Sasa', 'Mikovic', 'sasa@mikovic', 'teacher', 27000),
    (4, 'Vesna', 'Dimitrova', 'vesna@dimitrova', 'teacher', 15000),
    (5, 'Eftim', 'Zdravevski', 'eftim@zdravevski', 'teacher', 50000);

insert into teaches
    (course_id, teacher_id)
values 
	(1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 1),
    (7, 2),
    (8, 3),
    (9, 4),
    (10, 5),
    (11, 1),
    (12, 2),
    (13, 3),
    (14, 4),
    (15, 5),
    (16, 1),
    (17, 2),
    (18, 3),
    (19, 4),
    (20, 5),
    (21, 1),
    (22, 2),
    (23, 3),
    (24, 4),
    (25, 5),
    (26, 1),
    (27, 2),
    (28, 3),
    (29, 4),
    (30, 5);

insert into phone_number
    (student_id, phone_number)
values 
	(1, '071 292 396'),
	(1, '074 206 405'),
    (2, '076 235 324'),
    (3, '075 000 000'),
    (4, '071 111 111'),
    (5, '074 206 402');

insert into takes
    (student_id, course_id, achieved_points) -- there are arguments missing: started and finished dates;
values 
	(1, 1, 5),
	(1, 2, 5),
	(1, 4, 5),
	(1, 13, 5),
	(1, 24, 5),
    (2, 8, 3),
    (2, 15, 7),
    (2, 17, 4),
    (2, 18, 3),
    (2, 19, 1),
    (3, 12, 4),
    (3, 11, 2),
    (3, 23, 3),
    (3, 24, 5),
    (3, 5, 4),
    (4, 21, 6),
    (4, 28, 3),
    (4, 30, 5),
    (4, 3, 5),
    (4, 9, 5),
    (5, 7, 5),
    (5, 22, 2),
    (5, 14, 1),
    (5, 5, 2),
    (5, 29, 5);

insert into course_assignment
    (assignment_id, course_id, file)
values 
	(1, 1, 'ReactJS Lab 1'),
    (2, 1, 'ReactJS Lab 2'),
    (3, 1, 'Backend in Spring'),
    (4, 2, 'AES Encryption Algorithm'),
    (5, 2, 'Kerberos KDC Simulation'),
    (6, 2, 'Implementation of the STS Protocol'),
    (7, 5, 'ER-Diagram assignment'),
    (8, 5, 'Generate the DDL for the schema'),
    (9, 5, 'Database views'),
    (10, 5, 'Full application development');
    

insert into belongs_to
    (course_id, path_id)
values 
	(1, 3),
    (2, 3),
    (4, 3),
    (3, 3),
    (30, 3),
    (1, 2),
    (5, 2),
    (11, 2),
    (14, 2),
    (22, 6),
    (30, 6),
    (6, 6),
    (1, 6),
    (20, 6),
    (1, 1),
    (3, 1),
    (5, 1),
    (6, 1),
    (25, 4),
    (26, 4),
    (27, 4);
    