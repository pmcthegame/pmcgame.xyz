/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		News Ticker
	--------------------*/
	$('.news-ticker').marquee({
	    duration: 12000,
	    //gap in pixels between the tickers
	    //gap: 200,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true
	});

})(jQuery);

//model section js

document.addEventListener("DOMContentLoaded", function () {
	const modalContent = {
	  "about-new-earth": "<h5>About New Earth</h5><p>In the year 2740 A.D., humanity faced its darkest hour as World War III unleashed unimaginable devastation across the globe. Nuclear weapons scorched the Earth, leaving the surface uninhabitable and plunging civilization into chaos. The remnants of humanity, sought refuge in the last bastion of hope: a massive bunker known as citadel, a complex deep beneath a colossal mountain at the North Pole.For 3,000 years, the survivors (now 1 Million) lived in isolation, their society built upon the remnants of forgotten technologies and forbidden war machines. Below the bunker, vast stockpiles of 2024-era military hardware—tanks, helicopters, guns—remained sealed away, relics of an age when war was the law of the land. These weapons were banned but kept as humanity’s final defense against extinction.Now, in the year 5728 A.D., Earth has transformed. Radiation levels have subsided, and strange, alien landscapes stretch as far as the eye can see. The land is habitable once more, but it is no longer the Earth humanity once knew—it’s New Earth.Faced with overpopulation and dwindling resources within the bunker, the government has issued a bold directive: it's time to reclaim the surface. So PMC ACT was issued. Private military corporations (PMCs) are granted licenses to explore, conquer, and colonize the new world. </p>",
	  "about-world-map": "<h5>About World Map</h5><p>New Earth is unlike anything humanity has ever seen before—a world born from the ashes of a nuclear apocalypse and shaped over 3,000 years. Every corner of this planet presents a unique challenge and opportunity for those brave enough to venture outside the safety of the bunker.150+ Unique Terrains,Our world is divided into sectors, each representing a distinct terrain and ecosystem. From towering mountains to desolate snow deserts, lush islands, and barren wastelands & more, every map offers players a new environment to explore, conquer, and develop, mine resources. Each terrain type has its own set of challenges, resources, and advantages, making strategy and location key to success.Mountains: Rugged and resource-rich, ideal for mining operations and defensive strongholds. Expanding the World At launch, New Earth will feature 10 large maps, each carefully crafted using the powerful Gaea World Creator and imported into Unity for a seamless and detailed experience. As the game evolves, more maps will be added regularly, expanding the world and introducing new challenges and opportunities for players. Over time, 150+ maps will become part of the world, each one bringing fresh environments and stories.Exclusive, Purchasable Maps For players seeking a unique advantage, we offer exclusive, real-money purchasable maps. These maps are larger in scale, richer in detail, and packed with exclusive resources that can only be found within their borders. Owning one of these maps offers strategic advantages. These premium maps are limited in availability and offer significant value to those who wish to lead their Private Military Corporation to dominance.Strategic Map OverviewThe entire map of New Earth will be displayed as a hexagonal grid. Players can explore, settle(buy/enter) no restrictions, or raid each map, even the ones they dont own, with every map offering its own terrain type, resources, and opportunities. Careful planning and resource management will be crucial as you build your empire in this dynamic, ever-expanding world. </p>",
	  "about-cities": "<h5>About Cities</h5><p>Each Private Military Corporation (PMC) is granted the right to establish a single city, which serves as the heart of their operations and the key to their influence on New Earth. As the city grows, it attracts a population seeking safety, jobs, and resources, and it becomes a hub for processing valuable materials like oil, metals, and crops. The city also functions as a military stronghold, housing defensive systems, training grounds, and industrial sectors where weapons and vehicles are manufactured. Through trade, resource management, and taxes collected from the population, the city generates significant income, fueling the PMC’s expansion and power. Ultimately, a well-managed city becomes not just a base, but an economic and political powerhouse, shaping the future of New Earth.</p>",
	  "about-resources": "<h5>About Resources</h5><p>In New Earth, resources are the key to survival and dominance. Players can cultivate, mine, and trade a wide variety of materials, transforming raw goods into valuable products that fuel their PMCs and economies.Crude Oil & Gas: Extract from the earth to produce diesel, petrol, and power vital machinery for your operations.Crops (Cotton, Corn, Poppy, Coca): Grow cotton for bandages and clothing, corn for biofuel, and poppy/coca fields for the illegal heroin trade or Ganja to supply underground markets.Iron, Copper, Cobalt: Essential metals for crafting guns, ammunition, vehicles, helicopters, and more. Build your arsenal and infrastructure from these critical materials.Aluminum & Rubber: Use aluminum for lightweight base construction and vehicles, while rubber keeps your tyres and manufacturing lines moving.Wood, Sand, Bricks: Basic but crucial for building shelters and advanced projects like glass for optics or electronic chips to power your tech.Master the flow of resources from raw extraction to finished products and rise above your competitors.</p>",
	  "about-pmc": "<h5>About Setting up a PMC</h5><p>Build, Conquer, and Dominate.Establishing a Private Military Corporation (PMC) is your gateway to high-level management of troops—whether they be player-controlled or NPCs, and overarching strategy. As the leader of your PMC, you’ll be responsible for buying lands, conquering regions, and navigating the ever-shifting balance of power in a fractured world.These PMCs are composed of highly skilled survivors, driven by the need to thrive in this hostile environment. Your mission begins with establishing a base, harvesting rare resources, and forging alliances—or choosing to wage war against rival corporations. Each sector of New Earth can be claimed, sold, or raided, offering endless possibilities for expansion or conflict.Players start from humble beginnings, building their PMC from the ground up. Over time, you’ll level up your forces, manufacture weapons, vehicles, and even explore controversial industries like the narcotics/pharmaceuticals trade to supply cities and gain an edge in the cutthroat economy. As you rise through the ranks, you’ll uncover ancient technologies hidden in the ruins of the old world and confront dangerous enemies—both human and otherwise. Will you forge a new utopia or drag the world back into conflict? Dynamic Economy and Destruction In PMC, every action has a consequence. Players can choose to build new structures from the ground up, or purchase premade prefabs from the Bunker Market to accelerate their progress. As your PMC grows, so does your influence—and with it, the power to manufacture structures, weapons, and vehicles, which can be sold to other players in-game, establishing a player-driven economy.However, the world of New Earth is unforgiving. Structures and vehicles can be destroyed during battles, and once lost, they are gone forever—a permanent dent in the PMC economy. Every choice you make can either strengthen your corporation or leave it vulnerable to enemies waiting to strike.The future of humanity rests in your hands. Will you bring stability, or unleash chaos? Welcome to the future. Welcome to PMC: Private Military Corporation.</p>",
	  "about-multiplayer": "<h5>About Multiplayer</h5><p>In Multiplayer Mode, the battlefield is yours to command. Team up with other players to form powerful alliances and execute strategic maneuvers, or go solo by hiring NPCs to handle the dirty work. Whether coordinating complex raids, defending your territory, or outsmarting rivals, teamwork and tactics are key to thriving in the chaotic world of New Earth. Will you lead your forces to victory, or be swept aside by the competition? The choice is yours.</p>"
	};
  
	document.querySelectorAll(".view-more").forEach(button => {
	  button.addEventListener("click", function () {
		const contentId = this.getAttribute("data-content");
		document.getElementById("modalContent").innerHTML = modalContent[contentId];
	  });
	});
  });
  
