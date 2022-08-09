USE employees;

INSERT INTO department (name)
VALUES ("Security"), ("Executives"), ("Engineering"), ("Hospitality"), ("Leadership");

INSERT INTO role (title, salary, department_id)
VALUE ("Head of Security", 25000.00, 2), ("Scientist", 600000.00, 3), ("Engineer", 600000.00, 4), ("Assistant", 200000.00, 1), ("CEO", 800000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Matt", "Taylor", 1, 3), ("Nancy", "Wright", 1, 1), ("Mac", "Thompson", 3, 2), ("Deb", "Toler", 5, 2), ("Tom", "Hanks", 5, 2);