--##############################################################################################################
--################################################# VIEWS ######################################################

--View of courses in a single path																			#1
create view courses_by_path as
select path_id as id, path_name, course_id, course_name, course_points
from course_path natural join belongs_to natural join course;

--View of teachers teaching a single course																	#2
create view courses_by_teacher as
select first_name, last_name, course_id, course_name, course_points
from teacher natural join teaches natural join course;

--View of student's total point																				#3
create view student_total_points as
select student.student_id as id, first_name, last_name, sum(student_points) as points
from student
left join takes on student.student_id = takes.student_id
group by id
order by points asc;

--View of courses that a student passed by date																#4
create view courses_passed_by_date as
select student_id, first_name, last_name, course_id, course_name, course_points, started_course, finished_course
from takes natural join student natural join course
where finished_course <= '2020-12-28' and first_name = 'Mario' and last_name = 'Stojcevski'
order by finished_course asc;

--View all students who are taking or have finished some course												#5
create view enrolled_students as
select 
s.first_name || ' ' || s.last_name as student_name, 
c.course_name, l.started_course, 
l.finished_course, 
l.achieved_points as achieved, 
c.course_points as total 
from takes as l
join student as s on l.student_id = s.student_id
join course as c on l.course_id = c.course_id;

--##############################################################################################################
--################################################ QUERIES #####################################################

-- A given student is enrolling a given course																#1
insert into takes 
(course_id, student_id, started_course)
values(
(select c.course_id from course as c where c.course_name ilike 'Web Programming'),
(select s.student_id from student as s where s.first_name ilike 'Kristina' and s.last_name ilike 'Avramovic'),
current_date);

-- Creating an assignment for a given course																#2
insert into course_assignment
(assignment_id, course_id)
values(
((select max(assignment_id) from course_assignment)+1), 1);

-- A given student finishing a given course		--this is not working it rewrites all data in takes															#3
update takes
set finished_course = current_date,
	achieved_points = 10
from  ( select * 
		from takes as l 
		join student as s 
		on l.student_id = s.student_id
		join course as c
		on l.course_id = c.course_id) as t
where t.course_name = 'Web Programming'
and t.first_name ilike 'Mario' and t.last_name ilike 'Stojcevski'
and t.finished_course is null;

-- Assigning a given course in a given path (The course and the path are already created)					#4
insert into belongs_to
(course_id, path_id)
values(
	(select c.course_id from course as c where c.course_name ilike 'Web Programming'), 
	(select cp.path_id from course_path as cp where cp.path_name ilike 'Back-End Web Developer')
);