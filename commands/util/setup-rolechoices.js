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
        // Check if the command was used in a guild (server)
        if (!interaction.guild) {
            await interaction.reply('This command is only available in a server.');
            return;
        }

        // Create role buttons
        const buttons = Object.keys(roles).map((roleId) => ({
            type: 1, // ButtonType.PRIMARY
            style: 1, // ButtonStyle.PRIMARY
            label: roles[roleId],
            custom_id: roleId,
        }));

        // Send the self-role menu message with buttons
        await interaction.reply({
            content: 'Click a button to get or remove a role:',
            components: [
                {
                    type: 1, // ComponentType.ACTION_ROW
                    components: buttons,
                },
            ],
        });
    },
};