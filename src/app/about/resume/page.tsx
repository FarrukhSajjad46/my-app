"use client"
import React from 'react'
import Image from 'next/image'
import ResumeWindow from '@/components/ResumeWindow';


// Additional education degrees
const educationDegrees = [
  {
    logo: 'cambridge-logo.png',
    duration: '2014 - 2015',
    degree: 'Bachelor of Science in Computer Science',
    university: 'Cambridge University',
    description: 'Navigating the currents of knowledge, Where academic pursuits meet flowing wisdom.'
  },
  {
    logo: 'cambridge-logo.png',
    duration: '2014 - 2015',
    degree: 'Computer Processing Systems/Computer Software',
    university: 'Cambridge University',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
  },
  {
    logo: 'cambridge-logo.png',
    duration: '2014 - 2015',
    degree: 'Diploma in Computer',
    university: 'Cambridge University',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
  },
  {
    logo: 'cambridge-logo.png',
    duration: '2014 - 2015',
    degree: 'Art & Creative Director',
    university: 'Cambridge University',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
  }
];
const educationContent: string = educationDegrees.map((degree: any) => `
<section class=" font-calibri body-font">
  <div class="container px-5 py-12 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" class="object-cover object-center h-full w-full" src="/pics/univers.jpg">
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-5">
        <img src="/good.png" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;" class="w-12 h-12" alt="Image Description" />
        </div>
        <div class="flex-grow">
          <h2 class="text-lg title-font font-medium mb-3">${degree.degree}</h2>
          <p class="leading-relaxed text-base">${degree.university}</p>
          <p class="leading-relaxed text-base">${degree.duration}</p>
          <p class="leading-relaxed text-base">${degree.description}</p>
        </div>
      </div>
    </div>
  </div>
  </section>
`).join('');


// Define experience data
const experienceData = [
  // Additional experience entries
  {
    title: 'Software Developer',
    company: 'Cambridge University',
    duration: '2014 - 2015',
    description: 'Coding dreams into reality with scholarly might, Where innovation thrives in academic light.'
  },
  {
    title: 'Web Designer',
    company: 'Cambridge University',
    duration: '2014 - 2015',
    description: 'Crafting digital landscapes with artistic finesse, Where design prowess meets academic address.'
  },
  {
    title: 'Web Marketing',
    company: 'Cambridge University',
    duration: '2014 - 2015',
    description: 'Navigating the digital realm with strategic precision, Where promotion meets academic vision.'
  },
  {
    title: 'Art & Creative Director',
    company: 'Side Tech',
    duration: '2014 - 2015',
    description: 'Guiding artistic endeavors with innovative flair, Where creativity flourishes in the tech affair.'
  },
  {
    title: 'Wordpress Developer',
    company: 'Cambridge University',
    duration: '2014 - 2015',
    description: 'Weaving code into customizable wonders, Where digital landscapes meet academic ventures.'
  },
  {
    title: 'UI/UX Designer',
    company: 'Cambridge University',
    duration: '2017 - 2018',
    description: 'Crafting user experiences with intuitive finesse, Where design thinking meets academic address.'
  }
];
const experienceContent = experienceData.map(experience => `
<section class="font-calibri body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img src="/academic.png" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;" class="w-6 h-6" alt="Image Description" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-lg title-font font-medium mb-2">${experience.title}</h2>
        <p class="leading-relaxed text-base">${experience.company} | ${experience.duration}</p>
        <p class="leading-relaxed text-base">${experience.description}</p>
      </div>
    </div>
  </div>
</section>
`).join('');


// Define skills data
const skillsData = [
  {
    title: 'JavaScript',
    progress: 80,
    description: '# A powerful JavaScript library for building user interfaces with high scalability and efficiency.'
  },
  {
    title: 'React.js',
    progress: 90,
    description: 'Harness the capabilities of React.js, a versatile JavaScript library for building interactive user interfaces. Utilize your expertise to create seamless, engaging web experiences that captivate users.'
  },
  {
    title: 'HTML',
    progress: 85,
    description: 'Become proficient in HTML, the foundation of web development, enabling you to structure and design captivating web pages with ease.'
  },
  {
    title: 'CSS',
    progress: 75,
    description: 'Master CSS, a crucial component of web design, to style and enhance the presentation of web pages, ensuring visually appealing and responsive designs for optimal user experience.'
  },
  {
    title: 'Node.js',
    progress: 70,
    description: 'Embrace Node.js, a powerful runtime environment, to build scalable and efficient server-side applications. With your progress at 70%, delve deeper into Node.js to leverage its event-driven architecture and vast ecosystem for robust backend development.'
  }
];
const skillsContent = skillsData.map((skill, index) => `
<section class="font-calibri body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">${index + 1}</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font mb-1 text-xl">${skill.title}</h2>
          <p class="leading-relaxed">Progress: ${skill.progress}%</p>
          <p class="leading-relaxed">${skill.description}</p>
        </div>
      </div>
    </div>
  </div>
  </section>
`).join('');


const page = () => {
  return (
    <div>
    <section className=" font-calibri body-font">
  <div className="container justify-around px-5 py-24 mx-auto">
    <div className="flex -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <Image src="/microsoft.png" alt="Image" className=" inline-block rounded-b-full rounded-t-full" width={120} height={100} />
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <Image src="/android.jpg" alt="Image" className=" inline-block rounded-b-full rounded-t-full" width={120} height={100} />
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <Image src="/nextreact.jpg" alt="Image" className=" inline-block rounded-b-full rounded-t-full" width={120} height={100} />
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <Image src="/adobe.jpg" alt="Image" className=" inline-block rounded-b-full rounded-t-full" width={120} height={100} />
      </div>
    </div>

    <ResumeWindow
        experienceContent={experienceContent}
        skillsContent={skillsContent}
        educationContent={educationContent}
      />
  </div>
</section>
</div>
  )
}

export default page