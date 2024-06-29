// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

const studentsList = [

    // Добавьте сюда объекты студентов
]

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

function getStudentItem(studentObj) {

}

// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

function renderStudentsTable(studentsArray) {

}

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.


// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
class Student {
  constructor(name, middleName, surname, dateOfBirth, yearOfEnroll, endYear, faculty) {
    this.name = name
    this.middleName = middleName
    this.surname = surname
    this.dateOfBirth = dateOfBirth
    this.yearOfEnroll = yearOfEnroll
    this.endYear = endYear
    this.faculty = faculty
  }


  get fio() {
    return this.surname + ' ' + this.name + ' ' + this.middleName
  }

  getStudyPeriod() {
    const currentTime = new Date();
    let result = currentTime.getFullYear() - this.yearOfEnroll;
    if (result > 4) return ('(Закончил обучение)');
    if (this.yearOfEnroll > this.endYear) return ('Ошибка в воде года')
    else {
      return '(' + result + ' ' + 'курс' + ')'
    }
  }

  getBirthDateString() {
    const yyyy = this.dateOfBirth.getFullYear();
    let mm = this.dateOfBirth.getMonth() + 1;
    let dd = this.dateOfBirth.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '.' + mm + '.' + yyyy;
  }

  getAge () {
    let now = new Date(); //Текущая дата
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущая дата без времени
    let dob = this.dateOfBirth; //Дата рождения
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age; //Возраст

    //Возраст = текущий год - год рождения
    age = today.getFullYear() - dob.getFullYear();
    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
    if (today < dobnow) {
      age = age-1;
  }

    return (`${age} лет`);
  }

}

const students = [
  new Student('Антон','Сергеевич','Иванов', new Date(2003, 0, 31), 2021, 2025, 'Химический'),
  new Student('Александр','Игоревич','Зюзин', new Date(2001, 6, 21), 2019, 2023, 'Физико-математический'),
  new Student('Геннадий','Петрович','Жижиков', new Date(2004, 7, 4), 2022, 2025, 'Филологический'),
  new Student('Татьяна','Григорьевна','Кукушкина', new Date(1999, 8, 17), 2017, 2021, 'Моды и дизайна'),
  new Student('Татьяна','Николаевна','Булкина', new Date(2000, 0, 31), 2018, 2023, 'Агрофизический')
]

const filterForm = document.getElementById('findStudent'),
      nameVal = document.getElementById('findFio').value,
      facultyVal = document.getElementById('findFaculty').value;

const $studentsList = document.getElementById('students-list'),
$studentsListTHAll = document.querySelectorAll('.studentsTable th')

let column = 'fio',
columnDir = true


function newStudentTR(student) {
  const $studentTR = document.createElement('tr')
  const $fioTD = document.createElement('td')
  const $dateOfBirthTD = document.createElement('td')
  const $yearOfEnrollTD = document.createElement('td')
  const $facultyTD = document.createElement('td')
  let currentYear = new Date().getFullYear()
  $fioTD.textContent = student.fio;
  $dateOfBirthTD.textContent = student.getBirthDateString() + ' ' + '(' + student.getAge() +')';
  $yearOfEnrollTD.textContent = student.yearOfEnroll + '-' + student.endYear + ' ' + student.getStudyPeriod();
  $facultyTD.textContent = student.faculty

  $studentTR.append($fioTD)
  $studentTR.append($dateOfBirthTD)
  $studentTR.append($yearOfEnrollTD)
  $studentTR.append($facultyTD)
  return $studentTR;
}

// function filter(arr, prop, value) {

//       let result = [],
//           copy = [...arr];
//       for (const item of copy) {
//         if (String(item[prop]).includes(value) == true)
//          result.push(item)
//       }
//       return result
//     }



function getSortStudents(prop, dir) {
  const studentsCopy = [...students]
  return studentsCopy.sort(function(studentA, studentB) {
    if ((!dir == false ? studentA[prop] < studentB[prop] : studentA[prop] > studentB[prop]))
  return -1;
  })
}

//отрисовка
function render() {
  let studentsCopy = [...students]
  studentsCopy = getSortStudents(column, columnDir)
  $studentsList.innerHTML = ''


//фильтрация

if (document.getElementById('findFio').value !== "") {
    studentsCopy = studentsCopy.filter(function(oneStudent) {
      if (oneStudent.fio.includes(document.getElementById('findFio').value))
 return true
    })
  }

  if (document.getElementById('findFaculty').value !== "") {
    studentsCopy = studentsCopy.filter(function(oneStudent) {
      if (oneStudent.faculty.includes(document.getElementById('findFaculty').value))
 return true
    })
  }

  if (document.getElementById('findStart').value !== "") {
    studentsCopy = studentsCopy.filter(function(oneStudent) {
      if (String(oneStudent.yearOfEnroll).includes(document.getElementById('findStart').value))
 return true
    })
  }

  if (document.getElementById('findEnd').value !== "") {
    studentsCopy = studentsCopy.filter(function(oneStudent) {
      if (String(oneStudent.endYear).includes(document.getElementById('findEnd').value))
 return true
    })
  }

  // if (String(item[prop]).includes(value) == true)




  for (const student of studentsCopy) {
    $studentsList.append(newStudentTR(student))
  }





}


// сортировка по клику
$studentsListTHAll.forEach(element => {
  element.addEventListener('click', function() {
  column = this.dataset.column;
  columnDir = !columnDir
  render()
  })
})

// кнопка добавить студента
document.getElementById('add-student').addEventListener('submit', function(event) {
  event.preventDefault()
  if (Number(document.getElementById('endYear').value) < Number(document.getElementById('yearOfEnroll').value)) {
    document.getElementById('endYear').value = '',
    document.getElementById('yearOfEnroll').value = ''
    document.getElementById('yearOfEnroll').classList.toggle('is-invalid')
    document.getElementById('endYear').classList.toggle('is-invalid')
    document.getElementById('button').setAttribute('disabled', '');
  }

  else {
    document.getElementById('yearOfEnroll').classList.remove('is-invalid'),
    document.getElementById('endYear').classList.remove('is-invalid'),
    // document.getElementById('tip').remove(),
    students.push(new Student(
      document.getElementById('name').value.trim(),
      document.getElementById('middleName').value.trim(),
      document.getElementById('surname').value.trim(),
      new Date(document.getElementById('dateOfBirth').value),
      Number(document.getElementById('yearOfEnroll').value),
      Number(document.getElementById('endYear').value),
      document.getElementById('faculty').value.trim(),
    ))
  }

render()

})












  render()


  filterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    render();

  })

  document.getElementById('findFio').addEventListener('input', function(){
    render();

})

document.getElementById('findFaculty').addEventListener('input', function(){
  render();

})

document.getElementById('findStart').addEventListener('input', function(){
  render();

})

document.getElementById('findEnd').addEventListener('input', function(){
  render();

})

