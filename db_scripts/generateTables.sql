create domain MonthlySalary as numeric(7,2);
create domain clob as text;

--administrator(admin_id, admin_name, password)
create table administrator
(
    admin_id smallint generated always as identity,
    admin_name varchar(50),
    admin_pass varchar(20),
    constraint pk_admin primary key (admin_id)
);

--teacher(teacher_id, first_name, last_name, email_address, password)
create table teacher
(
    teacher_id smallint generated always as identity,
    first_name varchar(50),
    last_name varchar(50),
    email_address varchar(100),
    teacher_pass varchar(20),
    teacher_salary MonthlySalary,
    constraint pk_teacher primary key (teacher_id)
);

--course(course_id, course_name, course_points)
create table course
(
    course_id smallint generated always as identity,
    course_name varchar(50),
    course_points numeric(5, 2),
    constraint pk_course primary key (course_id)
);

--assignment(assignment_id, course_id, file, course*(course_id))
create table course_assignment
(
    assignment_id smallint,
    course_id smallint,
    file clob,
    constraint pk_assignment_course primary key (assignment_id, course_id),
    constraint fk_assignment foreign key (course_id) references course (course_id)
);

--path(path_id, path_name)
create table course_path
(
    path_id smallint,
    path_name varchar(50),
    constraint pk_path primary key (path_id)
);

--student(student_id, first_name, last_name, home_address, email_address, password, course_path*(path_id))
create table student
(
    student_id smallint,
    path_id smallint,
    first_name varchar(50),
    last_name varchar(50),
    home_address varchar(30),
    email_address varchar(100),
    student_pass varchar(20),
    student_points numeric(5,2),
    constraint pk_student primary key (student_id),
    constraint fk_student_path foreign key (path_id) references course_path (path_id)
);

--teaches(course_id, teacher_id, course*(course_id), teacher*(teacher_id))
create table teaches
(
    course_id smallint,
    teacher_id smallint,
    constraint pk_teaches primary key (course_id, teacher_id),
    constraint fk_teaches_course foreign key (course_id) references course (course_id),
    constraint fk_teaches_teacher foreign key (teacher_id) references teacher (teacher_id)
);

--belongs_to(course_id, path_id, course*(course_id), course_path*(path_id))
create table belongs_to
(
    course_id smallint,
    path_id smallint,
    constraint pk_belongs_to primary key (course_id, path_id),
    constraint fk_belongs_to_course foreign key (course_id) references course (course_id),
    constraint fk_belongs_to_path foreign key (path_id) references course_path (path_id)
);

--takes(course*(course_id), course_path*(path_id))
create table takes
(
    course_id smallint,
    student_id smallint,
    achieved_points numeric(5,2) default(0),
    started_course date not null default('2019-11-25'),
    finished_course date default(null),
    constraint pk_takes_to primary key (course_id, student_id),
    constraint fk_takes_course foreign key (course_id) references course (course_id),
    constraint fk_takes_student foreign key (student_id) references student (student_id)
);

--phone_number(student_id, phone_number)
create table phone_number
(
    student_id smallint,
    phone_number varchar(30),
    constraint pk_phone_number primary key (student_id, phone_number),
    constraint fk_phone_number foreign key (student_id) references student (student_id)
);
