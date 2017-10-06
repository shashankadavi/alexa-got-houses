const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        var self = this; // use this to reference in request callback
        this.attributes['houses'] = '';
        let speechOutput = "Hi, Valar Morghalis, Which Game of Thrones House are you interested in?";
        self.response.speak(speechOutput).listen(speechOutput);
        self.emit(':responseReady');
    },

    'MyIntent': function () {
        let house = this.event.request.intent.slots['House'].value.toString().toLowerCase();
        let outText = '';

        if (house =='stark'){
            this.response.speak('The words of House'+ house +'are: Winter Is Coming!');
        }else if (house =='lannister') {
            this.response.speak('The words of House'+ house +'are: A Lannister Always Pays His Debts');
        }else if (house == 'targaryen') {
            this.response.speak('The words of House'+ house +'are: Fire and Blood');
        }else if (house == 'greyjoy') {
            this.response.speak('The words of House'+ house +'are: What Is Dead May Never Die!');
        }else if (house == 'frey') {
            this.response.speak('The words of House'+ house +'are: We Stand Together');
        }else if (house == 'arryn') {
            this.response.speak('The words of House'+ house +'The words of House'+ house +'are: As High as Honor!');
        }else if (house == 'tully') {
            this.response.speak(house +'aint a great house anymore. Not worthy enough for Alexa, First of Her Name to say their words');
        }else if (house != ''){
            this.response.speak('Oh Noble Person! Only Great Game of Thrones Houses, Please!');
        }
        this.emit(':responseReady');
    },

    'SessionEndedRequest' : function() {

    },
    'Unhandled': function (){
        this.response.speak('Apologies, I, Alexa, of House Echo The First Generation do not understand');
        this.emit(':responseReady')
    }
};
