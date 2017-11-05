module.exports = (client, message, args) => {
    
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        if (err) message.channel.send(err);
    
        // lugar valido.
        if (result === undefined || result.length === 0) {
            message.channel.send('**Digite uma localidade válida.**') 
            return; 
        }
        else
        {  
            // variaveis
            var current = result[0].current; 
            var location = result[0].location; 

            message.channel.send({embed:{
                color: 3447003,
                author: {  name: current.observationpoint, icon_url: current.imageUrl },
                title: `Informações do tempo.`, description: `${current.skytext}`,
                fields: 
                [
                  { name: `Fuso horário: `, value: `UTC${location.timezone}` },
                  { name: `Tipo de grau: `, value: location.degreetype },
                  { name: `Temperatura: `, value: `${current.temperature} Graus` },
                  { name: `Parece: `, value: `${current.feelslike} Graus` },
                  { name: `Vento: `, value: current.winddisplay },
                  { name: `Humidade: `, value: `${current.humidity}%` }
                ],
                timestamp: new Date(), footer: { icon_url: client.user.avatarURL , text: "© Verificado em" }
            }
          });
        }
    })
};


/*.setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
.setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
.setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
.setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
.addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
.addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
.addField('Temperature',`${current.temperature} Degrees`, true)
.addField('Feels Like', `${current.feelslike} Degrees`, true)
.addField('Winds',current.winddisplay, true)
.addField('Humidity', `${current.humidity}%`, true)*/