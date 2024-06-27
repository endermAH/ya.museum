
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";
  // Import the functions you need from the SDKs you need

  
  
// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-PFSSDJ8R');

var h_images = `Hostel.jpg
WC.jpg
b1.jpg
b10.jpg
b11.jpg
b12.jpg
b2.jpg
b3.jpg
b4.jpg
b5.jpg
b6.jpg
b7.jpg
b8.jpg
b9.jpg
badminton.jpg
baidarki.jpg
banya.jpg
beach_volley.jpg
besedka_kostrovoe.jpg
besedka_scena.jpg
besedka_stolovaya.jpg
besedka_za_scenoy.jpg
boat.jpg
cafeteria.jpg
club.jpg
coach_house.jpg
doctor.jpg
dom_HO.jpg
dom_directora.jpg
dom_zam_directora.jpg
eco1.jpg
eco10.jpg
eco11.jpg
eco12.jpg
eco13.jpg
eco14.jpg
eco15.jpg
eco16.jpg
eco17.jpg
eco18.jpg
eco19.jpg
eco2.jpg
eco3.jpg
eco4.jpg
eco5.jpg
eco6.jpg
eco7.jpg
eco8.jpg
eco9.jpg
fireplace.jpg
football_field.jpg
garage.jpg
greenHouse.jpg
gym.jpg
korpusa.jpg
lednik.jpg
manufactory.jpg
mashoshin_dacha.jpg
meridian.jpg
pirs.jpg
rectorskiy.jpg
sclad.jpg
security.jpg
shifer.jpg
shower.jpg
stage.jpg
stolovaya_old.jpg
svetlyachok.jpg
tower.jpg
train.jpg
umivalnik.jpg
velosclad.jpg
wodden_pomost.jpg`

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	// Async preload images from list
	
	var building_images = h_images.split("\n")
	
	for (const image of building_images) {
		const textFileUrl = await runtime.assets.getProjectFileUrl(`buildings_images/${image}`);
		fetch(textFileUrl);
		console.log(`Fetching ${image}`)
  	}
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
