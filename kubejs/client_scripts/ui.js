onEvent('ui.main_menu', event => {
  event.replace(ui => {
    //ui.background('kubejsui:textures/example_background.png')
    ui.tilingBackground('kubejsui:textures/example_background.png', 256)

    ui.minecraftLogo(30)

    ui.button(b => {
      b.name = 'Test'
      b.x = ui.width/2
      b.y = ui.height/2 - 10
      b.action = 'minecraft:singleplayer'
    })

    ui.button(b => {
      b.name = 'Multiplayer'
      b.x = ui.width/2
      b.y = ui.height/2 + (b.height+2)
      b.action = 'minecraft:multiplayer'
    })

    ui.button(b => {
      b.name = 'Exit'
      b.x = ui.width/2
      b.y = ui.height/2 + (b.height*2+4)
      b.action = 'minecraft:quit'
    })

    ui.button(b => {
      b.name = 'Quit'
      b.x = ui.width - b.width - 10
      b.y = ui.height - b.height - 10
      b.action = 'minecraft:exit'
    })

    // ui.image(i => {
    //   i.x = (ui.width - 40) / 2
    //   i.y = (ui.height - 30) / 2
    //   i.width = 40
    //   i.height = 30
    //   i.action = 'https://feed-the-beast.com/'
    // })

    ui.label(l => {
      l.name = Text.aqua('Large label')
      l.x = 100
      l.y = ui.height - 20
      l.height = 15
      l.shadow = true
    })
  })
})
