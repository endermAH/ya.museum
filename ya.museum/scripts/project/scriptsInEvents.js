import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics, logEvent, isSupported } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
	apiKey: "AIzaSyBYTVVsTsXnej03p2OsVqpybkYz4mKzSKY",
	authDomain: "yagodnoe-digital-museum.firebaseapp.com",
	projectId: "yagodnoe-digital-museum",
	storageBucket: "yagodnoe-digital-museum.appspot.com",
	messagingSenderId: "1010874666524",
	appId: "1:1010874666524:web:44e5e43c9300d9c170d9d9",
	measurementId: "G-4B87NRZF3N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function LogBuildingCheck(building_id) {
	logEvent(analytics, "select_content", {
	  content_type: "building",
	  content_id: building_id
	})
}

function LogSelectContent(content_type, content_id) {
	logEvent(analytics, "select_content", {
	  content_type: content_type,
	  content_id: content_id
	})
}

function LogMapActivity(activity_type) {
	logEvent(analytics, "select_content", {
	  content_type: "map_activity",
	  content_id: activity_type
	})
}

function LogHouseCheck(house_name) {
	logEvent(analytics, "show_house", {
	  house_name: house_name
	})
}


const scriptsInEvents = {

	async Es_main_Event15_Act2(runtime, localVars)
	{
		LogSelectContent("show", "book")
	},

	async Es_main_Event17_Act2(runtime, localVars)
	{
		LogSelectContent("show", "gallery")
	},

	async Es_main_Event19_Act2(runtime, localVars)
	{
		LogSelectContent("show", "video_big")
	},

	async Es_main_Event21_Act2(runtime, localVars)
	{
		LogSelectContent("show", "age_story")
	},

	async Es_main_Event23_Act2(runtime, localVars)
	{
		LogSelectContent("show", "video")
	},

	async Es_main_Event27_Act1(runtime, localVars)
	{
		LogMapActivity("sound")
	},

	async Es_main_Event31_Act2(runtime, localVars)
	{
		LogMapActivity("story")
	},

	async Es_main_Event44_Act9(runtime, localVars)
	{
		LogBuildingCheck(runtime.callFunction("get_haus_field", localVars.house_id, "name"))
		LogHouseCheck(runtime.callFunction("get_haus_field", localVars.house_id, "name"))
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

