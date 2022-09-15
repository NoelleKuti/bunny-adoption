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
            },
            petsInfo: String,
        },
        desiredRabbitName: {
            type: String,
        },
        agreeToCare: {
            describeHousing: String,
            indoorHousing: Boolean,
            sufficientSpace: Boolean,
            outdoorTime: {
                agree: Boolean,
                describe: String,
            },
            correctDiet: Boolean,
            financiallyAble: Boolean,
            informedMedical: Boolean,
            respectBoundaries: Boolean,
            groomingMaintenance: Boolean,
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

export default Application