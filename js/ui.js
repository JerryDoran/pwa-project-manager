const projects = document.querySelector('.project-details');

// Initialize side-nav
const sideNav = document.querySelector('.side-menu');
M.Sidenav.init(sideNav, { edge: 'right' });

const sideFormAdd = document.querySelector('.side-form-add');
M.Sidenav.init(sideFormAdd, {});

const sideFormEdit = document.querySelector('.side-form-edit');
M.Sidenav.init(sideFormEdit, {});

const items = document.querySelectorAll('.collapsible');
M.Collapsible.init(items);

// Render project data
const renderProject = (data, id) => {
  const html = `
    <li class="project-item" data-id="${id}">
      <div class="project-title collapsible-header">
        <img src="/img/project.png" alt="project thumbnail" />
        ${data.title}
      </div>
      <div class="collapsible-body white">
        <div class="project-person"> ${data.name}</div>
        <div class="project-description">
        ${data.scope}
        </div>
        <div class="project-date">
          <label class="grey-text text-darken-1">Due:</label>
          ${data.due}
        </div>
        <div class="project-status">
          <label class="grey-text text-darken-1">Status:</label>
          <p class="status"> ${data.status}</p>
        </div>
        <div class="project-edit sidenav-trigger" data-target="side-form-edit">
          <div class="material-icons" data-id="${id}">edit</div>
        </div>
        <div class="project-delete">
          <div class="material-icons" data-id="${id}">delete</div>
        </div>
      </div>
    </li>        
       
  `;

  projects.innerHTML += html;
};

// Remove project from DOM
const removeProject = id => {
  const project = document.querySelector(`.project-item[data-id=${id}]`);
  project.remove();
};