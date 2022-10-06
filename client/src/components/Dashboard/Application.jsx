import React from 'react'
import styled from 'styled-components'

const Application = (data) => {
	
	const aboutYouData = Object.entries(data.data.aboutYou);
	const agreeToCareData = Object.entries(data.data.agreeToCare);
	const agreeToContactData = Object.entries(data.data.agreeToContact);

	
	return (
	<StyleWrapper className='row'>
		<div className='group fieldGroup'>
			<h2 className='groupLabel'>
				About You:
			</h2>
			<div className='fieldRow column'>
				<h3 className='fieldName'>
					Desired Bunny:
				</h3>
				<p className='fieldValue'>
					{ data.data.desiredBunnyName }
				</p>
			
			
			{
				aboutYouData.map((field) => 
				{
					if (field[0] === 'vetInfo') {
						let fieldSets = Object.entries(field[1]);

						return (
							fieldSets.map((fieldSet) => {
								return (
								<div className='fieldRow column' key={`key_${fieldSet[0]}`}>

									<h3 className='fieldName'>{fieldSet[0]}</h3>
									<p className='fieldValue'>{fieldSet[1].toString()}</p>
								</div>
							)
						})
						
					)
					} else {
						return (
							<div className='field row' key={`key_${field[0]}`}>
								<h3 className='fieldName'>{field[0]}</h3>
								<p className='fieldValue'>{field[1].toString()}</p>
							</div>
						)
					}
				})
			}
			</div>
		</div>
		<div className='group fieldGroup'>
			<h2 className='groupLabel'>
				Agreement To Proper Care:
			</h2>
			<div className='fieldRow column'>
			{
				agreeToCareData.map((field) => {
					return (
						<div className='field row' key={`key_${field[0]}`}>
							<h3 className='fieldName'>{field[0]}</h3>
							<p className='fieldValue'>{field[1].toString()}</p>
						</div>
					)
				})
			}
			</div>
		</div>
		<div className='group fieldGroup'>
			<h2 className='groupLabel'>
				Agreement To Contact When Needed:
			</h2>
			<div className='fieldRow row'>
			{
				agreeToContactData.map((field) => 
				{
					return (
						<div className='field column' key={`key_${field[0]}`}>
							<h3 className='fieldName'>
								{field[0]}
							</h3>
							<p className='fieldValue'>
								{field[1].toString()}
							</p>
						</div>
					)
				})
			}
			</div>
		</div>
	</StyleWrapper>
  )
}

const StyleWrapper = styled.div `
	margin: 7rem auto;
	width: 80%;
	background-color: white;
	flex-wrap: wrap;
	padding: 0;

	.fieldName {
		font-weight: bold;
	}

	.fieldValue {
		
	}

	.field {
		margin: 15px auto;
		align-items: center;
		width: 100%;
		justify-content: space-around;
		background-color: grey;
	}

	.fieldRow {
		flex-wrap: wrap;
		padding: 15px;
		margin: 0px auto;
	}

	.fieldGroup {
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 2px solid grey;
		max-height: fit-content;
	}

`

export default Application