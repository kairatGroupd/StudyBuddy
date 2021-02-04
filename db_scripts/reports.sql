
--Show teachers by salary
create view teachers_by_salary as
select teacher_id, first_name, last_name, email_address, teacher_salary as salary
from teacher
order by salary asc;

--Show courses by pass rating of students
create view course_pass_rating as
select t.course_id, c.course_name, 
count(c.course_name)::decimal/(select count(*) from student)::decimal as passed
from takes as t join course as c on t.course_id = c.course_id
group by t.course_id, c.course_name
order by t.course_id;

--Show popular courses
create view popular_courses as
select t.course_id, c.course_name, count(c.course_name) as students
from takes as t join course as c on t.course_id = c.course_id
group by t.course_id, c.course_name
order by students desc;

--Show popular course paths
create view popular_course_paths as
select p.path_id, p.path_name, b.course_id, c.course_name
from course_path as p join belongs_to as b on p.path_id = b.path_id
join course as c on b.course_id = c.course_id;
