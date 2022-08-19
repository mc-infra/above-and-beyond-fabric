// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.player.give(`Item.of('morphtool:tool', "{RepairCost:0,display:{Name:'{\"text\":\"Wrench\"}'},\"morphtool:data\":{ae2:{Count:1b,id:\"ae2:certus_quartz_wrench\",tag:{display:{Name:'{\"translate\":\"morphtool.sudo_name\",\"with\":[{\"color\":\"green\",\"translate\":\"item.ae2.certus_quartz_wrench\"}]}'},\"morphtool:displayName\":{text:'{\"translate\":\"item.ae2.certus_quartz_wrench\"}'},\"morphtool:is_morphing\":1b}},chiselsandbits:{Count:1b,id:\"chiselsandbits:wrench\",tag:{}},create:{Count:1b,id:\"create:wrench\"},pipez:{Count:1b,id:\"pipez:wrench\"},prettypipes:{Count:1b,id:\"prettypipes:wrench\"},simpleplanes:{Count:1b,id:\"simpleplanes:wrench\"},supplementaries:{Count:1b,id:\"supplementaries:wrench\",tag:{Damage:0}}},\"morphtool:is_morphing\":1b}")`)
  }
})
