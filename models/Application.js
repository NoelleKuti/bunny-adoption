import mongoose from 'mongoose'

let Schema = mongoose.Schema;
const errorMsg = 'Please Complete All Fields Of The Adoption Form';

const ApplicationSchema = new Schema(
    {
        aboutYou: {
            familyNamesAges : String,
            address: String,
            phoneNumber: String,
            email: String,
            vetInfo: {
                name: String,
                phone: String,
                address: String,
                required: [true, errorMsg]
            },
            petsInfo: String,
            required: [true, errorMsg]
        },
        desiredRabbitName: {
            type: String,
            required: [true, errorMsg]
        },
        agreeToCare: {
            describeHousing: String,
            indoorHousing: Boolean,
            sufficientSpace: Boolean,
            outdoorTime: {
                agree: Boolean,
                describe: String,
                required: [true, errorMsg]
            },
            correctDiet: Boolean,
            financiallyAble: Boolean,
            informedMedical: Boolean,
            respectBoundaries: Boolean,
            groomingMaintenance: Boolean,
            required: [true, errorMsg]
        },
        agreeToContact: {
            contactIfCannotKeep: Boolean,
            properNotice: Boolean,
            neverRehome: Boolean,
            preventPregnancy: Boolean,
            willReachOut: Boolean,
        },
    }
)

const Application = mongoose.model('Application', ApplicationSchema);

export default Application;