const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

//roles
const roles = {
    role1: '1151243027084492810 ',
    role2: '1151243073158926418',
    role3: '1151243105471836170 ',
};



module.exports = {
    data: new SlashCommandBuilder()
        .setName('rsetup')
        .setDescription('Sets up the role collection / role setter'),
    async execute(interaction) {
        const role1 = new ButtonBuilder()
            .setCustomId('role1')
            .setLabel('role 1')
            .setStyle(ButtonStyle.Success)

    },
};