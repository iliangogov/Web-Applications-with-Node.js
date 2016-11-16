let CurrentDate = new Date().now;
let nextMonth = CurrentDate.setMonth(CurrentDate.getMonth() + 1);

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        validate: "/^[A-Z][a-z]{3,15}$/"
    },
    midleName: {
        type: String,
        validate: "/^[A-Z][a-z]{3,15}$/"
    },
    lastName: {
        type: String,
        validate: "/^[A-Z][a-z]{3,15}$/"
    },
    insNum: {
        type: String,
        validate: "/^[A-Z][a-z0-9_-]$/"
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    contactDeatils: {
        phoneNumber: {
            type: String,
            validate: "/([0-9]{3}\s[0-9]{3}\s[0-9]{3})/"
        },
        email: {
            type: String,
            validate: "/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i"
        },
        workRoomNumber: {
            type: Number,
            min: 100,
            max: 999
        }
    },
    items: [{
        name: {
            type: String,
            validate: "/^[A-Z][a-z]{3,15}$/"
        },
        price: Number,
        giveAwayStatus: {
            type: String,
            enum: ['Give away', 'For Sale']
        },
        offerStartDate: {
            type: Date,
            default: Date.now
        },
        offerEndDate: {
            type: Date,
            default: nextMonth,
            validate: [validateDate(offerStartDate, offerEndDate), "Not valid Date"]
        }
    }],
    itemsRecieved: []
});

function validateDate(startDate, endDate) {
    if (startDate.getTime() > endDate.getTime()) {
        return false;
    }

    return true;
}

module.exports = employeeSchema;