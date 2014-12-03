var bio = {
	"myName" : "Erik Price",
	"myRole" : "Web Designer",
	"contacts" : {
		"mobile" : "253-376-6876",
		"email" : "erikprice13@gmail.com",
		"github" : "github.com/erikprice13",
		"location" : "Gig Harbor"
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
			"city" : "Port Orchard",
			"dates" : "Aug 2011 to Present",
			"myDescription" : "Deep cleaning, serving food, constant public contact, leadership, time management, management skills."
		},
		"Great Clips" : {
			"currentPosition" : "Receptionist",
			"employer" : "Great Clips",
			"yearsWorked" : "1",
			"city" : "Port Orchard",
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
	"githubContribution" : "Placeholder",
	"websiteMockup" : "Placeholder",
	"thisResume" : "Placeholder"
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