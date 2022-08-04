// priority: 0

onEvent('rei.hide.items', event => {
	event.hide('ae2:facade')
})

onEvent('rei.add.items', event => {
	event.add('thermal:ruby')
	event.add('thermal:ruby_dust')
	event.add('thermal:ruby_ore')
	event.add('thermal:apatite_ore')
	event.add('thermal:sapphire')
	event.add('thermal:sapphire_dust')
	event.add('thermal:sapphire_ore')

})

onEvent('item.tooltip', tooltip => {
	let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} Slots`])
	let main_assembly = (id, stage) => tooltip.add(id, [`§7Main Assembly: ${stage == "4" ? "§6Finale" : "§6Chapter " + stage}`, '§8Consider automating this item'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7Bonus Assembly: §6Chapter ${stage}`])
	let not_consumed = (id, stage) => tooltip.add(id, [`§7Not consumed in the`, `§7Assembly Process`])
	let ore = (id, y1, y2) => tooltip.add(id, [`§o§7Y level §6${y1} §7to §6${y2}`])

	tooltip.add("minecraft:redstone_ore", [`§7Does not generate, crush Cinnabar to obtain Redstone.`]);

	ore("ae2:charged_quartz_ore", 1, 30)
	ore("forbidden_arcanus:xpetrified_ore", 1, 30)
	ore("ae2:quartz_ore", 1, 30)
	ore("thermal:apatite_ore", 1, 30)
	ore("thermal:cinnabar_ore", 1, 30)
	ore("thermal:niter_ore", 1, 30)
	ore("thermal:nickel_ore", 1, 40)
	ore("thermal:ruby_ore", 1, 30)
	ore("thermal:sapphire_ore", 1, 30)
	ore("thermal:lead_ore", 1, 20)
	ore("minecraft:emerald_ore", 1, 30)
	ore("thermal:sulfur_ore", 12, 36)
	ore("create:zinc_ore", 15, 70)
	ore("create:copper_ore", 40, 85)

	ore("minecraft:coal_ore", 1, 128)
	ore("minecraft:iron_ore", 1, 64)
	ore("minecraft:lapis_ore", 1, 32)
	ore("minecraft:gold_ore", 1, 32)
	ore("minecraft:diamond_ore", 1, 16)

	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('gold', 9 * 9)

	main_assembly('kubejs:kinetic_mechanism', "1")
	bonus_assembly('kubejs:sealed_mechanism', "1A")
	main_assembly('create:precision_mechanism', "2")
	bonus_assembly('kubejs:infernal_mechanism', "2A")
	main_assembly('kubejs:inductive_mechanism', "3")
	bonus_assembly('kubejs:abstruse_mechanism', "3A")
	main_assembly('kubejs:calculation_mechanism', "4")

	not_consumed('cb_microblock:stone_saw')
	not_consumed('cb_microblock:iron_saw')
	not_consumed('cb_microblock:diamond_saw')
	not_consumed('projectred-core:screwdriver')
	// not_consumed('create:super_glue')
	not_consumed('kubejs:chromatic_resonator')
	not_consumed('kubejs:flash_drive')
	// not_consumed('xreliquary:mercy_cross')
	// not_consumed('xreliquary:ender_staff')

	global.substrates[0].forEach(e => tooltip.add(e.id, [`§8Category: §7Igneous`]));
	global.substrates[1].forEach(e => tooltip.add(e.id, [`§8Category: §7Herbal`]));
	global.substrates[2].forEach(e => tooltip.add(e.id, [`§8Category: §7Volatile`]));
	global.substrates[3].forEach(e => tooltip.add(e.id, [`§8Category: §7Crystalline`]));
	global.substrates[4].forEach(e => tooltip.add(e.id, [`§8Category: §7Metallurgic`]));
	global.substrates[5].forEach(e => tooltip.add(e.id, [`§8Category: §7Gemstone`]));
	global.substrates[6].forEach(e => tooltip.add(e.id, [`§8Category: §7Catalyst`]));

	tooltip.add("structurescompass:structures_compass", [`§7Right-Click to Activate`]);

	tooltip.add("magicfeather:magicfeather", [`§6Grants Creative Flight`]);

	tooltip.add("kubejs:accellerator_redstone", ["§7When used in Alchemy Research:", "  §6One of the §ecorrect §6Reagents",
		"  §6in §eincorrect §6slots will not be consumed"]);
	tooltip.add("kubejs:accellerator_glowstone", ["§7When used in Alchemy Research:", "  §6One of the §ecorrect §6Reagents",
		"  §6in §ecorrect §6slots will not be consumed"]);

})

