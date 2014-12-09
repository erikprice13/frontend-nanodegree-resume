var bio = {
	"myName" : "Erik Price",
	"myRole" : "Web Designer",
	"contacts" : {
		"mobile" : "253-376-6876",
		"email" : "erikprice13@gmail.com",
		"github" : "github.com/erikprice13",
		"location" : "Gig Harbor, WA"
	},
	"location" : "Gig Harbor, WA",
	"welcomeMessage" : "Welcome to my resume page.",
	"skills" : ["HTML", "CSS", "Javascript", "Java", "C++", "Leadership"],
	"myPicture" : "images/me.png"
};

var work = {
	"jobs" : {
		"Miracle Ranch" : {
			"currentPosition" : "Server",
			"employer" : "CHRISTA Camps",
			"yearsWorked" : "3",
			"location" : "Port Orchard, WA",
			"dates" : "Aug 2011 to Present",
			"myDescription" : "Deep cleaning, serving food, constant public contact, leadership, time management, management skills."
		},
		"Great Clips" : {
			"currentPosition" : "Receptionist",
			"employer" : "Great Clips",
			"yearsWorked" : "1",
			"location" : "Port Orchard, WA",
			"dates" : "Sept 2014 to Present",
			"myDescription" : "Sweeping, counting and running money, manning the front desk, talking with customers, memorizing hundreds of products and what they do, running all background jobs and chores to run a hair salon."
		}
	}
};

var education = {
	"schools" : {
		"PenHigh" : {
			"nameOfSchool" : "Peninsula High School",
			"datesAttended" : "September 2008 - June 2011",
			"location" : "Purdy, WA",
			"major" : "High School Diploma"
		},
		"TCC" : {
			"nameOfSchool" : "Tacoma Community College",
			"datesAttended" : "September 2011 - August 2014",
			"location" : "Tacoma, WA",
			"major" : "Associates Degree of Arts and Sciences with a Computer Science Specialization"
		},
		"udacity": {
			"nameOfSchool" : "Udacity.com",
			"datesAttended" : "Currently Attending",
			"location" : "",
			"major" : "Basic Certification in HTML, CSS and JavaScript"
		}
	}
};

var projects = {
	"projects" : {
		"githubContribution" : {
			"myTitle" : "Choose Your Own Adventure GitHub Contribution",
			"dates" : "Start Nov 2014, End Nov 2014",
			"myDescription" : "Forked a Choose your own advendture repository, made some changes with MarkDown, submitted and pull request and had it accepted along with showing my apptitude at merging and git commits and branches.",
			"projectImage" : "images/GitHubProject.png"
		},
		"websiteMockup" : {
			"myTitle" : "Website Copy and Design Control",
			"dates" : "Start: Nov 2014, End: Nov 2014",
			"myDescription" : "Was given a website simulated to be from a designer. Was able to recreate the exact website from that PDF in HTML and CSS.",
			"projectImage" : "images/WebsiteMockup.png"
		},
		"thisResume" : {
			"myTitle" : "JavaScript Resume",
			"dates" : "Start Nov 2014, End Dec 2014",
			"myDescription" : "Creating this very resume is also a project of mine. Using a premade HTML template I used javascript to create functions, loops, if statements, objects and other concepts to create this page.",
			"projectImage" : "images/Resume.png"
		}
	}
};

function formattedHeader() {
	var formattedName = HTMLheaderName.replace("%data%", bio.myName);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.myRole);
	$("#header").append(formattedRole);
	var formattedPic = HTMLbioPic.replace("%data%", bio.myPicture);
	$("#header").append(formattedPic);
}

formattedHeader();

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].currentPosition);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].myDescription);
		$(".work-entry:last").append(formattedDescription);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	}
}

function internationalName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedpTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].myTitle);
		$(".project-entry:last").append(formattedpTitle);
		var formattedpDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedpDates);
		var formattedpDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].myDescription);
		$(".project-entry:last").append(formattedpDescription);
		//var formattedpImage = HTMLprojectImage.replace("%data%", projects.projects[project].projectImage);
		//$(".project-entry:last").append(formattedpImage);
	}
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].nameOfSchool);
		$(".education-entry:last").append(formattedName);
		//var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].achievements);
		//$(".education-entry:last").append(formattedDegree);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
}

function letsConnect() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#letsConnect").append(formattedMobile);
	var formattedLocation = HTMLlocation.replace("%data%", bio.location);
	$("#letsConnect").append(formattedLocation);
	var formattedgitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#letsConnect").append(formattedgitHub);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#letsConnect").append(formattedEmail);
}

displayWork();
projects.display();
education.display();
letsConnect();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  	logClicks(x, y);
});
$("#mapDiv").append(googleMap);