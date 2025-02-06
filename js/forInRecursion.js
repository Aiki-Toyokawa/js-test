const student = {
  name: 'Richard',
  details: {
    age: 22,
    major: 'literature',
    hobbies: ['reading', 'movies']
  }
};

function printKeyValue(obj, indent = ''){
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      console.log(indent + key + ':');
      printKeyValue(obj[key], indent + '  ')
    } else {
      console.log(indent + key + ':' + obj[key]);
    }
  }
}

printKeyValue(student);