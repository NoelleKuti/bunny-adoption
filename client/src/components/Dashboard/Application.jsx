import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/appContext';

const Application = (data) => {
	
	const aboutYouData = Object.entries(data.data.aboutYou);
	const agreeToCareData = Object.entries(data.data.agreeToCare);
	const agreeToContactData = Object.entries(data.data.agreeToContact);
	
	const { deleteApplication } = useAppContext();

	const [ expand, setExpand ] = useState(false);
	
	return (
	<StyleWrapper className='row' expand={expand}>
	<div className='infoBox'>
		<div className='group fieldGroup'>
			<h2 className='groupLabel'>
				About You:
			</h2>
			<div className='fieldRow row'>
				<h3 className='fieldName'>
					Desired Bunny:
				</h3>
				<p className='fieldValue'>
					{ data.data.desiredBunnyName }
				</p>
		</div>	
		<div>	
			{
				aboutYouData.map((field) => 
				{
					if (field[0] === 'vetInfo') {
						let fieldSets = Object.entries(field[1]);

						return (
							<div className='field subGroup column'>
								<h2> Vet Info </h2>
								<div className='row'>
							
									{
									fieldSets.map((fieldSet) => {
										return (
											<div className='fieldRow row'>	
												<h3 className='fieldName'>{fieldSet[0]}</h3>
												<p className='fieldValue'>{fieldSet[1].toString()}</p>
											</div>
										)
									})
									}
								</div>
							</div>
						
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
			<div className='fieldRow row'>
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
						<div className='field row' key={`key_${field[0]}`}>
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
	</div>
		<button className='deleteBtn' onClick={() => deleteApplication(data.itemId)}>
			delete application
		</button>
		<button className='expandBtn' onClick={() => setExpand(!expand)}>
			{expand ? 'Hide More Info' : 'Expand More Info' }
		</button>
	
	</StyleWrapper>
  )
}

const StyleWrapper = styled.div `
	margin: 0 auto;
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
		align-items: center;
		width: 70%;
		justify-content: space-between;
		padding: 20px;
		margin-top: 15px;
		background-color: grey;
	}

	.fieldRow {
		flex-wrap: wrap;
		margin: 0px auto;
		justify-content: space-around;
	}

	.fieldGroup {
		width: 95%;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 2px solid grey;
		max-height: fit-content;
		padding: 0;
	}

	.subGroup {
		background-color: #CECECE
	}

	.infoBox {
		max-height: ${props => (props.expand ? 'fit-content' : '300px')};
		overflow-y: ${props => (props.expand ? 'visible' : 'scroll')};
		overflow-x: hidden;
		margin: 25px auto;
	}

	.deleteBtn {
		width: 40%;
	}
	.expandBtn {
		width: 40%;
	}

`

export default Application