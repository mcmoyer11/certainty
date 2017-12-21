//This is the file for certainty_yellow list
var manualSendResults = "true";

var shuffleSequence = seq("consent","instructions",
                          randomize("train"),"train_end",
                          rshuffle("music_think_r_where",
                          "flowers_sure_nr_where",
                          "food_sure_r_where",
                          "mechanic_unsure_nr_where",
                          "wine_unsure_r_where",
                          "art_think_nr_where"),
                         "exit_quest","sr","end")


var items = [
    // controller to send results early
        ["sr", "__SendResults__", { }],
    //instructions, consent, training, and end display
        ["instructions", "Form", { html: {include: "instructions.html" } } ],
        ["consent", "Form", { html: {include: "consent.html" }, hideProgressBar: true, countsForProgressBar: false} ],
        ["train", "Form", { html: {include: "train_F.html" } } ],
        ["train", "Form", { html: {include: "train_M.html" } } ],
        ["train_end", "Form", { html: {include: "and_begin.html" } } ],
        ["exit_quest", "Form", { html: {include: "exit_questionnaire.html" } } ],
        ["end", "Form", { html: {include: "end.html" }, countsForProgressBar: false, continueMessage: null} ],
    // trials
        ["music_think_r_where", "Form", { html: {include: "music_think_r_where.html" } } ],
        ["flowers_sure_nr_where", "Form", { html: {include: "flowers_sure_nr_where.html" } } ],
        ["food_sure_r_where", "Form", { html: {include: "food_sure_r_where.html" } } ],
        ["mechanic_unsure_nr_where", "Form", { html: {include: "mechanic_unsure_nr_where.html" } } ],
        ["wine_unsure_r_where", "Form", { html: {include: "wine_unsure_r_where.html" } } ],
        ["art_think_nr_where", "Form", { html: {include: "art_think_nr_where.html" } } ],
    // controls
        ["control", "Form", { html: {include: "control_why.html" } } ],
        ["control", "Form", { html: {include: "control_what.html" } } ],
        ["control", "Form", { html: {include: "control_when.html" } } ],
        ["control", "Form", { html: {include: "control_how.html" } } ],

];

var defaults = [
    // save reaction time for each Form controller
    "Form", {saveReactionTime: "true"}
];