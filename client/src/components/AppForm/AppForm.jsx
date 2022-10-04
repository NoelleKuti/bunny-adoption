import React, {useState} from 'react'
import TextField from './TextField'
import BoolField from './BoolField.jsx'
import { useAppContext } from '../../context/appContext'

const AppForm = () => {
	
	const { submitApplication, adoptForm } = useAppContext();
	const [formSent, setFormSent] = useState(false);

	return (
		<>
		<form className='appForm' onSubmit={submitApplication(adoptForm)}>
			<h1 className='formHeader'> Application Form </h1>
			<div className='group' id='aboutYou'>
				<h2 className='groupLabel'>
					About You:
				</h2>
				<TextField
				fieldName='familyNamesAges'
				type='textArea'
				label='Household Members'
				helperText='Please list the names and ages of everyone in your household'
				placeHolder='Household Members'
				groups={['aboutYou']}
				/>
				<TextField
				fieldName='address'
				type='text'
				label='Your Address:'
				helperText=''
				placeHolder='Your Address'
				groups={['aboutYou']}
				/>
				<TextField
					fieldName='phoneNumber'
					type='text'
					label='Your Phone Number:'
					helperText='Please enter your phone number'
					placeHolder='Your Phone Number'
					groups={['aboutYou']}
				/>
				<TextField
				fieldName='email'
				type='text'
				label='Your Email:'
				helperText='Please enter your email address'
				placeHolder='Your Email Address'
				groups={['aboutYou']}
				/>
				<div className='subGroup' id='vetInfo'>
					<h2 className='groupLabel'>
						Vet Information:
					</h2>
				<TextField
					fieldName='name'
					type='text'
					label='Name'
					helperText=''
					placeHolder='Name Of Vet'
					groups={['aboutYou', 'vetInfo']}
				/>
				<TextField
					fieldName='phone'
					type='text'
					label='Phone Number'
					helperText=''
					placeHolder='Phone Number Of Vet'
					groups={['aboutYou', 'vetInfo']}
				/>
				<TextField
					fieldName='address'
					type='text'
					label='Address'
					helperText=''
					placeHolder='Address Of Vet'
					groups={['aboutYou', 'vetInfo']}
				/>
				</div>
			<TextField
				fieldName='petsInfo'
				type='textArea'
				label='Household Pets'
				helperText='Please list current pets in household (species, age, spayed/neutered)'
				placeHolder='Household Pets'
				groups={['aboutYou']}
			/>
			</div>

			<TextField
				fieldName='desiredRabbitName'
				type='text'
				label="Desired Rabbit's Name"
				helperText="Please give the name of the rabbit you'd like to adopt."
				placeHolder="Desired Rabbit's Name"
				groups={['']}
			/>
			<div className='group' id='agreeToCare'>
				<h2 className='groupLabel'>
					Proper Care Agreement:
				</h2>
				<TextField
					fieldName='describeHousing'
					type='textArea'
					label='Describe Rabbit Housing'
					helperText="How do you plan to house your new rabbits (or how is your current rabbit housed for those who are looking for a mate for their rabbit)?"
					placeHolder="Describe Rabbit's Future Housing"
					groups={['agreeToCare']}
				/>
				<BoolField
					fieldName='indoorHousing'
					label='Indoor Housing:'
					helperText='Do you agree to house your rabbit indoors year round?'
					groups={['agreeToCare']}
				/>
				<TextField
					fieldName='timeOutOfEnclosure'
					type='text'
					label='Time Out Of Enclosure:'
					helperText='How much time will your rabbit get out of their enclosure?'
					placeHolder='How Much Time Will Rabbit Spend Out Of Enclosure'
					groups={['agreeToCare']}
				/>
				<BoolField 
					fieldName='sufficientSpace'
					label='Sufficient Space:'
					helperText='Rabbits need a minimum of 20sq ft enclosure per rabbit, do you have sufficient space to provide for them indoors (ie an exercise pen that is 4x5 for a single bun or 7x6 for a pair)?'
					groups={['agreeToCare']}
				/>
				<TextField
					fieldName='planForEnrichment'
					type='textArea'
					label="Plan For Enrichment:"
					helperText='What is your plan for enrichment, providing appropriate toys, digging opportunities, foraging opportunities, and hiding spots?'
					placeHolder='Describe plans to provide enrichment for rabbit'
					groups={['agreeToCare']}
				/>
				<div className='subGroup' id='outdoorTime'>
					<BoolField
						fieldName='otAgree'
						label=''
						helperText='Are you planning to give your rabbit time outdoors?'
						groups={['agreeToCare', 'outdoorTime']}
					/>
					<TextField
						fieldName='otDescribe'
						type='textArea'
						label='What Would That Look Like?'
						helperText=''
						placeHolder='Describe Plans For Rabbit Outdoor Time'
						groups={['agreeToCare', 'outdoorTime']}
					/>
				</div>
				<BoolField
					fieldName='correctDiet'
					label='Correct Diet:'
					helperText='Rabbits must eat consistently throughout the day. Adult rabbit diet should consist mostly of quality timothy hay (alfafa hay for babies), pellet food (1/4cup daily for mid size rabbit), and fresh greens/veggies. Very limited fruit or sugary vegetables can be given as a treat. Are you prepared to offer the correct diet to keep your rabbit in good health?'
					groups={['agreeToCare']}
				/>
				<BoolField
					fieldName='chewingOpportunities'
					label='Chewing Opportunities:'
					helperText='Rabbits need to have wooden toys to chew on to keep their teeth from overgrowing, as their teeth grow throughout their life. Do you agree to provide appropriate chewing opportunities?'
					groups={['agreeToCare']}
				/>
				<BoolField
					fieldName='litterBoxProgram'
					label='Litter Box Program'
					helperText='There are many options for litter for rabbits, we have found that wood pellets are the most cost effective solution for litter and are absorbent and control odor. Litter boxes should be cleaned twice a day. Keeping the hay in the litter box will encourage the rabbit to do their business there. Most of our available rabbits have litter trained themselves and with appropriate space in their new home should continue this habit. If a rabbit repeatedly pees outside the box, it must be brought for examination by one of the below veterinarians as it would likely indicate a urinary infection or kidney issue. Some poops outside the box are very common and easily swept up. Do you understand and agree to the litter box program?'
					groups={['agreeToCare']}
				/>
				<BoolField
					fieldName='financiallyAble'
					label='Financial Ability:'
					helperText='There are two knowledgeable rabbit vets in our area: Brewer Veterinary Clinic and River Road Vet in Orrington. Are you financially able to bring the rabbit(s) to the vet as needed for medical concerns and for an initial visit to establish a relationship with the vet?'
					groups={['agreeToCare']}
				/>
				<BoolField
					fieldName='informedMedical'
					label='Informed Of Rabbit Medical Responsibilities:'
					helperText='Are you familiar with identifying signs of common rabbit health concerns such as GI Stasis, dental disease, respiratory infections, and head tilt? If not, are you willing to read up on what to watch for?'
					groups={['agreeToCare']}
				/>
				<BoolField
					fieldName='respectBoundaries'
					label='Respecting Boundaries:'
					helperText="Rabbits will communicate how they're feeling with their body language. Please do some research on what indicates positions and signs indicate what. We can provide guidance on this as well. Most rabbits, as they are prey animals, do not like being picked up and held. Do you agree to respect your rabbit and give them attention in a way that they’re comfortable with?"
					groups={['agreeToCare']}
				/>
				<BoolField
					fieldName='groomingMaintenance'
					label='Grooming Maintenance:'
					helperText='Rabbits will need regular nail trims to maintain proper mobility and some may require brushing. Do you agree to perform the needed maintenance to keep your rabbit comfortable? (Shelby can provide guidance in how to safely trim nails.)'
					groups={['agreeToCare']}
				/>
			</div>
			<div className='group' id='agreeToContact'>
				<h2 className='groupLabel'>
					Agree To Contact:
				</h2>
				<BoolField
					fieldName='contactIfCannotKeep'
					label='Contact If You Cannot Keep:'
					helperText='Do you agree to contact Shelby Allen if at any time you can not keep the rabbit(s) you have adopted?'
					groups={['agreeToContact']}
				/>
				<BoolField
					fieldName='properNotice'
					label=''
					helperText='In the event that you can not keep the rabbit(s) adopted through Shelby Allen, will you give proper notice to the above party (at least 1 week prior to needing to return).'
					groups={['agreeToContact']}
				/>
				<BoolField
					fieldName='neverRehome'
					label=''
					helperText='I agree to never rehome the rabbit(s) on my own, in the event that I can not keep them.'
					groups={['agreeToContact']}
				/>
				<BoolField
					fieldName='preventPregnancy'
					label=''
					helperText='Only for babies in foster to adopt- I agree to not expose my new rabbit(s) to any unfixed adult rabbits or to take them outside at all.'
					groups={['agreeToContact']}
				/>
				<BoolField
					fieldName='willReachOut'
					label=''
					helperText='I will reach out to Shelby Allen at ###-###-#### or ######@###.### with any questions or concerns.'
					groups={['agreeToContact']}
				/>
				<TextField
					fieldName='donationAmount'
					text='text'
					label='Donation Amount:'
					PlaceHolder='Amount To Donate Towards Spay/Neuter'
					helperText='I would like to make an adoption donation of X dollars towards the spay/neuter of my adopted rabbit(s)'
					groups={['agreeToContact']}
				/>
			</div>
		</form>
  		<button type='submit'>SUBMIT</button>
	</>
  )
}

export default AppForm