
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Usama",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Usama",
	description: "Working as a full stack developer and machine leanrning engineer",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from National University of Sciences and Technology (NUST) in 2022 with a degree in Mechatronics Engineering. I kick started my professional career as a Machine Learning Engineer working in 99Technologies.ai for a US based company — SJComputers.",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I like to help community by answering at stackoverflow and have earned some reputation. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech.",
		"When I am not programming, I focus on learning about new technologies using online lectures from reputable universities like MIT, Stadford, and NYU"
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Machine Learning Engineer",
			description: "I train custom models using tensorflow and pytorch.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive dynamic websites using Reactjs and django.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "C.C. Bot",
			description: "Computer Configuration Bot which configures the range of computers which reduced the cocmputation cost as well as increased the efficency.",
			icons: null,
		},
		{
			title: "BTO System",
			description: "An erp system which enables our client to manage the inventory on different market places. and allow them to view business analytic reports",
			icons: null,
		},
		{
			title: "Speaker Separation",
			description: "Trained a Machine Learning model to separate the different number of speakers given the audio file.",
			icons: null,
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. and feel free to reach out directly by email at usamaaleem2000@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:usamaaleem2000@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "mailto:usamaaleem2000@gmail.com",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Usama Aleem | Mechatronics Engineer | ML Engineer | Fullstack developer",
	description: "I create dynamic websites and train different machine learning models. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile,
}

export const links = {
	image: profile.src,
	title: "@usamaaleem",
	description: "Mechatronics Engineer | ML Engineer | Full stack Web-Developer",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "My Kaggle",
			link: "https://www.kaggle.com/muhammadusamaaleem",
		},
		{
			title: "My GitHub",
			link: "https://github.com/muhammad-usama-aleem",
		},
		{
			title: "My LinkedIn",
			link: "https://linkedin.com/in/muhammad-usama-aleem-ba126b17b",
		},
	]
}