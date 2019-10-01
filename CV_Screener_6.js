// user information
const data = [
      {
            name: 'Sujitkumar Borse',
            age: 26,
            city: 'Pune',
            language: 'Javascript',
            framework: 'Angular',
            image: 'https://randomuser.me/api/portraits/men/75.jpg'
      },

      {
            name: 'Krishna Gajre',
            age: 26,
            city: 'Latur',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/men/55.jpg'
      },

      {
            name: 'Pallavi Patil',
            age: 24,
            city: 'Jalgaon',
            language: 'Pythom',
            framework: 'Flask',
            image: 'https://randomuser.me/api/portraits/women/75.jpg'
      },

      {
            name: 'Shekar Karle',
            age: 25,
            city: 'Solapur',
            language: 'PHP',
            framework: 'Laravel',
            image: 'https://randomuser.me/api/portraits/men/77.jpg'
      },

      {
            name: 'Rajendra Jaware',
            age: 26,
            city: 'Buldhana',
            language: '.Net',
            framework: '.Net Framework',
            image: 'https://randomuser.me/api/portraits/men/45.jpg'
      },

      {
            name: 'Komal Patil',
            age: 26,
            city: 'Satara',
            language: 'Pythom',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/women/77.jpg'
      }
];

// cv Iterator

function cvIterator(profile) {
      let nextIndex = 0;
      return {
            next: function () {
                  return nextIndex < profile.length ?
                        { value: profile[nextIndex++], done: false } :
                        { done: true }
            }
      }
}

const candidates = cvIterator(data);
nextCV();

// button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {

      const currentCandidate = candidates.next().value;
      let image = document.getElementById('image');
      let profile = document.getElementById('profile');

      if (currentCandidate != undefined) {
      image.innerHTML = `<img width="128px" height="128px" src='${currentCandidate.image}'>`;
      profile.innerHTML = `<ul class="list-group">
      <li class="list-group-item">Name : ${currentCandidate.name}</li>
      <li class="list-group-item">Age : ${currentCandidate.age} year old</li>
      <li class="list-group-item">Lives in : ${currentCandidate.city}</li>
      <li class="list-group-item">Primarily works on  : ${currentCandidate.language}</li>
      <li class="list-group-item">Framework : ${currentCandidate.framework}</li>
    </ul>`
      } else {
            alert('End of Applicatios');
            window.location.reload();
      }
}