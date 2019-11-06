module.exports = {
     modal() {
        return { "view":{
            "type": "modal",
            "callback_id": "dailymodal",
            "title": {
              "type": "plain_text",
              "text": "Daily Stand up",
              "emoji": true
            },
            "submit": {
              "type": "plain_text",
              "text": "Submit",
              "emoji": true
            },
            "close": {
              "type": "plain_text",
              "text": "Cancel",
              "emoji": true
            },
            "blocks": [
              {
                "type": "section",
                "block_id": "dailystdp",
                "text": {
                "type": "plain_text",
                "text": ":wave: Hey!\n\nWe'd love to hear from you what you have done for the past 24 hours.",
                "emoji": true
                }
              },
              {
                "type": "divider"
              },
              
              {
                "type": "input",
                "label": {
                  "type": "plain_text",
                  "text": "Last 24 Hours?",
                  "emoji": true
                },
                "element": {
                  "type": "plain_text_input",
                  "multiline": true,
                  "action_id": "last24hours"
                }
              },
              {
                "type": "input",
                "label": {
                  "type": "plain_text",
                  "text": "Next 24 Hours?",
                  "emoji": true
                },
                "element": {
                  "type": "plain_text_input",
                  "multiline": true,
                  "action_id": "next24hours"
                }
              },
                  {
                "type": "input",
                "label": {
                  "type": "plain_text",
                  "text": "Blockers?",
                  "emoji": true
                },
                "element": {
                  "type": "plain_text_input",
                  "multiline": true,
                  "action_id": "blocker"
                }
              }
            ]
            }
    }
}
}