import { faker } from "@faker-js/faker";

function getRamdomDateInBetween(start, end) {
  start = Date.parse(start);
  end = Date.parse(end);

  let new_date = new Date(
    Math.floor(Math.random() * (end - start + 1) + start)
  );
  return new_date.toISOString().split("T")[0];
}

const departments = [
  "Big Data",
  "Java",
  "QA",
  "DevOps",
  "Frontend",
  "Cloud Support",
  "Backend",
  "Full Stack",
  "Dot Net",
  "Bench",
  "Administration",
  "Human Resources",
];
const designations = [
  "Project Trainee",
  "Software Engineer",
  "Senior Software Engineer",
  "Technical Lead",
  "Associate Technical Architect",
  "Technical Architect",
  "Quality Engineer",
  "Project Manager",
  "Administrator",
];

const clients = [
  "NBCU",
  "Experian",
  "Google",
  "Subway",
  "Door Dash",
  "Twitch",
  "Databricks",
  "Facebook",
  "Tavant",
];

function getRandomUsers(num_of_rec) {
  const USERS = [];
  let pt_counter = 1;
  let emp_counter = 1;
  let ct_counter = 1;

  const genders = ["male", "female"];

  const w_locs = ["Banglore", "Hyderabad", "Noida", "USA"];
  const job_types = [
    "permanent",
    "permanent",
    "permanent",
    "permanent",
    "permanent",
    "permanent",
    "contractor",
    "project trainee",
  ];
  for (let i = 0; i < num_of_rec; i++) {
    const gender = faker.helpers.arrayElement(genders);
    const first_name = faker.name.firstName(gender);
    const last_name = faker.name.lastName(gender);
    const job_type = faker.helpers.arrayElement(job_types);
    let user_id = "";

    let designation = faker.helpers.arrayElement(designations);

    if (job_type == "project trainee") {
      user_id = "PT_" + pt_counter.toString();
      designation = "Project Trainee";
      pt_counter += 1;
    } else if (job_type == "contractor") {
      user_id = "CT_" + ct_counter.toString();
      ct_counter += 1;
    } else {
      user_id = "EMP_" + emp_counter.toString();
      emp_counter += 1;
    }

    let role = "user";
    if (i % 100 === 0) {
      role = "manager";
      designation = "Project Manager";
    } else if (i % 10 === 0) {
      role = "admin";
      designation = "Administrator";
    } else {
      role = "user";
    }
    const new_rec = {
      user_id: user_id,
      role: role,
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      per_email: (first_name + "." + last_name + "@gmail.com").toLowerCase(),
      prof_email: (first_name + "." + last_name + "@tavant.com").toLowerCase(),
      mobile: faker.phone.number("+1 ### ### ####"),
      image: faker.image.avatar(),
      date_of_birth: getRamdomDateInBetween("1975-01-01", "2001-01-01"),
      date_of_join: getRamdomDateInBetween("2001-01-01", "2022-06-01"),
      department: faker.helpers.arrayElement(departments),
      designation: designation,
      work_loc: faker.helpers.arrayElement(w_locs),
      about: faker.lorem.paragraph(),
      job_type: job_type,
      address: {
        door_no: faker.address.buildingNumber(),
        street: faker.address.street(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        country: faker.address.country(),
        zip: faker.address.zipCode("#####"),
      },
    };

    USERS.push(new_rec);
  }
  return USERS;
}

function getRandomProjects(num_of_projects) {
  let projects = [];
  for (let i = 0; i < num_of_projects; i++) {
    const client = faker.helpers.arrayElement(clients);
    let dept = faker.helpers.arrayElement(
      departments.slice(0, departments.length - 3)
    );
    let proj_name = client + " " + dept + " " + "Proj";
    let start_date = getRamdomDateInBetween("2001-01-01", "2022-06-01");

    if (client == "Tavant") {
      dept = "Bench";
      proj_name = client + " " + dept;
    }

    let desc =
      "A " +
      dept +
      " Project for the Client " +
      client +
      " Started on " +
      start_date +
      " .";

    let proj = {
      name: proj_name,
      client: client,
      dept: dept,
      start_date: start_date,
      desc: desc,
    };

    projects.push(proj);
  }
  return projects;
}

export { getRandomUsers, getRandomProjects };
