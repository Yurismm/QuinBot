const { SlashCommandBuilder } = require('discord.js');


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
        //check if used in server or not
        if (!interaction.guild) {
            await interaction.reply('This command is only available in a server.');
            return;
        }

        //buttons
        const buttons = Object.keys(roles).map((roleId) =>
            {
                const roleName = roles[roleId];
                return {
                    customId: roleId,
                    label: roleName,
                    style: 'PRIMARY',
                };
            }
        );

        // row for buttons
        const row = {
            type: 'ACTION_ROW',
            components: buttons.map((button) => ({
                type: 'BUTTON',
                custom_id: button.customId,
                label: button.label,
                style: button.style,
            })),
        };

        // Send the self-role menu message with buttons
        await interaction.reply({
            content: 'Click a button to get or remove a role:',
            components: [row],
        });
    },
};