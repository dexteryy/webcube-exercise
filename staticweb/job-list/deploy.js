
import './deploy.scss';
import App from 'app/job-list';

const app = new App();

export default function run() {
  if (window.innerWidth && window.innerHeight
      && screen.availWidth && screen.availHeight) {
    app.mount(document.getElementById('jobList'));
  } else {
    setTimeout(run, 30);
  }
}

if (['complete', 'loaded', 'interactive'].includes(document.readyState)
    && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
