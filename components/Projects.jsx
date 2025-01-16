import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing my skills, projects, and experience, built with React and Tailwind CSS.',
      image: './images.png', // Same image used for all projects
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'An online shopping platform with features like product search, cart management, and secure checkout.',
      image: './image.png', // Same image used for all projects
      link: '#'
    },
    {
      title: 'Task Manager App',
      description: 'A productivity tool for organizing and prioritizing tasks, featuring a sleek and intuitive UI.',
      image: './image.png', // Same image used for all projects
      link: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[150px] p-6 bg-black">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="max-w-sm bg-gray-900 border border-gray-700 rounded-lg shadow-lg"
        >
          <a href={project.link}>
            <img
              className="rounded-t-lg object-cover h-48 w-full"
              src={project.image}
              alt={project.title}
            />
          </a>
          <div className="p-5">
            <a href={project.link}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">{project.description}</p>
            <a
              href={project.link}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300"
            >
              View Project
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
