/**
 * @license
 * Copyright Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Promise = require('promise');

/**
 * Google Classroom Snippets
 */
class ClassroomSnippets {
  /**
   * Creates Classroom Snippets with a Google API Services
   * @param {GoogleAuth[]} service Authenticated Classroom Services
   */
  constructor([classroomService]) {
    this.classroomService = classroomService;
  }

/**
 * Creates a 10th Grade Biology course.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function createCourse(auth) {
  const classroom = google.classroom({version: 'v1', auth});
  // [START classroom_create_course]
  var options = {
      auth: auth,
      resource: {
          name: '10th Grade Biology',
          section: 'Period 2',
          descriptionHeading: 'Welcome to 10th Grade Biology',
          description: 'We\'ll be learning about about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!',
          room: '301',
          ownerId: 'me',
          courseState: 'PROVISIONED',
  }};
  classroom.courses.create(options, (err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    console.log('Course created: %s, %s', res.data.name, res.data.id);
  });
  // [END classroom_create_course]
}

/**
 * Retrieves a classroom course by its id.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function getCourse(auth) {
  const classroom = google.classroom({version: 'v1', auth});
  // [START classroom_get_course]
  var courseId = {
        id: "123456",
    }
  classroom.courses.get(courseId, (err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    console.log('Course %s found', res.data.name);
  });
  // [END classroom_get_course]
}

/**
 * Updates the section and room of Google Classroom.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function updateCourse(auth) {
  const classroom = google.classroom({version: 'v1', auth});
  // [START classroom_update_course]
  var courseId = {
        id: "123456",
    }
  classroom.courses.get(courseId, (err, res) => {
    if (err) return console.error('The API returned an error: ' + err);
    res.data.section = 'Period 3';
    res.data.room = '302';
    var options = {
      resource: res.data,
      id: "123456",
    }
    classroom.courses.update(options, (err, res) => {
      if (err) return console.error('The API returned an error: ' + err);
      console.log('Course %s updated', res.data.name);
    })
  });
  // [END classroom_update_course]
}

module.exports = ClassroomSnippets;