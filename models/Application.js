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
            timeOutOfEnclosure: String,
			sufficientSpace: Boolean,
			planForEnrichment: String,
            outdoorTime: {
                agree: Boolean,
                describe: String,
            },
            correctDiet: Boolean,
			chewingOpportunities: Boolean,
			litterBoxProgram: Boolean,
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
		donationAmount: Number,
    },
    {collection: 'Applications'},
)

const Application = mongoose.model('Application', ApplicationSchema);

export default Application