onEvent('rei.information', event => {
	// event.add('thermal:blitz_rod', ["Obtain by running a §9Charged Staff§0 (with Charge) and any amount of §9Tiny Smoke Clouds§0 through an §5Alchemical Laser§0."])
	event.add('thermal:blizz_rod', ["Obtain by running an §9Entropy Manipulator§0 (with Charge) and any amount of §9Snowballs§0 through an §5Alchemical Laser§0."])
	event.add('thermal:basalz_rod', ["Obtain by running a §9FluxoMagnet§0 (with Charge) and any amount of §9Basalt§0 through an §5Alchemical Laser§0."])
	event.add('kubejs:substrate_silicon', ["Obtained only by running a §9Chaos Catalyst§0 and any amount of one specific other §9Reagent§0 through an §5Alchemical Laser§0.", " ", "The Reagent in question §9differs from World to World§0."])

	event.add('kubejs:alchemical_laser', ["This item represents the §5Alchemical Laser§0 machine. Use the §9Ponder Feature§0 on this item to learn how it is build."])

	let catalyst = (name, me) =>
		[
			`Obtained by finding the §9Correct Combination§0 of four §9${me ? name : name + " §0Reagent"}s§0 with the §5Alchemical Laser§0.`, " ",
			`§81.§0 Occupy the first four slots of the Hopper Cart with one §9${me ? name : name + " §0Reagent"}§0 each`,
			`§82.§0 Run the §5Alchemical Laser§0 on the contents and find either the §9${me ? me : name + " §9Catalyst"}§0, or a §9Hint§0 towards the Correct Combination`, " ",
			"§8Note:§0 The Correct Combination may contain §9Duplicates§0",
			"§8Note:§0 The Correct Combination §9Differs from World to World§0",
			"§8Optional:§0 Place §9Redstone Accelerator§0 or §9Glowstone Accelerator§0 in the fifth slot for §9Additional Hints§0",
		]

	event.add('kubejs:substrate_igneous', catalyst("Igneous"))
	event.add('kubejs:substrate_herbal', catalyst("Herbal"))
	event.add('kubejs:substrate_volatile', catalyst("Volatile"))
	event.add('kubejs:substrate_crystal', catalyst("Crystalline"))
	event.add('kubejs:substrate_metal', catalyst("Metallurgic"))
	event.add('kubejs:substrate_gem', catalyst("Gemstone"))

	let beer = (id, igs) =>
		event.add('drinkbeer:beer_mug' + id, ["Place 4 Empty Beer Mugs, " + igs + " in a Keg to create this Beverage."])

	beer("", "3 Wheat and a Water Bucket")
	beer("_blaze_stout", "2 Wheat, 1 Blaze Powder and a Water Bucket")
	beer("_blaze_milk_stout", "1 Wheat, 1 Sugar, 1 Blaze Powder and a Water Bucket") //wtf are these drinks
	beer("_apple_lambic", "2 Wheat, an Apple and a Water Bucket")
	beer("_sweet_berry_kriek", "2 Wheat, 1 Sweet Berry and a Water Bucket")
	beer("_haars_icey_pale_lager", "3 Wheat and a block of Blue Ice")
	beer("_pumpkin_kvass", "2 Bread, a Pumpkin and a Water Bucket")

	event.add('kubejs:substrate_chaos', catalyst("Catalyst", "Chaos Catalyst").concat([
		" ", "§8Usage:§0", "Running the §9Chaos Catalyst§0 with any amount of one §9Reagent§0 through an §5Alchemical Laser§0 will §9transmute§0 the Reagent to another. The Transmutation Pairings are §9unique to each World§0."
	]))
})