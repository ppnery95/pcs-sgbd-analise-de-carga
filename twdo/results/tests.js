import http from 'k6/http';

export default function () {
  http.get('http://localhost/tasklists');

  http.post('http://localhost/tasklists', { title: 'title-test' });
}