function sayHello(){
	alert("yep, still working. You must have messed something else up - idiot.");
}

var friend = {
	firstName		: "Andrea",
	lastName		: "Minich",
	age				: 30,
};

document.getElementById("demo").innerHTML= friend.firstName + " "+ friend.lastName+ " "+friend.age;
document.getElementById("name").innerHTML = friend.firstName;

var netflix = {
	sname 				: "House of Cards", 
	year				: 1999,
	genre				: "Drama",
	episode				: 1,
	episodeDescription	: "We meet Frank Underwood"
}

var netflixShow = {
	showName 			: "",
	epNo				: 1,
	epDesc 				: "",

	//methods
	status 				:function(){
		alert("you are about to watch" + this.showName + " "+ this.epNo);
	}
}

var batman = Object.create(netflixShow);
	batman.showName = "Batman";
	batman.epNo = 1;
	batman.epDesc = "We meet batman";
	

document.getElementById("show-name").innerHTML = netflix.sname;
document.getElementById("episode-num").innerHTML = netflix.episode;
document.getElementById("episode-description").innerHTML = netflix.episodeDescription;

document.getElementById("show-name-two").innerHTML = batman.showName;
document.getElementById("episode-num-two").innerHTML = batman.epNo;
document.getElementById("episode-description-two").innerHTML = batman.epDesc;



//Testing a submit function
// function submitNew() {
// 	var  name = document.getElementById("newname").value;
// 	var 
// 	var name = Object.create(netflixShow);
// 		name.showName = name;
// 		document.getElementById("newepisodeno").value.showName = document.getElementById("newepisodeno").value
// }


/*More complex object literals*/

var amazonPrimeShow = {
	showId			: 1,
	name 			: "Paul's happy fun time",
	description 	: "this is the best show ever",
	seasonInfo		: {	
		seasonNumber: 1,
		//methods
		printDetails 	: function(){
			document.write(description)
			},
		episodes 		: [
			{episodeNumber: 1, episodeName: "Happy Stuff"},
			{episodeNumber: 2, episodeName: "The real happy story"},
			{episodeNumber: 3, episodeName: "Even Happier"}
			]
		},
};

for (info in amazonPrimeShow.seasonInfo.episodes){
	document.write((parseInt(info) + 1) + " - " + amazonPrimeShow.seasonInfo.episodes[info].episodeName + "<br>");
};



/*jQuery basics*/

