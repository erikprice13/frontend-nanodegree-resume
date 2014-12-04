var bio = {
	"myName" : "Erik Price",
	"myRole" : "Web Designer",
	"contacts" : {
		"mobile" : "253-376-6876",
		"email" : "erikprice13@gmail.com",
		"github" : "github.com/erikprice13",
		"location" : "Gig Harbor, WA"
	},
	"welcomeMessage" : "Welcome to my resume page.",
	"skills" : ["HTML", "CSS", "Javascript", "Java", "C++"],
	"myPicture" : "images/me.png"
};

var work = {
	"jobs" : {
		"Miracle Ranch" : {
			"currentPosition" : "Server",
			"employer" : "CHRISTA Camps",
			"yearsWorked" : "3",
			"location" : "Port Orchard",
			"dates" : "Aug 2011 to Present",
			"myDescription" : "Deep cleaning, serving food, constant public contact, leadership, time management, management skills."
		},
		"Great Clips" : {
			"currentPosition" : "Receptionist",
			"employer" : "Great Clips",
			"yearsWorked" : "1",
			"location" : "Port Orchard",
			"dates" : "Sept 2014 to Present",
			"myDescription" : "Sweeping, counting and running money, manning the front desk, talking with customers, memorizing hundreds of products and what they do, running all background jobs and chores to run a hair salon."
		}
	}
};

var education = {
	"nameOfSchool" : "Tacoma Community College",
	"yearsAttended" : "3",
	"cityOfSchool" : "Tacoma"
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

var formattedName = HTMLheaderName.replace("%data%", bio.myName);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.myRole);
$("#header").append(formattedRole);
var formattedPic = HTMLbioPic.replace("%data%", bio.myPicture);
$("#header").append(formattedPic);

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
displayWork();
projects.display();
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
  	logClicks(x, y);
});
$("#mapDiv").append(googleMap);